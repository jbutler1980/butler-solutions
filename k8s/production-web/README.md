# Butler Solutions Production Deployment

This directory contains the Kubernetes manifests required to run the Butler Solutions website in the `production-web` namespace. Traffic is expected to terminate TLS at the upstream HAProxy tier before being forwarded to Traefik on the `web` entrypoint.

## Manifest Overview

| File | Purpose |
| --- | --- |
| `namespace.yaml` | Declarative definition of the `production-web` namespace. |
| `deployment.yaml` | Runs the Next.js application (image `ghcr.io/jbutler1980/butler-solutions-web:latest`) with two replicas. |
| `service.yaml` | Exposes the deployment internally on port 80. |
| `ingressroute.yaml` | Publishes `butler.solutions`, `www.butler.solutions`, and `test.butler.solutions` through Traefik’s `web` entrypoint. |

## Build & Publish

1. The GitHub Action defined in `.github/workflows/container-build.yml` automatically builds and pushes `ghcr.io/jbutler1980/butler-solutions-web:{SHA,latest}` whenever changes land on `main`. You can also trigger it manually via “Run workflow”.
2. If you prefer an ad-hoc build, run the same steps locally (requires Docker/BuildKit):
   ```bash
   npm install
   npm run build
   docker build -t ghcr.io/jbutler1980/butler-solutions-web:{{tag}} website
   docker push ghcr.io/jbutler1980/butler-solutions-web:{{tag}}
   ```
3. Update the image tag in `deployment.yaml` if you promote a specific version.

## Apply Manifests

```bash
kubectl --context=edge --kubeconfig=aiml-kubeconfig apply -f namespace.yaml
kubectl --context=edge --kubeconfig=aiml-kubeconfig apply -f deployment.yaml
kubectl --context=edge --kubeconfig=aiml-kubeconfig apply -f service.yaml
kubectl --context=edge --kubeconfig=aiml-kubeconfig apply -f ingressroute.yaml
```

## Post-Deployment Checks

1. Confirm pods are Ready:
   ```bash
   kubectl get pods -n production-web
   ```
2. Validate service endpoints:
   ```bash
   kubectl get svc -n production-web
   ```
3. Verify Traefik route registration:
   ```bash
   kubectl get ingressroute -n production-web butler-solutions-web -o yaml
   ```
4. Test externally once HAProxy points the Butler domains at Traefik (`10.0.51.23`):
   - `curl -H "Host: butler.solutions" http://10.0.51.23/`
   - `curl -H "Host: www.butler.solutions" http://10.0.51.23/`

5. Monitor Traefik metrics/logging (Prometheus scrape on `:9100`, access logs in `traefik` namespace) during traffic validation.

> **Registry access:** Ensure the cluster can pull from `ghcr.io/jbutler1980/butler-solutions-web` (either make the image public or create an `imagePullSecret` and attach it to the service account in `production-web`).

const services = [
  {
    title: 'Edge-Native Platform Engineering',
    description:
      'Design, build, and operate distributed application platforms that keep latency under 20 ms and enforce policy from the core to the edge.',
    highlights: [
      'Zero-touch GitOps pipelines for multi-region rollouts',
      'Observability baked in with OpenTelemetry and real-time SLO tracking',
      'Hardened runtime with automated compliance evidence',
    ],
  },
  {
    title: 'AI-Powered Operations Automation',
    description:
      'Fuse streaming telemetry, LLM copilots, and event-driven automation to resolve incidents before they hit the customer experience.',
    highlights: [
      'Root-cause insights generated from cross-stack knowledge graphs',
      'Runbook automation that shrinks MTTR by up to 60%',
      'Closed-loop guardrails to keep human review in the loop',
    ],
  },
  {
    title: 'Secure Connectivity & Data Mesh',
    description:
      'Modernize network and data layers with zero-trust principles so teams can safely consume shared data products at scale.',
    highlights: [
      'Service mesh blueprints for encrypted east-west traffic',
      'Federated governance with automated lineage and access controls',
      'Data product accelerators for edge analytics workloads',
    ],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-gray-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-gray-600">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block size-1.5 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

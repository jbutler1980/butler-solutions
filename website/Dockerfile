# syntax=docker/dockerfile:1

# Stage 1: install dependencies and build the app
FROM node:20-alpine AS builder

WORKDIR /app

ENV NODE_ENV=production

# Install dependencies based on lockfile
COPY package.json package-lock.json ./
RUN npm ci --production=false

# Copy source and build
COPY . .
RUN npm run lint
RUN npm run build

# Stage 2: production image using Next.js standalone output
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Copy only the necessary output from the builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expose port and set entrypoint
EXPOSE 3000

CMD ["node", "server.js"]

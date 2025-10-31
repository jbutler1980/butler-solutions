const caseStudies = [
  {
    client: 'Global Logistics Network',
    summary:
      'Replatformed 42 regional distribution centers on an edge-native control plane that synchronizes inventory decisions in under 5 seconds.',
    outcomes: [
      { label: 'Order latency', value: '↓ 68%' },
      { label: 'Deployment frequency', value: '↑ 4x' },
      { label: 'Annual savings', value: '$2.4M' },
    ],
  },
  {
    client: 'Healthcare IoT Consortium',
    summary:
      'Implemented federated data mesh across 120 hospitals with real-time anomaly detection that protects patient telemetry.',
    outcomes: [
      { label: 'Security incidents', value: '0 critical since launch' },
      { label: 'Data access requests', value: 'Processed in < 2 hrs' },
      { label: 'Compliance evidence', value: 'Automated SOC 2 reporting' },
    ],
  },
]

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <article
              key={study.client}
              className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-md backdrop-blur-sm"
            >
              <header>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Client</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">{study.client}</h3>
              </header>
              <p className="mt-4 flex-1 text-gray-600">{study.summary}</p>
              <dl className="mt-6 grid grid-cols-1 gap-4 text-sm text-gray-500 sm:grid-cols-3">
                {study.outcomes.map((outcome) => (
                  <div key={`${study.client}-${outcome.label}`} className="rounded-lg bg-gray-50 p-3 text-center">
                    <dt className="text-xs uppercase tracking-wide">{outcome.label}</dt>
                    <dd className="mt-1 text-base font-semibold text-gray-900">{outcome.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

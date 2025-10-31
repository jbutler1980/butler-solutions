const posts = [
  {
    title: 'Design Principles for Edge-Oriented Digital Twins',
    excerpt:
      'Learn how to architect telemetry pipelines, streaming models, and closed-loop feedback for digital twins that execute at the edge.',
    published: '2024-10-22',
    displayDate: 'Oct 22, 2024',
    category: 'Engineering',
  },
  {
    title: 'Operationalizing Responsible AI in Regulated Industries',
    excerpt:
      'A practical checklist for governing model lifecycle, provenance, and human-in-the-loop review without slowing delivery teams.',
    published: '2024-09-18',
    displayDate: 'Sep 18, 2024',
    category: 'Governance',
  },
  {
    title: 'From Data Lake to Mesh: Lessons Learned',
    excerpt:
      'We distill the patterns that unlocked reusable data products, lineage transparency, and platform adoption across 40 product squads.',
    published: '2024-08-06',
    displayDate: 'Aug 6, 2024',
    category: 'Data Strategy',
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest Insights</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">{post.category}</p>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">{post.title}</h3>
              <p className="mt-3 flex-1 text-gray-600">{post.excerpt}</p>
              <time dateTime={post.published} className="mt-4 text-sm text-gray-400">
                {post.displayDate}
              </time>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

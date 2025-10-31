export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
        <div className="max-w-3xl mx-auto text-lg space-y-6 text-gray-600">
          <p>
            Butler Solutions helps mission-critical teams modernize how they deliver digital services at the edge. We
            blend platform engineering, site reliability, and data strategy to build resilient systems that scale across
            geographies while respecting regulatory boundaries.
          </p>
          <p>
            Our architects, engineers, and product strategists work as a unified team, embedding with clients to
            co-create roadmaps and leave behind automated, well-documented platforms. The result is faster iteration,
            measurable reliability gains, and a technology foundation that keeps pace with the business.
          </p>
        </div>
      </div>
    </section>
  )
}

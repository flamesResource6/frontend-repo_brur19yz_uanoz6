const projects = [
  {
    title: 'Interactive Dashboard',
    desc: 'Analytics dashboard with charts, filters, and real-time updates.',
    tags: ['React', 'Tailwind', 'Recharts'],
    link: '#'
  },
  {
    title: 'E-commerce UI',
    desc: 'Beautiful storefront with product cards, cart, and checkout flow.',
    tags: ['React', 'Tailwind', 'Stripe'],
    link: '#'
  },
  {
    title: 'Portfolio Starter',
    desc: 'Animated landing page using Spline and Framer Motion.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Selected Work</h2>
          <a href="#contact" className="hidden sm:inline-flex rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors">Work with me</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group block rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-36 rounded-xl bg-gradient-to-br from-indigo-500/15 via-fuchsia-500/15 to-cyan-500/15 mb-4 group-hover:from-indigo-500/25 group-hover:via-fuchsia-500/25 group-hover:to-cyan-500/25 transition-colors" />
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-700">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded-full">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

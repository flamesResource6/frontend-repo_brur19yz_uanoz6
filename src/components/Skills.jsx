const skills = [
  { name: 'React', level: 90 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'TypeScript', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'FastAPI', level: 70 },
  { name: 'MongoDB', level: 70 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((s) => (
            <div key={s.name} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-900">{s.name}</p>
                <p className="text-sm text-gray-600">{s.level}%</p>
              </div>
              <div className="mt-3 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-400 rounded-full" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

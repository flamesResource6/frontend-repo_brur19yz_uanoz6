export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white/60" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I’m a developer who enjoys building polished, accessible interfaces and robust backend APIs. I focus on crafting experiences that feel fast, intuitive, and friendly.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Outside of coding, I love design systems, motion design, and learning new tools to push the web forward.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl p-6 bg-white shadow-sm border">
              <p className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">4+ yrs</p>
              <p className="text-sm text-gray-600">Experience</p>
            </div>
            <div className="rounded-2xl p-6 bg-white shadow-sm border">
              <p className="text-3xl font-extrabold bg-gradient-to-r from-fuchsia-500 to-rose-500 bg-clip-text text-transparent">20+</p>
              <p className="text-sm text-gray-600">Projects</p>
            </div>
            <div className="rounded-2xl p-6 bg-white shadow-sm border">
              <p className="text-3xl font-extrabold bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">10</p>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
            <div className="rounded-2xl p-6 bg-white shadow-sm border">
              <p className="text-3xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">100%</p>
              <p className="text-sm text-gray-600">Commitment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

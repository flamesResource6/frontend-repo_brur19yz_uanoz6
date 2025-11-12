import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-indigo-600 mb-4">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Hi, I’m <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            I craft delightful digital experiences. Frontend-focused full‑stack developer passionate about UI, animations, and performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors">View Projects</a>
            <a href="#contact" className="rounded-full bg-white/80 backdrop-blur px-5 py-2.5 text-sm font-medium border border-gray-200 hover:bg-white transition-colors">Contact Me</a>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white" />
    </section>
  )
}

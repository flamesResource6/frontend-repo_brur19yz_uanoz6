import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStatus('Thanks! I will get back to you soon.')
        e.currentTarget.reset()
      } else {
        const data = await res.json().catch(() => ({}))
        setStatus(data.detail || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Let’s build something great</h2>
            <p className="mt-4 text-gray-700">Tell me about your project, timeline, and budget. I usually reply within 1–2 business days.</p>
            <p className="mt-6 text-sm text-gray-500">Or email me at <span className="font-medium text-gray-700">you@example.com</span></p>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border bg-white p-6 shadow-sm grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input required name="name" className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input required name="email" type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea required name="message" rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700 transition-colors">Send</button>
            {status && <p className="text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

// import { useState } from 'react'

// export default function Contact() {
//   const [form, setForm]   = useState({ name: '', email: '', message: '', newsletter: false })
//   const [sent, setSent]   = useState(false)

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // 👉 Replace with Formspree / EmailJS / your backend
//     console.log('Form data:', form)
//     setSent(true)
//   }

//   return (
//     <section
//       id="contact"
//       className="min-h-screen bg-bg2 px-12 pt-28 pb-20 flex flex-col items-center text-center"
//     >
//       <p className="text-[11px] tracking-[0.25em] uppercase text-accent mb-4 font-semibold reveal">
//         Get In Touch
//       </p>

//       <h2
//         className="font-display font-black uppercase leading-[0.95] mb-14 reveal"
//         style={{ fontSize: 'clamp(40px, 7vw, 100px)' }}
//       >
//         Let's create<br />something<br />
//         <span className="text-accent">amazing together</span>
//       </h2>

//       {sent ? (
//         <div className="flex flex-col items-center gap-4 reveal">
//           <span className="text-5xl text-accent">✦</span>
//           <p className="text-xl text-muted">Thanks! I'll get back to you soon.</p>
//         </div>
//       ) : (
//         <div className="w-full max-w-xl reveal">
//           {/* Name */}
//           <div className="mb-0">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your full name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full bg-transparent border-b border-border text-white font-body text-base
//                 py-5 outline-none placeholder-muted transition-colors duration-200
//                 focus:border-accent"
//             />
//           </div>

//           {/* Email */}
//           <div className="mb-0">
//             <input
//               type="email"
//               name="email"
//               placeholder="your@email.com"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full bg-transparent border-b border-border text-white font-body text-base
//                 py-5 outline-none placeholder-muted transition-colors duration-200
//                 focus:border-accent"
//             />
//           </div>

//           {/* Message */}
//           <div className="mb-0">
//             <textarea
//               name="message"
//               placeholder="Your message here..."
//               value={form.message}
//               onChange={handleChange}
//               rows={4}
//               className="w-full bg-transparent border-b border-border text-white font-body text-base
//                 py-5 outline-none placeholder-muted transition-colors duration-200
//                 focus:border-accent resize-none"
//             />
//           </div>

//           {/* Footer row */}
//           <div className="flex items-center justify-center mt-10 gap-4">
//             <button
//               onClick={handleSubmit}
//               className="bg-accent text-black font-display font-bold text-base tracking-widest uppercase
//                 px-8 py-4 transition-all duration-200 hover:bg-white hover:-translate-y-0.5"
//             >
//               Let's work together!
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   )
// }


import { useState } from 'react'
import { supabase } from '../lib/supabase'
import toast from 'react-hot-toast'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false,
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in all fields.')
      return
    }

    try {
      setLoading(true)

      const { error } = await supabase.from('contact_messages').insert([
        {
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          newsletter: form.newsletter,
        },
      ])

      if (error) throw error

      toast.success('Message received successfully. I’ll get back to you soon.')
      setSent(true)

      setForm({
        name: '',
        email: '',
        message: '',
        newsletter: false,
      })
    } catch (error) {
      console.error('Error saving contact form:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-bg2 px-12 pt-28 pb-20 flex flex-col items-center text-center"
    >
      <p className="text-[11px] tracking-[0.25em] uppercase text-accent mb-4 font-semibold reveal">
        Get In Touch
      </p>

      <h2
        className="font-display font-black uppercase leading-[0.95] mb-14 reveal"
        style={{ fontSize: 'clamp(40px, 7vw, 100px)' }}
      >
        Let's create
        <br />
        something
        <br />
        <span className="text-accent">amazing together</span>
      </h2>

      {sent ? (
        <div className="flex flex-col items-center gap-4 reveal">
          <span className="text-5xl text-accent">✦</span>
          <p className="text-xl text-muted">Thanks! I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-xl reveal">
          <div className="mb-0">
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-border text-white font-body text-base
                py-5 outline-none placeholder-muted transition-colors duration-200
                focus:border-accent"
            />
          </div>

          <div className="mb-0">
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-border text-white font-body text-base
                py-5 outline-none placeholder-muted transition-colors duration-200
                focus:border-accent"
            />
          </div>

          <div className="mb-0">
            <textarea
              name="message"
              placeholder="Your message here..."
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-transparent border-b border-border text-white font-body text-base
                py-5 outline-none placeholder-muted transition-colors duration-200
                focus:border-accent resize-none"
            />
          </div>

          <div className="flex items-center justify-center mt-10 gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-accent text-black font-display font-bold text-base tracking-widest uppercase
                px-8 py-4 transition-all duration-200 hover:bg-white hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : "Let's work together!"}
            </button>
          </div>
        </form>
      )}
    </section>
  )
}
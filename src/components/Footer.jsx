import { personal, social } from '../data'

const sections = [
  { label: 'Homepage',   href: '#hero' },
  { label: 'Work',       href: '#work' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border px-12 pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-14 mb-14">
        {/* Brand */}
        <div>
          <div className="font-display font-black text-2xl uppercase tracking-widest mb-4">
            {personal.name}
          </div>
          <p className="text-sm text-muted leading-relaxed max-w-[260px]">
           Fullstack developer focused on building scalable, user-friendly and high-performance web applications.
          </p>
        </div>

        {/* Sections */}
        <div>
          <h4 className="text-[11px] tracking-[0.2em] uppercase text-muted mb-5 font-semibold">
            Sections
          </h4>
          <ul className="space-y-3">
            {sections.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="text-sm text-[#aaa] transition-colors duration-200 hover:text-accent">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-[11px] tracking-[0.2em] uppercase text-muted mb-5 font-semibold">
            Social
          </h4>
          <ul className="space-y-3">
            {social.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#aaa] transition-colors duration-200 hover:text-accent"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[11px] tracking-[0.2em] uppercase text-muted mb-5 font-semibold">
            Contact
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${personal.email}`}
                className="text-sm text-[#aaa] transition-colors duration-200 hover:text-accent"
              >
                {personal.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${personal.phone}`}
                className="text-sm text-[#aaa] transition-colors duration-200 hover:text-accent"
              >
                {personal.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-xs text-muted gap-2">
        <span>Copyright {new Date().getFullYear()} - {personal.name}</span>
        <span>Built with Vite + React + Tailwind CSS</span>
      </div>
    </footer>
  )
}

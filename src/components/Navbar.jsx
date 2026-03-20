import { useEffect, useState } from 'react'
import { personal } from '../data'

const links = [
  { label: 'Work',       href: '#work' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-6 bg-bg/90 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'border-b border-border' : 'border-b border-transparent'
      }`}
    >
      <a
        href="#hero"
        className="font-display font-black text-lg tracking-widest uppercase text-white"
      >
        {personal.name}
      </a>

      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="relative text-white text-[15px] font-medium transition-colors duration-200 hover:text-accent
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5
                after:bg-accent after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

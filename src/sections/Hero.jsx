import { personal } from '../data'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-12 pt-28 pb-24 overflow-hidden"
    >
      {/* Available badge */}
      <p
        className="text-xs tracking-[0.2em] uppercase text-muted mb-6
          opacity-0 animate-fadeUp anim-delay-1"
      >
        {personal.available ? '● Open for work' : 'Currently unavailable'}
      </p>

      {/* Big headline */}
      <h1
        className="font-display font-black uppercase leading-[0.92] text-hero
          opacity-0 animate-fadeUp anim-delay-2"
      >
        Hi! I'm{' '}
        <span className="text-accent">{personal.name},</span>
        <br />
        A <span className="text-accent">Creative</span>
        <br />
        Developer
      </h1>

      {/* Subtitle */}
      <p
        className="mt-10 text-[17px] text-muted max-w-lg leading-relaxed
          opacity-0 animate-fadeUp anim-delay-3"
      >
        I develop modern websites and web applications focused on performance, usability and real-world impact.
      </p>

      {/* CTA */}
      <div
        className="mt-12 flex gap-6 items-center
          opacity-0 animate-fadeUp anim-delay-4"
      >
        <a
          href="#work"
          className="bg-accent text-black font-display font-bold text-base tracking-widest uppercase
            px-8 py-4 transition-all duration-200 hover:bg-white hover:-translate-y-0.5"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="text-white text-sm border-b border-muted pb-0.5 transition-colors duration-200
            hover:text-accent hover:border-accent"
        >
          Get in touch
        </a>
      </div>

      {/* Scroll hint */}
      <span className="absolute bottom-10 right-12 text-xs text-muted tracking-[0.15em] uppercase">
        (Scroll)
      </span>

      {/* Background ghost text */}
      <div
        aria-hidden
        className="absolute -bottom-5 -right-5 font-display font-black uppercase text-white/[0.02] pointer-events-none select-none whitespace-nowrap"
        style={{ fontSize: 'clamp(120px, 20vw, 280px)' }}
      >
        Develop
      </div>
    </section>
  )
}

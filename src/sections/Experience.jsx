import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen bg-bg px-12 pt-28 pb-20">
      <p className="text-[11px] tracking-[0.25em] uppercase text-accent mb-4 font-semibold reveal">
        Career Path
      </p>
      <h2 className="font-display font-black uppercase leading-[0.95] text-section mb-16 reveal">
        Experience
      </h2>

      <div>
        {experience.map((e, i) => (
          <div
            key={i}
            data-hover
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center
              py-8 border-b border-border first:border-t border-border
              transition-all duration-300 hover:pl-5 group reveal"
          >
            <div className="font-display font-black text-3xl uppercase tracking-wide transition-colors duration-200 group-hover:text-accent">
              {e.company}
            </div>
            <div className="text-[15px] text-muted font-medium mt-1 md:mt-0">{e.role}</div>
            <div className="text-xs text-muted tracking-widest md:text-right mt-1 md:mt-0">{e.period}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

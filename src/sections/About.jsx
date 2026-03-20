import { bio, skills, stats } from '../data'

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-bg2 px-12 pt-28 pb-20">
      <p className="text-[11px] tracking-[0.25em] uppercase text-accent mb-4 font-semibold reveal">
        Who I Am
      </p>
      <h2 className="font-display font-black uppercase leading-[0.95] text-section mb-16 reveal">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Text + skills */}
        <div>
          {bio.map((p, i) => (
            <p key={i} className="text-[#cccccc] text-[17px] leading-relaxed mb-6 reveal">
              {p}
            </p>
          ))}

          <div className="grid grid-cols-2 gap-3 mt-10">
            {skills.map((s) => (
              <div
                key={s.name}
                data-hover
                className="flex items-center gap-4 px-5 py-4 border border-border
                  transition-all duration-200 hover:border-accent hover:bg-accent/5 reveal"
              >
                <span className="text-xl">{s.icon}</span>
                <span className="font-semibold text-sm">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-0.5 reveal">
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-8 py-10">
              <div className="font-display font-black text-[64px] text-accent leading-none">
                {s.num}
              </div>
              <div className="text-xs text-muted tracking-widest uppercase mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

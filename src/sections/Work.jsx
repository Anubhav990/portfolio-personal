import { projects } from '../data'

// SVG icons inline to avoid any icon library dependency
const IconExternalLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const IconGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35
      6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65
      16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5
      4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9
      18.13V22"/>
  </svg>
)

function WorkCard({ project }) {
  return (
    <div
      className="bg-zinc-800 rounded-2xl overflow-hidden flex flex-col group
        border border-white/5 hover:border-accent/30
        transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/5 reveal"
    >
      <div className="relative h-48 bg-gradient-to-br from-[#1a1d2e] to-[#0f1117] flex items-center justify-center overflow-hidden">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/35" />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <span className="text-xs tracking-[0.25em] uppercase text-white/25 font-display font-bold select-none z-10">
              {project.name}
            </span>
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1
                bg-blue-500/15 text-blue-400 rounded border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex-1">
          <h3 className="text-white font-bold text-xl mb-2 group-hover:text-accent transition-colors duration-200">
            {project.name}
          </h3>
          <p className="text-muted text-sm leading-relaxed">{project.description}</p>
        </div>

        <div className="flex items-center gap-5 pt-2 border-t border-white/5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-green-500 hover:text-accent transition-colors duration-200"
          >
            <IconExternalLink /> Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-white/70 hover:text-accent transition-colors duration-200"
          >
            <IconGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="min-h-screen px-12 pt-28 pb-20 bg-bg">
      <p className="text-[11px] tracking-[0.25em] uppercase text-accent mb-4 font-semibold reveal">
        Selected Work
      </p>
      <h2 className="font-display font-black uppercase leading-[0.95] text-section mb-16 reveal">
        Recent<br />Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <WorkCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}

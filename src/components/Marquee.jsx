export default function Marquee({ items, speed = 20, dim = false }) {
  const doubled = [...items, ...items]

  return (
    <div
      className={`overflow-hidden border-y border-border py-4 ${
        dim ? 'bg-transparent py-10' : 'bg-bg2'
      }`}
    >
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-display font-bold tracking-widest uppercase px-8 ${
              dim ? 'text-[#2e2e2e] text-3xl' : 'text-muted text-xl'
            }`}
          >
            {item}
            {!dim && <span className="text-accent ml-8">✦</span>}
          </span>
        ))}
      </div>
    </div>
  )
}

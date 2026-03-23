import { useEffect, useRef } from 'react'

export function useCursor() {
  const cursorRef = useRef(null)
  const trailRef  = useRef(null)

  useEffect(() => {
    // Don't run on touch/mobile devices
    if (window.innerWidth < 768) return

    const cursor = cursorRef.current
    const trail  = trailRef.current
    if (!cursor || !trail) return

    let mx = 0, my = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top  = my + 'px'
      setTimeout(() => {
        trail.style.left = mx + 'px'
        trail.style.top  = my + 'px'
      }, 80)
    }

    const onEnter = () => cursor.classList.add('scale-[3.5]', '!bg-transparent', 'border-2', 'border-accent')
    const onLeave = () => cursor.classList.remove('scale-[3.5]', '!bg-transparent', 'border-2', 'border-accent')

    document.addEventListener('mousemove', onMove)

    const update = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    update()
    const observer = new MutationObserver(update)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [])

  return { cursorRef, trailRef }
}
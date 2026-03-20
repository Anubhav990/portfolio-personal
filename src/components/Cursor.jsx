import { useCursor } from '../hooks/useCursor'

export default function Cursor() {
  const { cursorRef, trailRef } = useCursor()
  return (
    <>
      <div
        ref={cursorRef}
        className="w-3 h-3 bg-accent rounded-full fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background] duration-200"
      />
      <div
        ref={trailRef}
        className="w-1.5 h-1.5 bg-accent/30 rounded-full fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-150"
      />
    </>
  )
}

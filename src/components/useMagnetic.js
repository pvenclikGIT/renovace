import { useRef, useEffect } from 'react'

/*
  useMagnetic — applies a subtle cursor-attraction effect to an element.
  The element translates toward the cursor when hovered, snaps back on leave.
  Strength: how much the element moves (0-1, default 0.3 = 30 % of cursor distance).
*/
export function useMagnetic(strength = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = null
    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    const tick = () => {
      currentX += (targetX - currentX) * 0.18
      currentY += (targetY - currentY) * 0.18
      el.style.transform = `translate(${currentX}px, ${currentY}px)`
      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        raf = requestAnimationFrame(tick)
      } else {
        el.style.transform = `translate(${targetX}px, ${targetY}px)`
        raf = null
      }
    }

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      targetX = (e.clientX - cx) * strength
      targetY = (e.clientY - cy) * strength
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const onLeave = () => {
      targetX = 0
      targetY = 0
      if (!raf) raf = requestAnimationFrame(tick)
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [strength])

  return ref
}

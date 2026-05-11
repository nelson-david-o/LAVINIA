import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    let mx = 0, my = 0, rx = 0, ry = 0
    let animId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx - 6 + 'px'
      cursor.style.top = my - 6 + 'px'
    }

    const animRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx - 18 + 'px'
      ring.style.top = ry - 18 + 'px'
      animId = requestAnimationFrame(animRing)
    }

    const onEnter = (e) => {
      if (e.target.closest('a, button, .taller-card, .red-card')) {
        cursor.style.transform = 'scale(2)'
        ring.style.transform = 'scale(1.4)'
        ring.style.opacity = '1'
      }
    }

    const onLeave = (e) => {
      if (e.target.closest('a, button, .taller-card, .red-card')) {
        cursor.style.transform = 'scale(1)'
        ring.style.transform = 'scale(1)'
        ring.style.opacity = '0.6'
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    animId = requestAnimationFrame(animRing)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}

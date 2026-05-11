import { useEffect, useRef } from 'react'

export default function Nav() {
  const navRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current
    const onScroll = () => {
      nav.style.boxShadow = window.scrollY > 20
        ? '0 4px 30px rgba(0,0,0,0.08)'
        : 'none'
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav ref={navRef}>
      <div className="nav-logo"><span>LAVINIA</span></div>
      <ul className="nav-links">
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#talleres">Talleres</a></li>
        <li><a href="#galeria">Galería</a></li>
        <li><a href="#redes">Redes</a></li>
        <li><a href="#contacto" className="nav-cta">Reservar cupo</a></li>
      </ul>
    </nav>
  )
}

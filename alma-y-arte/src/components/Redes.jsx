import Reveal from './Reveal'

export default function Redes() {
  return (
    <section id="redes">
      <Reveal className="redes-header">
        <div className="section-label">Síguenos</div>
        <h2>Nuestra <em>comunidad</em><br />crece aquí</h2>
        <p style={{ color: '#6b5e4e', fontSize: '0.95rem', marginTop: '0.8rem', fontWeight: 300 }}>
          Comparte el proceso, los resultados y los momentos que vivimos juntos.
        </p>
      </Reveal>

      <div className="redes-grid">
        <Reveal
          delay={1}
          as="a"
          href="https://instagram.com/@lavinia_experiencias"
          target="_blank"
          rel="noreferrer"
          className="red-card instagram"
        >
          <span className="red-arrow">↗</span>
          <div className="red-icon">📸</div>
          <h3>Instagram</h3>
          <p>Fotos del proceso, resultados y momentos especiales de cada taller.</p>
          <span className="red-handle">@lavinia_experiencias</span>
        </Reveal>

        <Reveal
          delay={2}
          as="a"
          href="https://tiktok.com/@lavinia_experiencias"
          target="_blank"
          rel="noreferrer"
          className="red-card tiktok"
        >
          <span className="red-arrow">↗</span>
          <div className="red-icon" style={{ fontSize: '1.8rem' }}>🎵</div>
          <h3>TikTok</h3>
          <p>Videos, arte, experiencias y tutoriales. El día a día de nuestros talleres.</p>
          <span className="red-handle">@lavinia_experiencias</span>
        </Reveal>
      </div>
    </section>
  )
}

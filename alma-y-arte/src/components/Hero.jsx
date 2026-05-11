export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-blob blob1" />
      <div className="hero-bg-blob blob2" />

      <div className="hero-text">
        <div className="hero-tag">
          <span className="dot" />
          Talleres con cupos limitados
        </div>
        <h1>Donde el <em>arte</em><br />sana el alma</h1>
        <p className="hero-desc">
          Combinamos creatividad y bienestar mental en talleres íntimos. Manualidades,
          conexiones reales y un espacio seguro para liberar el cortizol y reconectar
          contigo mismo.
        </p>
        <div className="hero-buttons">
          <a href="#talleres" className="btn-primary">Ver talleres disponibles →</a>
          <a href="#nosotros" className="btn-secondary">Conocernos</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <div className="card-placeholder">🎨<span>Tu foto vertical aquí</span></div>
          <div className="float-badge">✦ Arte <strong>&amp;</strong> Calma</div>
        </div>
        <div className="hero-card">
          <div className="card-placeholder">🌿<span>Foto taller</span></div>
        </div>
        <div className="hero-card">
          <div className="card-placeholder">🤲<span>Manualidades</span></div>
        </div>
      </div>
    </section>
  )
}

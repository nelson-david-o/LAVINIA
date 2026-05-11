import Reveal from './Reveal'

const tags = [
  { emoji: '🧠', label: 'Salud mental' },
  { emoji: '✂️', label: 'Manualidades' },
  { emoji: '🌱', label: 'Comunidad' },
  { emoji: '🎨', label: 'Arte terapia' },
  { emoji: '💚', label: 'Bienestar' },
  { emoji: '✦',  label: 'Cupos limitados' },
]

export default function Nosotros() {
  return (
    <section id="nosotros">
      <Reveal className="nosotros-visual">
        <div className="nosotros-img-main">🎨</div>
        <div className="nosotros-img-secondary">🌿</div>
        <div className="stat-pill">
          <div className="number">20</div>
          <div className="label">Cupos máx.</div>
        </div>
      </Reveal>

      <div className="nosotros-text">
        <Reveal>
          <div className="section-label">Quiénes somos</div>
          <h2>Nacimos de la <em>necesidad</em> de sanar</h2>
        </Reveal>
        <Reveal delay={1}>
          <blockquote className="manifesto">
            "Creemos que crear con las manos es una de las formas más honestas de
            conectar con uno mismo y con los demás."
          </blockquote>
          <p className="nosotros-desc">
            Somos un equipo apasionado por el arte y la salud mental. Entendimos que
            muchas personas necesitan más que una consulta: necesitan sentir, hacer,
            compartir. Por eso creamos talleres donde la creatividad y el bienestar se
            encuentran.
          </p>
          <p className="nosotros-desc">
            Cada encuentro está diseñado para reducir el estrés, fomentar la expresión
            emocional y construir comunidad. Los materiales, la música, el espacio —
            todo está pensado para que llegues agitado y te vayas en calma.
          </p>
          <div className="tags-list">
            {tags.map((t) => (
              <span key={t.label} className="tag">
                {t.emoji} {t.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

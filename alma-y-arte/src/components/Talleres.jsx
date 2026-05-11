import Reveal from './Reveal'

const talleres = [
  {
    emoji: '🖼️',
    cupos: '18 cupos',
    title: 'Pintura & Jarrones',
    desc: 'Técnicas mixtas de pintura aplicadas directamente sobre jarrones, acompañadas de auto test mentales y experiencias grupales. Para principiantes y avanzados.',
    price: '$150.000',
    cardClass: 't1',
    delay: 1,
  },
  {
    emoji: '🌿',
    cupos: '15 cupos',
    title: 'Modelado con arcilla',
    desc: 'La manualidad con arcilla como meditación activa. Trabajamos la creatividad, conversamos de salud mental y fomentamos la expresión emocional.',
    price: '$160.000',
    cardClass: 't2',
    delay: 2,
  },
  {
    emoji: '📓',
    cupos: '15 cupos',
    title: 'Scrapbooking & lettering',
    desc: 'Técnica para preservar recuerdos, lettering y escritura expresiva. Un espacio para contar historias emotivas y únicas, plasmados en papel.',
    price: '$150.000',
    cardClass: 't3',
    delay: 3,
  },
]

export default function Talleres() {
  return (
    <section id="talleres">
      <div className="talleres-intro">
        <Reveal>
          <div className="section-label">Próximos talleres</div>
          <h2>Elige tu <em>experiencia</em></h2>
        </Reveal>
        <Reveal delay={1}>
          <p style={{ color: '#6b5e4e', fontSize: '1rem', lineHeight: 1.75, fontWeight: 300 }}>
            Cada taller es un mundo diferente. Todos comparten el mismo corazón: arte,
            conversación genuina y un espacio para soltar lo que cargas.
          </p>
          <a
            href="#contacto"
            className="btn-primary"
            style={{ display: 'inline-block', marginTop: '1.5rem' }}
          >
            Reservar mi lugar
          </a>
        </Reveal>
      </div>

      <div className="taller-cards">
        {talleres.map((t) => (
          <Reveal key={t.title} delay={t.delay} className={`taller-card ${t.cardClass}`}>
            <div className="taller-img">
              {t.emoji}
              <span className="cupos-badge">{t.cupos}</span>
            </div>
            <div className="taller-body">
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
              <div className="taller-meta">
                <span className="taller-price">{t.price}</span>
                <a href="#contacto" className="btn-small">Reservar</a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

import Reveal from './Reveal'

const valores = [
  {
    icon: '🧠',
    title: 'Salud Mental Primero',
    desc: 'Hablamos abiertamente sobre el bienestar emocional en un ambiente cálido y sin juicios. Cada taller incluye un espacio de reflexión guiada.',
  },
  {
    icon: '✂️',
    title: 'Manualidades como Terapia',
    desc: 'Trabajar con las manos reduce el cortisol y activa el estado de flujo. Colores, texturas y materiales elegidos para relajar y enfocar la mente.',
  },
  {
    icon: '🌱',
    title: 'Comunidad Genuina',
    desc: 'Grupos pequeños para que las conexiones sean reales. Saldrás con nueva perspectiva y, quizás, nuevas amistades.',
  },
]

export default function Valores() {
  return (
    <section id="valores">
      <Reveal>
        <div className="section-label">¿Por qué Lavinia?</div>
        <h2>Un espacio donde <em>crear</em> es sanar</h2>
      </Reveal>
      <div className="valores-grid">
        {valores.map((v, i) => (
          <Reveal key={v.title} delay={i + 1} className="valor-card">
            <span className="valor-icon">{v.icon}</span>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

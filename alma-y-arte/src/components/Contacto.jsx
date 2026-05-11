import { useState } from 'react'
import Reveal from './Reveal'

const contactInfo = [
  { icon: '📍', label: 'Ubicación',  value: 'Barranquilla - Atlántico' },
  { icon: '📱', label: 'WhatsApp',   value: '+57 300 000 0000' },
  { icon: '✉️', label: 'Email',      value: 'somoslaviniart@gmail.com' },
  { icon: '🕐', label: 'Horario',    value: 'Sáb - Dom · 2pm – 5pm' },
]

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contacto">
      <div className="contacto-grid">
        <div className="contacto-left">
          <Reveal>
            <div className="section-label">Contáctanos</div>
            <h2>¿Lista/o para <em>crear</em>?</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="contacto-desc">
              Cuéntanos en qué taller te interesa participar o si tienes preguntas.
              Respondemos con mucho cariño.
            </p>
            <div className="contacto-info">
              {contactInfo.map((item) => (
                <div key={item.label} className="info-row">
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-text">
                    <strong>{item.label}</strong>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={2} className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <label>Teléfono / WhatsApp</label>
                <input type="tel" placeholder="+57 300..." />
              </div>
            </div>
            <div className="form-group">
              <label>Correo electrónico</label>
              <input type="email" placeholder="tu@correo.com" />
            </div>
            <div className="form-group">
              <label>¿Qué taller te interesa?</label>
              <select defaultValue="">
                <option value="" disabled>Selecciona un taller</option>
                <option>Pintura &amp; Jarrones</option>
                <option>Modelado con arcilla</option>
                <option>Scrapbooking & lettering</option>
                <option>No sé, quiero más info</option>
              </select>
            </div>
            <div className="form-group">
              <label>Mensaje (opcional)</label>
              <textarea placeholder="Cuéntanos algo sobre ti o lo que buscas..." />
            </div>
            <button
              type="submit"
              className="btn-submit"
              style={submitted ? { background: 'linear-gradient(135deg, #7A9E7E, #5a8060)' } : undefined}
            >
              {submitted
                ? '✓ ¡Mensaje enviado! Te escribimos pronto 🎨'
                : 'Quiero reservar mi cupo ✦'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

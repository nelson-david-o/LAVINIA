import Reveal from './Reveal'

const row1 = [
  { type: 'vertical',   src: 'galeria/arte-japones-3ztiwxubl0mm2qbt.jpg',   kind: 'image' },
  { type: 'horizontal', src: 'galeria/video1.mp4',  kind: 'video' },
  { type: 'square',     src: 'galeria/blue-sky-half-moon-crescent-moon-clouds-star-trails-5k-3840x2160-8404.png',   kind: 'image' },
  { type: 'vertical',   src: 'galeria/geunyeong-park-sunflower-frame.jpg',  kind: 'image' },
  { type: 'horizontal', src: 'galeria/eaf14f9986672d4b67856ccad3d214ba.jpeg',   kind: 'image' },
  { type: 'square',     src: 'galeria/video2.mp4',   kind: 'video' },
]

const row2 = [
  { type: 'horizontal', src: 'galeria/foto5.jpg',   kind: 'image' },
  { type: 'vertical',   src: 'galeria/video3.mp4',  kind: 'video' },
  { type: 'square',     src: 'galeria/foto6.jpg',   kind: 'image' },
  { type: 'horizontal', src: 'galeria/foto7.jpg',   kind: 'image' },
  { type: 'vertical',   src: 'galeria/video4.mp4',  kind: 'video' },
  { type: 'square',     src: 'galeria/foto8.jpg',   kind: 'image' },
]


function MediaItem({ type, src, kind = 'image', color = 'c1', emoji = '🎨', label = '' }) {
  const hasMedia = Boolean(src)

  return (
    <div className={`media-item ${type}${!hasMedia ? ` ${color}` : ''}`}>
      {hasMedia ? (
        kind === 'video' ? (
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img src={src} alt={label} loading="lazy" />
        )
      ) : (
        <div className="media-placeholder">
          {emoji}<span>{label}</span>
        </div>
      )}
    </div>
  )
}

function ScrollRow({ items, reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div className="scroll-track-wrapper">
      <div className={`scroll-track${reverse ? ' reverse' : ''}`}>
        {doubled.map((item, i) => (
          <MediaItem key={i} {...item} />
        ))}
      </div>
    </div>
  )
}

export default function Galeria() {
  return (
    <section id="galeria">
      <Reveal className="galeria-header">
        <div className="section-label">Momentos que compartimos</div>
        <h2>Así se <em>vive</em> un taller</h2>
      </Reveal>
      <ScrollRow items={row1} />
      <ScrollRow items={row2} reverse />
    </section>
  )
}

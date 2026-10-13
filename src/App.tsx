import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const works = [
  { number: '01', title: 'La luz, tal como llega', category: 'Editorial / Film', image: '/images/hero-editorial.png', alt: 'Pareja abrazada junto a una ventana en un interior de luz suave', layout: 'wide' },
  { number: '02', title: 'Una forma de mirar', category: 'Portraits', image: '/images/portrait-editorial.png', alt: 'Retrato editorial de una mujer con luz lateral suave', layout: 'portrait' },
  { number: '03', title: 'El gesto que permanece', category: 'Documentary', image: '/images/detail-editorial.png', alt: 'Dos manos tocándose junto a una ventana', layout: 'portrait' },
] as const

function scrollToId(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
function SectionLabel({ children }: { children: string }) { return <p className="section-label">{children}</p> }

function App() {
  const prefersReducedMotion = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)
  const reveal = prefersReducedMotion ? { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 } } : { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 } }
  const goTo = (id: string) => { setMenuOpen(false); scrollToId(id) }

  return (
    <main className="site-shell">
      <section id="top" className="hero">
        <motion.img className="hero-image" src="/images/hero-editorial.png" alt="Pareja abrazada junto a una ventana en un interior de luz suave" initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 1.06, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.6, ease }} />
        <div className="hero-overlay" aria-hidden="true" />
        <header className="site-header">
          <button className="wordmark" onClick={() => goTo('top')} aria-label="Volver al inicio">CD<span>.</span></button>
          <nav className="desktop-nav" aria-label="Navegación principal"><button onClick={() => goTo('about')}>Sobre Chris</button><button onClick={() => goTo('works')}>Trabajos</button><button onClick={() => goTo('contact')}>Contacto</button></nav>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>{menuOpen ? <X size={17} strokeWidth={1.5} /> : <Menu size={17} strokeWidth={1.5} />}</button>
        </header>
        <AnimatePresence>{menuOpen && <motion.nav className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-label="Menú móvil"><button onClick={() => goTo('about')}>Sobre Chris</button><button onClick={() => goTo('works')}>Trabajos</button><button onClick={() => goTo('contact')}>Contacto</button></motion.nav>}</AnimatePresence>
        <div className="hero-content">
          <motion.div initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45, duration: .8 }} className="eyebrow light">Photography / Film / Direction</motion.div>
          <motion.h1 initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5, duration: 1, ease }}>Chris<br /><em>Delgado</em></motion.h1>
          <motion.div initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: .8 }} className="hero-footer"><span>Una mirada honesta<br />sobre lo que importa.</span><button onClick={() => goTo('about')} className="scroll-cue"><span>Scroll</span><ArrowDown size={14} strokeWidth={1} /></button></motion.div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container services-grid">
          <div className="service-intro"><span className="section-label">01 / Especialidades</span><p>Una mirada versátil para marcas, personas y proyectos con identidad.</p></div>
          <div className="service-item"><span>01</span><h2>Fashion</h2><p>Campañas, retratos y contenido visual para marcas de ropa.</p></div>
          <div className="service-item"><span>02</span><h2>Floral</h2><p>Texturas, composición y detalle para floristerías y diseño floral.</p></div>
          <div className="service-item"><span>03</span><h2>Automotive</h2><p>Fotografía y cine para máquinas con carácter. Referencia visual: McLaren.</p></div>
          <div className="service-item"><span>04</span><h2>Editorial</h2><p>Historias visuales pensadas para permanecer en la memoria.</p></div>
        </div>
      </section>

      <section id="about" className="about-section section-pad"><div className="container">
        <SectionLabel>02 / Sobre Chris</SectionLabel>
        <div className="about-grid"><motion.div {...reveal} transition={{ duration: .9, ease }}><h2 className="display-heading">Fotografía con<br /><em>intención.</em></h2></motion.div><motion.div {...reveal} transition={{ duration: .9, delay: .12, ease }} className="about-copy"><p className="lead-copy">Chris Delgado es fotógrafo y filmmaker. Su trabajo encuentra belleza en lo esencial: una mirada, una textura, una luz que dura un segundo.</p><p className="body-copy">Esta es una primera mirada a su universo visual. Una forma de contar historias con calma, sensibilidad y una estética que se reconoce sin necesidad de exagerar.</p><button className="text-link" onClick={() => goTo('works')}>Ver trabajos <ArrowUpRight size={15} strokeWidth={1.2} /></button></motion.div></div>
        <motion.div {...reveal} transition={{ duration: 1, delay: .16, ease }} className="about-images"><div className="about-image about-image-main"><img loading="lazy" src="/images/chris-portrait-demo.png" alt="Retrato editorial de un fotógrafo con su cámara" /></div><div className="about-image about-image-detail"><img loading="lazy" src="/images/detail-editorial.png" alt="Detalle de dos manos junto a una ventana" /></div><p className="side-note">El gesto.<br />La pausa.<br />Lo que queda.</p></motion.div>
      </div></section>

      <section id="works" className="works-section section-pad"><div className="container">
        <div className="section-heading-row"><div><SectionLabel>03 / Trabajos seleccionados</SectionLabel><h2 className="display-heading">Historias que<br /><em>permanecen.</em></h2></div><p className="section-intro">Una selección de imágenes y piezas visuales. El contenido real de Chris sustituirá estas imágenes en la siguiente fase.</p></div>
        <div className="works-grid">{works.map((work, index) => <motion.article key={work.number} {...reveal} transition={{ duration: 1, delay: index * .08, ease }} className={`work-card ${work.layout}`}><div className="work-image"><img loading="lazy" src={work.image} alt={work.alt} /><span className="work-number">{work.number}</span><span className="work-arrow"><ArrowUpRight size={15} strokeWidth={1.2} /></span></div><div className="work-meta"><div><p>{work.category}</p><h3>{work.title}</h3></div><span className="work-index">0{index + 1}</span></div></motion.article>)}</div>
      </div></section>

      <section id="contact" className="contact-section section-pad"><div className="container"><SectionLabel>04 / Contacto</SectionLabel><div className="contact-content"><h2 className="display-heading">Hagamos algo<br /><em>que permanezca.</em></h2><a className="contact-link" href="mailto:hello@chrisdelgado.studio">hello@chrisdelgado.studio <ArrowUpRight size={17} strokeWidth={1.1} /></a></div><footer className="site-footer"><span>Chris Delgado / Photography &amp; Film</span><span>© 2024 — 2025</span><button onClick={() => goTo('top')}>Back to top ↑</button></footer></div></section>
    </main>
  )
}

export default App

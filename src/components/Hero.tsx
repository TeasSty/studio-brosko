import { heroImage } from '../data/content'

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Главный экран">
      <div className="hero-media">
        <img src={heroImage} alt="Интерьер из портфолио студии BROSKO" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-brand">BROSKO</h1>
        <p className="hero-tagline">Пространство, где начинается жизнь</p>
        <p className="hero-place">Студия дизайна интерьера · Архангельск</p>
        <div className="hero-actions">
          <a className="btn btn-solid" href="#projects">
            Смотреть проекты
          </a>
          <a className="btn btn-ghost" href="#contact">
            Записаться на консультацию
          </a>
        </div>
      </div>
    </section>
  )
}

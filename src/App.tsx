import { ContactForm } from './components/ContactForm'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import {
  contacts,
  designers,
  processSteps,
  salonImage,
  solutions,
} from './data/content'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <div className="site">
      <Header />
      <Hero />

      <section className="intro" id="about">
        <div className="container intro-grid">
          <p className="eyebrow reveal">Студия интерьерных решений</p>
          <p className="reveal">
            Проектируем квартиры, дома и коммерческие пространства и ведём проект
            до реализации. В салоне в Архангельске можно выбрать отделочные
            материалы вживую.
          </p>
        </div>
      </section>

      <Projects />

      <section className="solutions" id="solutions">
        <div className="container">
          <div className="solutions-head reveal">
            <p className="eyebrow">От образца к комнате</p>
            <h2 className="section-title">Решения</h2>
            <p className="lead">
              Дизайн-проект, чертежи, 3D, свет и отделка — решения, которые можно
              увидеть и потрогать до ремонта.
            </p>
          </div>

          <div className="solutions-track">
            {solutions.map((item) => (
              <article key={item.title} className="solution-item reveal">
                <div className="solution-media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </article>
            ))}
          </div>

          <p className="solutions-note reveal">
            В работе — планировочные и концептуальные решения, светотехника,
            спецификации материалов, визуализация и сопровождение до готового
            интерьера.
          </p>
        </div>
      </section>

      <section className="process" id="process">
        <div className="container">
          <div className="reveal">
            <p className="eyebrow">Подход</p>
            <h2 className="section-title">Как идём по проекту</h2>
          </div>

          <div className="process-list">
            {processSteps.map((step) => (
              <div key={step.num} className="process-item reveal">
                <span className="num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>

          <p className="process-foot reveal">
            Берём проект от идеи до реализации, чтобы не разбираться во всём
            самостоятельно.
          </p>
        </div>
      </section>

      <section className="designers" id="designers">
        <div className="container">
          <div className="reveal">
            <p className="eyebrow">Команда</p>
            <h2 className="section-title">Дизайнеры</h2>
            <p className="lead">
              У студии несколько авторов — у каждого свой почерк и архив работ.
            </p>
          </div>

          <div className="designers-grid">
            {designers.map((person) => (
              <article key={person.name} className="designer reveal">
                <div className="designer-media">
                  <img src={person.image} alt={person.name} loading="lazy" />
                </div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="salon" id="salon">
        <div className="container salon-layout">
          <div className="salon-media reveal">
            <img
              src={salonImage}
              alt="Интерьер и материалы студии BROSKO"
              loading="lazy"
            />
          </div>
          <div className="salon-copy reveal">
            <p className="eyebrow">Точка входа</p>
            <h2 className="section-title">Салон в Архангельске</h2>
            <p>
              Здесь можно вживую посмотреть отделочные материалы и выбрать
              решения для будущего интерьера — до того, как начнётся ремонт.
            </p>
            <ul className="salon-facts">
              <li>{contacts.address}</li>
              <li>Зайти можно с парковки или через главный вход</li>
              <li>{contacts.hours}</li>
            </ul>
            <a className="btn btn-dark" href="#contact">
              Приехать в салон
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="reveal">
            <p className="eyebrow">Связь</p>
            <h2 className="section-title">Напишите или приезжайте</h2>
          </div>

          <div className="contact-grid">
            <div className="reveal">
              <p className="lead" style={{ color: 'rgba(232,224,212,0.78)' }}>
                Работаем с квартирами, домами, кафе, ресторанами, отелями и
                офисами — по Архангельску и по всей России.
              </p>
              <ul className="contact-list">
                {contacts.phones.map((phone) => (
                  <li key={phone.href}>
                    <a href={phone.href}>{phone.label}</a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                </li>
                <li>
                  <a href={contacts.vk} target="_blank" rel="noreferrer">
                    VK · studio_brosko
                  </a>
                </li>
                <li>{contacts.address}</li>
              </ul>
            </div>

            <div className="reveal">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>BROSKO · Архангельск</span>
          <span>Эстетика · Функциональность · Гармония</span>
        </div>
      </footer>
    </div>
  )
}

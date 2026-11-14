import { useEffect, useState } from 'react'
import { contacts } from '../data/content'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header${scrolled || open ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="logo" href="#top" onClick={close}>
          BROSKO
        </a>

        <nav className={`nav${open ? ' is-open' : ''}`} aria-label="Основная навигация">
          <a href="#projects" onClick={close}>
            Проекты
          </a>
          <a href="#solutions" onClick={close}>
            Решения
          </a>
          <a href="#process" onClick={close}>
            Подход
          </a>
          <a href="#salon" onClick={close}>
            Салон
          </a>
          <a href="#contact" onClick={close}>
            Контакты
          </a>
          <a className="header-phone-mobile" href={contacts.phones[1].href}>
            {contacts.phones[1].label}
          </a>
        </nav>

        <a className="header-phone" href={contacts.phones[1].href}>
          {contacts.phones[1].label}
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </div>
    </header>
  )
}

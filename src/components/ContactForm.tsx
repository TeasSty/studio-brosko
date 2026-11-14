import { useState, type FormEvent } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        Имя
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Телефон
        <input name="phone" type="tel" autoComplete="tel" required />
      </label>
      <label>
        Тип пространства
        <select name="type" defaultValue="apartment">
          <option value="apartment">Квартира</option>
          <option value="house">Дом</option>
          <option value="cafe">Кафе / ресторан</option>
          <option value="hotel">Отель</option>
          <option value="office">Офис</option>
          <option value="other">Другое</option>
        </select>
      </label>
      <label>
        Коротко о задаче
        <textarea name="message" placeholder="Площадь, сроки, что важно" />
      </label>
      <button className="btn btn-solid" type="submit">
        Отправить
      </button>
      {sent ? (
        <p className="form-note">Спасибо. В рабочей версии заявка уйдёт в студию.</p>
      ) : (
        <p className="form-note">Или напишите в VK кодовое слово «ПРОЕКТ».</p>
      )}
    </form>
  )
}

import React, { useState } from 'react'
import './Newsletter.scss'

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!acceptedTerms) {
      alert('Por favor, aceite os termos e condições para continuar.')
      return
    }

    console.log('Nome:', name)
    console.log('Email:', email)
    console.log('Aceitou termos:', acceptedTerms)

    setName('')
    setEmail('')
    setAcceptedTerms(false)
    alert('Inscrição realizada com sucesso!')
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="container newsletter__inner">
        <div className="newsletter__text">
          <h2 className="newsletter__title" id="newsletter-title">
            Inscreva-se na nossa newsletter
          </h2>
          <p className="newsletter__sub">
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__inputs-row">
            <input
              type="text"
              className="newsletter__input"
              placeholder="Digite seu nome"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              aria-label="Seu nome"
            />

            <input
              type="email"
              className="newsletter__input"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              aria-label="Seu e-mail"
            />

            <button type="submit" className="newsletter__btn">
              Inscrever
            </button>
          </div>

          <div className="newsletter__terms">
            <label className="newsletter__checkbox-label">
              <input
                type="checkbox"
                className="newsletter__checkbox"
                checked={acceptedTerms}
                onChange={e => setAcceptedTerms(e.target.checked)}
                required
              />
              <span className="newsletter__checkbox-text">
                Aceito os{' '}
                <a href="/termos" target="_blank" className="newsletter__link">
                  termos e condições
                </a>
              </span>
            </label>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Newsletter

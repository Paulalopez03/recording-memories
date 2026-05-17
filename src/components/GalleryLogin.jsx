import React, { useState } from 'react'
import '../styles/Login.css'

const CORRECT_PASSWORD = 'K7mN2pQ9xL5vR8'

function GalleryLogin({ onLogin }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (password === CORRECT_PASSWORD) {
      onLogin(true)
    } else {
      setError('Contraseña incorrecta')
      setPassword('')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Galería</h1>
        <p className="login-subtitle">Acceso Privado</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError('')
            }}
            className="login-input"
            autoFocus
          />
          <button type="submit" className="login-button">Acceder</button>
          {error && <div className="login-error">{error}</div>}
        </form>
      </div>
    </div>
  )
}

export default GalleryLogin

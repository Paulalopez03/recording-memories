import React, { useEffect } from 'react'

function PhotoModal({ photo, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = photo.src
    link.download = `${photo.title}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-image-container">
          <img src={photo.src} alt={photo.title} className="modal-image" />
        </div>
        <div className="modal-info">
          <div className="modal-meta">
            <span className="modal-category">{photo.category}</span>
            <h2 className="modal-title">{photo.title}</h2>
          </div>
          <button className="modal-download" onClick={handleDownload}>Descargar</button>
        </div>
      </div>
    </div>
  )
}

export default PhotoModal

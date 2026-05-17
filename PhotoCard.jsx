import React from 'react'

function PhotoCard({ photo, index, onClick }) {
  return (
    <div className="photo-card">
      <div className="photo-wrapper" onClick={onClick}>
        <div className="photo-number">{String(index + 1).padStart(2, '0')}</div>
        <img
          src={photo.src}
          alt={photo.title}
          className="photo-image"
          loading="lazy"
        />
        <div className="photo-overlay">
          <div className="photo-overlay-content">
            <span className="photo-category">{photo.category}</span>
            <p className="photo-meta">{photo.date.toLocaleDateString('es-ES')}</p>
          </div>
        </div>
      </div>
      <div className="photo-info">
        <h3 className="photo-title">{photo.title}</h3>
        <p className="photo-desc">{photo.category} • {photo.date.getFullYear()}</p>
      </div>
    </div>
  )
}

export default PhotoCard

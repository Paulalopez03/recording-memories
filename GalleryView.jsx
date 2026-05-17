import React, { useState, useMemo } from 'react'
import '../styles/Gallery.css'
import PhotoCard from './PhotoCard'
import PhotoModal from './PhotoModal'

function GalleryView({ photos, onLogout }) {
  const [currentFilter, setCurrentFilter] = useState('all')
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const categories = useMemo(() => {
    const cats = new Set(photos.map(p => p.category))
    return ['all', ...Array.from(cats).sort()]
  }, [photos])

  const filteredPhotos = useMemo(() => {
    if (currentFilter === 'all') {
      return photos
    }
    return photos.filter(p => p.category === currentFilter)
  }, [photos, currentFilter])

  return (
    <div className="gallery-wrapper">
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-header-left">
            <h1 className="gallery-title">Fotos</h1>
            <p className="gallery-subtitle">Colección privada</p>
            <div className="header-underline"></div>
          </div>
          <button className="logout-btn" onClick={onLogout}>Salir</button>
        </div>

        {/* Filtros */}
        <div className="filters-section">
          <p className="filters-label">Categoría</p>
          <div className="filters-wrapper">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-button ${currentFilter === cat ? 'active' : ''}`}
                onClick={() => setCurrentFilter(cat)}
              >
                {cat === 'all' ? 'Todas' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredPhotos.length > 0 ? (
          <div className="gallery-grid">
            {filteredPhotos.map((photo, index) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                index={index}
                onClick={() => setSelectedPhoto(photo)}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📸</div>
            <p>No hay fotos en esta categoría</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  )
}

export default GalleryView

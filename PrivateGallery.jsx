import React, { useState, useEffect } from 'react';
import './PrivateGallery.css';

const PrivateGallery = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [photos, setPhotos] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  const CORRECT_PASSWORD = 'K7mN2pQ9xL5vR8';

  // Simular carga de fotos desde carpetas
  useEffect(() => {
    if (isAuthenticated) {
      // Estructura de datos simulada - en producción, esto vendría del servidor
      const mockPhotos = [
        // Amigos
        { id: 1, src: '/fotos/Amigos/photo1.jpg', category: 'Amigos', date: new Date('2024-05-15') },
        { id: 2, src: '/fotos/Amigos/photo2.jpg', category: 'Amigos', date: new Date('2024-05-14') },
        { id: 3, src: '/fotos/Amigos/photo3.jpg', category: 'Amigos', date: new Date('2024-05-13') },
        // Naturaleza
        { id: 4, src: '/fotos/Naturaleza/photo4.jpg', category: 'Naturaleza', date: new Date('2024-05-12') },
        { id: 5, src: '/fotos/Naturaleza/photo5.jpg', category: 'Naturaleza', date: new Date('2024-05-11') },
        { id: 6, src: '/fotos/Naturaleza/photo6.jpg', category: 'Naturaleza', date: new Date('2024-05-10') },
      ];

      // Ordenar por fecha (más recientes primero)
      mockPhotos.sort((a, b) => b.date - a.date);
      setPhotos(mockPhotos);
      setLoading(false);
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Contraseña incorrecta');
      setPassword('');
    }
  };

  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeFilter);

  const categories = ['all', ...new Set(photos.map(p => p.category))];

  const handleDownload = (src, id) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = `photo-${id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Galería Privada</h1>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <button type="submit" className="login-button">Acceder</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-wrapper">
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <h1 className="gallery-title">Fotos</h1>
          <div className="header-line"></div>
        </div>

        {/* Filtros */}
        <div className="filters-section">
          <div className="filters-wrapper">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-button ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                <span className="filter-text">
                  {category === 'all' ? 'Todas' : category}
                </span>
              </button>
            ))}
          </div>
          <div className="filter-divider"></div>
        </div>

        {/* Grid de fotos */}
        {loading ? (
          <div className="loading">Cargando...</div>
        ) : (
          <div className="photos-grid">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="photo-item"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="photo-number">{String(index + 1).padStart(3, '0')}</div>
                <img src={photo.src} alt={`Photo ${photo.id}`} className="photo-image" />
                <div className="photo-overlay">
                  <span className="photo-category">{photo.category}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredPhotos.length === 0 && !loading && (
          <div className="empty-state">
            <p>No hay fotos en esta categoría</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div className="modal-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPhoto(null)}>✕</button>
            <img src={selectedPhoto.src} alt="Foto ampliada" className="modal-image" />
            <div className="modal-info">
              <span className="modal-category">{selectedPhoto.category}</span>
              <button 
                className="modal-download"
                onClick={() => handleDownload(selectedPhoto.src, selectedPhoto.id)}
              >
                Descargar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivateGallery;

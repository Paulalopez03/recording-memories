// Contraseña correcta
const CORRECT_PASSWORD = 'K7mN2pQ9xL5vR8';

// Estado
let isAuthenticated = false;
let currentFilter = 'all';
let selectedPhoto = null;
let photos = [];

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  renderLogin();
});

// ============ LOGIN ============
function renderLogin() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="login-container">
      <div class="login-card">
        <h1 class="login-title">Galería</h1>
        <p class="login-subtitle">Acceso Privado</p>
        <form class="login-form" id="loginForm">
          <input 
            type="password" 
            id="passwordInput"
            placeholder="Contraseña" 
            class="login-input"
            autocomplete="off"
            spellcheck="false"
          />
          <button type="submit" class="login-button">Acceder</button>
          <div id="errorMsg"></div>
        </form>
      </div>
    </div>
  `;

  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('passwordInput').value;
    
    if (password === CORRECT_PASSWORD) {
      isAuthenticated = true;
      loadPhotos();
      renderGallery();
    } else {
      document.getElementById('errorMsg').innerHTML = '<div class="login-error">Contraseña incorrecta</div>';
      document.getElementById('passwordInput').value = '';
      document.getElementById('passwordInput').focus();
    }
  });

  document.getElementById('passwordInput').focus();
}

// ============ GALERIA ============
function loadPhotos() {
  // EDITA ESTO CON TUS FOTOS
  photos = [
    // Amigos
    {
      id: 1,
      src: '../fotos/Amigos/photo1.jpg',
      category: 'Amigos',
      title: 'Momento',
      date: new Date('2024-05-20'),
      width: 1200,
      height: 800
    },
    {
      id: 2,
      src: '../fotos/Amigos/photo2.jpg',
      category: 'Amigos',
      title: 'Sonrisa',
      date: new Date('2024-05-19'),
      width: 1200,
      height: 800
    },
    {
      id: 3,
      src: '../fotos/Amigos/photo3.jpg',
      category: 'Amigos',
      title: 'Encuentro',
      date: new Date('2024-05-18'),
      width: 1200,
      height: 800
    },

    // Naturaleza
    {
      id: 4,
      src: '../fotos/Naturaleza/photo1.jpg',
      category: 'Naturaleza',
      title: 'Bosque',
      date: new Date('2024-05-17'),
      width: 1200,
      height: 800
    },
    {
      id: 5,
      src: '../fotos/Naturaleza/photo2.jpg',
      category: 'Naturaleza',
      title: 'Flores',
      date: new Date('2024-05-16'),
      width: 1200,
      height: 800
    },
    {
      id: 6,
      src: '../fotos/Naturaleza/photo3.jpg',
      category: 'Naturaleza',
      title: 'Luz natural',
      date: new Date('2024-05-15'),
      width: 1200,
      height: 800
    },

    // AGREGA MÁS AQUÍ
    // { id: 7, src: '../fotos/Viajes/photo1.jpg', category: 'Viajes', title: 'Playa', date: new Date('2024-05-14'), width: 1200, height: 800 },
  ];

  // Ordenar por fecha (más recientes primero)
  photos.sort((a, b) => b.date - a.date);
}

function renderGallery() {
  const app = document.getElementById('app');
  
  const categories = ['all', ...new Set(photos.map(p => p.category))];
  const filteredPhotos = currentFilter === 'all' 
    ? photos 
    : photos.filter(p => p.category === currentFilter);

  app.innerHTML = `
    <div class="gallery-wrapper">
      <div class="gallery-container">
        <!-- Header -->
        <div class="gallery-header">
          <div class="gallery-header-left">
            <h1 class="gallery-title">Fotos</h1>
            <p class="gallery-subtitle">Colección privada</p>
            <div class="header-underline"></div>
          </div>
          <button class="logout-btn" onclick="logout()">Salir</button>
        </div>

        <!-- Filtros -->
        <div class="filters-section">
          <p class="filters-label">Categoría</p>
          <div class="filters-wrapper" id="filtersContainer">
            ${categories.map(cat => `
              <button 
                class="filter-button ${currentFilter === cat ? 'active' : ''}"
                onclick="filterPhotos('${cat}')"
              >
                ${cat === 'all' ? 'Todas' : cat}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Grid -->
        <div class="gallery-grid" id="photosGrid">
          ${filteredPhotos.map((photo, index) => `
            <div class="photo-card">
              <div class="photo-wrapper" onclick="openModal(${photo.id})">
                <div class="photo-number">${String(index + 1).padStart(2, '0')}</div>
                <img 
                  src="${photo.src}" 
                  alt="${photo.title}" 
                  class="photo-image"
                  loading="lazy"
                  onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect fill=%22%23f0f0f0%22 width=%22400%22 height=%22300%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22sans-serif%22 font-size=%2214%22 fill=%22%23999%22>Imagen no disponible</text></svg>'"
                />
                <div class="photo-overlay">
                  <div class="photo-overlay-content">
                    <span class="photo-category">${photo.category}</span>
                    <p class="photo-meta">${photo.date.toLocaleDateString('es-ES')}</p>
                  </div>
                </div>
              </div>
              <div class="photo-info">
                <h3 class="photo-title">${photo.title}</h3>
                <p class="photo-desc">${photo.category} • ${photo.date.getFullYear()}</p>
              </div>
            </div>
          `).join('')}
        </div>

        ${filteredPhotos.length === 0 ? `
          <div class="empty-state">
            <div class="empty-icon">📸</div>
            <p>No hay fotos en esta categoría</p>
          </div>
        ` : ''}
      </div>
    </div>

    <!-- Modal -->
    <div class="modal-overlay" id="modal">
      <div class="modal-content">
        <button class="modal-close" onclick="closeModal()">✕</button>
        <div class="modal-image-container">
          <img id="modalImage" src="" alt="Foto ampliada" class="modal-image">
        </div>
        <div class="modal-info">
          <div class="modal-meta">
            <span class="modal-category" id="modalCategory"></span>
            <h2 class="modal-title" id="modalTitle"></h2>
          </div>
          <button class="modal-download" onclick="downloadPhoto()">Descargar</button>
        </div>
      </div>
    </div>
  `;

  // Agregar listeners para cerrar modal
  document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal')) {
      closeModal();
    }
  });
}

function filterPhotos(category) {
  currentFilter = category;
  renderGallery();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openModal(photoId) {
  const photo = photos.find(p => p.id === photoId);
  if (!photo) return;

  selectedPhoto = photo;
  const modal = document.getElementById('modal');
  
  document.getElementById('modalImage').src = photo.src;
  document.getElementById('modalCategory').textContent = photo.category;
  document.getElementById('modalTitle').textContent = photo.title;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  selectedPhoto = null;
  document.body.style.overflow = 'auto';
}

function downloadPhoto() {
  if (!selectedPhoto) return;

  const link = document.createElement('a');
  link.href = selectedPhoto.src;
  link.download = `${selectedPhoto.title}-${selectedPhoto.id}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function logout() {
  if (confirm('¿Salir de la galería?')) {
    isAuthenticated = false;
    currentFilter = 'all';
    selectedPhoto = null;
    photos = [];
    renderLogin();
  }
}

// Atajos de teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

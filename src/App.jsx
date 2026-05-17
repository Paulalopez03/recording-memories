import React, { useState, useEffect } from 'react'
import './styles/Gallery.css'
import './index.css'
import GalleryLogin from './components/GalleryLogin'
import GalleryView from './components/GalleryView'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    if (isAuthenticated) {
      loadPhotos()
    }
  }, [isAuthenticated])

  const loadPhotos = async () => {
    try {
      // Importar dinámicamente todas las fotos de las carpetas
      const amigosModules = import.meta.glob('/src/fotos/Amigos/*.{jpg,jpeg,png,webp}')
      const naturalezaModules = import.meta.glob('/src/fotos/Naturaleza/*.{jpg,jpeg,png,webp}')

      const photosArray = []
      let id = 1

      // Procesar fotos de Amigos
      for (const path in amigosModules) {
        const filename = path.split('/').pop().split('.')[0]
        photosArray.push({
          id: id++,
          src: path.replace('/src', ''),
          category: 'Amigos',
          title: filename.replace(/-/g, ' '),
          date: new Date('2024-05-20'),
        })
      }

      // Procesar fotos de Naturaleza
      for (const path in naturalezaModules) {
        const filename = path.split('/').pop().split('.')[0]
        photosArray.push({
          id: id++,
          src: path.replace('/src', ''),
          category: 'Naturaleza',
          title: filename.replace(/-/g, ' '),
          date: new Date('2024-05-15'),
        })
      }

      // Ordenar por fecha
      photosArray.sort((a, b) => b.date - a.date)
      setPhotos(photosArray)
    } catch (error) {
      console.error('Error loading photos:', error)
    }
  }

  if (!isAuthenticated) {
    return <GalleryLogin onLogin={setIsAuthenticated} />
  }

  return <GalleryView photos={photos} onLogout={() => setIsAuthenticated(false)} />
}

export default App
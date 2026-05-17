# 📸 Galería Privada - Instrucciones de Instalación

## Paso 1: Crear el repo nuevo en GitHub

1. Ve a https://github.com/new
2. Nombre del repo: `fotos-privadas`
3. Descripción: "Galería privada de fotos"
4. Selecciona **Public** (GitHub Pages necesita repos públicos)
5. Crea el repo

## Paso 2: Clonar y estructura de carpetas

```bash
git clone https://github.com/tuusername/fotos-privadas.git
cd fotos-privadas
```

Crea esta estructura:

```
fotos-privadas/
├── src/
│   ├── components/
│   │   ├── PrivateGallery.jsx      (archivo que te di)
│   │   └── PrivateGallery.css      (archivo que te di)
│   ├── App.jsx
│   └── index.css
├── public/
│   ├── fotos/
│   │   ├── Amigos/                 (crea estas carpetas)
│   │   │   ├── photo1.jpg
│   │   │   ├── photo2.jpg
│   │   │   └── ...
│   │   └── Naturaleza/
│   │       ├── photo1.jpg
│   │       ├── photo2.jpg
│   │       └── ...
│   └── index.html
├── package.json
└── robots.txt                       (importante: ver abajo)
```

## Paso 3: Setup del proyecto

Si aún no tienes un proyecto React:

```bash
npm create vite@latest . -- --template react
npm install
```

Si ya lo tienes, salta este paso.

## Paso 4: Copiar los archivos

1. Copia el archivo `PrivateGallery.jsx` que te di a: `src/components/PrivateGallery.jsx`
2. Copia el archivo `PrivateGallery.css` que te di a: `src/components/PrivateGallery.css`

## Paso 5: Actualizar App.jsx

```jsx
import React from 'react'
import PrivateGallery from './components/PrivateGallery'
import './App.css'

function App() {
  return (
    <div>
      <PrivateGallery />
    </div>
  )
}

export default App
```

## Paso 6: Crear robots.txt

En la carpeta `public/`, crea un archivo `robots.txt`:

```
User-agent: *
Disallow: /
```

Esto le dice a Google que NO indexe nada de esta web.

## Paso 7: Agregar fotos

1. Crea las carpetas en `public/fotos/`:
   - `public/fotos/Amigos/`
   - `public/fotos/Naturaleza/`

2. Sube tus fotos a cada carpeta

3. **Importante**: Las fotos deben estar en formato JPG/PNG. Asegúrate de que el peso no sea excesivo (máximo 5MB por foto)

## Paso 8: Actualizar package.json

Agrega esto en `package.json`:

```json
{
  "name": "fotos-privadas",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.0.0",
    "gh-pages": "^5.0.0"
  }
}
```

Luego instala:

```bash
npm install
npm install --save-dev gh-pages
```

## Paso 9: Configurar Vite para GitHub Pages

En la raíz del proyecto, crea `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

## Paso 10: Deploy a GitHub Pages

1. En tu repo en GitHub, ve a **Settings → Pages**
2. Source: selecciona **Deploy from a branch**
3. Branch: **gh-pages** (se crea automáticamente)
4. Directory: **/root**

Luego en tu terminal:

```bash
npm run build
npm run deploy
```

O manualmente:

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

GitHub Pages se actualizará automáticamente. Tu galería estará en:

```
https://tuusername.github.io/fotos-privadas/
```

## Cambiar la contraseña

En `src/components/PrivateGallery.jsx`, busca esta línea:

```javascript
const CORRECT_PASSWORD = 'K7mN2pQ9xL5vR8';
```

Reemplaza por la contraseña que quieras. Luego:

```bash
npm run build
npm run deploy
```

## Agregar más categorías

En el mismo archivo, busca la sección de `mockPhotos` y agrega más categorías:

```javascript
const mockPhotos = [
  // Amigos
  { id: 1, src: '/fotos/Amigos/photo1.jpg', category: 'Amigos', date: new Date('2024-05-15') },
  // Naturaleza
  { id: 2, src: '/fotos/Naturaleza/photo1.jpg', category: 'Naturaleza', date: new Date('2024-05-14') },
  // Viajes (nueva categoría)
  { id: 3, src: '/fotos/Viajes/photo1.jpg', category: 'Viajes', date: new Date('2024-05-13') },
];
```

Y crea la carpeta correspondiente en `public/fotos/Viajes/`.

## Notas importantes

- ✅ Responsive en móvil, tablet y desktop
- ✅ Contraseña fuerte
- ✅ robots.txt para que Google no indexe
- ✅ Grid automático con números de índice
- ✅ Filtros por categoría
- ✅ Modal para ver en grande
- ✅ Descarga individual de fotos
- ✅ Estilo minimalista profesional

¿Preguntas? Estoy aquí.

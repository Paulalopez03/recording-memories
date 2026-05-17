# 📸 Galería Privada - React + Vite (Automática)

## ¿Qué es esto?

Una galería que **lee automáticamente las fotos de las carpetas**. No tienes que listar cada foto manualmente.

## Estructura final

```
galeria-privada/
├── src/
│   ├── components/
│   │   ├── GalleryLogin.jsx
│   │   ├── GalleryView.jsx
│   │   ├── PhotoCard.jsx
│   │   └── PhotoModal.jsx
│   ├── styles/
│   │   ├── Login.css
│   │   └── Gallery.css
│   ├── fotos/
│   │   ├── Amigos/
│   │   │   ├── photo1.jpg
│   │   │   ├── photo2.jpg
│   │   │   └── ... (tus fotos)
│   │   └── Naturaleza/
│   │       ├── photo1.jpg
│   │       ├── photo2.jpg
│   │       └── ... (tus fotos)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── (assets estáticos si necesitas)
├── index.html
├── package.json
├── vite.config.js
└── robots.txt
```

## Paso a paso

### 1. Crear el proyecto

```bash
# Clona o crea un nuevo repo
git clone <tu-repo> galeria-privada
cd galeria-privada

# Instala dependencias
npm install
```

### 2. Copiar archivos

Copia estos archivos a sus ubicaciones:

```
package.json → raíz
vite.config.js → raíz
index.html → raíz
robots.txt → raíz

src/App.jsx
src/main.jsx
src/index.css
src/components/GalleryLogin.jsx
src/components/GalleryView.jsx
src/components/PhotoCard.jsx
src/components/PhotoModal.jsx
src/styles/Login.css
src/styles/Gallery.css
```

### 3. Crear carpetas de fotos

```bash
mkdir -p src/fotos/Amigos
mkdir -p src/fotos/Naturaleza
```

### 4. Agregar tus fotos

Mete tus fotos en:
- `src/fotos/Amigos/` (foto1.jpg, foto2.jpg, etc)
- `src/fotos/Naturaleza/` (photo1.jpg, photo2.jpg, etc)

**Las fotos se leen automáticamente.**

### 5. Cambiar contraseña (opcional)

En `src/components/GalleryLogin.jsx`:

```javascript
const CORRECT_PASSWORD = 'K7mN2pQ9xL5vR8'
```

Cámbialo por la que quieras.

### 6. Probar en local

```bash
npm run dev
```

Abre http://localhost:5173 en tu navegador.

### 7. Build y deploy

```bash
# Compilar
npm run build

# Sube a GitHub
git add .
git commit -m "Galería privada con React"
git push
```

## Configurar GitHub Pages

1. Ve a **Settings → Pages** en tu repo
2. Source: **Deploy from a branch**
3. Branch: **main** (o el que uses)
4. Espera a que GitHub compile

Tu galería estará en: `https://username.github.io/galeria-privada/`

## Agregar más categorías

1. Crea una carpeta en `src/fotos/MiCategoria/`
2. Mete tus fotos allí
3. **Listo.** Se detecta automáticamente.

Por ejemplo:
```
src/fotos/
├── Amigos/
├── Naturaleza/
├── Viajes/        ← Nueva carpeta
└── Clorotipia/    ← Nueva carpeta
```

No necesitas cambiar nada en el código.

## Cambiar el nombre de las fotos

Los títulos se generan automáticamente del nombre del archivo.

Ejemplo:
- `mi-foto.jpg` → "mi foto"
- `playa-amanecer.jpg` → "playa amanecer"
- `trees.jpg` → "trees"

Para cambiar, simplemente renombra el archivo.

## Notas importantes

✅ Lee automáticamente las carpetas
✅ Responsive (móvil, tablet, desktop)
✅ Contraseña con login
✅ Filtros por categoría (automáticos)
✅ Fotos ordenadas por fecha
✅ Modal bonito con descargas
✅ robots.txt para privacidad
✅ Tipografía profesional

## Troubleshooting

**Las fotos no aparecen:**
- Verifica que estén en `src/fotos/Categoria/`
- Los formatos soportados: jpg, jpeg, png, webp
- Rebuild: `npm run build`

**Error al instalar:**
- Asegúrate de tener Node.js instalado (`node --version`)
- Borra `node_modules` y `package-lock.json`, luego `npm install` de nuevo

**Contraseña no funciona:**
- Cambia `CORRECT_PASSWORD` en `GalleryLogin.jsx`
- Sin espacios extras

**Fotos se ven pixeladas:**
- Verifica que la resolución sea buena (mínimo 1200x800px)
- Comprime si son muy grandes (>5MB)

¿Listo? ¡Vamos! 🚀

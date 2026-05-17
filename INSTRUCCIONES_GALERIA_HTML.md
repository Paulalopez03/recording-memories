# 📸 Galería Privada - Instrucciones (HTML/CSS/JS Vanilla)

## Paso 1: Estructura de carpetas

En tu repo de GitHub, crea esta estructura:

```
tu-repo/
├── galeria/
│   ├── index.html      (archivo que te di)
│   ├── styles.css      (archivo que te di)
│   ├── script.js       (archivo que te di)
│   └── ...
├── fotos/
│   ├── Amigos/
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   └── ...
│   └── Naturaleza/
│       ├── photo1.jpg
│       ├── photo2.jpg
│       └── ...
├── robots.txt          (archivo que te di)
└── ... (rest of your portfolio)
```

## Paso 2: Copiar archivos

1. Copia `galeria.html` → `galeria/index.html`
2. Copia `styles.css` → `galeria/styles.css`
3. Copia `script.js` → `galeria/script.js`
4. Copia `robots.txt` → raíz de tu repo (donde está `index.html` del portfolio)

## Paso 3: Crear carpetas de fotos

En la raíz de tu repo, crea:
- `fotos/Amigos/` (mete aquí tus fotos de amigos)
- `fotos/Naturaleza/` (mete aquí tus fotos de naturaleza)

## Paso 4: Listar tus fotos en script.js

En `galeria/script.js`, busca esta parte:

```javascript
photos = [
  // Amigos
  { id: 1, src: '../fotos/Amigos/photo1.jpg', category: 'Amigos', date: new Date('2024-05-15') },
  { id: 2, src: '../fotos/Amigos/photo2.jpg', category: 'Amigos', date: new Date('2024-05-14') },
  // ...
];
```

Agrega todas tus fotos así:
- Para cada foto: `{ id: N, src: '../fotos/Categoria/foto.jpg', category: 'Categoria', date: new Date('YYYY-MM-DD') }`

Ejemplo completo:

```javascript
photos = [
  // Amigos
  { id: 1, src: '../fotos/Amigos/mi_foto1.jpg', category: 'Amigos', date: new Date('2024-05-20') },
  { id: 2, src: '../fotos/Amigos/mi_foto2.jpg', category: 'Amigos', date: new Date('2024-05-19') },
  { id: 3, src: '../fotos/Amigos/mi_foto3.jpg', category: 'Amigos', date: new Date('2024-05-18') },
  // Naturaleza
  { id: 4, src: '../fotos/Naturaleza/árbol.jpg', category: 'Naturaleza', date: new Date('2024-05-17') },
  { id: 5, src: '../fotos/Naturaleza/flores.jpg', category: 'Naturaleza', date: new Date('2024-05-16') },
  { id: 6, src: '../fotos/Naturaleza/montaña.jpg', category: 'Naturaleza', date: new Date('2024-05-15') },
];
```

## Paso 5: Cambiar contraseña

En `galeria/script.js`, busca:

```javascript
const CORRECT_PASSWORD = 'K7mN2pQ9xL5vR8';
```

Cámbialo por la que quieras.

## Paso 6: Agregar más categorías (opcional)

Si quieres más categorías (ej: Viajes, Clorotipia), agrega fotos con esa categoría:

```javascript
photos = [
  // ...fotos existentes...
  // Viajes
  { id: 7, src: '../fotos/Viajes/playa.jpg', category: 'Viajes', date: new Date('2024-05-14') },
  { id: 8, src: '../fotos/Viajes/montaña.jpg', category: 'Viajes', date: new Date('2024-05-13') },
];
```

Los filtros se generan automáticamente.

## Paso 7: Push a GitHub

```bash
git add .
git commit -m "Agregar galería privada"
git push
```

## Acceso

Tu galería estará en:

```
https://tuportfolio.es/galeria/
```

O si usas GitHub Pages con username:

```
https://username.github.io/nombre-repo/galeria/
```

## Notas importantes

✅ HTML/CSS/JS vanilla (sin dependencias)
✅ Responsive (móvil, tablet, desktop)
✅ Contraseña con error handling
✅ Filtros automáticos por categoría
✅ Fotos ordenadas por fecha (últimas primero)
✅ Modal para ver en grande
✅ Descargar fotos individuales
✅ robots.txt para que Google no indexe
✅ Minimalista y profesional

## Troubleshooting

**Las fotos no aparecen:**
- Verifica que el path en `script.js` sea correcto
- Abre consola (F12) y busca errores 404
- Las fotos deben estar en `../fotos/Categoria/`

**La contraseña no funciona:**
- Asegúrate de haber cambiado `CORRECT_PASSWORD` correctamente
- Que no haya espacios extras

**Modal no abre:**
- Limpiar caché del navegador (Ctrl+Shift+Delete)

¿Preguntas? Pregunta.

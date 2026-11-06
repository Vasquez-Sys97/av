# Web personal — Alexis Vásquez

Página de una sola vista (hub personal) en HTML, CSS y JavaScript estático. Sin Node.js, sin backend, sin base de datos.
Diseño: **Dark Editorial** (carbón + marfil, acento borgoña `#B3243A`, foto con fundido).

## Ver la página en local

Desde la carpeta del proyecto:

```bash
python -m http.server 8000
```

Abrir <http://localhost:8000>. También se puede abrir `index.html` con doble clic, pero un servidor local es lo recomendable.

## Estructura

```
index.html              contenido, metadatos SEO y vista previa social
css/styles.css          tokens de diseño (colores, tipografías) y estilos
js/site.config.js       ← ENLACES de redes (editar aquí)
js/main.js              renderiza los enlaces, año del footer, animaciones
assets/img/             fotografía optimizada e imagen para compartir
favicon.svg             ícono provisional (monograma AV)
```

## Qué editar

| Quiero cambiar… | Dónde |
|---|---|
| Un enlace social o su orden | `js/site.config.js` (el que tiene `primary: true` es el destacado y el destino del botón principal) |
| Textos (titular, descripción, identidad, frase del footer) | `index.html` |
| Colores | variables `:root` al inicio de `css/styles.css` |
| Fotografía | reemplazar `assets/img/alexis-1024.jpg` y `alexis-640.jpg` (cuadradas; el rostro debe quedar en el centro-superior) |
| Imagen al compartir en redes | `assets/img/og-image.jpg` (1200×630) |

Nota: si se editan los enlaces en `site.config.js`, actualizar también el enlace de respaldo del bloque `<noscript>` en `index.html`.

## Fotografía

- Original (intacto, guardado fuera del repositorio): 1024×1024, 508 KB.
- Copias optimizadas en `assets/img/`: 1024 px (72 KB) y 640 px (31 KB), calidad JPEG 82.
- El rostro queda en el tercio superior; el recorte de escritorio (4:5) y de móvil (1:1) se hace con CSS (`object-position`), sin tocar el archivo.

## Antes de publicar

1. **Dominio:** en `index.html`, cambiar `og:image` y `twitter:image` a URLs absolutas (por ejemplo `https://tudominio.com/assets/img/og-image.jpg`) y agregar `og:url`. Sin esto, las vistas previas al compartir no cargan la imagen.
2. **Fuentes:** se cargan desde Google Fonts (Instrument Serif e Inter). Para evitar la solicitud externa y mejorar la privacidad, se pueden descargar y servir desde `assets/fonts/`.
3. **Foto en pantallas muy nítidas:** la fuente es de 1024 px. En monitores de alta densidad (retina) puede verse levemente suave; una foto original de mayor resolución lo resolvería.
4. **Verificar los tres enlaces** a mano (ver abajo).

## Publicar

Es un sitio estático: sirve cualquier alojamiento estático.

- **Vercel:** subir la carpeta a un repositorio de GitHub e importarlo en Vercel (Framework Preset: *Other*, sin comando de build, directorio de salida `.`). O arrastrar la carpeta en el panel de Vercel.
- **Alternativas:** GitHub Pages, Netlify, Cloudflare Pages.

No se ha publicado nada. Los enlaces solo se harán públicos cuando se despliegue el sitio.

## Estado de verificación (2026-11-05)

Probado en navegador (Chromium del panel de la app):

- Sin errores en consola; HTML, CSS, JS, imágenes y fuentes cargan.
- Sin desplazamiento horizontal en 1440 px y 390 px; todos los enlaces miden ≥ 44 px de alto.
- Orden de teclado: «Ir a las conexiones» → botón LinkedIn → «Ver todas las redes» → LinkedIn, Instagram, Facebook; foco visible (contorno marfil de 2 px).
- Contraste (WCAG, calculado sobre los colores de diseño): texto 16,6:1, texto secundario 7,7:1, acento en texto 6,0:1, texto sobre botón 5,6:1 (AA ≥ 4,5).
- Peso de la carga inicial sin fuentes: ≈ 88 KB.
- Enlaces: Facebook (se resuelve a un perfil de nombre Alexis Vasquez) e Instagram (perfil @alexisvasquez96) cargan. LinkedIn muestra el muro de registro a visitantes sin sesión: no se pudo confirmar el contenido del perfil.

No probado: `prefers-reduced-motion` en ejecución (la regla CSS existe), lector de pantalla, Safari/Firefox, ni la vista previa social en las plataformas reales (requiere dominio publicado).

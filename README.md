# Portfolio Marcos Pozo

Portfolio profesional creado con **Astro** y **TailwindCSS v3**.

## Stack

- Astro 4
- TailwindCSS 3
- PostCSS
- Autoprefixer
- JavaScript vanilla para el mini juego Deploy Lab

## Comandos

Instalar dependencias:

```bash
npm install
```

Arrancar en local:

```bash
npm run dev
```

Compilar para producción:

```bash
npm run build
```

Previsualizar la versión compilada:

```bash
npm run preview
```

## Estructura

```txt
src/
├── components/
├── layouts/
├── pages/
└── styles/

public/
├── docs/
└── images/
```

## Qué cambiar antes de publicar

1. Sustituir `public/docs/cv-marcos-pozo.pdf` por tu CV real.
2. Cambiar el enlace de LinkedIn en `src/components/Contact.astro`.
3. Cambiar o añadir enlaces a repositorios en `src/components/Projects.astro`.
4. Sustituir los SVG de `public/images/` por capturas reales si quieres.

## Despliegue

El sitio genera una carpeta `dist/` al ejecutar:

```bash
npm run build
```

Esa carpeta se puede publicar en Netlify, Vercel, GitHub Pages o cualquier hosting estático.

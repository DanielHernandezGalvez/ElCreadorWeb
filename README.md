# El Creador Web

Sitio web oficial de **El Creador Web**, un proyecto enfocado en ofrecer servicios de diseño y desarrollo web para negocios y profesionales.

El sitio presenta los servicios disponibles, proyectos realizados, información sobre el proceso de trabajo, precios, preguntas frecuentes y diferentes formas de contacto.

Además de funcionar como sitio comercial, el proyecto está diseñado como una plataforma de contenidos mediante la cual cada proyecto desarrollado puede convertirse posteriormente en un **caso de estudio**, acompañado de un artículo y contenido audiovisual para YouTube.

## 🚀 Características

- Landing page moderna y responsive.
- Diseño enfocado en conversión.
- Sección de servicios y precios.
- Portfolio de proyectos.
- Casos de estudio.
- Blog técnico y educativo.
- Integración futura con contenido de YouTube.
- SEO optimizado.
- Arquitectura preparada para generación de páginas estáticas.
- Formulario de contacto preparado para futuras automatizaciones.
- Diseño accesible y compatible con `prefers-reduced-motion`.
- Despliegue automatizado mediante GitHub Actions.

## 🛠️ Tecnologías

- **Astro** — Framework principal.
- **TypeScript** — Tipado y desarrollo más seguro.
- **Tailwind CSS** — Sistema de estilos.
- **Astro Content Collections** — Gestión del blog y casos de estudio.
- **Git & GitHub** — Control de versiones.
- **GitHub Actions** — CI/CD.
- **Hostinger** — Hosting de producción.

## 🏗️ Arquitectura

El proyecto utiliza una arquitectura **Astro-first**, priorizando la generación de contenido estático para obtener un sitio rápido, ligero y optimizado para SEO.

```text
Astro + TypeScript + Tailwind
            │
            ▼
       npm run build
            │
            ▼
        dist/
            │
            ▼
      GitHub Actions
            │
            ▼
        Hostinger
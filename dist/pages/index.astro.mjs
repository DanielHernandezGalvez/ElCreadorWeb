import { a as createAstro, c as createComponent, b as addAttribute, d as renderHead, e as renderSlot, r as renderTemplate, m as maybeRenderHead, f as renderScript, g as renderComponent } from '../chunks/astro/server_xhueuU_4.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.elcreadorweb.mx/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "El Creador Web \xB7 Agencia Digital en M\xE9xico",
    description = "Creamos landing pages, tiendas online y sitios corporativos que convierten."
  } = Astro2.props;
  return renderTemplate`<html lang="es-MX"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body class="bg-[#0E1620] text-[#FAFBFC] antialiased"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/layouts/BaseLayout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed inset-x-0 top-0 z-50" data-astro-cid-3ef6ksr2> <div class="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4" data-astro-cid-3ef6ksr2> <nav class="relative rounded-3xl border border-white/10 bg-[#0E1620]/80 px-5 py-3 backdrop-blur-md md:rounded-full" aria-label="Navegación principal" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between" data-astro-cid-3ef6ksr2> <img src="/images/logo.png" alt="El Creador Web" class="h-8 w-auto" data-astro-cid-3ef6ksr2> <div class="hidden items-center gap-8 md:flex" data-astro-cid-3ef6ksr2> <a href="/#servicios" class="text-sm text-white/70 transition hover:text-white" data-astro-cid-3ef6ksr2>
Servicios
</a> <a href="/#proyectos" class="text-sm text-white/70 transition hover:text-white" data-astro-cid-3ef6ksr2>
Proyectos
</a> <a href="/blog/" class="text-sm text-white/70 transition hover:text-white" data-astro-cid-3ef6ksr2>
Blog
</a> <a href="/sobre-mi/" class="text-sm text-white/70 transition hover:text-white" data-astro-cid-3ef6ksr2>
Sobre mí
</a> <a href="/contacto/" class="rounded-full bg-[#E7D117] px-5 py-2.5 text-sm font-semibold text-[#0E1620] transition hover:bg-[#F3DE4A]" data-astro-cid-3ef6ksr2>
Contactar
</a> </div> <button class="menu-toggle flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#E7D117] hover:text-[#E7D117] md:hidden" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menú de navegación" data-menu-toggle data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> </button> </div> <div id="mobile-menu" class="mobile-menu grid md:hidden" data-mobile-menu data-astro-cid-3ef6ksr2> <div class="overflow-hidden" data-astro-cid-3ef6ksr2> <div class="border-t border-white/10 pb-2 pt-4 mt-4" data-astro-cid-3ef6ksr2> <div class="flex flex-col gap-1" data-astro-cid-3ef6ksr2> <a href="/#servicios" class="mobile-link" data-astro-cid-3ef6ksr2>Servicios</a> <a href="/#proyectos" class="mobile-link" data-astro-cid-3ef6ksr2>Proyectos</a> <a href="/blog/" class="mobile-link" data-astro-cid-3ef6ksr2>Blog</a> <a href="/sobre-mi/" class="mobile-link" data-astro-cid-3ef6ksr2>Sobre mí</a> <a href="/contacto/" class="mt-3 rounded-full bg-[#E7D117] px-5 py-3 text-center text-sm font-semibold text-[#0E1620] transition hover:bg-[#F3DE4A]" data-astro-cid-3ef6ksr2>Contactar</a> </div> </div> </div> </div> </nav> </div> </header>  ${renderScript($$result, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0E1620] pt-10" data-astro-cid-ewxirvlt> <!-- Fondo --> <div class="absolute inset-0 opacity-40" aria-hidden="true" data-astro-cid-ewxirvlt> <div class="absolute inset-0" style="
        background-image:
          linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
        background-size: 60px 60px;
      " data-astro-cid-ewxirvlt></div> </div> <!-- Resplandor --> <div class="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[#E7D117]/10 blur-3xl" aria-hidden="true" data-astro-cid-ewxirvlt></div> <div class="hero-scene absolute inset-0 overflow-hidden" data-hero-scene aria-hidden="true" data-astro-cid-ewxirvlt> <div class="float-ring left-[-5%] top-[5%] h-95 w-95" data-parallax data-astro-cid-ewxirvlt></div> <div class="float-ring bottom-[10%] right-[-3%] h-70 w-70" data-parallax data-astro-cid-ewxirvlt></div> <div class="float-ring right-[15%] top-[20%] h-45 w-45" data-parallax data-astro-cid-ewxirvlt></div> <div class="float-square left-[20%] top-[15%] h-20 w-20" data-parallax data-rotate="15" data-astro-cid-ewxirvlt></div> <div class="float-square bottom-[25%] left-[10%] h-12.5 w-12.5" data-parallax data-rotate="45" data-astro-cid-ewxirvlt></div> <div class="float-square right-[25%] top-[60%] h-15 w-15" data-parallax data-rotate="30" data-astro-cid-ewxirvlt></div> <div class="float-dot left-[40%] top-[30%] h-2 w-2" data-parallax data-astro-cid-ewxirvlt></div> <div class="float-dot bottom-[35%] right-[15%] h-3 w-3" data-parallax data-astro-cid-ewxirvlt></div> <div class="float-dot left-[25%] top-[70%] h-1.5 w-1.5" data-parallax data-astro-cid-ewxirvlt></div> <div class="float-dot right-[35%] top-[10%] h-2.5 w-2.5" data-parallax data-astro-cid-ewxirvlt></div> <div class="particle left-[10%] top-[20%] h-30 w-30" data-astro-cid-ewxirvlt></div> <div class="particle bottom-[30%] right-[8%] h-20 w-20 [animation-delay:2s]" data-astro-cid-ewxirvlt></div> <div class="particle left-[70%] top-[50%] h-37.5 w-37.5 [animation-delay:4s]" data-astro-cid-ewxirvlt></div> </div> <div class="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-32 text-center" data-astro-cid-ewxirvlt> <div class="mx-auto max-w-4xl" data-astro-cid-ewxirvlt> <div class="mb-6 inline-flex items-center rounded-full border border-[#E7D117]/30 bg-[#E7D117]/5 px-4 py-2 text-sm text-[#F5E98A]" data-astro-cid-ewxirvlt> <span class="mr-2 h-2 w-2 rounded-full bg-[#E7D117]" data-astro-cid-ewxirvlt></span>
Sistemas especializados en conversión
</div> <h1 class="mx-auto max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl" data-astro-cid-ewxirvlt>
Diseñamos el
<span class="text-[#E7D117]" data-astro-cid-ewxirvlt> futuro digital</span>
de tu negocio
</h1> <p class="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl" data-astro-cid-ewxirvlt>
Landing pages, tiendas online y sitios corporativos que no solo
        se ven bien, generan resultados.
</p> <div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row" data-astro-cid-ewxirvlt> <a href="#servicios" class="rounded-full bg-[#E7D117] px-7 py-3.5 text-center font-semibold text-[#0E1620] transition hover:bg-[#F3DE4A]" data-astro-cid-ewxirvlt>
Ver servicios
</a> <a href="#proyectos" class="rounded-full border border-[#E7D117]/50 px-7 py-3.5 text-center font-semibold text-[#E7D117] transition hover:bg-[#E7D117]/10" data-astro-cid-ewxirvlt>
Ver proyectos
</a> </div> <div class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/50" data-astro-cid-ewxirvlt> <span data-astro-cid-ewxirvlt>✓ Sin complejidades</span> <span data-astro-cid-ewxirvlt>✓ Proceso claro</span> <span data-astro-cid-ewxirvlt>✓ Diseño personalizado</span> <span data-astro-cid-ewxirvlt>✓ Soporte</span> </div> </div> </div> </section>  ${renderScript($$result, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/home/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/home/Hero.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      number: "01",
      title: "Landing Page",
      description: "Una p\xE1gina enfocada en presentar tu negocio, servicio u oferta y convertir visitantes en clientes.",
      price: "Desde $3,800 MXN",
      features: [
        "Dise\xF1o personalizado",
        "Dise\xF1o responsive",
        "Optimizaci\xF3n SEO b\xE1sica",
        "Formulario de contacto"
      ]
    },
    {
      number: "02",
      title: "Sitio Corporativo",
      description: "Una presencia digital profesional para empresas que necesitan comunicar sus servicios, experiencia y propuesta de valor.",
      price: "Desde $5,500 MXN",
      features: [
        "Hasta 5 p\xE1ginas",
        "Dise\xF1o personalizado",
        "Responsive",
        "SEO b\xE1sico"
      ]
    },
    {
      number: "03",
      title: "Ecommerce",
      description: "Tiendas online dise\xF1adas para mostrar tus productos y facilitar el proceso de compra de tus clientes.",
      price: "Desde $7,000 MXN",
      features: [
        "Cat\xE1logo de productos",
        "Carrito de compras",
        "Integraci\xF3n de pagos",
        "Dise\xF1o responsive"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="servicios" class="bg-[#FAFBFC] py-24 text-[#0E1620]"> <div class="mx-auto max-w-7xl px-6"> <!-- Encabezado --> <div class="max-w-2xl mx-auto"> <!-- Etiqueta centrada --> <span class="mx-auto flex w-fit rounded-full border border-[#E7D117] bg-[#E7D117]/10 px-4 py-2 text-center text-sm font-medium text-[#0E1620]">
Servicios
</span> <h2 class="mt-6 text-4xl font-bold tracking-tight md:text-5xl text-center">
Soluciones digitales
<span class="text-[#C5A900]"> pensadas para crecer</span> </h2> <p class="mt-6 text-lg leading-8 text-[#0E1620]/60 text-center">
Desarrollo sitios web profesionales, rápidos y enfocados en
        ayudarte a conseguir resultados.
</p> </div> <!-- Cards --> <div class="mt-14 grid gap-6 lg:grid-cols-3"> ${services.map((service) => renderTemplate`<article class="group relative flex flex-col overflow-hidden rounded-3xl border border-[#0E1620]/10 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"> <!-- Número --> <span class="text-sm font-semibold tracking-widest text-[#C5A900]"> ${service.number} </span> <h3 class="mt-5 text-2xl font-bold"> ${service.title} </h3> <p class="mt-4 leading-7 text-[#0E1620]/60"> ${service.description} </p> <!-- Precio --> <div class="mt-8 border-t border-[#0E1620]/10 pt-6"> <p class="text-sm text-[#0E1620]/50">
Inversión
</p> <p class="mt-1 text-2xl font-bold"> ${service.price} </p> </div> <!-- Características --> <ul class="mt-6 space-y-3"> ${service.features.map((feature) => renderTemplate`<li class="flex items-center gap-3 text-sm text-[#0E1620]/70"> <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E7D117] text-xs font-bold" aria-hidden="true">
✓
</span> ${feature} </li>`)} </ul> <!-- CTA --> <a href="/contacto/" class="mt-8 inline-flex items-center justify-center rounded-full border border-[#0E1620] px-5 py-3 text-sm font-semibold transition hover:border-[#E7D117] hover:bg-[#E7D117]">
Quiero este servicio
</a> </article>`)} </div> <!-- Servicios adicionales --> <div class="mt-8 rounded-3xl bg-[#0E1620] p-8 text-white md:p-10"> <div class="flex flex-col justify-between gap-8 md:flex-row md:items-center"> <div> <p class="text-sm font-medium text-[#E7D117]">
¿Necesitas algo diferente?
</p> <h3 class="mt-2 text-2xl font-bold">
También podemos desarrollar funcionalidades a medida.
</h3> <p class="mt-3 max-w-2xl text-white/55">
Integraciones, formularios avanzados, automatizaciones,
            funcionalidades personalizadas y otras necesidades específicas.
</p> </div> <a href="/contacto/" class="shrink-0 rounded-full bg-[#E7D117] px-6 py-3 font-semibold text-[#0E1620] transition hover:bg-[#F3DE4A]">
Cuéntame tu proyecto
</a> </div> </div> </div> </section>`;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/home/Services.astro", void 0);

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "Mundiflor",
      category: "Landing Page \xB7 Florer\xEDa",
      description: "Landing page enfocada en presentar la marca, sus productos y facilitar el contacto con clientes.",
      image: "/images/proyectos/mundiflor.webp",
      href: "/proyectos/mundiflor/"
    },
    {
      title: "Voz 21",
      category: "Sitio Corporativo \xB7 Locutores",
      description: "Sitio web corporativo dise\xF1ado para presentar servicios, talento y propuesta de valor.",
      image: "/images/proyectos/voz21.webp",
      href: "/proyectos/voz21/"
    },
    {
      title: "Tienda de Ropa",
      category: "Ecommerce \xB7 WooCommerce",
      description: "Tienda online con cat\xE1logo de productos y una experiencia de compra adaptada a dispositivos m\xF3viles.",
      image: "/images/proyectos/tienda-ropa.webp",
      href: "/proyectos/tienda-ropa/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="proyectos" class="bg-[#0E1620] py-24"> <div class="mx-auto max-w-7xl px-6"> <!-- Encabezado --> <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end"> <div class="max-w-2xl mx-auto"> <span class="mx-auto flex w-fit rounded-full border border-[#E7D117]/30 bg-[#E7D117]/5 px-4 py-2 text-sm font-medium text-[#F5E98A]">
Proyectos
</span> <h2 class="mt-6 text-4xl font-bold tracking-tight md:text-5xl text-center">
Trabajo que habla
<span class="text-[#E7D117]"> por sí mismo</span> </h2> <p class="mt-6 text-lg leading-8 text-white/55 text-center">
Algunos de los proyectos que he desarrollado para ayudar a
          negocios a construir una presencia digital profesional.
</p> </div> </div> <!-- Proyectos --> <div class="mt-14 grid gap-6 lg:grid-cols-3"> ${projects.map((project) => renderTemplate`<article class="group overflow-hidden rounded-3xl border border-white/10 bg-[#19232F]"> <!-- Imagen --> <a${addAttribute(project.href, "href")} class="relative block aspect-[16/10] overflow-hidden bg-[#2A3748]"> <img${addAttribute(project.image, "src")}${addAttribute(`${project.title} \u2014 ${project.category}`, "alt")} loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105"> <div class="absolute inset-0 bg-[#0E1620]/0 transition duration-300 group-hover:bg-[#0E1620]/30"></div> </a> <!-- Información --> <div class="p-7"> <p class="text-sm font-medium text-[#E7D117]"> ${project.category} </p> <h3 class="mt-2 text-2xl font-bold text-white"> ${project.title} </h3> <p class="mt-4 text-sm leading-7 text-white/55"> ${project.description} </p> <a${addAttribute(project.href, "href")} class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#E7D117] transition hover:gap-3">
Ver proyecto
<span aria-hidden="true">→</span> </a> </div> </article>`)} </div> <!-- Puente hacia casos de estudio --> <div class="mt-12 border-t border-white/10 pt-10"> <div class="max-w-2xl flex flex-col items-center mx-auto"> <p class="text-sm font-medium text-[#E7D117]">
Más que un portfolio
</p> <h3 class="mt-2 text-2xl font-bold">
Conoce cómo se construye cada proyecto.
</h3> <p class="mt-3 leading-7 text-white/50">
Próximamente podrás conocer el proceso detrás de cada proyecto:
          decisiones de diseño, tecnologías utilizadas, problemas
          resueltos y resultados.
</p> <a href="/proyectos/" class="inline-flex w-fit items-center rounded-full border border-white/20 px-5 py-3 my-5 text-sm font-semibold text-white transition hover:border-[#E7D117] hover:text-[#E7D117]">
Ver todos los proyectos
</a> </div> </div> </div> </section>`;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/home/Portfolio.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      quote: "El proceso fue muy claro desde el principio. El resultado super\xF3 nuestras expectativas y ahora tenemos una presencia digital mucho m\xE1s profesional.",
      name: "Nombre del cliente",
      role: "Empresa / Puesto"
    },
    {
      quote: "La comunicaci\xF3n durante el proyecto fue excelente y cada ajuste se realiz\xF3 de forma r\xE1pida. Definitivamente volver\xEDamos a trabajar juntos.",
      name: "Nombre del cliente",
      role: "Empresa / Puesto"
    },
    {
      quote: "Busc\xE1bamos algo profesional y f\xE1cil de administrar. Recibimos exactamente lo que necesit\xE1bamos y adem\xE1s entendimos mucho mejor c\xF3mo aprovechar nuestro sitio.",
      name: "Nombre del cliente",
      role: "Empresa / Puesto"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#0E1620] py-24"> <div class="mx-auto max-w-7xl px-6"> <!-- Encabezado --> <div class="mx-auto max-w-2xl text-center"> <span class="inline-flex rounded-full border border-[#E7D117]/30 bg-[#E7D117]/5 px-4 py-2 text-sm font-medium text-[#F5E98A]">
Testimonios
</span> <h2 class="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
La experiencia también
<span class="text-[#E7D117]"> importa</span> </h2> <p class="mt-6 text-lg leading-8 text-white/55">
Un buen proyecto no termina cuando se publica. También importa
        cómo se vive el proceso.
</p> </div> <!-- Testimonios --> <div class="mt-14 grid gap-6 lg:grid-cols-3"> ${testimonials.map((testimonial) => renderTemplate`<article class="relative rounded-3xl border border-white/10 bg-[#19232F] p-8"> <!-- Comillas --> <div class="text-5xl font-serif leading-none text-[#E7D117]/40" aria-hidden="true">
“
</div> <blockquote class="mt-4 leading-7 text-white/70"> ${testimonial.quote} </blockquote> <!-- Estrellas --> <div class="mt-7 flex gap-1 text-[#E7D117]" aria-label="5 de 5 estrellas"> <span aria-hidden="true">★</span> <span aria-hidden="true">★</span> <span aria-hidden="true">★</span> <span aria-hidden="true">★</span> <span aria-hidden="true">★</span> </div> <!-- Cliente --> <div class="mt-6 border-t border-white/10 pt-5"> <p class="font-semibold text-white"> ${testimonial.name} </p> <p class="mt-1 text-sm text-white/40"> ${testimonial.role} </p> </div> </article>`)} </div> </div> </section>`;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/home/Testimonials.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "\xBFQu\xE9 incluye cada servicio?",
      answer: "Cada proyecto incluye dise\xF1o personalizado, desarrollo responsive y una estructura optimizada para que tu sitio funcione correctamente en computadoras, tablets y celulares. El alcance exacto depende del servicio contratado y se define antes de comenzar."
    },
    {
      question: "\xBFQu\xE9 no incluye el precio?",
      answer: "El precio base no incluye servicios o funcionalidades que est\xE9n fuera del alcance acordado, como desarrollos personalizados, integraciones especiales, contenido profesional, fotograf\xEDa, publicidad o herramientas externas con costo."
    },
    {
      question: "\xBFC\xF3mo funciona el proceso de pago?",
      answer: "Para comenzar el proyecto se solicita un anticipo del 50%. El 50% restante se liquida antes de publicar el sitio en producci\xF3n. De esta manera ambas partes tienen claridad sobre el proceso desde el inicio."
    },
    {
      question: "\xBFQu\xE9 incluye el mantenimiento?",
      answer: "El mantenimiento puede incluir actualizaciones, peque\xF1os ajustes de contenido, revisi\xF3n general del sitio y soporte t\xE9cnico. El alcance depende del plan contratado y los cambios de mayor complejidad se cotizan por separado."
    },
    {
      question: "\xBFPuedo a\xF1adir funcionalidades despu\xE9s?",
      answer: "S\xED. El sitio puede evolucionar con el tiempo. Podemos agregar nuevas secciones, formularios, integraciones, automatizaciones, sistemas de pago u otras funcionalidades seg\xFAn las necesidades del negocio."
    },
    {
      question: "\xBFCu\xE1nto tarda en estar listo mi sitio?",
      answer: "El tiempo depende del tipo de proyecto, su contenido y la cantidad de funcionalidades necesarias. Antes de comenzar recibir\xE1s una estimaci\xF3n clara del tiempo de desarrollo."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#FAFBFC] py-24 text-[#0E1620]"> <div class="mx-auto max-w-4xl px-6"> <!-- Encabezado --> <div class="text-center"> <span class="inline-flex rounded-full border border-[#E7D117] bg-[#E7D117]/10 px-4 py-2 text-sm font-medium">
Preguntas frecuentes
</span> <h2 class="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
Todo claro
<span class="text-[#C5A900]"> desde el principio</span> </h2> <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#0E1620]/60">
Algunas de las preguntas más comunes antes de comenzar un proyecto.
</p> </div> <!-- FAQ --> <div class="mt-14 space-y-4"> ${faqs.map((faq, index) => renderTemplate`<details class="group rounded-2xl border border-[#0E1620]/10 bg-white transition hover:border-[#E7D117]/60"${addAttribute(index === 0, "open")}> <summary class="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-semibold"> <span>${faq.question}</span> <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E7D117]/15 text-[#0E1620] transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
+
</span> </summary> <div class="px-6 pb-6"> <p class="max-w-3xl leading-7 text-[#0E1620]/60"> ${faq.answer} </p> </div> </details>`)} </div> </div> </section>`;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/home/FAQ.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const plans = [
    {
      name: "Landing Page",
      price: "$3,800",
      description: "Ideal para presentar un servicio, producto, negocio u oferta espec\xEDfica.",
      features: [
        "1 p\xE1gina",
        "Dise\xF1o personalizado",
        "Dise\xF1o responsive",
        "SEO b\xE1sico",
        "Formulario de contacto"
      ],
      featured: false
    },
    {
      name: "Sitio Corporativo",
      price: "$5,500",
      description: "Una presencia digital completa para empresas y profesionales.",
      features: [
        "Hasta 5 p\xE1ginas",
        "Dise\xF1o personalizado",
        "Dise\xF1o responsive",
        "SEO b\xE1sico",
        "Formulario de contacto"
      ],
      featured: true
    },
    {
      name: "Ecommerce",
      price: "$7,000",
      description: "Una tienda online preparada para mostrar y vender tus productos.",
      features: [
        "Cat\xE1logo de productos",
        "Carrito de compras",
        "Integraci\xF3n de pagos",
        "Dise\xF1o responsive",
        "Configuraci\xF3n inicial"
      ],
      featured: false
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#0E1620] py-24"> <div class="mx-auto max-w-7xl px-6"> <!-- Encabezado --> <div class="mx-auto max-w-2xl text-center"> <span class="inline-flex rounded-full border border-[#E7D117]/30 bg-[#E7D117]/5 px-4 py-2 text-sm font-medium text-[#F5E98A]">
Inversión
</span> <h2 class="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
Precios
<span class="text-[#E7D117]"> transparentes</span> </h2> <p class="mt-6 text-lg leading-8 text-white/55">
Una estructura clara para que sepas desde el principio qué
        estás contratando y cuánto vas a invertir.
</p> </div> <!-- Planes --> <div class="mt-14 grid gap-6 lg:grid-cols-3"> ${plans.map((plan) => renderTemplate`<article${addAttribute([
    "relative flex flex-col rounded-3xl border p-8",
    plan.featured ? "border-[#E7D117] bg-[#19232F] shadow-[0_0_50px_rgba(231,209,23,0.08)]" : "border-white/10 bg-[#19232F]"
  ], "class:list")}> ${plan.featured && renderTemplate`<span class="absolute right-6 top-6 rounded-full bg-[#E7D117] px-3 py-1 text-xs font-bold text-[#0E1620]">
Más elegido
</span>`} <p class="text-sm font-medium text-[#E7D117]"> ${plan.name} </p> <div class="mt-5"> <span class="text-4xl font-bold text-white"> ${plan.price} </span> <span class="ml-2 text-sm text-white/40">
MXN
</span> </div> <p class="mt-5 min-h-14 leading-7 text-white/55"> ${plan.description} </p> <div class="my-7 h-px bg-white/10"></div> <ul class="space-y-4"> ${plan.features.map((feature) => renderTemplate`<li class="flex items-start gap-3 text-sm text-white/70"> <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E7D117] text-xs font-bold text-[#0E1620]" aria-hidden="true">
✓
</span> ${feature} </li>`)} </ul> <a href="/contacto/"${addAttribute([
    "mt-8 inline-flex justify-center rounded-full px-6 py-3 font-semibold transition",
    plan.featured ? "bg-[#E7D117] text-[#0E1620] hover:bg-[#F3DE4A]" : "border border-white/20 text-white hover:border-[#E7D117] hover:text-[#E7D117]"
  ], "class:list")}>
Solicitar cotización
</a> </article>`)} </div> <!-- Extras --> <div class="mt-10 rounded-3xl border border-white/10 bg-[#19232F] p-8 md:p-10"> <div class="grid gap-8 md:grid-cols-2"> <div> <p class="text-sm font-medium text-[#E7D117]">
Servicios adicionales
</p> <h3 class="mt-2 text-2xl font-bold">
Personaliza tu proyecto
</h3> <p class="mt-3 max-w-xl leading-7 text-white/50">
Si necesitas algo que no esté incluido en el servicio base,
            podemos añadirlo a tu proyecto.
</p> </div> <div class="grid gap-4 sm:grid-cols-2"> <div class="rounded-2xl bg-[#0E1620] p-5"> <p class="text-sm text-white/40">
Página adicional
</p> <p class="mt-1 text-xl font-bold">
$400 MXN
</p> </div> <div class="rounded-2xl bg-[#0E1620] p-5"> <p class="text-sm text-white/40">
Producto adicional
</p> <p class="mt-1 text-xl font-bold">
$50 MXN
</p> </div> <div class="rounded-2xl bg-[#0E1620] p-5"> <p class="text-sm text-white/40">
Funcionalidad personalizada
</p> <p class="mt-1 text-xl font-bold">
Desde $1,000 MXN
</p> </div> <div class="rounded-2xl bg-[#0E1620] p-5"> <p class="text-sm text-white/40">
Mantenimiento
</p> <p class="mt-1 text-xl font-bold">
Desde $500/mes
</p> </div> </div> </div> </div> <!-- Condiciones --> <div class="mt-8 text-center text-sm text-white/40"> <p>
50% para iniciar el proyecto · 50% antes de publicar
</p> <p class="mt-2">
Hosting + dominio durante el primer año: $600 MXN
        · Renovación: $900 MXN/año
</p> </div> </div> </section>`;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/home/Pricing.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="bg-[#FAFBFC] py-24 text-[#0E1620]"> <div class="mx-auto max-w-7xl px-6"> <div class="overflow-hidden rounded-[2rem] bg-[#0E1620] text-white"> <div class="grid lg:grid-cols-2"> <!-- Información --> <div class="p-8 md:p-12 lg:p-16"> <span class="inline-flex rounded-full border border-[#E7D117]/30 bg-[#E7D117]/5 px-4 py-2 text-sm font-medium text-[#F5E98A]">
Hablemos
</span> <h2 class="mt-6 max-w-xl text-4xl font-bold tracking-tight md:text-5xl">
¿Tienes un proyecto
<span class="text-[#E7D117]"> en mente?</span> </h2> <p class="mt-6 max-w-lg text-lg leading-8 text-white/55">
Cuéntame qué necesitas y te ayudaré a encontrar la solución
            adecuada para tu negocio.
</p> <!-- Beneficios --> <div class="mt-10 space-y-5"> <div class="flex gap-4"> <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E7D117] text-[#0E1620]">
✓
</span> <div> <h3 class="font-semibold">
Presupuesto claro
</h3> <p class="mt-1 text-sm leading-6 text-white/45">
Conocerás el alcance y la inversión antes de comenzar.
</p> </div> </div> <div class="flex gap-4"> <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E7D117] text-[#0E1620]">
✓
</span> <div> <h3 class="font-semibold">
Comunicación directa
</h3> <p class="mt-1 text-sm leading-6 text-white/45">
Comunicación sencilla durante todo el proyecto.
</p> </div> </div> <div class="flex gap-4"> <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E7D117] text-[#0E1620]">
✓
</span> <div> <h3 class="font-semibold">
Soluciones a medida
</h3> <p class="mt-1 text-sm leading-6 text-white/45">
El proyecto se adapta a las necesidades reales de tu negocio.
</p> </div> </div> </div> </div> <!-- Formulario --> <div class="bg-[#19232F] p-8 md:p-12 lg:p-16"> <form action="#" method="POST" class="space-y-6"> <div> <label for="name" class="mb-2 block text-sm font-medium text-white">
Nombre
</label> <input id="name" name="name" type="text" autocomplete="name" required placeholder="Tu nombre" class="w-full rounded-xl border border-white/10 bg-[#0E1620] px-4 py-3.5 text-white outline-none placeholder:text-white/25 focus:border-[#E7D117]"> </div> <div> <label for="email" class="mb-2 block text-sm font-medium text-white">
Correo electrónico
</label> <input id="email" name="email" type="email" autocomplete="email" required placeholder="tu@email.com" class="w-full rounded-xl border border-white/10 bg-[#0E1620] px-4 py-3.5 text-white outline-none placeholder:text-white/25 focus:border-[#E7D117]"> </div> <div> <label for="service" class="mb-2 block text-sm font-medium text-white">
¿Qué necesitas?
</label> <select id="service" name="service" class="w-full rounded-xl border border-white/10 bg-[#0E1620] px-4 py-3.5 text-white outline-none focus:border-[#E7D117]"> <option value="">Selecciona una opción</option> <option value="landing-page">Landing Page</option> <option value="sitio-corporativo">Sitio Corporativo</option> <option value="ecommerce">Ecommerce</option> <option value="otro">Otro proyecto</option> </select> </div> <div> <label for="message" class="mb-2 block text-sm font-medium text-white">
Cuéntame sobre tu proyecto
</label> <textarea id="message" name="message" rows="5" required placeholder="¿Qué quieres crear o mejorar?" class="w-full resize-none rounded-xl border border-white/10 bg-[#0E1620] px-4 py-3.5 text-white outline-none placeholder:text-white/25 focus:border-[#E7D117]"></textarea> </div> <button type="submit" class="w-full rounded-full bg-[#E7D117] px-6 py-4 font-semibold text-[#0E1620] transition hover:bg-[#F3DE4A]">
Solicitar cotización
</button> <p class="text-center text-xs leading-5 text-white/30">
Al enviar este formulario aceptas nuestro
<a href="/aviso-privacidad/" class="text-[#E7D117] hover:underline">
aviso de privacidad
</a>.
</p> </form> </div> </div> </div> </div> </section>`;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/home/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-white/10 bg-[#0E1620]"> <div class="mx-auto max-w-7xl px-6 py-12"> <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4"> <!-- Marca --> <div class="lg:col-span-2"> <a href="/" class="text-xl font-bold tracking-tight">
El Creador
<span class="text-[#E7D117]">Web</span> </a> <p class="mt-4 max-w-md leading-7 text-white/45">
Diseño y desarrollo web para negocios que quieren construir
          una presencia digital profesional.
</p> </div> <!-- Navegación --> <div> <h2 class="text-sm font-semibold text-white">
Navegación
</h2> <nav class="mt-4 flex flex-col gap-3 text-sm text-white/45"> <a href="/#servicios" class="transition hover:text-[#E7D117]">
Servicios
</a> <a href="/proyectos/" class="transition hover:text-[#E7D117]">
Proyectos
</a> <a href="/blog/" class="transition hover:text-[#E7D117]">
Blog
</a> <a href="/sobre-mi/" class="transition hover:text-[#E7D117]">
Sobre mí
</a> <a href="/contacto/" class="transition hover:text-[#E7D117]">
Contacto
</a> </nav> </div> <!-- Información --> <div> <h2 class="text-sm font-semibold text-white">
Información
</h2> <nav class="mt-4 flex flex-col gap-3 text-sm text-white/45"> <a href="/aviso-privacidad/" class="transition hover:text-[#E7D117]">
Aviso de privacidad
</a> <a href="/#contacto" class="transition hover:text-[#E7D117]">
Solicitar cotización
</a> </nav> </div> </div> <!-- Separador --> <div class="my-10 h-px bg-white/10"></div> <!-- Bottom --> <div class="flex flex-col gap-5 text-sm text-white/35 md:flex-row md:items-center md:justify-between"> <p>
© ${currentYear} El Creador Web. Todos los derechos reservados.
</p> <div class="flex items-center gap-5"> <a href="#" aria-label="Instagram" class="transition hover:text-[#E7D117]">
Instagram
</a> <a href="#" aria-label="LinkedIn" class="transition hover:text-[#E7D117]">
LinkedIn
</a> <a href="#" aria-label="YouTube" class="transition hover:text-[#E7D117]">
YouTube
</a> </div> </div> </div> </footer>`;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Portfolio", $$Portfolio, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/pages/index.astro", void 0);

const $$file = "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

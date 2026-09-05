import { h as createAstro, c as createComponent, b as addAttribute, r as renderTemplate, d as renderComponent, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderTransition, a as renderScript } from './astro/server_DshsLSAD.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro("https://www.elcreadorweb.mx/");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    canonical,
    image = "/images/og-image.png",
    noindex = false
  } = Astro2.props;
  const siteUrl = "https://elcreadorweb.mx";
  const canonicalUrl = canonical ? new URL(canonical, siteUrl).toString() : new URL(Astro2.url.pathname, siteUrl).toString();
  const imageUrl = new URL(image, siteUrl).toString();
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}>${noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<link rel="canonical"${addAttribute(canonicalUrl, "href")}><title>${title}</title><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(imageUrl, "content")}><meta property="og:locale" content="es_MX"><!-- Twitter / X --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(imageUrl, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg">`;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/SEO.astro", void 0);

const $$Astro = createAstro("https://www.elcreadorweb.mx/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "El Creador Web \xB7 Agencia Digital en M\xE9xico",
    description = "Creamos landing pages, tiendas online y sitios corporativos que convierten.",
    canonical,
    image,
    noindex = false
  } = Astro2.props;
  return renderTemplate`<html lang="es-MX"> <head>${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "canonical": canonical, "image": image, "noindex": noindex })}${renderHead()}</head> <body class="bg-[#0E1620] text-[#FAFBFC] antialiased"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/layouts/BaseLayout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed inset-x-0 top-0 z-50" data-astro-cid-3ef6ksr2> <div class="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4" data-astro-cid-3ef6ksr2> <nav class="relative rounded-3xl border border-white/10 bg-[#0E1620]/80 px-5 py-3 backdrop-blur-md md:rounded-full" aria-label="Navegación principal" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> <img src="/images/logo/logo.png" alt="El Creador Web" class="h-8 w-auto" data-astro-cid-3ef6ksr2${addAttribute(renderTransition($$result, "l4tblznw", "", "logo"), "data-astro-transition-scope")}> </a> <div class="hidden items-center gap-8 md:flex" data-astro-cid-3ef6ksr2> <a href="/#servicios" class="text-sm text-white/70 transition hover:text-white" data-astro-cid-3ef6ksr2>
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
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/Header.astro", "self");

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
</p> <div class="flex items-center gap-5"> <a href="https://www.instagram.com/elcreadorweb/" aria-label="Instagram" class="transition hover:text-[#E7D117]">
Instagram
</a> <a href="https://www.linkedin.com/company/el-creador-web/" aria-label="LinkedIn" class="transition hover:text-[#E7D117]">
LinkedIn
</a> <a href="https://www.youtube.com/@ElCreadorWeb" aria-label="YouTube" class="transition hover:text-[#E7D117]">
YouTube
</a> <a href="https://www.tiktok.com/@elcreadorweb" aria-label="TikTok" class="transition hover:text-[#E7D117]">
TikTok
</a> </div> </div> </div> </footer>`;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Footer as b };

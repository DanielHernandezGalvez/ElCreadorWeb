import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DshsLSAD.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_CVl1JOO9.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Proyectos = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "Kurajiyu Matcha",
      category: "Landing Page",
      type: "Venta de Matcha",
      description: "Landing page enfocada en presentar la marca de matcha, comunicar su propuesta de valor y facilitar el contacto con clientes.",
      image: "/images/proyectos/kurajiyumatcha.webp",
      href: "/proyectos/kurajiyu-matcha/",
      technologies: ["HTML", "CSS", "JavaScript"],
      youtube: "https://www.youtube.com/watch?v=wn2uHGZW5lo"
    },
    {
      title: "Guardalo T\xFA",
      category: "Sitio Corporativo",
      type: "Bodegas",
      description: "Sitio web corporativo dise\xF1ado para presentar el servicio de renta de bodegas y facilitar la solicitud de cotizaciones.",
      image: "/images/proyectos/bodegaguardalotu.webp",
      href: "/proyectos/guardalo-tu/",
      technologies: ["HTML", "PHP", "JavaScript", "MySQL"],
      youtube: "https://www.youtube.com/watch?v=GD4vCNYCmuM"
    },
    {
      title: "Rashidi",
      category: "Ecommerce",
      type: "Moda",
      description: "Tienda online con cat\xE1logo de productos de autor y drops limitados, desarrollada para ofrecer una experiencia de compra enfocada en la marca.",
      image: "/images/proyectos/rashidi.webp",
      href: "/proyectos/rashidi/",
      technologies: ["WordPress", "WooCommerce"],
      youtube: "https://www.youtube.com/watch?v=vGtX-My20s8"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Proyectos de Dise\xF1o Web | El Creador Web", "description": "Conoce algunos de los proyectos de dise\xF1o y desarrollo web realizados por El Creador Web.", "canonical": "/proyectos/", "data-astro-cid-arbd3op2": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-arbd3op2": true })} ${maybeRenderHead()}<main data-astro-cid-arbd3op2> <!-- Hero --> <section class="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-[#0E1620] pt-10" data-astro-cid-arbd3op2> <!-- Grid --> <div class="absolute inset-0 opacity-40" aria-hidden="true" data-astro-cid-arbd3op2> <div class="absolute inset-0" style="
            background-image:
              linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
            background-size: 60px 60px;
          " data-astro-cid-arbd3op2></div> </div> <!-- Glow --> <div class="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[#E7D117]/10 blur-3xl" aria-hidden="true" data-astro-cid-arbd3op2></div> <!-- Elementos decorativos --> <div class="absolute inset-0 overflow-hidden" aria-hidden="true" data-astro-cid-arbd3op2> <div class="project-ring left-[-5%] top-[10%] h-80 w-80" data-astro-cid-arbd3op2></div> <div class="project-ring bottom-[5%] right-[-4%] h-64 w-64" data-astro-cid-arbd3op2></div> <div class="project-square right-[15%] top-[20%] h-16 w-16" data-astro-cid-arbd3op2></div> <div class="project-square bottom-[20%] left-[15%] h-10 w-10" data-astro-cid-arbd3op2></div> <div class="project-dot left-[35%] top-[25%] h-2 w-2" data-astro-cid-arbd3op2></div> <div class="project-dot bottom-[25%] right-[30%] h-3 w-3" data-astro-cid-arbd3op2></div> </div> <!-- Contenido --> <div class="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 text-center" data-astro-cid-arbd3op2> <div class="mx-auto max-w-4xl" data-astro-cid-arbd3op2> <div class="mb-6 inline-flex items-center rounded-full border border-[#E7D117]/30 bg-[#E7D117]/5 px-4 py-2 text-sm text-[#F5E98A]" data-astro-cid-arbd3op2> <span class="mr-2 h-2 w-2 rounded-full bg-[#E7D117]" data-astro-cid-arbd3op2></span>
Proyectos seleccionados
</div> <h1 class="mx-auto max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl" data-astro-cid-arbd3op2>
Ideas que se convierten en
<span class="text-[#E7D117]" data-astro-cid-arbd3op2> experiencias digitales</span> </h1> <p class="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl" data-astro-cid-arbd3op2>
Una selección de proyectos desarrollados para diferentes
            negocios, necesidades y objetivos.
</p> <div class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/50" data-astro-cid-arbd3op2> <span data-astro-cid-arbd3op2>✓ Diseño personalizado</span> <span data-astro-cid-arbd3op2>✓ Desarrollo responsive</span> <span data-astro-cid-arbd3op2>✓ Enfoque en resultados</span> </div> </div> </div> </section> <!-- Projects --> <section id="proyectos-lista" class="bg-[#FAFBFC] py-24 text-[#0E1620]" data-astro-cid-arbd3op2> <div class="mx-auto max-w-7xl px-6" data-astro-cid-arbd3op2> <div class="max-w-2xl" data-astro-cid-arbd3op2> <span class="inline-flex rounded-full border border-[#E7D117] bg-[#E7D117]/10 px-4 py-2 text-sm font-medium" data-astro-cid-arbd3op2>
Portfolio
</span> <h2 class="mt-6 text-4xl font-bold tracking-tight md:text-5xl" data-astro-cid-arbd3op2>
Proyectos que
<span class="text-[#C5A900]" data-astro-cid-arbd3op2> hablan por sí mismos</span> </h2> <p class="mt-6 text-lg leading-8 text-[#0E1620]/60" data-astro-cid-arbd3op2>
Cada proyecto parte de una necesidad diferente. El objetivo
            es crear una solución que tenga sentido para el negocio y
            para las personas que la utilizan.
</p> </div> <div class="mt-14 grid gap-8 lg:grid-cols-2" data-astro-cid-arbd3op2> ${projects.map((project, index) => renderTemplate`<article${addAttribute([
    "group overflow-hidden rounded-3xl border border-[#0E1620]/10 bg-white",
    index === 0 && "lg:col-span-2"
  ], "class:list")} data-astro-cid-arbd3op2> <a${addAttribute(project.href, "href")}${addAttribute([
    "grid",
    index === 0 ? "lg:grid-cols-2" : "md:grid-cols-2"
  ], "class:list")} data-astro-cid-arbd3op2> <div class="relative aspect-[16/10] overflow-hidden bg-[#19232F]" data-astro-cid-arbd3op2> <img${addAttribute(project.image, "src")}${addAttribute(`${project.title} \u2014 ${project.category} para ${project.type}`, "alt")}${addAttribute(index === 0 ? "eager" : "lazy", "loading")} class="h-full w-full object-cover transition duration-500 group-hover:scale-105" data-astro-cid-arbd3op2> <div class="absolute inset-0 bg-[#0E1620]/0 transition duration-300 group-hover:bg-[#0E1620]/20" data-astro-cid-arbd3op2></div> </div> <div class="flex flex-col justify-center p-8 md:p-10" data-astro-cid-arbd3op2> <div class="flex flex-wrap items-center gap-2 text-sm" data-astro-cid-arbd3op2> <span class="font-semibold text-[#C5A900]" data-astro-cid-arbd3op2> ${project.category} </span> <span class="text-[#0E1620]/25" data-astro-cid-arbd3op2>
/
</span> <span class="text-[#0E1620]/45" data-astro-cid-arbd3op2> ${project.type} </span> </div> <h3 class="mt-4 text-3xl font-bold" data-astro-cid-arbd3op2> ${project.title} </h3> <p class="mt-4 leading-7 text-[#0E1620]/60" data-astro-cid-arbd3op2> ${project.description} </p> <div class="mt-6 flex flex-wrap gap-2" data-astro-cid-arbd3op2> ${project.technologies.map((technology) => renderTemplate`<span class="rounded-full bg-[#0E1620]/5 px-3 py-1.5 text-xs font-medium text-[#0E1620]/60" data-astro-cid-arbd3op2> ${technology} </span>`)} </div> <span class="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#0E1620] transition-all group-hover:gap-3" data-astro-cid-arbd3op2>
Ver proyecto
<span aria-hidden="true" data-astro-cid-arbd3op2>→</span> </span> </div> </a> </article>`)} </div> </div> </section> <!-- Case studies --> <section class="bg-[#0E1620] py-24" data-astro-cid-arbd3op2> <div class="mx-auto max-w-5xl px-6" data-astro-cid-arbd3op2> <div class="rounded-[2rem] border border-white/10 bg-[#19232F] p-8 md:p-12" data-astro-cid-arbd3op2> <div class="max-w-3xl" data-astro-cid-arbd3op2> <span class="text-sm font-medium text-[#E7D117]" data-astro-cid-arbd3op2>
Próximamente
</span> <h2 class="mt-4 text-4xl font-bold tracking-tight md:text-5xl" data-astro-cid-arbd3op2>
Conoce el
<span class="text-[#E7D117]" data-astro-cid-arbd3op2> proceso detrás de cada proyecto</span> </h2> <p class="mt-6 leading-8 text-white/55" data-astro-cid-arbd3op2>
No quiero que el portfolio sea solamente una colección de
              capturas. Cada proyecto podrá convertirse en un caso de
              estudio donde podrás conocer el problema, las decisiones
              de diseño, las tecnologías utilizadas y el resultado final.
</p> <div class="mt-8 grid gap-4 sm:grid-cols-3" data-astro-cid-arbd3op2> <div class="rounded-2xl bg-[#0E1620] p-5" data-astro-cid-arbd3op2> <p class="text-sm font-semibold text-white" data-astro-cid-arbd3op2>
Problema
</p> <p class="mt-2 text-sm leading-6 text-white/40" data-astro-cid-arbd3op2>
Qué necesitaba resolver el proyecto.
</p> </div> <div class="rounded-2xl bg-[#0E1620] p-5" data-astro-cid-arbd3op2> <p class="text-sm font-semibold text-white" data-astro-cid-arbd3op2>
Proceso
</p> <p class="mt-2 text-sm leading-6 text-white/40" data-astro-cid-arbd3op2>
Cómo se diseñó y desarrolló.
</p> </div> <div class="rounded-2xl bg-[#0E1620] p-5" data-astro-cid-arbd3op2> <p class="text-sm font-semibold text-white" data-astro-cid-arbd3op2>
Resultado
</p> <p class="mt-2 text-sm leading-6 text-white/40" data-astro-cid-arbd3op2>
Qué se consiguió con la solución.
</p> </div> </div> </div> </div> </div> </section> <!-- CTA --> <section class="bg-[#E7D117] py-20 text-[#0E1620]" data-astro-cid-arbd3op2> <div class="mx-auto max-w-4xl px-6 text-center" data-astro-cid-arbd3op2> <h2 class="text-4xl font-bold tracking-tight md:text-5xl" data-astro-cid-arbd3op2>
¿Tienes un proyecto en mente?
</h2> <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#0E1620]/65" data-astro-cid-arbd3op2>
Podemos convertir tu idea en una experiencia digital
          profesional.
</p> <a href="/contacto/" class="mt-8 inline-flex rounded-full bg-[#0E1620] px-7 py-3.5 font-semibold text-white transition hover:bg-[#19232F]" data-astro-cid-arbd3op2>
Hablemos de tu proyecto
</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-arbd3op2": true })} ` })} `;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/pages/proyectos.astro", void 0);

const $$file = "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/pages/proyectos.astro";
const $$url = "/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proyectos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

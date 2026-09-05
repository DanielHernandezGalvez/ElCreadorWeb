import { A as AstroError, R as RenderUndefinedEntryError, c as createComponent, u as unescapeHTML, r as renderTemplate, U as UnknownContentCollectionError, e as renderUniqueStylesheet, f as renderScriptElement, g as createHeadAndContent, d as renderComponent, h as createAstro, m as maybeRenderHead, b as addAttribute } from './astro/server_DshsLSAD.mjs';
import 'piccolore';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import * as devalue from 'devalue';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_CVl1JOO9.mjs';
/* empty css                          */
import '../renderers.mjs';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position",
  "background"
];

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_D5KwEpKe.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://www.elcreadorweb.mx/", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_DEeE1Wyn.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { Path: process.env.Path }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: isRemotePath(link) ? link : prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const $$Astro = createAstro("https://www.elcreadorweb.mx/");
async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: {
      slug: project.id
    },
    props: {
      project
    }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { project } = Astro2.props;
  const { Content } = await renderEntry(project);
  const {
    title,
    description,
    category,
    type,
    technologies,
    thumbnail,
    youtubeId
  } = project.data;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${title} | El Creador Web`, "description": description, "image": thumbnail, "canonical": `/proyectos/${project.id}/`, "data-astro-cid-rg6ldlsi": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-rg6ldlsi": true })} ${maybeRenderHead()}<main data-astro-cid-rg6ldlsi> <!-- Hero --> <section class="relative overflow-hidden bg-[#0E1620] pt-32 pb-20" data-astro-cid-rg6ldlsi> <div class="absolute inset-0 opacity-40" aria-hidden="true" data-astro-cid-rg6ldlsi> <div class="absolute inset-0" style="
            background-image:
              linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
            background-size: 60px 60px;
          " data-astro-cid-rg6ldlsi></div> </div> <div class="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E7D117]/10 blur-3xl" aria-hidden="true" data-astro-cid-rg6ldlsi></div> <div class="relative z-10 mx-auto max-w-5xl px-6 text-center" data-astro-cid-rg6ldlsi> <div class="mb-6 inline-flex items-center rounded-full border border-[#E7D117]/30 bg-[#E7D117]/5 px-4 py-2 text-sm text-[#F5E98A]" data-astro-cid-rg6ldlsi> <span class="mr-2 h-2 w-2 rounded-full bg-[#E7D117]" data-astro-cid-rg6ldlsi></span> ${category} </div> <p class="mb-4 text-sm uppercase tracking-[0.2em] text-white/40" data-astro-cid-rg6ldlsi> ${type} </p> <h1 class="text-5xl font-bold tracking-tight md:text-7xl" data-astro-cid-rg6ldlsi> ${title} </h1> <p class="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60 md:text-xl" data-astro-cid-rg6ldlsi> ${description} </p> <div class="mt-8 flex flex-wrap justify-center gap-3" data-astro-cid-rg6ldlsi> ${technologies.map((technology) => renderTemplate`<span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60" data-astro-cid-rg6ldlsi> ${technology} </span>`)} </div> </div> </section> <!-- Imagen principal --> <section class="bg-[#FAFBFC] py-16" data-astro-cid-rg6ldlsi> <div class="mx-auto max-w-6xl px-6" data-astro-cid-rg6ldlsi> <div class="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-2xl" data-astro-cid-rg6ldlsi> <img${addAttribute(thumbnail, "src")}${addAttribute(`Proyecto ${title}`, "alt")} class="block w-full" loading="eager" data-astro-cid-rg6ldlsi> </div> </div> </section> <!-- Contenido --> <section class="bg-[#FAFBFC] pb-24 text-[#0E1620]" data-astro-cid-rg6ldlsi> <div class="mx-auto max-w-3xl px-6" data-astro-cid-rg6ldlsi> <article class="project-content" data-astro-cid-rg6ldlsi> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-rg6ldlsi": true })} </article> </div> </section> <!-- Video --> ${youtubeId && renderTemplate`<section class="bg-[#0E1620] py-24" data-astro-cid-rg6ldlsi> <div class="mx-auto max-w-5xl px-6" data-astro-cid-rg6ldlsi> <div class="mb-10 text-center" data-astro-cid-rg6ldlsi> <p class="text-sm uppercase tracking-[0.2em] text-[#E7D117]" data-astro-cid-rg6ldlsi>
Desarrollo
</p> <h2 class="mt-3 text-3xl font-bold md:text-4xl" data-astro-cid-rg6ldlsi>
Mira el proyecto en acción
</h2> </div> <div class="aspect-video overflow-hidden rounded-3xl bg-black shadow-2xl" data-astro-cid-rg6ldlsi> <iframe class="h-full w-full"${addAttribute(`https://www.youtube.com/embed/${youtubeId}`, "src")}${addAttribute(`Video del proyecto ${title}`, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-astro-cid-rg6ldlsi></iframe> </div> </div> </section>`} <!-- CTA --> <section class="bg-[#FAFBFC] py-24 text-[#0E1620]" data-astro-cid-rg6ldlsi> <div class="mx-auto max-w-3xl px-6 text-center" data-astro-cid-rg6ldlsi> <p class="text-sm uppercase tracking-[0.2em] text-[#B5A300]" data-astro-cid-rg6ldlsi>
¿Tienes un proyecto?
</p> <h2 class="mt-4 text-4xl font-bold md:text-5xl" data-astro-cid-rg6ldlsi>
Hagamos algo para tu negocio
</h2> <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-black/60" data-astro-cid-rg6ldlsi>
Cuéntame qué necesitas y podemos encontrar la mejor solución
          para llevar tu negocio a internet.
</p> <a href="/contacto/" class="mt-8 inline-flex rounded-full bg-[#E7D117] px-7 py-3.5 font-semibold text-[#0E1620] transition hover:bg-[#F3DE4A]" data-astro-cid-rg6ldlsi>
Hablemos de tu proyecto
</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-rg6ldlsi": true })} ` })} `;
}, "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/pages/proyectos/[...slug].astro", void 0);

const $$file = "C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/pages/proyectos/[...slug].astro";
const $$url = "/proyectos/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { DEFAULT_OUTPUT_FORMAT as D, VALID_SUPPORTED_FORMATS as V, DEFAULT_HASH_PROPS as a, page as p };

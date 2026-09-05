import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, l as decodeKey } from './chunks/astro/server_DshsLSAD.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/","cacheDir":"file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/node_modules/.astro/","outDir":"file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/","srcDir":"file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/","publicDir":"file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/public/","buildClientDir":"file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/client/","buildServerDir":"file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/server/","adapterName":"","routes":[{"file":"file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/aviso-privacidad/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/aviso-privacidad","isIndex":false,"type":"page","pattern":"^\\/aviso-privacidad\\/?$","segments":[[{"content":"aviso-privacidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aviso-privacidad.astro","pathname":"/aviso-privacidad","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/contacto/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/proyectos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/proyectos","isIndex":true,"type":"page","pattern":"^\\/proyectos\\/?$","segments":[[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyectos/index.astro","pathname":"/proyectos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/proyectos/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.qxWNYEnx.css"},{"type":"inline","content":".project-ring[data-astro-cid-arbd3op2],.project-square[data-astro-cid-arbd3op2],.project-dot[data-astro-cid-arbd3op2]{position:absolute;pointer-events:none}.project-ring[data-astro-cid-arbd3op2]{border:1px solid rgb(231 209 23 / .12);border-radius:9999px}.project-square[data-astro-cid-arbd3op2]{border:1px solid rgb(231 209 23 / .1);transform:rotate(25deg)}.project-dot[data-astro-cid-arbd3op2]{border-radius:9999px;background:#e7d117;opacity:.35}\n"}],"routeData":{"route":"/proyectos","isIndex":false,"type":"page","pattern":"^\\/proyectos\\/?$","segments":[[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyectos.astro","pathname":"/proyectos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/servicios/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.qxWNYEnx.css"},{"type":"inline","content":".float-ring[data-astro-cid-wrzvmyuk],.float-square[data-astro-cid-wrzvmyuk],.float-dot[data-astro-cid-wrzvmyuk]{pointer-events:none;position:absolute;transition:transform .08s ease-out;will-change:transform}.float-ring[data-astro-cid-wrzvmyuk]{border:1px solid rgb(231 209 23 / .15);border-radius:9999px}.float-square[data-astro-cid-wrzvmyuk]{border:1px solid rgb(231 209 23 / .12)}.float-dot[data-astro-cid-wrzvmyuk]{background:#e7d117;border-radius:9999px;opacity:.4}.particle[data-astro-cid-wrzvmyuk]{animation:float-particle 12s ease-in-out infinite;background:#e7d11714;border-radius:9999px;pointer-events:none;position:absolute}@keyframes float-particle{0%,to{opacity:.3;transform:translate(0) scale(1)}25%{opacity:.6;transform:translate(30px,-40px) scale(1.2)}50%{opacity:.4;transform:translate(-20px,-80px) scale(.8)}75%{opacity:.7;transform:translate(40px,-30px) scale(1.1)}}@media(prefers-reduced-motion:reduce){.particle[data-astro-cid-wrzvmyuk]{animation:none}.float-ring[data-astro-cid-wrzvmyuk],.float-square[data-astro-cid-wrzvmyuk],.float-dot[data-astro-cid-wrzvmyuk]{transition:none}}\n"}],"routeData":{"route":"/servicios","isIndex":false,"type":"page","pattern":"^\\/servicios\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios.astro","pathname":"/servicios","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/sobre-mi/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sobre-mi","isIndex":false,"type":"page","pattern":"^\\/sobre-mi\\/?$","segments":[[{"content":"sobre-mi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobre-mi.astro","pathname":"/sobre-mi","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.qxWNYEnx.css"},{"type":"inline","content":".float-ring[data-astro-cid-ewxirvlt],.float-square[data-astro-cid-ewxirvlt],.float-dot[data-astro-cid-ewxirvlt]{pointer-events:none;position:absolute;transition:transform .08s ease-out;will-change:transform}.float-ring[data-astro-cid-ewxirvlt]{border:1px solid rgb(231 209 23 / .15);border-radius:9999px}.float-square[data-astro-cid-ewxirvlt]{border:1px solid rgb(231 209 23 / .12)}.float-dot[data-astro-cid-ewxirvlt]{background:#e7d117;border-radius:9999px;opacity:.4}.particle[data-astro-cid-ewxirvlt]{animation:float-particle 12s ease-in-out infinite;background:#e7d11714;border-radius:9999px;pointer-events:none;position:absolute}@keyframes float-particle{0%,to{opacity:.3;transform:translate(0) scale(1)}25%{opacity:.6;transform:translate(30px,-40px) scale(1.2)}50%{opacity:.4;transform:translate(-20px,-80px) scale(.8)}75%{opacity:.7;transform:translate(40px,-30px) scale(1.1)}}@media(prefers-reduced-motion:reduce){.particle[data-astro-cid-ewxirvlt]{animation:none}.float-ring[data-astro-cid-ewxirvlt],.float-square[data-astro-cid-ewxirvlt],.float-dot[data-astro-cid-ewxirvlt]{transition:none}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.elcreadorweb.mx/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/pages/proyectos/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/proyectos/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/pages/proyectos.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/pages/servicios.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/proyectos@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/servicios@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/aviso-privacidad@_@astro":"pages/aviso-privacidad.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/proyectos/index@_@astro":"pages/proyectos.astro.mjs","\u0000@astro-page:src/pages/proyectos@_@astro":"pages/proyectos2.astro.mjs","\u0000@astro-page:src/pages/servicios@_@astro":"pages/servicios.astro.mjs","\u0000@astro-page:src/pages/sobre-mi@_@astro":"pages/sobre-mi.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/proyectos/[...slug]@_@astro":"pages/proyectos/_---slug_.astro.mjs","\u0000@astrojs-manifest":"manifest_Bb_Jet3X.mjs","C:\\Users\\herna\\OneDrive\\Documents\\creadorweb\\_negocio\\ElCreadorWeb\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\herna\\OneDrive\\Documents\\creadorweb\\_negocio\\ElCreadorWeb\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_D5KwEpKe.mjs","C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DB56A-NU.mjs","C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.EuANeFlO.js","C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/home/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.B0F8ITzU.js","C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/pages/servicios.astro?astro&type=script&index=0&lang.ts":"_astro/servicios.astro_astro_type_script_index_0_lang.DdsfsuBJ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/Header.astro?astro&type=script&index=0&lang.ts","const t=document.querySelector(\"[data-menu-toggle]\"),a=document.querySelector(\"[data-mobile-menu]\"),n=()=>{!t||!a||(t.setAttribute(\"aria-expanded\",\"false\"),t.setAttribute(\"aria-label\",\"Abrir menú de navegación\"),a.dataset.open=\"false\")};t?.addEventListener(\"click\",()=>{const e=t.getAttribute(\"aria-expanded\")===\"true\";t.setAttribute(\"aria-expanded\",String(!e)),t.setAttribute(\"aria-label\",e?\"Abrir menú de navegación\":\"Cerrar menú de navegación\"),a&&(a.dataset.open=String(!e))});a?.querySelectorAll(\"a\").forEach(e=>e.addEventListener(\"click\",n));document.addEventListener(\"keydown\",e=>{e.key===\"Escape\"&&n()});"],["C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/components/home/Hero.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"[data-hero-scene]\"),f=window.matchMedia(\"(prefers-reduced-motion: reduce)\");if(e&&!f.matches){const o=Array.from(e.querySelectorAll(\"[data-parallax]\")),d=[{x:.04,y:.04},{x:-.03,y:.05},{x:.05,y:-.03},{x:-.02,y:.06},{x:.06,y:-.02},{x:-.04,y:-.04},{x:.03,y:-.05},{x:-.05,y:.03},{x:.07,y:.02},{x:-.02,y:-.06}];let r;const y=(t,a)=>{r||(r=requestAnimationFrame(()=>{const n=(t/window.innerWidth-.5)*2,s=(a/window.innerHeight-.5)*2;o.forEach((i,x)=>{const c=d[x],m=i.dataset.rotate??\"0\";i.style.transform=`translate(${n*c.x*60}px, ${s*c.y*60}px) rotate(${m}deg) rotateX(${s*2}deg) rotateY(${n*2}deg)`}),r=void 0}))},l=()=>{o.forEach(t=>{t.style.transitionDuration=\"0.6s\",t.style.transform=`translate(0, 0) rotate(${t.dataset.rotate??\"0\"}deg)`})};e.addEventListener(\"pointermove\",t=>{o.forEach(a=>{a.style.transitionDuration=\"0.08s\"}),y(t.clientX,t.clientY)}),e.addEventListener(\"pointerleave\",l)}"],["C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/src/pages/servicios.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"[data-hero-scene]\"),f=window.matchMedia(\"(prefers-reduced-motion: reduce)\");if(e&&!f.matches){const o=Array.from(e.querySelectorAll(\"[data-parallax]\")),d=[{x:.04,y:.04},{x:-.03,y:.05},{x:.05,y:-.03},{x:-.02,y:.06},{x:.06,y:-.02},{x:-.04,y:-.04},{x:.03,y:-.05},{x:-.05,y:.03},{x:.07,y:.02},{x:-.02,y:-.06}];let r;const y=(t,a)=>{r||(r=requestAnimationFrame(()=>{const n=(t/window.innerWidth-.5)*2,s=(a/window.innerHeight-.5)*2;o.forEach((i,x)=>{const c=d[x],m=i.dataset.rotate??\"0\";i.style.transform=`\n            translate(\n              ${n*c.x*60}px,\n              ${s*c.y*60}px\n            )\n            rotate(${m}deg)\n            rotateX(${s*2}deg)\n            rotateY(${n*2}deg)\n          `}),r=void 0}))},l=()=>{o.forEach(t=>{t.style.transitionDuration=\"0.6s\",t.style.transform=`\n          translate(0, 0)\n          rotate(${t.dataset.rotate??\"0\"}deg)\n        `})};e.addEventListener(\"pointermove\",t=>{o.forEach(a=>{a.style.transitionDuration=\"0.08s\"}),y(t.clientX,t.clientY)}),e.addEventListener(\"pointerleave\",l)}"]],"assets":["/file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/aviso-privacidad/index.html","/file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/blog/index.html","/file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/contacto/index.html","/file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/proyectos/index.html","/file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/proyectos/index.html","/file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/servicios/index.html","/file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/sobre-mi/index.html","/file:///C:/Users/herna/OneDrive/Documents/creadorweb/_negocio/ElCreadorWeb/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"850QJrDAqJgG4nOcgF6kLCt1PpPVGSsSUb0fr+C5FOM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

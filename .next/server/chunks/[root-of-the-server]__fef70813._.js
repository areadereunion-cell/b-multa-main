module.exports=[93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},30056,e=>e.a(async(t,r)=>{try{let t=await e.y("pg");e.n(t),r()}catch(e){r(e)}},!0),54799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},59364,e=>e.a(async(t,r)=>{try{var a=e.i(89171),n=e.i(30056),o=e.i(54799),i=t([n]);[n]=i.then?(await i)():i;let c=new n.Pool({connectionString:process.env.DATABASE_URL,ssl:{rejectUnauthorized:!1}});function l(e){if(null==e)return null;let t=String(e).trim();return""===t?null:t}function s(e){return!0===e||!1===e?e:"true"===e||"false"!==e&&null}function u(e){if(null==e||""===e)return null;let t=Number(e);return Number.isFinite(t)?Math.trunc(t):null}async function d(e){let t=await c.connect();try{var r;let n,i=await e.json().catch(()=>({}));console.log("📦 BODY RECIBIDO:",i);let d=l(i.subproducto),c=l(i.cuenta_bancaria),p=l(i.metodo_pago),m=(r=i.tipo_plantilla??i.template_id,n=String(r??"").trim(),["1","2","3","4","5","6","7"].includes(n)?n:"1"),h=u(i.metodo_pago_lista_id),x=u(i.liga_pago_lista_id),g=function(e){if(null==e)return null;let t=String(e).trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return"colombia"===t||t.includes("colombia")||"co"===t?"colombia":"peru"===t||t.includes("peru")||"pe"===t?"peru":"mexico"===t||t.includes("mexico")||"mx"===t?"mexico":null}(i.segmento);if(console.log("🌎 SEGMENTO RECIBIDO:",g),!d||!c||!p)return a.NextResponse.json({error:"subproducto, cuenta_bancaria y metodo_pago son obligatorios"},{status:400});let R="",_=!0;for(;_;)R=o.default.randomBytes(16).toString("hex"),_=((await t.query(`
        SELECT 1
        FROM plantillas_temporales
        WHERE token = $1
        LIMIT 1
        `,[R])).rowCount??0)>0;let f=await t.query(`
      INSERT INTO plantillas_temporales (
        token,
        producto,
        tipo_plantilla,
        metodo_pago,
        cuenta_bancaria,
        logo_url,
        monto,
        importe_pagar,
        fecha_vencimiento,
        dias_vencidos,
        nombre_cliente,
        telefono_cliente,
        mostrar_extras,
        card_bg_color,
        primary_color,
        locked,
        foto_habilitada,
        metodo_pago_lista_id,
        liga_pago_lista_id,
        segmento,
        created_at
      ) VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9,
        $10,
        $11,
        $12,
        $13,
        $14,
        $15,
        $16,
        $17,
        $18,
        $19,
        $20,
        NOW()
      )
      RETURNING *
      `,[R,d,m,p,c,l(i.url),l(i.monto),l(i.importe_pagar),l(i.fecha_vencimiento),u(i.dias_vencidos),l(i.nombre_cliente),l(i.telefono_cliente),s(i.mostrar_extras)??!0,l(i.card_bg_color),l(i.primary_color),s(i.locked)??!0,s(i.foto_habilitada)??!0,h,x,g]);return console.log("✅ ROW GUARDADA:",f.rows[0]),a.NextResponse.json({ok:!0,token:R,tipo_plantilla:m,segmento:g,link:`/pay/${R}`,data:f.rows[0]})}catch(e){return console.error("❌ Error plantillas-temporales-3:",e),a.NextResponse.json({error:e?.message||"Error interno del servidor"},{status:500})}finally{t.release()}}e.s(["POST",()=>d,"runtime",0,"nodejs"]),r()}catch(e){r(e)}},!1),50927,e=>e.a(async(t,r)=>{try{var a=e.i(47909),n=e.i(74017),o=e.i(96250),i=e.i(59756),l=e.i(61916),s=e.i(14444),u=e.i(37092),d=e.i(69741),c=e.i(16795),p=e.i(87718),m=e.i(95169),h=e.i(47587),x=e.i(66012),g=e.i(70101),R=e.i(26937),_=e.i(10372),f=e.i(93695);e.i(52474);var v=e.i(220),E=e.i(59364),y=t([E]);[E]=y.then?(await y)():y;let C=new a.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/plantillas-temporales-3/route",pathname:"/api/plantillas-temporales-3",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/plantillas-temporales-3/route.ts",nextConfigOutput:"",userland:E}),{workAsyncStorage:A,workUnitAsyncStorage:N,serverHooks:T}=C;function w(){return(0,o.patchFetch)({workAsyncStorage:A,workUnitAsyncStorage:N})}async function b(e,t,r){C.isDev&&(0,i.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let a="/api/plantillas-temporales-3/route";a=a.replace(/\/index$/,"")||"/";let o=await C.prepare(e,t,{srcPage:a,multiZoneDraftMode:!1});if(!o)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:E,params:y,nextConfig:w,parsedUrl:b,isDraftMode:A,prerenderManifest:N,routerServerContext:T,isOnDemandRevalidate:S,revalidateOnlyGenerated:$,resolvedPathname:O,clientReferenceManifest:k,serverActionsManifest:P}=o,I=(0,d.normalizeAppPath)(a),j=!!(N.dynamicRoutes[I]||N.routes[O]),q=async()=>((null==T?void 0:T.render404)?await T.render404(e,t,b,!1):t.end("This page could not be found"),null);if(j&&!A){let e=!!N.routes[O],t=N.dynamicRoutes[I];if(t&&!1===t.fallback&&!e){if(w.experimental.adapterPath)return await q();throw new f.NoFallbackError}}let U=null;!j||C.isDev||A||(U=O,U="/index"===U?"/":U);let D=!0===C.isDev||!j,M=j&&!D;P&&k&&(0,s.setReferenceManifestsSingleton)({page:a,clientReferenceManifest:k,serverActionsManifest:P,serverModuleMap:(0,u.createServerModuleMap)({serverActionsManifest:P})});let H=e.method||"GET",F=(0,l.getTracer)(),B=F.getActiveScopeSpan(),L={params:y,prerenderManifest:N,renderOpts:{experimental:{authInterrupts:!!w.experimental.authInterrupts},cacheComponents:!!w.cacheComponents,supportsDynamicResponse:D,incrementalCache:(0,i.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:w.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a)=>C.onRequestError(e,t,a,T)},sharedContext:{buildId:E}},K=new c.NodeNextRequest(e),G=new c.NodeNextResponse(t),W=p.NextRequestAdapter.fromNodeNextRequest(K,(0,p.signalFromNodeResponse)(t));try{let o=async e=>C.handle(W,L).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=F.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=r.get("next.route");if(n){let t=`${H} ${n}`;e.setAttributes({"next.route":n,"http.route":n,"next.span_name":t}),e.updateName(t)}else e.updateName(`${H} ${a}`)}),s=!!(0,i.getRequestMeta)(e,"minimalMode"),u=async i=>{var l,u;let d=async({previousCacheEntry:n})=>{try{if(!s&&S&&$&&!n)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let a=await o(i);e.fetchMetrics=L.renderOpts.fetchMetrics;let l=L.renderOpts.pendingWaitUntil;l&&r.waitUntil&&(r.waitUntil(l),l=void 0);let u=L.renderOpts.collectedTags;if(!j)return await (0,x.sendResponse)(K,G,a,L.renderOpts.pendingWaitUntil),null;{let e=await a.blob(),t=(0,g.toNodeOutgoingHttpHeaders)(a.headers);u&&(t[_.NEXT_CACHE_TAGS_HEADER]=u),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==L.renderOpts.collectedRevalidate&&!(L.renderOpts.collectedRevalidate>=_.INFINITE_CACHE)&&L.renderOpts.collectedRevalidate,n=void 0===L.renderOpts.collectedExpire||L.renderOpts.collectedExpire>=_.INFINITE_CACHE?void 0:L.renderOpts.collectedExpire;return{value:{kind:v.CachedRouteKind.APP_ROUTE,status:a.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:n}}}}catch(t){throw(null==n?void 0:n.isStale)&&await C.onRequestError(e,t,{routerKind:"App Router",routePath:a,routeType:"route",revalidateReason:(0,h.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:S})},T),t}},c=await C.handleResponse({req:e,nextConfig:w,cacheKey:U,routeKind:n.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:N,isRoutePPREnabled:!1,isOnDemandRevalidate:S,revalidateOnlyGenerated:$,responseGenerator:d,waitUntil:r.waitUntil,isMinimalMode:s});if(!j)return null;if((null==c||null==(l=c.value)?void 0:l.kind)!==v.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(u=c.value)?void 0:u.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||t.setHeader("x-nextjs-cache",S?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),A&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,g.fromNodeOutgoingHttpHeaders)(c.value.headers);return s&&j||p.delete(_.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,R.getCacheControlHeader)(c.cacheControl)),await (0,x.sendResponse)(K,G,new Response(c.value.body,{headers:p,status:c.value.status||200})),null};B?await u(B):await F.withPropagatedContext(e.headers,()=>F.trace(m.BaseServerSpan.handleRequest,{spanName:`${H} ${a}`,kind:l.SpanKind.SERVER,attributes:{"http.method":H,"http.target":e.url}},u))}catch(t){if(t instanceof f.NoFallbackError||await C.onRequestError(e,t,{routerKind:"App Router",routePath:I,routeType:"route",revalidateReason:(0,h.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:S})}),j)throw t;return await (0,x.sendResponse)(K,G,new Response(null,{status:500})),null}}e.s(["handler",()=>b,"patchFetch",()=>w,"routeModule",()=>C,"serverHooks",()=>T,"workAsyncStorage",()=>A,"workUnitAsyncStorage",()=>N]),r()}catch(e){r(e)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__fef70813._.js.map
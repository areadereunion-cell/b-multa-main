module.exports=[93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},30056,e=>e.a(async(t,r)=>{try{let t=await e.y("pg");e.n(t),r()}catch(e){r(e)}},!0),72918,e=>e.a(async(t,r)=>{try{var a=e.i(12399),n=e.i(30056),i=t([n]);[n]=i.then?(await i)():i;let l=new n.Pool({connectionString:process.env.DATABASE_URL});async function s(e,t){let{id:r}=await t.params,n=Number(r);if(!Number.isInteger(n))return a.NextResponse.json([]);let{searchParams:i}=new URL(e.url),s=i.get("origen"),o="string"==typeof s&&s.trim()?s.trim():null;try{let e=await l.query(`
      SELECT current_database() AS db, current_schema() AS schema
    `);console.log("DEBUG DB/SCHEMA GET:",e.rows[0]);let t=await l.query(`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name = 'lista_items'
      ORDER BY ordinal_position
    `);console.log("DEBUG COLUMNAS public.lista_items GET:",t.rows.map(e=>e.column_name));let r=`
      SELECT
        id,
        label,
        value,
        url_imagen,
        orden,
        origen
      FROM public.lista_items
      WHERE plantilla_id = $1
        AND ($2::text IS NULL OR origen = $2)
      ORDER BY orden ASC NULLS LAST, id ASC
    `,{rows:i}=await l.query(r,[n,o]);return a.NextResponse.json(i)}catch(e){return console.error("GET /api/listas/[id]/items:",e),a.NextResponse.json([])}}async function o(e,t){let{id:r}=await t.params,n=Number(r);if(!Number.isInteger(n))return a.NextResponse.json({error:"ID inválido"},{status:400});try{let t=await e.json(),r="string"==typeof t?.label?t.label.trim():"",i="string"==typeof t?.value?t.value.trim():"",s="string"==typeof t?.url_imagen&&t.url_imagen.trim()?t.url_imagen.trim():null,o="string"==typeof t?.origen&&t.origen.trim()?t.origen.trim():null;if(!r)return a.NextResponse.json({error:"label requerido"},{status:400});let u=await l.query(`
      SELECT current_database() AS db, current_schema() AS schema
    `);console.log("DEBUG DB/SCHEMA POST:",u.rows[0]);let d=await l.query(`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name = 'lista_items'
      ORDER BY ordinal_position
    `);console.log("DEBUG COLUMNAS public.lista_items POST:",d.rows.map(e=>e.column_name));let p=`
      INSERT INTO public.lista_items (
        plantilla_id,
        label,
        value,
        url_imagen,
        origen,
        orden
      )
      VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        COALESCE(
          (
            SELECT MAX(li.orden) + 1
            FROM public.lista_items li
            WHERE li.plantilla_id = $1
          ),
          1
        )
      )
      RETURNING
        id,
        label,
        value,
        url_imagen,
        orden,
        origen
    `,{rows:c}=await l.query(p,[n,r,i||r,s,o]);return a.NextResponse.json(c[0],{status:201})}catch(e){return console.error("POST /api/listas/[id]/items:",e),a.NextResponse.json({error:"Error al crear item"},{status:500})}}e.s(["GET",()=>s,"POST",()=>o]),r()}catch(e){r(e)}},!1),71013,e=>e.a(async(t,r)=>{try{var a=e.i(44985),n=e.i(66321),i=e.i(99872),s=e.i(21679),o=e.i(19212),l=e.i(74403),u=e.i(53521),d=e.i(12471),p=e.i(77550),c=e.i(49905),m=e.i(15984),R=e.i(45595),E=e.i(62121),h=e.i(62722),g=e.i(15692),x=e.i(86921),v=e.i(93695);e.i(97603);var w=e.i(21307),f=e.i(72918),y=t([f]);[f]=y.then?(await y)():y;let A=new a.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/listas/[id]/items/route",pathname:"/api/listas/[id]/items",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/Downloads/multa-main/multa-main/app/api/listas/[id]/items/route.ts",nextConfigOutput:"",userland:f}),{workAsyncStorage:C,workUnitAsyncStorage:S,serverHooks:N}=A;function _(){return(0,i.patchFetch)({workAsyncStorage:C,workUnitAsyncStorage:S})}async function b(e,t,r){A.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let a="/api/listas/[id]/items/route";a=a.replace(/\/index$/,"")||"/";let i=await A.prepare(e,t,{srcPage:a,multiZoneDraftMode:!1});if(!i)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:f,params:y,nextConfig:_,parsedUrl:b,isDraftMode:C,prerenderManifest:S,routerServerContext:N,isOnDemandRevalidate:T,revalidateOnlyGenerated:O,resolvedPathname:D,clientReferenceManifest:P,serverActionsManifest:U}=i,q=(0,d.normalizeAppPath)(a),j=!!(S.dynamicRoutes[q]||S.routes[D]),M=async()=>((null==N?void 0:N.render404)?await N.render404(e,t,b,!1):t.end("This page could not be found"),null);if(j&&!C){let e=!!S.routes[D],t=S.dynamicRoutes[q];if(t&&!1===t.fallback&&!e){if(_.experimental.adapterPath)return await M();throw new v.NoFallbackError}}let H=null;!j||A.isDev||C||(H=D,H="/index"===H?"/":H);let I=!0===A.isDev||!j,L=j&&!I;U&&P&&(0,l.setReferenceManifestsSingleton)({page:a,clientReferenceManifest:P,serverActionsManifest:U,serverModuleMap:(0,u.createServerModuleMap)({serverActionsManifest:U})});let k=e.method||"GET",$=(0,o.getTracer)(),B=$.getActiveScopeSpan(),F={params:y,prerenderManifest:S,renderOpts:{experimental:{authInterrupts:!!_.experimental.authInterrupts},cacheComponents:!!_.cacheComponents,supportsDynamicResponse:I,incrementalCache:(0,s.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:_.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a)=>A.onRequestError(e,t,a,N)},sharedContext:{buildId:f}},G=new p.NodeNextRequest(e),K=new p.NodeNextResponse(t),W=c.NextRequestAdapter.fromNodeNextRequest(G,(0,c.signalFromNodeResponse)(t));try{let i=async e=>A.handle(W,F).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=$.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=r.get("next.route");if(n){let t=`${k} ${n}`;e.setAttributes({"next.route":n,"http.route":n,"next.span_name":t}),e.updateName(t)}else e.updateName(`${k} ${a}`)}),l=!!(0,s.getRequestMeta)(e,"minimalMode"),u=async s=>{var o,u;let d=async({previousCacheEntry:n})=>{try{if(!l&&T&&O&&!n)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let a=await i(s);e.fetchMetrics=F.renderOpts.fetchMetrics;let o=F.renderOpts.pendingWaitUntil;o&&r.waitUntil&&(r.waitUntil(o),o=void 0);let u=F.renderOpts.collectedTags;if(!j)return await (0,E.sendResponse)(G,K,a,F.renderOpts.pendingWaitUntil),null;{let e=await a.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(a.headers);u&&(t[x.NEXT_CACHE_TAGS_HEADER]=u),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==F.renderOpts.collectedRevalidate&&!(F.renderOpts.collectedRevalidate>=x.INFINITE_CACHE)&&F.renderOpts.collectedRevalidate,n=void 0===F.renderOpts.collectedExpire||F.renderOpts.collectedExpire>=x.INFINITE_CACHE?void 0:F.renderOpts.collectedExpire;return{value:{kind:w.CachedRouteKind.APP_ROUTE,status:a.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:n}}}}catch(t){throw(null==n?void 0:n.isStale)&&await A.onRequestError(e,t,{routerKind:"App Router",routePath:a,routeType:"route",revalidateReason:(0,R.getRevalidateReason)({isStaticGeneration:L,isOnDemandRevalidate:T})},N),t}},p=await A.handleResponse({req:e,nextConfig:_,cacheKey:H,routeKind:n.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:S,isRoutePPREnabled:!1,isOnDemandRevalidate:T,revalidateOnlyGenerated:O,responseGenerator:d,waitUntil:r.waitUntil,isMinimalMode:l});if(!j)return null;if((null==p||null==(o=p.value)?void 0:o.kind)!==w.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(u=p.value)?void 0:u.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});l||t.setHeader("x-nextjs-cache",T?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),C&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,h.fromNodeOutgoingHttpHeaders)(p.value.headers);return l&&j||c.delete(x.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,g.getCacheControlHeader)(p.cacheControl)),await (0,E.sendResponse)(G,K,new Response(p.value.body,{headers:c,status:p.value.status||200})),null};B?await u(B):await $.withPropagatedContext(e.headers,()=>$.trace(m.BaseServerSpan.handleRequest,{spanName:`${k} ${a}`,kind:o.SpanKind.SERVER,attributes:{"http.method":k,"http.target":e.url}},u))}catch(t){if(t instanceof v.NoFallbackError||await A.onRequestError(e,t,{routerKind:"App Router",routePath:q,routeType:"route",revalidateReason:(0,R.getRevalidateReason)({isStaticGeneration:L,isOnDemandRevalidate:T})}),j)throw t;return await (0,E.sendResponse)(G,K,new Response(null,{status:500})),null}}e.s(["handler",()=>b,"patchFetch",()=>_,"routeModule",()=>A,"serverHooks",()=>N,"workAsyncStorage",()=>C,"workUnitAsyncStorage",()=>S]),r()}catch(e){r(e)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__ae78701f._.js.map
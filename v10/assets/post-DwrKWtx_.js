const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-CQ3XODTH.js","assets/main-XZfKW5oW.js","assets/vendor-gzd0YkcT.js"])))=>i.map(i=>d[i]);
import{_ as b}from"./main-XZfKW5oW.js";import{j as e}from"./vendor-gzd0YkcT.js";import{e as y,b as o,w,a as k,N as C}from"./main-CQ3XODTH.js";import{getPreview as $,getPost as A,getRelacionados as m,addView as P,superDate as g,tplShare as h,fade as V,clearPostCache as D,clearRelCache as E}from"./devblog-Co34B27N.js";import"./firebase-BaoQaXbW.js";import"./firebase-C6DIho6d.js";const R=s=>`<a href="/${s.slug}" class="po_rel_card" ${o(s.resumen||s.titulo)}><div class="po_rel_img"><img src="${s.imagen}" alt="${s.imagenAlt||s.titulo}" loading="lazy"/></div><div class="po_rel_info"><span class="po_rel_cat"><i class="fas fa-paw"></i> ${s.categoria}</span><strong>${s.titulo}</strong><span class="po_rel_meta"><i class="fas fa-clock"></i> ${s.tiempo_lectura} · <i class="fas fa-eye"></i> ${s.vistas||0}</span></div></a>`,B=s=>{const i=s&&$(s);return i?`
    <div class="po_wrap"><div class="po_layout">
      <div class="po_content">
        <div class="po_hero po_fade po_visible" style="--d:0s">
          <img src="${i.imagen}" alt="${i.imagenAlt||i.titulo}" class="po_hero_img" loading="eager"/>
          <div class="po_hero_over">
            <a href="/blog" class="po_back" ${o("Volver")}><i class="fas fa-arrow-left"></i> Blog</a>
            <div class="po_hero_badges"><span class="po_cat_badge" ${o(i.categoria)}><i class="fas fa-paw"></i> ${i.categoria}</span></div>
          </div>
        </div>
        <header class="po_header po_fade po_visible" style="--d:0s">
          <h1 class="po_titulo">${i.titulo}</h1>
          <p class="po_resumen">${i.resumen}</p>
          <div class="po_meta">
            <span><i class="fas fa-user-pen"></i> ${i.autor}</span>
            <span><i class="fas fa-calendar"></i> ${g(i.creado,!0)}</span>
            <span><i class="fas fa-clock"></i> ${i.tiempo_lectura}</span>
            <span><i class="fas fa-eye"></i> ${i.vistas||0}</span>
          </div>
        </header>
        <div class="po_contenido po_fade" style="--d:.1s"><div class="po_sk_body">${'<div class="po_sk_p shimmer"></div>'.repeat(6)}</div></div>
      </div>
      <aside class="po_sidebar">${'<div class="po_sk_side shimmer"></div>'.repeat(3)}</aside>
    </div></div>`:`<div class="po_wrap"><div class="po_layout"><div class="po_content"><div class="po_sk_img shimmer"></div><div class="po_sk_body"><div class="po_sk_cat shimmer"></div><div class="po_sk_tit shimmer"></div><div class="po_sk_tit po_sk_t2 shimmer"></div><div class="po_sk_meta shimmer"></div>${'<div class="po_sk_p shimmer"></div>'.repeat(5)}</div></div><aside class="po_sidebar">${'<div class="po_sk_side shimmer"></div>'.repeat(3)}</aside></div></div>`},j=async(s,i=!1)=>{if(s)try{const d=$(s),[r,_]=await Promise.all([A(s,i),d?m(s,d.categoria,i):Promise.resolve([])]);if(!r?.data?.activo){e("#wimain").html('<div class="po_err dpvc"><i class="fas fa-paw"></i><h2>Historia no encontrada</h2><p>No existe o no está disponible 🐾</p><a href="/blog" class="po_back_btn"><i class="fas fa-arrow-left"></i> Ver historias</a></div>');return}const{data:a,fromCache:t}=r;!t&&!i&&P(s);const n=_.length?_:await m(s,a.categoria,i),v=g(a.creado,!0),c=(a.tags||[]).map(l=>`<span class="po_tag">#${l}</span>`).join(""),f=(a.vistas||0)+1,u=y.user?.usuario;e("#wimain").html(`
      <div class="po_wrap"><div class="po_layout">
        <div class="po_content">
          <div class="po_hero po_fade" style="--d:0s">
            <img src="${a.imagen}" alt="${a.imagenAlt||a.titulo}" class="po_hero_img" loading="eager"/>
            <div class="po_hero_over">
              <a href="/blog" class="po_back" ${o("Volver")}><i class="fas fa-arrow-left"></i> Blog</a>
              <div class="po_hero_badges">
                <span class="po_cat_badge" ${o(a.categoria)}><i class="fas fa-paw"></i> ${a.categoria}</span>
                ${a.destacado?`<span class="po_dest_badge" ${o("Destacada")}><i class="fas fa-star"></i> Destacado</span>`:""}
              </div>
            </div>
          </div>
          <header class="po_header po_fade" style="--d:.1s">
            <h1 class="po_titulo">${a.titulo}</h1>
            <p class="po_resumen">${a.resumen}</p>
            <div class="po_meta">
              <span ${o("Autor")}><i class="fas fa-user-pen"></i> ${a.autor}</span>
              <span ${o("Fecha")}><i class="fas fa-calendar"></i> ${v}</span>
              <span ${o("Lectura")}><i class="fas fa-clock"></i> ${a.tiempo_lectura}</span>
              <span ${o("Vistas")}><i class="fas fa-eye"></i> ${f}</span>
              ${t?`<span class="po_cache_badge" ${o("Cache ⚡")}><i class="fas fa-bolt"></i></span>`:""}
            </div>
          </header>
          <div class="po_contenido po_fade" style="--d:.2s">${a.contenido}</div>
          ${c?`<div class="po_tags po_fade" style="--d:.35s">${c}</div>`:""}
          <div class="po_share po_fade" style="--d:.45s">
            <span><i class="fas fa-share-nodes"></i> Comparte</span>
            <div class="po_share_btns">${h(a.titulo)}<button class="po_share_btn po_copy" style="--sc:var(--mco)" ${o("Copiar")}><i class="fas fa-link"></i></button></div>
          </div>
        </div>
        <aside class="po_sidebar">
          <div class="po_side_card po_fade" style="--d:.15s">
            <div class="po_side_title"><i class="fas fa-user-pen"></i> Autor</div>
            <div class="po_autor_box"><div class="po_autor_av"><img src="/historiawi/v10/logo.webp" alt="${a.autor}"/></div><div class="po_autor_info"><strong>${a.autor}</strong><span>Historiawi 🐾</span></div></div>
          </div>
          <div class="po_side_card po_fade" style="--d:.25s">
            <div class="po_side_title"><i class="fas fa-circle-info"></i> Info</div>
            <ul class="po_info_list">
              <li><i class="fas fa-folder"></i><span>Categoría</span><strong>${a.categoria}</strong></li>
              <li><i class="fas fa-clock"></i><span>Lectura</span><strong>${a.tiempo_lectura}</strong></li>
              <li><i class="fas fa-eye"></i><span>Vistas</span><strong>${f}</strong></li>
              <li><i class="fas fa-calendar"></i><span>Publicado</span><strong>${v}</strong></li>
            </ul>
          </div>
          <div class="po_side_card po_fade" style="--d:.35s">
            <div class="po_side_title"><i class="fas fa-share-nodes"></i> Compartir</div>
            <div class="po_share_full">${h(a.titulo,!0)}<button class="po_share_full_btn po_copy2" style="--sc:var(--mco)" ${o("Copiar")}><i class="fas fa-link"></i> Copiar</button></div>
          </div>
          ${n.length?`<div class="po_side_card po_fade" style="--d:.45s"><div class="po_side_title"><i class="fas fa-heart"></i> Te gustará</div><div class="po_relacionados">${n.map(R).join("")}</div></div>`:""}
          ${c?`<div class="po_side_card po_fade" style="--d:.55s"><div class="po_side_title"><i class="fas fa-tags"></i> Tags</div><div class="po_tags po_tags_side">${c}</div></div>`:""}
          ${u?`<div class="po_side_card po_admin_card po_fade" style="--d:.65s">
            <div class="po_side_title"><i class="fas fa-screwdriver-wrench"></i> Admin</div>
            <div class="po_admin_info">
              <div class="po_admin_row"><i class="fas fa-fingerprint"></i><span>ID</span><code class="po_admin_id">${a.id}</code></div>
              <div class="po_admin_row"><i class="fas fa-${t?"bolt":"database"}"></i><span>Fuente</span><strong class="po_admin_estado ${t?"ok":"off"}">${t?"⚡ Cache":"☁️ Fire"}</strong></div>
            </div>
            <div class="po_admin_actions">
              <a href="/nuevo?edit=${s}" class="po_admin_btn_edit" ${o("Editar")}><i class="fas fa-pen"></i> Editar</a>
              <button id="po_refresh" class="po_admin_btn_refresh" ${o("Recargar")}><i class="fas fa-rotate"></i></button>
            </div>
          </div>`:""}
        </aside>
      </div></div>`),V("po_fade"),w(".po_side_card",null,{anim:"wi_fadeUp",stagger:60}),e(document).on("click.post",".po_copy,.po_copy2",()=>k(location.href,".po_copy","¡Enlace copiado! 🔗")).on("click.post",".po_rel_card",function(l){l.preventDefault(),b(()=>import("./main-CQ3XODTH.js").then(p=>p.p),__vite__mapDeps([0,1,2])).then(p=>p.rutas.navigate(e(this).attr("href")))}).on("click.post","#po_refresh",async()=>{e("#po_refresh").html('<i class="fas fa-spinner fa-spin"></i>').prop("disabled",!0),D(s),E(a.categoria),await j(s,!0)})}catch(d){console.error("[post]",d),C("Error al cargar","error")}},H=()=>e(document).off(".post");export{H as cleanup,j as init,B as render};

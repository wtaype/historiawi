const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-BwmAh3eW.js","assets/main-Xk6liCy7.js","assets/vendor-gzd0YkcT.js"])))=>i.map(i=>d[i]);
import{_ as b}from"./main-Xk6liCy7.js";import{j as l}from"./vendor-gzd0YkcT.js";import{b as o,e as w,w as y,a as k,N as C,g as u,s as $}from"./main-BwmAh3eW.js";import{db as v}from"./firebase-xy2mMf8U.js";import{u as I,d as g,i as T,a as A,g as R,q as F,l as D,o as E,w as h,c as U}from"./firebase-BmOP8wkl.js";const m="blog",x=12,P=6,_=a=>`wi_post_${a}`,f=a=>`wi_rel_${a}`,L=async(a,i=!1)=>{if(!i){const e=u(_(a));if(e)return{data:e,fromCache:!0}}const t=await A(g(v,m,a));if(!t.exists())return null;const s=t.data();return $(_(a),s,x),{data:s,fromCache:!1}},S=async(a,i,t=!1)=>{if(!t){const c=u(f(i));if(c)return c.filter(r=>r.id!==a).slice(0,3)}const e=(await R(F(U(v,m),h("activo","==",!0),h("categoria","==",i),E("creado","desc"),D(5))).catch(()=>null))?.docs.map(c=>c.data())||[];return e.length&&$(f(i),e,P),e.filter(c=>c.id!==a).slice(0,3)},Q=()=>`
  <div class="po_wrap">
    <div class="po_layout">
      <div class="po_content">
        <div class="po_sk_img shimmer"></div>
        <div class="po_sk_body">
          <div class="po_sk_cat shimmer"></div>
          <div class="po_sk_tit shimmer"></div>
          <div class="po_sk_tit po_sk_t2 shimmer"></div>
          <div class="po_sk_meta shimmer"></div>
          ${[1,2,3,4,5].map(()=>'<div class="po_sk_p shimmer"></div>').join("")}
        </div>
      </div>
      <aside class="po_sidebar">
        ${[1,2,3].map(()=>'<div class="po_sk_side shimmer"></div>').join("")}
      </aside>
    </div>
  </div>`,j=a=>[{icon:"fab fa-facebook",url:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`,color:"#1877F2",label:"Facebook"},{icon:"fab fa-twitter",url:`https://twitter.com/intent/tweet?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(a.titulo)}`,color:"#1da1f2",label:"Twitter"},{icon:"fab fa-whatsapp",url:`https://wa.me/?text=${encodeURIComponent(a.titulo+" "+location.href)}`,color:"#25D366",label:"WhatsApp"}].map(i=>`
  <a href="${i.url}" target="_blank" rel="noopener"
     class="po_share_btn" style="--sc:${i.color}" ${o(i.label)}>
    <i class="${i.icon}"></i>
  </a>`).join(""),V=a=>[{icon:"fab fa-facebook",url:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`,color:"#1877F2",label:"Facebook"},{icon:"fab fa-twitter",url:`https://twitter.com/intent/tweet?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(a.titulo)}`,color:"#1da1f2",label:"Twitter"},{icon:"fab fa-whatsapp",url:`https://wa.me/?text=${encodeURIComponent(a.titulo+" "+location.href)}`,color:"#25D366",label:"WhatsApp"},{icon:"fab fa-telegram",url:`https://t.me/share/url?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(a.titulo)}`,color:"#0088cc",label:"Telegram"}].map(i=>`
  <a href="${i.url}" target="_blank" rel="noopener"
     class="po_share_full_btn" style="--sc:${i.color}" ${o(i.label)}>
    <i class="${i.icon}"></i> ${i.label}
  </a>`).join(""),q=a=>`
  <a href="/${a.slug}" class="po_rel_card" ${o(a.resumen||a.titulo)}>
    <div class="po_rel_img">
      <img src="${a.imagen}" alt="${a.imagenAlt||a.titulo}" loading="lazy" />
    </div>
    <div class="po_rel_info">
      <span class="po_rel_cat"><i class="fas fa-paw"></i> ${a.categoria}</span>
      <strong>${a.titulo}</strong>
      <span class="po_rel_meta">
        <i class="fas fa-clock"></i> ${a.tiempo_lectura} &nbsp;·&nbsp;
        <i class="fas fa-eye"></i> ${a.vistas||0}
      </span>
    </div>
  </a>`,O=()=>requestAnimationFrame(()=>document.querySelectorAll(".po_fade").forEach(a=>{const i=parseFloat(a.style.getPropertyValue("--d")||"0")*1e3;setTimeout(()=>a.classList.add("po_visible"),i)})),H=async(a,i=!1)=>{if(a)try{const t=await L(a,i);if(!t||!t.data?.activo){l("#wimain").html(`
        <div class="po_err dpvc">
          <i class="fas fa-paw"></i>
          <h2>Historia no encontrada</h2>
          <p>Esta historia no existe o no está disponible 🐾</p>
          <a href="/blog" class="po_back_btn"><i class="fas fa-arrow-left"></i> Ver todas las historias</a>
        </div>`);return}const{data:s,fromCache:e}=t;!e&&!i&&I(g(v,m,a),{vistas:T(1)}).catch(()=>{});const c=await S(a,s.categoria,i),r=s.creado?.toDate?.()?.toLocaleDateString("es-PE",{year:"numeric",month:"long",day:"numeric"})||"",n=(s.tags||[]).map(d=>`<span class="po_tag">#${d}</span>`).join("");l("#wimain").html(`
      <div class="po_wrap">
        <div class="po_layout">

          <!-- ══ CONTENT 72% ══ -->
          <div class="po_content">

            <div class="po_hero po_fade" style="--d:0s">
              <img src="${s.imagen}" alt="${s.imagenAlt||s.titulo}" class="po_hero_img" loading="eager" />
              <div class="po_hero_over">
                <a href="/blog" class="po_back" ${o("Volver al blog")}>
                  <i class="fas fa-arrow-left"></i> Blog
                </a>
                <div class="po_hero_badges">
                  <span class="po_cat_badge" ${o(s.categoria)}><i class="fas fa-paw"></i> ${s.categoria}</span>
                  ${s.destacado?`<span class="po_dest_badge" ${o("Historia destacada")}><i class="fas fa-star"></i> Destacado</span>`:""}
                </div>
              </div>
            </div>

            <header class="po_header po_fade" style="--d:.15s">
              <h1 class="po_titulo">${s.titulo}</h1>
              <p class="po_resumen">${s.resumen}</p>
              <div class="po_meta">
                <span ${o("Autor")}><i class="fas fa-user-pen"></i> ${s.autor}</span>
                <span ${o("Fecha de publicación")}><i class="fas fa-calendar"></i> ${r}</span>
                <span ${o("Tiempo de lectura")}><i class="fas fa-clock"></i> ${s.tiempo_lectura}</span>
                <span ${o("Vistas totales")}><i class="fas fa-eye"></i> ${(s.vistas||0)+1}</span>
                ${e?`<span class="po_cache_badge" ${o("Cargado desde cache local ⚡")}><i class="fas fa-bolt"></i> Cache</span>`:""}
              </div>
            </header>

            <div class="po_contenido po_fade" style="--d:.3s">${s.contenido}</div>

            ${n?`<div class="po_tags po_fade" style="--d:.45s">${n}</div>`:""}

            <div class="po_share po_fade" style="--d:.6s">
              <span><i class="fas fa-share-nodes"></i> Comparte esta historia</span>
              <div class="po_share_btns">
                ${j(s)}
                <button class="po_share_btn po_copy" style="--sc:var(--mco)" ${o("Copiar enlace")}>
                  <i class="fas fa-link"></i>
                </button>
              </div>
            </div>

          </div>

          <!-- ══ SIDEBAR 27% ══ -->
          <aside class="po_sidebar">

            <!-- Autor -->
            <div class="po_side_card po_fade" style="--d:.2s">
              <div class="po_side_title"><i class="fas fa-user-pen"></i> Autor</div>
              <div class="po_autor_box">
                <div class="po_autor_av"><i class="fas fa-user-circle"></i></div>
                <div class="po_autor_info">
                  <strong>${s.autor}</strong>
                  <span>Historiawi 🐾</span>
                </div>
              </div>
              <p class="po_autor_bio">Apasionado por compartir historias positivas que llenan el alma de alegría y esperanza.</p>
            </div>

            <!-- Info -->
            <div class="po_side_card po_fade" style="--d:.35s">
              <div class="po_side_title"><i class="fas fa-circle-info"></i> Sobre esta historia</div>
              <ul class="po_info_list">
                <li ${o("Categoría")}><i class="fas fa-folder"></i><span>Categoría</span><strong>${s.categoria}</strong></li>
                <li ${o("Tiempo de lectura")}><i class="fas fa-clock"></i><span>Lectura</span><strong>${s.tiempo_lectura}</strong></li>
                <li ${o("Total de vistas")}><i class="fas fa-eye"></i><span>Vistas</span><strong>${(s.vistas||0)+1}</strong></li>
                <li ${o("Fecha de publicación")}><i class="fas fa-calendar"></i><span>Publicado</span><strong>${r}</strong></li>
                ${s.destacado?`<li ${o("Historia destacada")}><i class="fas fa-star"></i><span>Estado</span><strong class="po_dest_txt">Destacado ⭐</strong></li>`:""}
              </ul>
            </div>

            <!-- Compartir -->
            <div class="po_side_card po_fade" style="--d:.5s">
              <div class="po_side_title"><i class="fas fa-share-nodes"></i> Compartir</div>
              <div class="po_share_full">
                ${V(s)}
                <button class="po_share_full_btn po_copy2" style="--sc:var(--mco)" ${o("Copiar enlace")}>
                  <i class="fas fa-link"></i> Copiar enlace
                </button>
              </div>
            </div>

            <!-- Relacionados -->
            ${c.length?`
              <div class="po_side_card po_fade" style="--d:.65s">
                <div class="po_side_title"><i class="fas fa-heart"></i> También te gustará</div>
                <div class="po_relacionados">${c.map(q).join("")}</div>
              </div>`:""}

            <!-- Tags -->
            ${n?`
              <div class="po_side_card po_fade" style="--d:.8s">
                <div class="po_side_title"><i class="fas fa-tags"></i> Tags</div>
                <div class="po_tags po_tags_side">${n}</div>
              </div>`:""}

            <!-- Admin -->
            ${w.user?.usuario?`
              <div class="po_side_card po_admin_card po_fade" style="--d:.95s">
                <div class="po_side_title"><i class="fas fa-screwdriver-wrench"></i> Admin</div>
                <div class="po_admin_info">
                  <div class="po_admin_row">
                    <i class="fas fa-circle-dot" ${o(s.activo?"Post visible":"Post oculto")}></i>
                    <span>${s.activo?"Publicado":"Oculto"}</span>
                    <strong class="po_admin_estado ${s.activo?"ok":"off"}">${s.activo?"Activo":"Inactivo"}</strong>
                  </div>
                  <div class="po_admin_row" ${o("ID del post en Firestore")}>
                    <i class="fas fa-fingerprint"></i>
                    <span>ID</span>
                    <code class="po_admin_id">${s.id}</code>
                  </div>
                  <div class="po_admin_row" ${o(e?"Cargado desde cache local":"Cargado desde Firestore")}>
                    <i class="fas fa-${e?"bolt":"database"}"></i>
                    <span>Fuente</span>
                    <strong class="po_admin_estado ${e?"ok":"off"}">${e?"⚡ Cache":"☁️ Firestore"}</strong>
                  </div>
                </div>
                <div class="po_admin_actions">
                  <a href="/nuevo?edit=${a}" class="po_admin_btn_edit" ${o("Editar esta historia")}>
                    <i class="fas fa-pen"></i> Editar
                  </a>
                  <button class="po_admin_btn_refresh" id="po_refresh" ${o("Limpiar cache y recargar desde Firestore")}>
                    <i class="fas fa-rotate"></i> Actualizar
                  </button>
                </div>
              </div>`:""}

          </aside>
        </div>
      </div>`),O(),y(".po_side_card",null,{anim:"wi_fadeUp",stagger:80}),l(document).on("click",".po_copy, .po_copy2",()=>k(location.href,".po_copy","¡Enlace copiado! 🔗")),l(document).on("click",".po_rel_card",function(d){d.preventDefault(),b(()=>import("./main-BwmAh3eW.js").then(p=>p.o),__vite__mapDeps([0,1,2])).then(p=>p.rutas.navigate(l(this).attr("href")))}),l(document).on("click","#po_refresh",async()=>{l("#po_refresh").html('<i class="fas fa-spinner fa-spin"></i>').prop("disabled",!0),localStorage.removeItem(_(a)),localStorage.removeItem(f(s.categoria)),await H(a,!0)})}catch(t){console.error("post:",t),C("Error al cargar la historia","error")}},G=()=>{l(document).off("click",".po_copy, .po_copy2, .po_rel_card, #po_refresh")};export{G as cleanup,H as init,Q as render};

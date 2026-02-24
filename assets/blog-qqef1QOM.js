const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-BwmAh3eW.js","assets/main-Xk6liCy7.js","assets/vendor-gzd0YkcT.js"])))=>i.map(i=>d[i]);
import{_ as x}from"./main-Xk6liCy7.js";import{j as t}from"./vendor-gzd0YkcT.js";import{w as E,N as k,b as r,g as F,s as A}from"./main-BwmAh3eW.js";import{db as v}from"./firebase-xy2mMf8U.js";import{q as C,c as g,w as $,o as T,l as S,g as D}from"./firebase-BmOP8wkl.js";const y="blog",p=9,I=4,L=2,P=(a,o)=>`wi_blog_${a}_${o}`,V=a=>({...a,creado:a.creado?.toDate?.()?.getTime?.()??a.creado??null,actualizado:a.actualizado?.toDate?.()?.getTime?.()??a.actualizado??null}),z=async(a="todo",o="nuevo",c=!1)=>{const n=P(a,o);if(!c){const i=F(n);if(Array.isArray(i)&&i.length)return console.log(`[blog] cache hit → ${n} (${i.length} posts)`),{lista:i,fromCache:!0}}console.log(`[blog] firestore → cat:${a} ord:${o}`);try{let i;a==="todo"?i=C(g(v,y),$("activo","==",!0),T("creado","desc"),S(50)):i=C(g(v,y),$("activo","==",!0),$("categoria","==",a),T("creado","desc"),S(50));let e=(await D(i)).docs.map(s=>V(s.data()));return o==="vistas"&&e.sort((s,l)=>(l.vistas||0)-(s.vistas||0)),console.log(`[blog] firestore → ${e.length} posts encontrados`),e.length&&A(n,e,a==="todo"?L:I),{lista:e,fromCache:!1}}catch(i){if(console.error("[blog] firestore error:",i.code,i.message),i.code==="failed-precondition"){console.warn("[blog] índice faltante → fallback sin orderBy");let e=(await D(g(v,y))).docs.map(s=>V(s.data())).filter(s=>s.activo===!0);return a!=="todo"&&(e=e.filter(s=>s.categoria===a)),e.sort((s,l)=>o==="vistas"?(l.vistas||0)-(s.vistas||0):(l.creado||0)-(s.creado||0)),e.length&&A(n,e,L),{lista:e,fromCache:!1}}throw i}},w=[{id:"todo",icon:"fa-paw",label:"Todas",color:"var(--mco)"},{id:"Animales",icon:"fa-dog",label:"Animales",color:"#0EBEFF"},{id:"Naturaleza",icon:"fa-leaf",label:"Naturaleza",color:"#25b62a"},{id:"Amor",icon:"fa-heart",label:"Amor",color:"#ff3849"},{id:"Inspiración",icon:"fa-star",label:"Inspiración",color:"#ffa726"},{id:"Vida",icon:"fa-seedling",label:"Vida",color:"#6a00f5"}],N=[{id:"nuevo",icon:"fa-clock",label:"Más nuevos"},{id:"vistas",icon:"fa-fire",label:"Más vistos"}],B=a=>{if(!a)return"";try{return new Date(a).toLocaleDateString("es-PE",{day:"numeric",month:"short",year:"numeric"})}catch{return""}},q=()=>`
  <div class="bl_card_sk">
    <div class="bl_sk_img shimmer"></div>
    <div class="bl_sk_body">
      <div class="bl_sk_cat shimmer"></div>
      <div class="bl_sk_tit shimmer"></div>
      <div class="bl_sk_tit bl_sk_t2 shimmer"></div>
      <div class="bl_sk_p shimmer"></div>
      <div class="bl_sk_p bl_sk_p2 shimmer"></div>
      <div class="bl_sk_foot shimmer"></div>
    </div>
  </div>`,Q=()=>`
  <div class="bl_wrap">

    <!-- Hero -->
    <div class="bl_hero bl_fade" style="--d:0s">
      <span class="bl_hero_tag"><i class="fas fa-paw"></i> Historiawi Blog</span>
      <h1 class="bl_hero_tit">Historias que <span class="bl_grad">llenan el alma</span> 🐾</h1>
      <div class="bl_hero_stats" id="bl_stats">
        <span class="bl_stat" ${r("Total de historias")}><i class="fas fa-book-open"></i> <strong id="bl_total">...</strong> historias</span>
        <span class="bl_stat_div"></span>
        <span class="bl_stat" ${r("Categorías")}><i class="fas fa-folder"></i> <strong>5</strong> categorías</span>
        <span class="bl_stat_div"></span>
        <span class="bl_stat" ${r("Siempre gratis")}><i class="fas fa-heart"></i> <strong>100%</strong> gratis</span>
      </div>
    </div>

    <!-- Barra filtros -->
    <div class="bl_bar">
      <div class="bl_cats">
        ${w.map(a=>`
          <button class="bl_cat_btn ${a.id==="todo"?"active":""}"
            data-cat="${a.id}" style="--cc:${a.color}" ${r(a.label)}>
            <i class="fas ${a.icon}"></i><span>${a.label}</span>
          </button>`).join("")}
      </div>
      <div class="bl_bar_right">
        <div class="bl_orden">
          ${N.map(a=>`
            <button class="bl_ord_btn ${a.id==="nuevo"?"active":""}"
              data-ord="${a.id}" ${r(a.label)}>
              <i class="fas ${a.icon}"></i><span>${a.label}</span>
            </button>`).join("")}
        </div>
        <button class="bl_refresh_btn" id="bl_refresh" ${r("Limpiar cache y recargar")}>
          <i class="fas fa-rotate"></i>
        </button>
      </div>
    </div>

    <!-- Info resultado -->
    <div class="bl_result_bar" id="bl_result_bar"></div>

    <!-- Grid -->
    <div class="bl_grid" id="bl_grid">
      ${[...Array(p)].map(q).join("")}
    </div>

    <!-- Ver más -->
    <div class="bl_mas_wrap" id="bl_mas_wrap" style="display:none">
      <button class="bl_mas_btn" id="bl_mas" ${r("Ver más historias")}>
        <i class="fas fa-plus"></i> Ver más historias
      </button>
    </div>

    <!-- Sin resultados -->
    <div class="bl_empty dpvc" id="bl_empty" style="display:none">
      <i class="fas fa-paw"></i>
      <h3>Sin historias aquí aún</h3>
      <p>Pronto habrá historias en esta categoría 🐾</p>
    </div>

  </div>`,O=(a,o)=>{const c=w.find(d=>d.id===a.categoria)||w[1],n=B(a.creado),i=a.imagen||"https://placehold.co/600x400?text=🐾";return`
    <article class="bl_card bl_fade" style="--d:${o*.055}s"
      data-slug="${a.slug||a.id}" ${r(a.resumen||a.titulo)}>
      <div class="bl_card_img">
        <img src="${i}" alt="${a.imagenAlt||a.titulo}" loading="lazy"
          onerror="this.src='https://placehold.co/600x400?text=🐾'" />
        <div class="bl_card_over">
          <span class="bl_card_cat" style="--cc:${c.color}">
            <i class="fas ${c.icon}"></i> ${a.categoria||"Sin categoría"}
          </span>
          ${a.destacado?`<span class="bl_card_dest" ${r("Historia destacada")}><i class="fas fa-star"></i></span>`:""}
        </div>
      </div>
      <div class="bl_card_body">
        <h2 class="bl_card_tit">${a.titulo}</h2>
        <p class="bl_card_res">${a.resumen||""}</p>
        <div class="bl_card_meta">
          <span ${r("Autor")}><i class="fas fa-user-pen"></i> ${a.autor||"Autor"}</span>
          <span ${r("Tiempo de lectura")}><i class="fas fa-clock"></i> ${a.tiempo_lectura||"—"}</span>
          <span ${r("Vistas")}><i class="fas fa-eye"></i> ${a.vistas||0}</span>
        </div>
        <div class="bl_card_footer">
          <span class="bl_card_fecha"><i class="fas fa-calendar"></i> ${n}</span>
          <span class="bl_card_leer">Leer <i class="fas fa-arrow-right"></i></span>
        </div>
      </div>
    </article>`},j=(a=document)=>requestAnimationFrame(()=>a.querySelectorAll?.(".bl_fade:not(.bl_visible)").forEach(o=>{const c=parseFloat(o.style.getPropertyValue("--d")||"0")*1e3;setTimeout(()=>o.classList.add("bl_visible"),c)})),U=async()=>{let a="todo",o="nuevo",c=0,n=[],i=!1;const d=(s,l=!1)=>{const f=t("#bl_grid");l||(f.html(""),c=0);const m=l?c*p:0,_=m+p,b=s.slice(m,_);if(!b.length&&!l){t("#bl_empty").show(),t("#bl_mas_wrap").hide();return}t("#bl_empty").hide(),f.append(b.map((h,u)=>O(h,u)).join("")),j(f[0]),t("#bl_mas_wrap").toggle(_<s.length)},e=async(s=!1)=>{if(!i){i=!0,t("#bl_grid").html([...Array(p)].map(q).join("")),t("#bl_empty").hide(),t("#bl_mas_wrap").hide(),t("#bl_result_bar").html("");try{const{lista:l,fromCache:f}=await z(a,o,s);n=l;const m=f?`<span class="bl_cache_tag" ${r("⚡ Desde cache local")}><i class="fas fa-bolt"></i> Cache</span>`:`<span class="bl_fire_tag"  ${r("☁️ Desde Firestore")}><i class="fas fa-database"></i> Firestore</span>`;t("#bl_result_bar").html(l.length?`<span><strong>${l.length}</strong> historia${l.length!==1?"s":""}</span>${m}`:`<span>Sin resultados</span>${m}`);const _=l.length;let b=0;const h=t("#bl_total");h.text(0);const u=setInterval(()=>{b+=Math.ceil(_/25)||1,b>=_?(h.text(_),clearInterval(u)):h.text(b)},30);d(l),j(document.querySelector(".bl_hero"))}catch(l){console.error("[blog] init error:",l),k("No se pudieron cargar las historias","error"),t("#bl_grid").html(""),t("#bl_empty").show()}i=!1}};await e(),E(".bl_hero",null,{anim:"wi_fadeUp"}),t(document).on("click",".bl_cat_btn",function(){const s=t(this).data("cat");s!==a&&(a=s,t(".bl_cat_btn").removeClass("active"),t(this).addClass("active"),c=0,e())}),t(document).on("click",".bl_ord_btn",function(){const s=t(this).data("ord");s!==o&&(o=s,t(".bl_ord_btn").removeClass("active"),t(this).addClass("active"),c=0,e())}),t(document).on("click","#bl_refresh",async function(){const s=t(this);s.html('<i class="fas fa-spinner fa-spin"></i>').prop("disabled",!0),Object.keys(localStorage).filter(l=>l.startsWith("wi_blog_")).forEach(l=>localStorage.removeItem(l)),await e(!0),s.html('<i class="fas fa-rotate"></i>').prop("disabled",!1),k("Cache limpiado ✅","success")}),t(document).on("click","#bl_mas",function(){c++,d(n,!0)}),t(document).on("click",".bl_card",function(){const s=t(this).data("slug");s&&x(()=>import("./main-BwmAh3eW.js").then(l=>l.o),__vite__mapDeps([0,1,2])).then(l=>l.rutas.navigate(`/${s}`))})},W=()=>{t(document).off("click",".bl_cat_btn, .bl_ord_btn, #bl_refresh, #bl_mas, .bl_card")};export{W as cleanup,U as init,Q as render};

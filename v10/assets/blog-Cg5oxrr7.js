const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-CQ3XODTH.js","assets/main-XZfKW5oW.js","assets/vendor-gzd0YkcT.js"])))=>i.map(i=>d[i]);
import{_ as $}from"./main-XZfKW5oW.js";import{j as s}from"./vendor-gzd0YkcT.js";import{w as y,N as h,b as i}from"./main-CQ3XODTH.js";import{clearBlogCache as w,prefetchPost as C,CATS as k,skCard as v,getPosts as A,srcBadge as j,fade as u,catInfo as x,superDate as P}from"./devblog-Co34B27N.js";import"./firebase-BaoQaXbW.js";import"./firebase-C6DIho6d.js";const d=9,V=[{id:"nuevo",icon:"fa-clock",label:"Más nuevos"},{id:"vistas",icon:"fa-fire",label:"Más vistos"}],D=(a,n)=>{const r=x(a.categoria);return`
  <article class="bl_card bl_fade" style="--d:${n*.055}s" data-slug="${a.slug||a.id}">
    <div class="bl_card_img">
      <img src="${a.imagen||"https://placehold.co/600x400?text=🐾"}" alt="${a.imagenAlt||a.titulo}" loading="lazy" onerror="this.src='https://placehold.co/600x400?text=🐾'" />
      <div class="bl_card_over">
        <span class="bl_card_cat" style="--cc:${r.color}"><i class="fas ${r.icon}"></i> ${a.categoria||"—"}</span>
        ${a.destacado?`<span class="bl_card_dest" ${i("Destacada")}><i class="fas fa-star"></i></span>`:""}
      </div>
    </div>
    <div class="bl_card_body">
      <h2 class="bl_card_tit">${a.titulo}</h2>
      <p class="bl_card_res">${a.resumen||""}</p>
      <div class="bl_card_meta">
        <span ${i("Autor")}><i class="fas fa-user-pen"></i> ${a.autor||"Autor"}</span>
        <span ${i("Lectura")}><i class="fas fa-clock"></i> ${a.tiempo_lectura||"—"}</span>
        <span ${i("Vistas")}><i class="fas fa-eye"></i> ${a.vistas||0}</span>
      </div>
      <div class="bl_card_footer">
        <span class="bl_card_fecha"><i class="fas fa-calendar"></i> ${P(a.creado)}</span>
        <span class="bl_card_leer">Leer <i class="fas fa-arrow-right"></i></span>
      </div>
    </div>
  </article>`},M=()=>`
  <div class="bl_wrap">
    <div class="bl_hero bl_fade" style="--d:0s">
      <span class="bl_hero_tag"><i class="fas fa-paw"></i> Historiawi Blog</span>
      <h1 class="bl_hero_tit">Historias que <span class="bl_grad">llenan el alma</span> 🐾</h1>
      <div class="bl_hero_stats">
        <span class="bl_stat" ${i("Total")}><i class="fas fa-book-open"></i> <strong id="bl_total">...</strong> historias</span>
        <span class="bl_stat_div"></span>
        <span class="bl_stat" ${i("Categorías")}><i class="fas fa-folder"></i> <strong>5</strong> categorías</span>
        <span class="bl_stat_div"></span>
        <span class="bl_stat" ${i("Gratis")}><i class="fas fa-heart"></i> <strong>100%</strong> gratis</span>
      </div>
    </div>
    <div class="bl_bar">
      <div class="bl_cats">${k.map(a=>`<button class="bl_cat_btn ${a.id==="todo"?"active":""}" data-cat="${a.id}" style="--cc:${a.color}" ${i(a.label)}><i class="fas ${a.icon}"></i><span>${a.label}</span></button>`).join("")}</div>
      <div class="bl_bar_right">
        <div class="bl_orden">${V.map(a=>`<button class="bl_ord_btn ${a.id==="nuevo"?"active":""}" data-ord="${a.id}" ${i(a.label)}><i class="fas ${a.icon}"></i><span>${a.label}</span></button>`).join("")}</div>
        <button class="bl_refresh_btn" id="bl_refresh" ${i("Limpiar cache")}><i class="fas fa-rotate"></i></button>
      </div>
    </div>
    <div class="bl_result_bar" id="bl_result_bar"></div>
    <div class="bl_grid" id="bl_grid">${Array(d).fill(v()).join("")}</div>
    <div class="bl_mas_wrap" id="bl_mas_wrap" style="display:none"><button class="bl_mas_btn" id="bl_mas" ${i("Ver más")}><i class="fas fa-plus"></i> Ver más historias</button></div>
    <div class="bl_empty dpvc" id="bl_empty" style="display:none"><i class="fas fa-paw"></i><h3>Sin historias aquí aún</h3><p>Pronto habrá historias 🐾</p></div>
  </div>`,N=async()=>{let a="todo",n="nuevo",r=0,c=[],b=!1;const g=t=>$(()=>import("./main-CQ3XODTH.js").then(l=>l.p),__vite__mapDeps([0,1,2])).then(l=>l.rutas.navigate(t)),f=t=>{const l=s("#bl_grid");t||(l.html(""),r=0);const e=t?r*d:0,o=c.slice(e,e+d);if(!o.length&&!t){s("#bl_empty").show(),s("#bl_mas_wrap").hide();return}s("#bl_empty").hide(),l.append(o.map(D).join("")),u("bl_fade",l[0]),s("#bl_mas_wrap").toggle(e+d<c.length)},_=async t=>{if(!b){b=!0,s("#bl_grid").html(Array(d).fill(v()).join("")),s("#bl_empty,#bl_mas_wrap").hide(),s("#bl_result_bar").html("");try{const l=await A(a,n,t);c=l.lista,s("#bl_result_bar").html(`<span><strong>${c.length}</strong> historia${c.length!==1?"s":""}</span>${j(l.fromCache)}`);let e=0;const o=c.length,p=s("#bl_total"),m=setInterval(()=>{e+=Math.ceil(o/25)||1,e>=o?(p.text(o),clearInterval(m)):p.text(e)},30);f(),u("bl_fade",document.querySelector(".bl_hero"))}catch(l){console.error("[blog]",l),h("Error al cargar","error"),s("#bl_grid").html(""),s("#bl_empty").show()}b=!1}};await _(),y(".bl_hero",null,{anim:"wi_fadeUp"}),s(document).on("click.blog",".bl_cat_btn",function(){const t=s(this).data("cat");t!==a&&(a=t,r=0,s(".bl_cat_btn").removeClass("active"),s(this).addClass("active"),_())}).on("click.blog",".bl_ord_btn",function(){const t=s(this).data("ord");t!==n&&(n=t,r=0,s(".bl_ord_btn").removeClass("active"),s(this).addClass("active"),_())}).on("click.blog","#bl_refresh",async function(){s(this).html('<i class="fas fa-spinner fa-spin"></i>').prop("disabled",!0),w(),await _(!0),s(this).html('<i class="fas fa-rotate"></i>').prop("disabled",!1),h("Cache limpiado ✅","success")}).on("click.blog","#bl_mas",()=>{r++,f(!0)}).on("click.blog",".bl_card",function(){const t=s(this).data("slug");t&&g(`/${t}`)}).on("mouseenter.blog",".bl_card",function(){C(s(this).data("slug"))})},O=()=>s(document).off(".blog");export{O as cleanup,N as init,M as render};

import{j as c}from"./vendor-gzd0YkcT.js";import{c as r,l as m,d as _,v as d,w as s,S as u,b as e,y as f}from"./main-afWsqpZ7.js";import"./main-ChwGR5oC.js";const h=["Historias de animales 🐾","Momentos que inspiran ✨","Amor por la naturaleza 🌿","Historias que sanan el alma 💛"],b=[{valor:100,label:"Historias positivas",sufijo:"+"},{valor:100,label:"Gratis",sufijo:"%"},{valor:2026,label:"Actualizado",sufijo:""},{valor:5,label:"Categorías bonitas",sufijo:""}],l=[{id:"blog",icon:"fa-book-open",color:"#0EBEFF",nombre:"Blog",desc:"Historias escritas con amor para alegrar tu día",items:[{icon:"fa-paw",name:"Animales",desc:"Historias tiernas de mascotas y vida salvaje"},{icon:"fa-leaf",name:"Naturaleza",desc:"Momentos mágicos del mundo natural"},{icon:"fa-heart",name:"Inspiración",desc:"Relatos que llenan el corazón de esperanza"}]},{id:"youtube",icon:"fab fa-youtube",color:"#FF0000",nombre:"Youtube",desc:"Videos positivos y emotivos para tu día",items:[{icon:"fa-play-circle",name:"Videos bonitos",desc:"Historias en video que te emocionarán"},{icon:"fa-star",name:"Más vistos",desc:"Los videos favoritos de nuestra comunidad"},{icon:"fa-bell",name:"Nuevos videos",desc:"Lo último de nuestro canal"}]},{id:"tiktok",icon:"fab fa-tiktok",color:"#FF5C69",nombre:"TikTok",desc:"Historias cortas y emotivas en TikTok",items:[{icon:"fa-fire",name:"Trending",desc:"Los TikToks más vistos y compartidos"},{icon:"fa-smile",name:"Más bonitos",desc:"Momentos que te sacarán una sonrisa"},{icon:"fa-share",name:"Compartidos",desc:"Los más compartidos por nuestra comunidad"}]},{id:"instagram",icon:"fab fa-instagram",color:"#E1306C",nombre:"Instagram",desc:"Fotos y reels de animales y naturaleza",items:[{icon:"fa-image",name:"Fotos bonitas",desc:"Las mejores fotos de animales del mundo"},{icon:"fa-video",name:"Reels",desc:"Momentos únicos en video corto"},{icon:"fa-heart",name:"Más amados",desc:"Las publicaciones con más amor"}]},{id:"facebook",icon:"fab fa-facebook",color:"#1877F2",nombre:"Facebook",desc:"Comunidad de historias positivas en Facebook",items:[{icon:"fa-users",name:"Comunidad",desc:"Únete a nuestra familia positiva"},{icon:"fa-newspaper",name:"Publicaciones",desc:"Historias diarias para tu muro"},{icon:"fa-comment",name:"Comentarios",desc:"Comparte lo que sientes con todos"}]},{id:"herramientas",icon:"fa-toolbox",color:"#29C72E",nombre:"Herramientas",desc:"Recursos para disfrutar mejor las historias",items:[{icon:"fa-search",name:"Buscador",desc:"Encuentra la historia perfecta para ti"},{icon:"fa-bookmark",name:"Guardados",desc:"Guarda tus historias favoritas"},{icon:"fa-share-nodes",name:"Compartir",desc:"Envía alegría a quien más quieres"}]}],$=[{icon:"fa-paw",titulo:"Solo historias positivas",desc:"Seleccionamos cuidadosamente cada historia. Solo contenido que te llene de alegría, amor y esperanza. Sin negatividad."},{icon:"fa-heart",titulo:"Hecho con amor",desc:"Cada historia está elegida para tocarte el corazón. Animales, naturaleza y momentos mágicos que inspiran cada día."},{icon:"fa-rocket",titulo:"Rápido y bonito",desc:"Diseño limpio y elegante que se adapta a ti. Con 5 temas de color para disfrutar la experiencia a tu manera."}],g=[{done:!0,txt:"🐶 El perro que salvó a su familia",color:"#29C72E"},{done:!0,txt:"🦋 La mariposa que viajó 4000 km",color:"#29C72E"},{done:!1,txt:"🐬 Delfines rescatan a un buzo",color:"#0EBEFF"},{done:!1,txt:"🌸 El jardín secreto de la abuela",color:"#FF5C69"}],y=["Animales","Naturaleza","Amor","Esperanza","Vida"],k=a=>`
  <div class="ini_stat">
    <div class="ini_stat_n" data-target="${a.valor}" data-sufijo="${a.sufijo}">0</div>
    <div class="ini_stat_l">${a.label}</div>
  </div>`,C=(a,i)=>`
  <div class="ini_prev_day${i===0?" active":""}">
    <span class="ini_prev_day_n">${a}</span>
    <div class="ini_prev_dots">
      <span class="ini_dot" style="background:#0EBEFF"></span>
      ${i<3?'<span class="ini_dot" style="background:#29C72E"></span>':""}
      ${i===0?'<span class="ini_dot" style="background:#FF5C69"></span>':""}
    </div>
  </div>`,j=a=>`
  <div class="ini_prev_task${a.done?"":" pending"}">
    <i class="fas ${a.done?"fa-check-circle":"fa-circle"}" style="color:${a.done?"#29C72E":a.color}"></i>
    ${a.txt}
  </div>`,w=a=>`
  <div class="ini_cat_card" style="--cc:${a.color}">
    <div class="ini_cat_bar"></div>
    <div class="ini_cat_top">
      <div class="ini_cat_ico"><i class="${a.icon.startsWith("fab")?a.icon:"fas "+a.icon}"></i></div>
      <div class="ini_cat_info"><h3>${a.nombre}</h3><p>${a.desc}</p></div>
    </div>
    <ul class="ini_cat_tools">
      ${a.items.map(i=>`
        <li><a href="/${a.id}" class="ini_tool_a">
          <i class="fas ${i.icon}"></i>
          <div><strong>${i.name}</strong><span>${i.desc}</span></div>
          <i class="fas fa-arrow-right ini_ext"></i>
        </a></li>`).join("")}
    </ul>
  </div>`,E=(a,i)=>`
  <div class="ini_about_card" style="--d:${i*.15}s">
    <div class="ini_card_ico"><i class="fas ${a.icon}"></i></div>
    <h3>${a.titulo}</h3>
    <p>${a.desc}</p>
  </div>`,z=()=>`
<div class="ini_wrap">

  <!-- ===== HERO ===== -->
  <section class="ini_hero">
    <div class="ini_hero_content">

      <div class="ini_saludo" style="--d:0s">
        <span>${u()} Historiawis!</span><span class="ini_wave">🐾</span>
      </div>

      <h1 class="ini_titulo" style="--d:.18s">
        Historias que <span class="ini_grad">llenan el alma</span>
      </h1>

      <div class="ini_roles" style="--d:.36s">
        ${h.map((a,i)=>`<span class="ini_role${i===0?" active":""}">${a}</span>`).join("")}
      </div>

      <p class="ini_sub" style="--d:.54s">
        Descubre historias bonitas de animales y momentos mágicos de la naturaleza.
        Un centro de inspiración donde cada historia te llena de alegría, esperanza y amor por la vida. 100% gratis.
      </p>

      <div class="ini_stats" id="in_stats" style="--d:.72s">
        ${b.map(k).join("")}
      </div>

      <div class="ini_btns" style="--d:.9s">
        <a href="/blog" class="ini_btn_p"><i class="fas fa-book-open"></i> Leer historias</a>
        <a href="/youtube" class="ini_btn_s"><i class="fab fa-youtube"></i> Ver videos</a>
      </div>

    </div>

    <!-- Derecha: preview historias -->
    <div class="ini_hero_visual">
      <div class="ini_planner_preview" style="--d:.3s">
        <div class="ini_prev_header">
          <i class="fas fa-paw"></i>
          <span>Historias de hoy 🐾</span>
          <span class="ini_prev_badge"><i class="fas fa-circle"></i> Nuevas</span>
        </div>
        <div class="ini_prev_cols">
          <div class="ini_prev_left">${y.map(C).join("")}</div>
          <div class="ini_prev_right">
            <div class="ini_prev_note_title"><i class="fas fa-heart"></i> Historias del día</div>
            ${g.map(j).join("")}
            <div class="ini_prev_add"><i class="fas fa-plus"></i> Ver más historias...</div>
          </div>
        </div>
      </div>
      <div class="ini_ftech ini_ft1" style="--d:.5s"  ${e("Historias de animales")}><i class="fas fa-paw"></i></div>
      <div class="ini_ftech ini_ft2" style="--d:.65s" ${e("Naturaleza")}><i class="fas fa-leaf"></i></div>
      <div class="ini_ftech ini_ft3" style="--d:.8s"  ${e("Amor e inspiración")}><i class="fas fa-heart"></i></div>
      <div class="ini_ftech ini_ft4" style="--d:.95s" ${e("Comparte alegría")}><i class="fas fa-share-nodes"></i></div>
    </div>
  </section>

  <!-- ===== CATEGORÍAS ===== -->
  <section class="ini_cats_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">Todo lo que <span class="ini_grad">inspira</span></h2>
      <div class="ini_sec_line"></div>
      <p class="ini_sec_desc">6 espacios llenos de historias positivas, amor y momentos mágicos</p>
    </div>
    <div class="ini_cats_grid">${l.map(w).join("")}</div>
  </section>

  <!-- ===== ¿POR QUÉ? ===== -->
  <section class="ini_about_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">¿Por qué <span class="ini_grad">${r}?</span></h2>
      <div class="ini_sec_line"></div>
    </div>
    <div class="ini_about_grid">${$.map(E).join("")}</div>
  </section>

  <!-- ===== CTA ===== -->
  <section class="ini_cta_sec">
    <div class="ini_cta_wrap">
      <i class="fas fa-paw ini_cta_ico"></i>
      <h2>¿Listo para llenarte de alegría? 🐾</h2>
      <p>Empieza ahora, es completamente gratis ✨</p>
      <div class="ini_cta_chips">
        ${l.map(a=>`<a href="/${a.id}" class="ini_chip" style="--cc:${a.color}" ${e(a.desc)}><i class="${a.icon.startsWith("fab")?a.icon:"fas "+a.icon}"></i> ${a.nombre}</a>`).join("")}
      </div>
      <p class="ini_cta_autor">Creado con ❤️ por <a href="${m}" target="_blank" rel="noopener">${_}</a> · ${d} © ${f()}</p>
    </div>
  </section>

</div>`,x=()=>{let a=0;const i=c(".ini_role");setInterval(()=>{i.removeClass("active"),i.eq(a=(a+1)%i.length).addClass("active")},2800),s("#in_stats",()=>{c(".ini_stat_n").each(function(){const o=c(this),n=+o.data("target"),p=o.data("sufijo")||"";let t=0;const v=setInterval(()=>{t+=n/50,t>=n?(o.text(n+p),clearInterval(v)):o.text(Math.floor(t))},28)})}),s(".ini_cat_card",null,{anim:"wi_fadeUp",stagger:80}),s(".ini_about_card",null,{anim:"wi_fadeUp",stagger:140}),s(".ini_cta_wrap",null,{anim:"wi_fadeUp"}),s(".ini_sec_head",null,{anim:"wi_fadeUp"}),console.log(`🐾 ${r} ${d} · Inicio OK`)},T=()=>console.log("🧹 Inicio limpiado");export{T as cleanup,x as init,z as render};

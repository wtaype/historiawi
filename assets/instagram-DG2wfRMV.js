import{j as o}from"./vendor-gzd0YkcT.js";import{w as l,b as a,y as d,a as g}from"./main-BwmAh3eW.js";import"./main-Xk6liCy7.js";const e="https://www.instagram.com/historiawi",t={posts:"120+",seguidores:"2.4K+",seguidos:"180"},_=[{id:1,img:"https://picsum.photos/seed/ig1/600/600",likes:"1.2K",comentarios:"48",tag:"Animales",titulo:"🐒 Punch, el monito que creyó en sí mismo",tipo:"imagen",destacado:!0},{id:2,img:"https://picsum.photos/seed/ig2/600/600",likes:"890",comentarios:"32",tag:"Naturaleza",titulo:"🌿 El árbol que nunca se rindió",tipo:"imagen",destacado:!1},{id:3,img:"https://picsum.photos/seed/ig3/600/600",likes:"2.1K",comentarios:"76",tag:"Animales",titulo:"🐕 Max y el niño que lo salvó ❤️",tipo:"reel",destacado:!0},{id:4,img:"https://picsum.photos/seed/ig4/600/600",likes:"654",comentarios:"21",tag:"Inspiración",titulo:"💛 La mariposa que aprendió a volar",tipo:"imagen",destacado:!1},{id:5,img:"https://picsum.photos/seed/ig5/600/600",likes:"1.7K",comentarios:"59",tag:"Amor",titulo:"🌊 El delfín que curó un corazón roto",tipo:"reel",destacado:!0},{id:6,img:"https://picsum.photos/seed/ig6/600/600",likes:"743",comentarios:"28",tag:"Vida",titulo:"🦋 Una segunda oportunidad en la vida ✨",tipo:"imagen",destacado:!1},{id:7,img:"https://picsum.photos/seed/ig7/600/600",likes:"988",comentarios:"41",tag:"Animales",titulo:"🐦 El pájaro que nunca perdió la esperanza",tipo:"imagen",destacado:!1},{id:8,img:"https://picsum.photos/seed/ig8/600/600",likes:"1.4K",comentarios:"53",tag:"Naturaleza",titulo:"🌸 Cuando la naturaleza te abraza el alma",tipo:"reel",destacado:!0},{id:9,img:"https://picsum.photos/seed/ig9/600/600",likes:"821",comentarios:"35",tag:"Inspiración",titulo:"⭐ El poder de creer en ti mismo",tipo:"imagen",destacado:!1}],n=[{emoji:"🐒",label:"Punch",color:"#0EBEFF"},{emoji:"🐕",label:"Animales",color:"#ff3849"},{emoji:"🌿",label:"Naturaleza",color:"#25b62a"},{emoji:"💛",label:"Inspiración",color:"#ffa726"},{emoji:"🌊",label:"Amor",color:"#6a00f5"},{emoji:"🦋",label:"Vida",color:"#ff0050"},{emoji:"🐾",label:"Viral",color:"#0EBEFF"}],r=[{icon:"fa-dog",label:"Animales",color:"#0EBEFF"},{icon:"fa-leaf",label:"Naturaleza",color:"#25b62a"},{icon:"fa-heart",label:"Amor",color:"#ff3849"},{icon:"fa-star",label:"Inspiración",color:"#ffa726"},{icon:"fa-seedling",label:"Vida",color:"#6a00f5"}],p=s=>r.find(i=>i.label===s)?.color||"var(--mco)",f=s=>r.find(i=>i.label===s)?.icon||"fa-paw",m=(s,i)=>`
  <a href="${e}" target="_blank" rel="noopener"
    class="ig_story ig_fade" style="--d:${i*.06}s" ${a(s.label)}>
    <div class="ig_story_ring" style="--sc:${s.color}">
      <div class="ig_story_av">
        <span>${s.emoji}</span>
      </div>
    </div>
    <span class="ig_story_label">${s.label}</span>
  </a>`,v=(s,i)=>`
  <a href="${e}" target="_blank" rel="noopener"
    class="ig_post ig_fade" style="--d:${i*.07}s" ${a(s.titulo)}>
    <div class="ig_post_img">
      <img src="${s.img}" alt="${s.titulo}" loading="lazy"
        onerror="this.src='https://placehold.co/600x600?text=📸'" />

      <!-- Badge tipo -->
      ${s.tipo==="reel"?`<span class="ig_post_reel" ${a("Reel")}><i class="fas fa-film"></i></span>`:`<span class="ig_post_foto" ${a("Foto")}><i class="fas fa-image"></i></span>`}

      ${s.destacado?`<span class="ig_post_star" ${a("Post destacado")}><i class="fas fa-star"></i></span>`:""}

      <!-- Overlay hover -->
      <div class="ig_post_over">
        <div class="ig_post_over_stats">
          <span ${a("Me gusta")}><i class="fas fa-heart"></i> ${s.likes}</span>
          <span ${a("Comentarios")}><i class="fas fa-comment"></i> ${s.comentarios}</span>
        </div>
        <span class="ig_post_cat" style="--cc:${p(s.tag)}">
          <i class="fas ${f(s.tag)}"></i> ${s.tag}
        </span>
        <p class="ig_post_tit">${s.titulo}</p>
      </div>
    </div>
  </a>`,b=()=>`
  <div class="ig_wrap">

    <!-- ══ HERO ══ -->
    <section class="ig_hero ig_fade" style="--d:0s">
      <div class="ig_hero_bg"></div>
      <div class="ig_hero_sparkles" aria-hidden="true">
        ${[...Array(14)].map((s,i)=>`<span class="ig_sp" style="--si:${i}"></span>`).join("")}
      </div>

      <div class="ig_hero_inner">

        <!-- Avatar -->
        <div class="ig_profile">
          <div class="ig_av_ring">
            <div class="ig_av">
              <i class="fas fa-paw"></i>
            </div>
          </div>
          <div class="ig_av_verified" ${a("Perfil verificado")}>
            <i class="fas fa-circle-check"></i>
          </div>
        </div>

        <!-- Info -->
        <div class="ig_hero_info">
          <div class="ig_hero_name">
            <h1>historiawi</h1>
            <span class="ig_name_badge">🐾</span>
          </div>
          <p class="ig_hero_sub">@historiawi · Página de historias positivas</p>
          <p class="ig_hero_bio">
            🐾 Historias positivas de animales y naturaleza<br>
            ✨ Contenido que llena el alma · 100% original<br>
            💛 Síguenos y lleva alegría a tu feed cada día
          </p>
          <div class="ig_hero_tags">
            ${r.map(s=>`
              <span class="ig_hero_tag" style="--cc:${s.color}" ${a(s.label)}>
                <i class="fas ${s.icon}"></i> ${s.label}
              </span>`).join("")}
          </div>
        </div>

        <!-- Stats + acciones -->
        <div class="ig_hero_right">
          <div class="ig_stats_row">
            <div class="ig_stat" ${a("Posts publicados")}>
              <strong>${t.posts}</strong>
              <span>Posts</span>
            </div>
            <div class="ig_stat_div"></div>
            <div class="ig_stat" ${a("Seguidores")}>
              <strong>${t.seguidores}</strong>
              <span>Seguidores</span>
            </div>
            <div class="ig_stat_div"></div>
            <div class="ig_stat" ${a("Seguidos")}>
              <strong>${t.seguidos}</strong>
              <span>Seguidos</span>
            </div>
          </div>
          <div class="ig_acciones">
            <a href="${e}" target="_blank" rel="noopener"
              class="ig_btn_follow" ${a("¡Síguenos en Instagram!")}>
              <i class="fab fa-instagram"></i> Seguir
            </a>
            <button class="ig_btn_share" id="ig_share" ${a("Compartir perfil")}>
              <i class="fas fa-share-nodes"></i>
            </button>
          </div>
          <div class="ig_hashtags">
            <span ${a("#historiawi")}>#historiawi</span>
            <span ${a("#animales")}>#animales</span>
            <span ${a("#historias")}>#historias</span>
            <span ${a("#naturaleza")}>#naturaleza</span>
          </div>
        </div>

      </div>
    </section>

    <!-- ══ STORIES ══ -->
    <section class="ig_section">
      <div class="ig_sec_head">
        <div class="ig_sec_title">
          <span class="ig_badge_story"><i class="fas fa-circle-play"></i> Stories</span>
          <h2>Historias <span class="ig_grad">del día</span> ✨</h2>
        </div>
        <a href="${e}" target="_blank" rel="noopener"
          class="ig_ver_todo" ${a("Ver todas las stories")}>
          Ver todas <i class="fas fa-arrow-right"></i>
        </a>
      </div>
      <div class="ig_stories_row">
        ${n.map(m).join("")}
        <!-- Agregar historia (decorativo) -->
        <a href="${e}" target="_blank" rel="noopener"
          class="ig_story ig_story_add ig_fade" style="--d:${n.length*.06}s"
          ${a("Ver más stories")}>
          <div class="ig_story_ring ig_ring_add">
            <div class="ig_story_av">
              <i class="fas fa-plus"></i>
            </div>
          </div>
          <span class="ig_story_label">Más</span>
        </a>
      </div>
    </section>

    <!-- ══ GRID POSTS ══ -->
    <section class="ig_section">
      <div class="ig_sec_head">
        <div class="ig_sec_title">
          <span class="ig_badge_grid"><i class="fas fa-grid-2"></i> Posts</span>
          <h2>Galería de <span class="ig_grad">historias</span> 📸</h2>
        </div>
        <a href="${e}" target="_blank" rel="noopener"
          class="ig_ver_todo" ${a("Ver todos los posts")}>
          Ver perfil <i class="fas fa-arrow-right"></i>
        </a>
      </div>
      <div class="ig_grid">
        ${_.map(v).join("")}
      </div>
    </section>

    <!-- ══ POR QUÉ SEGUIRNOS ══ -->
    <section class="ig_section">
      <div class="ig_sec_head txc">
        <h2>¿Por qué <span class="ig_grad">seguirnos</span>? 💛</h2>
      </div>
      <div class="ig_why_grid">
        ${[{icon:"fa-images",color:"#e6683c",tit:"Contenido Visual",txt:"Fotos y reels que capturan la belleza de la naturaleza y los animales"},{icon:"fa-paw",color:"#0EBEFF",tit:"Historias Únicas",txt:"Relatos originales que no encontrarás en ningún otro lugar del mundo"},{icon:"fa-face-smile",color:"#ffa726",tit:"Solo Positividad",txt:"Cero odio, cero drama. Solo alegría, amor y esperanza para tu día"},{icon:"fa-bell",color:"#25b62a",tit:"Posts Diarios",txt:"Nuevo contenido cada día para que tu feed siempre tenga una sonrisa"}].map((s,i)=>`
          <div class="ig_why_card ig_fade" style="--d:${i*.1}s">
            <div class="ig_why_ico" style="--wc:${s.color}">
              <i class="fas ${s.icon}"></i>
            </div>
            <h3>${s.tit}</h3>
            <p>${s.txt}</p>
          </div>`).join("")}
      </div>
    </section>

    <!-- ══ CTA ══ -->
    <section class="ig_cta">
      <div class="ig_cta_bg"></div>
      <div class="ig_cta_hearts" aria-hidden="true">
        ${["❤️","🧡","💛","💚","💙","💜"].map((s,i)=>`<span class="ig_heart" style="--hi:${i}">${s}</span>`).join("")}
      </div>
      <div class="ig_cta_inner">
        <div class="ig_cta_av">
          <i class="fas fa-paw"></i>
        </div>
        <h2>¡Únete a la familia Historiawi! 🐾</h2>
        <p>Síguenos en Instagram y llena tu feed de historias que inspiran cada día</p>
        <div class="ig_cta_btns">
          <a href="${e}" target="_blank" rel="noopener"
            class="ig_cta_main" ${a("¡Seguir en Instagram!")}>
            <i class="fab fa-instagram"></i> Seguirme en Instagram
          </a>
          <button class="ig_cta_share_btn" id="ig_cta_share" ${a("Compartir perfil")}>
            <i class="fas fa-share-nodes"></i> Compartir
          </button>
        </div>
        <div class="ig_cta_stats">
          <span ${a("Posts")}><i class="fas fa-images"></i> ${t.posts} posts</span>
          <span ${a("Seguidores")}><i class="fas fa-users"></i> ${t.seguidores} seguidores</span>
          <span ${a("Categorías")}><i class="fas fa-folder"></i> 5 categorías</span>
        </div>
      </div>
    </section>

    <!-- ══ FOOTER REDES ══ -->
    <section class="ig_footer">
      <h3>También estamos en</h3>
      <div class="ig_footer_redes">
        <a href="https://www.youtube.com/@historiawi" target="_blank" rel="noopener"
          class="ig_red_btn yt" ${a("YouTube")}>
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://www.tiktok.com/@historiawi" target="_blank" rel="noopener"
          class="ig_red_btn tt" ${a("TikTok")}>
          <i class="fab fa-tiktok"></i>
        </a>
        <a href="https://www.facebook.com/historiawi" target="_blank" rel="noopener"
          class="ig_red_btn fb" ${a("Facebook")}>
          <i class="fab fa-facebook"></i>
        </a>
      </div>
      <p>Creado con ❤️ por <strong>Wilder Taype</strong> · Historiawi © ${d()}</p>
    </section>

  </div>`,y=()=>{l(".ig_fade",null,{anim:"wi_fadeUp",stagger:55}),l(".ig_why_card",null,{anim:"wi_fadeUp",stagger:80}),o(document).on("mouseenter",".ig_post",function(){o(this).find(".ig_post_over").stop(!0).fadeIn(200)}).on("mouseleave",".ig_post",function(){o(this).find(".ig_post_over").stop(!0).fadeOut(180)}),o(document).on("mouseenter",".ig_story",function(){o(this).find(".ig_story_ring").addClass("ig_ring_hover")}).on("mouseleave",".ig_story",function(){o(this).find(".ig_story_ring").removeClass("ig_ring_hover")});const s=`🐾 Historiawi en Instagram

📸 Fotos y reels de historias positivas de animales
👉 ${e}`,i=c=>{navigator.share?navigator.share({title:"Historiawi Instagram",text:s,url:e}).catch(()=>{}):g(e,c,"¡Link copiado! 🔗")};o("#ig_share, #ig_cta_share").on("click",function(){i(this)})},w=()=>{o(document).off("mouseenter mouseleave",".ig_post, .ig_story"),o("#ig_share, #ig_cta_share").off("click")};export{w as cleanup,y as init,b as render};

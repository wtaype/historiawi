import{j as o}from"./vendor-gzd0YkcT.js";import{w as n,b as s,y as r,a as d}from"./main-CQ3XODTH.js";import"./main-XZfKW5oW.js";const e="https://www.facebook.com/historiawi",t={publicaciones:"200+",seguidores:"3.8K+",me_gusta:"3.5K+"},f=[{id:1,img:"https://picsum.photos/seed/fb1/640/360",likes:"842",comentarios:"67",compartidos:"124",tag:"Animales",titulo:"🐒 Punch, el monito que creyó en sí mismo",tipo:"foto",destacado:!0},{id:2,img:"https://picsum.photos/seed/fb2/640/360",likes:"512",comentarios:"38",compartidos:"89",tag:"Naturaleza",titulo:"🌿 El árbol que nunca se rindió",tipo:"video",destacado:!1},{id:3,img:"https://picsum.photos/seed/fb3/640/360",likes:"1.4K",comentarios:"95",compartidos:"210",tag:"Animales",titulo:"🐕 Max y el niño que lo salvó ❤️",tipo:"video",destacado:!0},{id:4,img:"https://picsum.photos/seed/fb4/640/360",likes:"389",comentarios:"29",compartidos:"55",tag:"Inspiración",titulo:"💛 La mariposa que aprendió a volar",tipo:"foto",destacado:!1},{id:5,img:"https://picsum.photos/seed/fb5/640/360",likes:"976",comentarios:"73",compartidos:"158",tag:"Amor",titulo:"🌊 El delfín que curó un corazón roto",tipo:"video",destacado:!0},{id:6,img:"https://picsum.photos/seed/fb6/640/360",likes:"448",comentarios:"44",compartidos:"72",tag:"Vida",titulo:"🦋 Una segunda oportunidad en la vida ✨",tipo:"foto",destacado:!1}],b=[{emoji:"👍",label:"Me gusta",count:"2.1K",color:"#1877F2"},{emoji:"❤️",label:"Me encanta",count:"980",color:"#f33e58"},{emoji:"😮",label:"Me asombra",count:"456",color:"#f7b125"},{emoji:"😢",label:"Me entristece",count:"124",color:"#f7b125"},{emoji:"😂",label:"Me divierte",count:"310",color:"#f7b125"},{emoji:"👏",label:"Aplaudo",count:"687",color:"#1877F2"}],c=[{icon:"fa-dog",label:"Animales",color:"#0EBEFF"},{icon:"fa-leaf",label:"Naturaleza",color:"#25b62a"},{icon:"fa-heart",label:"Amor",color:"#ff3849"},{icon:"fa-star",label:"Inspiración",color:"#ffa726"},{icon:"fa-seedling",label:"Vida",color:"#6a00f5"}],p=a=>c.find(i=>i.label===a)?.color||"var(--mco)",_=a=>c.find(i=>i.label===a)?.icon||"fa-paw",u=(a,i)=>`
  <a href="${e}" target="_blank" rel="noopener"
    class="fb_post fb_fade" style="--d:${i*.08}s" ${s(a.titulo)}>
    <div class="fb_post_img">
      <img src="${a.img}" alt="${a.titulo}" loading="lazy"
        onerror="this.src='https://placehold.co/640x360?text=📘'" />

      <!-- Badge tipo -->
      ${a.tipo==="video"?`<span class="fb_post_badge fb_badge_video" ${s("Video")}><i class="fas fa-play"></i> Video</span>`:`<span class="fb_post_badge fb_badge_foto" ${s("Foto")}><i class="fas fa-image"></i> Foto</span>`}

      ${a.destacado?`<span class="fb_post_star" ${s("Publicación destacada")}><i class="fas fa-star"></i></span>`:""}

      <!-- Overlay hover -->
      <div class="fb_post_over">
        <span class="fb_post_cat" style="--cc:${p(a.tag)}">
          <i class="fas ${_(a.tag)}"></i> ${a.tag}
        </span>
        <p class="fb_post_tit">${a.titulo}</p>
        <div class="fb_post_stats">
          <span ${s("Me gusta")}><i class="fas fa-thumbs-up"></i> ${a.likes}</span>
          <span ${s("Comentarios")}><i class="fas fa-comment"></i> ${a.comentarios}</span>
          <span ${s("Compartidos")}><i class="fas fa-share"></i> ${a.compartidos}</span>
        </div>
      </div>
    </div>
  </a>`,v=(a,i)=>`
  <div class="fb_reac fb_fade" style="--d:${i*.07}s" ${s(a.label)}>
    <div class="fb_reac_emoji">${a.emoji}</div>
    <div class="fb_reac_info">
      <strong>${a.count}</strong>
      <span>${a.label}</span>
    </div>
  </div>`,$=()=>`
  <div class="fb_wrap">

    <!-- ══ HERO / PORTADA ══ -->
    <section class="fb_hero fb_fade" style="--d:0s">

      <!-- Portada estilo Facebook -->
      <div class="fb_cover">
        <div class="fb_cover_img">
          <div class="fb_cover_grad"></div>
          <div class="fb_cover_pattern" aria-hidden="true">
            ${[...Array(18)].map((a,i)=>`<span class="fb_cp" style="--ci:${i}">🐾</span>`).join("")}
          </div>
        </div>

        <!-- Avatar sobre portada -->
        <div class="fb_av_wrap">
          <div class="fb_av_ring">
            <div class="fb_av">
              <i class="fas fa-paw"></i>
            </div>
          </div>
          <div class="fb_av_verified" ${s("Página verificada")}>
            <i class="fas fa-circle-check"></i>
          </div>
        </div>
      </div>

      <!-- Info bajo portada -->
      <div class="fb_hero_body">

        <!-- Nombre + stats -->
        <div class="fb_hero_info">
          <div class="fb_hero_name">
            <h1>Historiawi</h1>
            <span class="fb_name_badge" ${s("Página verificada")}>
              <i class="fas fa-circle-check"></i>
            </span>
          </div>
          <p class="fb_hero_tipo">Página de historias · Entretenimiento</p>
          <p class="fb_hero_bio">
            🐾 Historias positivas de animales y naturaleza<br>
            ✨ Contenido que llena el alma · 100% original<br>
            💛 Dinos <strong>Me gusta</strong> y llena tu feed de alegría
          </p>

          <!-- Stats fila -->
          <div class="fb_stats_row">
            <div class="fb_stat" ${s("Publicaciones")}>
              <strong>${t.publicaciones}</strong>
              <span>Publicaciones</span>
            </div>
            <div class="fb_stat_div"></div>
            <div class="fb_stat" ${s("Seguidores")}>
              <strong>${t.seguidores}</strong>
              <span>Seguidores</span>
            </div>
            <div class="fb_stat_div"></div>
            <div class="fb_stat" ${s("Me gusta la página")}>
              <strong>${t.me_gusta}</strong>
              <span>Me gusta</span>
            </div>
          </div>

          <!-- Tags categorías -->
          <div class="fb_hero_tags">
            ${c.map(a=>`
              <span class="fb_hero_tag" style="--cc:${a.color}" ${s(a.label)}>
                <i class="fas ${a.icon}"></i> ${a.label}
              </span>`).join("")}
          </div>
        </div>

        <!-- Acciones -->
        <div class="fb_hero_right">
          <div class="fb_acciones">
            <a href="${e}" target="_blank" rel="noopener"
              class="fb_btn_like" ${s("¡Me gusta la página!")}>
              <i class="fas fa-thumbs-up"></i> Me gusta
            </a>
            <a href="${e}" target="_blank" rel="noopener"
              class="fb_btn_follow" ${s("Seguir página")}>
              <i class="fas fa-bell"></i> Seguir
            </a>
            <button class="fb_btn_share" id="fb_share" ${s("Compartir página")}>
              <i class="fas fa-share-nodes"></i>
            </button>
          </div>
          <div class="fb_hashtags">
            <span ${s("#historiawi")}>#historiawi</span>
            <span ${s("#animales")}>#animales</span>
            <span ${s("#historias")}>#historias</span>
            <span ${s("#positivo")}>#positivo</span>
          </div>
        </div>

      </div>
    </section>

    <!-- ══ REACCIONES GLOBALES ══ -->
    <section class="fb_section">
      <div class="fb_sec_head">
        <div class="fb_sec_title">
          <span class="fb_badge_reac"><i class="fas fa-face-smile"></i> Reacciones</span>
          <h2>Así nos <span class="fb_grad">quieren</span> 💙</h2>
        </div>
      </div>
      <div class="fb_reacs_grid">
        ${b.map(v).join("")}
      </div>
    </section>

    <!-- ══ PUBLICACIONES ══ -->
    <section class="fb_section">
      <div class="fb_sec_head">
        <div class="fb_sec_title">
          <span class="fb_badge_post"><i class="fas fa-newspaper"></i> Posts</span>
          <h2>Publicaciones <span class="fb_grad">recientes</span> 📘</h2>
        </div>
        <a href="${e}" target="_blank" rel="noopener"
          class="fb_ver_todo" ${s("Ver todas las publicaciones")}>
          Ver página <i class="fas fa-arrow-right"></i>
        </a>
      </div>

      <!-- Grid publicaciones 3 col landscape -->
      <div class="fb_grid">
        ${f.map(u).join("")}
      </div>
    </section>

    <!-- ══ POR QUÉ DARLE ME GUSTA ══ -->
    <section class="fb_section">
      <div class="fb_sec_head txc">
        <h2>¿Por qué <span class="fb_grad">seguirnos</span>? 💙</h2>
      </div>
      <div class="fb_why_grid">
        ${[{icon:"fa-newspaper",color:"#1877F2",tit:"Posts Diarios",txt:"Nuevas historias cada día para que tu feed siempre tenga algo bonito"},{icon:"fa-paw",color:"#0EBEFF",tit:"Animales Reales",txt:"Historias auténticas de animales y naturaleza que tocan el corazón"},{icon:"fa-share-nodes",color:"#25b62a",tit:"Fácil de Compartir",txt:"Comparte las historias con tu familia y amigos en un solo clic"},{icon:"fa-face-smile",color:"#ffa726",tit:"Solo Positividad",txt:"Sin odio, sin drama, solo alegría, amor y esperanza en tu muro"}].map((a,i)=>`
          <div class="fb_why_card fb_fade" style="--d:${i*.1}s">
            <div class="fb_why_ico" style="--wc:${a.color}">
              <i class="fas ${a.icon}"></i>
            </div>
            <h3>${a.tit}</h3>
            <p>${a.txt}</p>
          </div>`).join("")}
      </div>
    </section>

    <!-- ══ CTA ══ -->
    <section class="fb_cta">
      <div class="fb_cta_bg"></div>
      <div class="fb_cta_thumbs" aria-hidden="true">
        ${["👍","❤️","😮","👏","😂","❤️"].map((a,i)=>`<span class="fb_thumb" style="--ti:${i}">${a}</span>`).join("")}
      </div>
      <div class="fb_cta_inner">
        <div class="fb_cta_av">
          <i class="fas fa-paw"></i>
        </div>
        <h2>¡Únete a la comunidad Historiawi! 🐾</h2>
        <p>Dale Me gusta a nuestra página y llena tu muro de historias que inspiran cada día</p>
        <div class="fb_cta_btns">
          <a href="${e}" target="_blank" rel="noopener"
            class="fb_cta_main" ${s("¡Me gusta la página!")}>
            <i class="fab fa-facebook"></i> Me gusta la página
          </a>
          <button class="fb_cta_share_btn" id="fb_cta_share" ${s("Compartir página")}>
            <i class="fas fa-share-nodes"></i> Compartir
          </button>
        </div>
        <div class="fb_cta_stats">
          <span ${s("Publicaciones")}><i class="fas fa-newspaper"></i> ${t.publicaciones} posts</span>
          <span ${s("Seguidores")}><i class="fas fa-users"></i> ${t.seguidores} seguidores</span>
          <span ${s("Me gusta")}><i class="fas fa-thumbs-up"></i> ${t.me_gusta} me gusta</span>
        </div>
      </div>
    </section>

    <!-- ══ FOOTER REDES ══ -->
    <section class="fb_footer">
      <h3>También estamos en</h3>
      <div class="fb_footer_redes">
        <a href="https://www.youtube.com/@historiawi" target="_blank" rel="noopener"
          class="fb_red_btn yt" ${s("YouTube")}>
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://www.tiktok.com/@historiawi" target="_blank" rel="noopener"
          class="fb_red_btn tt" ${s("TikTok")}>
          <i class="fab fa-tiktok"></i>
        </a>
        <a href="https://www.instagram.com/historiawi" target="_blank" rel="noopener"
          class="fb_red_btn ig" ${s("Instagram")}>
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <p>Creado con ❤️ por <strong>Wilder Taype</strong> · Historiawi © ${r()}</p>
    </section>

  </div>`,w=()=>{n(".fb_fade",null,{anim:"wi_fadeUp",stagger:55}),n(".fb_why_card",null,{anim:"wi_fadeUp",stagger:80}),o(document).on("mouseenter",".fb_post",function(){o(this).find(".fb_post_over").stop(!0).fadeIn(200)}).on("mouseleave",".fb_post",function(){o(this).find(".fb_post_over").stop(!0).fadeOut(180)}),o(document).on("mouseenter",".fb_reac",function(){o(this).find(".fb_reac_emoji").addClass("fb_bounce")}).on("mouseleave",".fb_reac",function(){o(this).find(".fb_reac_emoji").removeClass("fb_bounce")});const a=`🐾 Historiawi en Facebook

📘 Historias positivas de animales y naturaleza
👉 ${e}`,i=l=>{navigator.share?navigator.share({title:"Historiawi Facebook",text:a,url:e}).catch(()=>{}):d(e,l,"¡Link copiado! 🔗")};o("#fb_share, #fb_cta_share").on("click",function(){i(this)})},y=()=>{o(document).off("mouseenter mouseleave",".fb_post, .fb_reac"),o("#fb_share, #fb_cta_share").off("click")};export{y as cleanup,w as init,$ as render};

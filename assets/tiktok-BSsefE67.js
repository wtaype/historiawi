import{j as i}from"./vendor-gzd0YkcT.js";import{w as r,b as s,y as l,a as d}from"./main-afWsqpZ7.js";import"./main-ChwGR5oC.js";const e="https://www.tiktok.com/@historiawi",o={videos:"30+",seguidores:"850+",likes:"15K+"},_=[{id:1,titulo:"🐒 Punch, el monito que creyó en sí mismo",miniatura:"https://picsum.photos/seed/tt1/400/700",vistas:"45K",likes:"3.2K",comentarios:"128",dur:"0:45",tag:"Animales",trending:!0},{id:2,titulo:"🌿 El árbol que nunca se rindió 💪",miniatura:"https://picsum.photos/seed/tt2/400/700",vistas:"28K",likes:"2.1K",comentarios:"89",dur:"0:38",tag:"Naturaleza",trending:!1},{id:3,titulo:"🐕 Max y el niño que lo salvó ❤️",miniatura:"https://picsum.photos/seed/tt3/400/700",vistas:"67K",likes:"5.4K",comentarios:"210",dur:"0:52",tag:"Animales",trending:!0},{id:4,titulo:"💛 La mariposa que aprendió a volar",miniatura:"https://picsum.photos/seed/tt4/400/700",vistas:"19K",likes:"1.8K",comentarios:"64",dur:"0:41",tag:"Inspiración",trending:!1},{id:5,titulo:"🌊 El delfín que curó un corazón roto",miniatura:"https://picsum.photos/seed/tt5/400/700",vistas:"52K",likes:"4.1K",comentarios:"175",dur:"0:49",tag:"Amor",trending:!0},{id:6,titulo:"🦋 Una segunda oportunidad en la vida ✨",miniatura:"https://picsum.photos/seed/tt6/400/700",vistas:"33K",likes:"2.7K",comentarios:"102",dur:"0:36",tag:"Vida",trending:!1},{id:7,titulo:"🐦 El pájaro que nunca perdió la esperanza",miniatura:"https://picsum.photos/seed/tt7/400/700",vistas:"41K",likes:"3.5K",comentarios:"143",dur:"0:44",tag:"Animales",trending:!1},{id:8,titulo:"🌸 Cuando la naturaleza te abraza el alma",miniatura:"https://picsum.photos/seed/tt8/400/700",vistas:"22K",likes:"1.9K",comentarios:"77",dur:"0:39",tag:"Naturaleza",trending:!0}],p=[{emoji:"🎵",nombre:"Melodía de esperanza",autor:"Historiawi",usos:"2.1K"},{emoji:"🎶",nombre:"Naturaleza y calma",autor:"Historiawi",usos:"1.8K"},{emoji:"🎸",nombre:"Corazón animado",autor:"Historiawi",usos:"956"},{emoji:"🎹",nombre:"Historias de amor",autor:"Historiawi",usos:"1.3K"}],n=[{icon:"fa-dog",label:"Animales",color:"#0EBEFF"},{icon:"fa-leaf",label:"Naturaleza",color:"#25b62a"},{icon:"fa-heart",label:"Amor",color:"#ff3849"},{icon:"fa-star",label:"Inspiración",color:"#ffa726"},{icon:"fa-seedling",label:"Vida",color:"#6a00f5"}],u=a=>n.find(t=>t.label===a)?.color||"var(--mco)",v=a=>n.find(t=>t.label===a)?.icon||"fa-paw",f=(a,t)=>`
  <a href="${e}" target="_blank" rel="noopener"
    class="tt_card tt_fade" style="--d:${t*.06}s" ${s(a.titulo)}>

    <!-- Thumbnail -->
    <div class="tt_card_img">
      <img src="${a.miniatura}" alt="${a.titulo}" loading="lazy"
        onerror="this.src='https://placehold.co/400x700?text=♪'" />

      <!-- Overlay gradiente -->
      <div class="tt_card_over"></div>

      <!-- Top badges -->
      <div class="tt_card_top">
        ${a.trending?`<span class="tt_trending" ${s("En tendencia 🔥")}><i class="fas fa-fire"></i> Trend</span>`:""}
        <span class="tt_dur">${a.dur}</span>
      </div>

      <!-- Play central -->
      <div class="tt_play_wrap">
        <div class="tt_play_btn">
          <i class="fas fa-play"></i>
        </div>
      </div>

      <!-- Barra lateral acciones estilo TikTok -->
      <div class="tt_side_actions">
        <div class="tt_action" ${s("Me gusta")}>
          <div class="tt_action_ico"><i class="fas fa-heart"></i></div>
          <span>${a.likes}</span>
        </div>
        <div class="tt_action" ${s("Comentarios")}>
          <div class="tt_action_ico"><i class="fas fa-comment-dots"></i></div>
          <span>${a.comentarios}</span>
        </div>
        <div class="tt_action" ${s("Vistas")}>
          <div class="tt_action_ico"><i class="fas fa-eye"></i></div>
          <span>${a.vistas}</span>
        </div>
      </div>

      <!-- Info bottom -->
      <div class="tt_card_bot">
        <span class="tt_cat_tag" style="--cc:${u(a.tag)}">
          <i class="fas ${v(a.tag)}"></i> ${a.tag}
        </span>
        <p class="tt_card_tit">${a.titulo}</p>
        <div class="tt_card_audio">
          <i class="fas fa-music tt_spin"></i>
          <span>Historiawi Original</span>
        </div>
      </div>
    </div>
  </a>`,m=(a,t)=>`
  <div class="tt_sound_card tt_fade" style="--d:${t*.08}s" ${s(`${a.usos} usos`)}>
    <div class="tt_sound_ico">${a.emoji}</div>
    <div class="tt_sound_info">
      <strong>${a.nombre}</strong>
      <span><i class="fas fa-user-music"></i> ${a.autor} · ${a.usos} usos</span>
    </div>
    <div class="tt_sound_btn">
      <i class="fas fa-play"></i>
    </div>
  </div>`,b=()=>`
  <div class="tt_wrap">

    <!-- ══ HERO ══ -->
    <section class="tt_hero tt_fade" style="--d:0s">
      <div class="tt_hero_bg"></div>
      <div class="tt_hero_particles" aria-hidden="true">
        ${[...Array(12)].map((a,t)=>`<span class="tt_p" style="--pi:${t}"></span>`).join("")}
      </div>

      <div class="tt_hero_inner">

        <!-- Avatar -->
        <div class="tt_profile">
          <div class="tt_av_ring">
            <div class="tt_av">
              <i class="fas fa-paw"></i>
            </div>
          </div>
          <div class="tt_av_verified" ${s("Perfil verificado")}>
            <i class="fas fa-circle-check"></i>
          </div>
        </div>

        <!-- Info canal -->
        <div class="tt_hero_info">
          <div class="tt_hero_name">
            <h1>historiawi</h1>
            <span class="tt_name_badge">🐾</span>
          </div>
          <p class="tt_hero_sub">@historiawi</p>
          <p class="tt_hero_bio">
            🐾 Historias positivas de animales<br>
            ✨ Videos que llenan el alma · 100% original
          </p>
          <div class="tt_hero_tags">
            ${n.map(a=>`
              <span class="tt_hero_tag" style="--cc:${a.color}" ${s(a.label)}>
                <i class="fas ${a.icon}"></i> ${a.label}
              </span>`).join("")}
          </div>
        </div>

        <!-- Stats + acciones -->
        <div class="tt_hero_right">
          <div class="tt_stats_row">
            <div class="tt_stat" ${s("Videos publicados")}>
              <strong>${o.videos}</strong>
              <span>Videos</span>
            </div>
            <div class="tt_stat_div"></div>
            <div class="tt_stat" ${s("Seguidores")}>
              <strong>${o.seguidores}</strong>
              <span>Seguidores</span>
            </div>
            <div class="tt_stat_div"></div>
            <div class="tt_stat" ${s("Me gustas totales")}>
              <strong>${o.likes}</strong>
              <span>Me gustas</span>
            </div>
          </div>
          <div class="tt_acciones">
            <a href="${e}" target="_blank" rel="noopener"
              class="tt_btn_follow" ${s("¡Síguenos en TikTok!")}>
              <i class="fab fa-tiktok"></i> Seguir
            </a>
            <button class="tt_btn_share" id="tt_share" ${s("Compartir perfil")}>
              <i class="fas fa-share-nodes"></i>
            </button>
          </div>
          <!-- Hashtags -->
          <div class="tt_hashtags">
            <span ${s("Ver #historiawi")}>#historiawi</span>
            <span ${s("Ver #animales")}>#animales</span>
            <span ${s("Ver #historias")}>#historias</span>
            <span ${s("Ver #viral")}>#viral</span>
          </div>
        </div>

      </div>
    </section>

    <!-- ══ VIDEOS GRILLA ══ -->
    <section class="tt_section">
      <div class="tt_sec_head">
        <div class="tt_sec_title">
          <span class="tt_badge_fire"><i class="fas fa-fire"></i> Viral</span>
          <h2>Videos que <span class="tt_grad">mueven el alma</span> 🎵</h2>
        </div>
        <a href="${e}" target="_blank" rel="noopener"
          class="tt_ver_todo" ${s("Ver todos en TikTok")}>
          Ver perfil <i class="fas fa-arrow-right"></i>
        </a>
      </div>

      <!-- Grid TikTok vertical -->
      <div class="tt_grid" id="tt_grid">
        ${_.map(f).join("")}
      </div>
    </section>

    <!-- ══ SONIDOS ORIGINALES ══ -->
    <section class="tt_section">
      <div class="tt_sec_head">
        <div class="tt_sec_title">
          <span class="tt_badge_music"><i class="fas fa-music"></i> Música</span>
          <h2>Sonidos <span class="tt_grad">originales</span> 🎶</h2>
        </div>
      </div>
      <div class="tt_sounds_grid">
        ${p.map(m).join("")}
      </div>
    </section>

    <!-- ══ POR QUÉ SEGUIRNOS ══ -->
    <section class="tt_section">
      <div class="tt_sec_head txc">
        <h2>¿Por qué <span class="tt_grad">seguirnos</span>? 🎯</h2>
      </div>
      <div class="tt_why_grid">
        ${[{icon:"fa-fire",color:"#ff3849",tit:"Contenido Viral",txt:"Videos que conectan corazones y se comparten por amor, no por fama"},{icon:"fa-paw",color:"#0EBEFF",tit:"Animales Reales",txt:"Historias auténticas de animales que inspiran y llenan el alma"},{icon:"fa-music",color:"#ffa726",tit:"Audio Original",txt:"Música y narración original creada con amor por Historiawi"},{icon:"fa-face-smile",color:"#25b62a",tit:"Solo Positividad",txt:"Cero drama, cero odio. Solo historias que te hacen sonreír"}].map((a,t)=>`
          <div class="tt_why_card tt_fade" style="--d:${t*.1}s">
            <div class="tt_why_ico" style="--wc:${a.color}">
              <i class="fas ${a.icon}"></i>
            </div>
            <h3>${a.tit}</h3>
            <p>${a.txt}</p>
          </div>`).join("")}
      </div>
    </section>

    <!-- ══ CTA ══ -->
    <section class="tt_cta">
      <div class="tt_cta_bg"></div>
      <div class="tt_cta_notes" aria-hidden="true">
        ${["🎵","🎶","♪","🎵","🎶","♪"].map((a,t)=>`<span class="tt_note" style="--ni:${t}">${a}</span>`).join("")}
      </div>
      <div class="tt_cta_inner">
        <div class="tt_cta_av">
          <i class="fas fa-paw"></i>
        </div>
        <h2>¡Únete a la familia Historiawi! 🐾</h2>
        <p>Síguenos en TikTok y recibe historias que llenan el alma cada día</p>
        <div class="tt_cta_btns">
          <a href="${e}" target="_blank" rel="noopener"
            class="tt_cta_main" ${s("¡Seguir en TikTok!")}>
            <i class="fab fa-tiktok"></i> Seguirme en TikTok
          </a>
          <button class="tt_cta_share_btn" id="tt_cta_share" ${s("Compartir perfil")}>
            <i class="fas fa-share-nodes"></i> Compartir
          </button>
        </div>
        <div class="tt_cta_stats">
          <span ${s("Videos")}><i class="fas fa-film"></i> ${o.videos} videos</span>
          <span ${s("Seguidores")}><i class="fas fa-users"></i> ${o.seguidores} seguidores</span>
          <span ${s("Me gustas")}><i class="fas fa-heart"></i> ${o.likes} likes</span>
        </div>
      </div>
    </section>

    <!-- ══ FOOTER REDES ══ -->
    <section class="tt_footer">
      <h3>También estamos en</h3>
      <div class="tt_footer_redes">
        <a href="https://www.youtube.com/@historiawi" target="_blank" rel="noopener"
          class="tt_red_btn yt" ${s("YouTube")}>
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com/historiawi" target="_blank" rel="noopener"
          class="tt_red_btn ig" ${s("Instagram")}>
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/historiawi" target="_blank" rel="noopener"
          class="tt_red_btn fb" ${s("Facebook")}>
          <i class="fab fa-facebook"></i>
        </a>
      </div>
      <p>Creado con ❤️ por <strong>Wilder Taype</strong> · Historiawi © ${l()}</p>
    </section>

  </div>`,k=()=>{r(".tt_fade",null,{anim:"wi_fadeUp",stagger:55}),r(".tt_why_card",null,{anim:"wi_fadeUp",stagger:80}),i(document).on("mouseenter",".tt_card",function(){i(this).find(".tt_play_wrap").stop(!0).fadeIn(200),i(this).find(".tt_side_actions").stop(!0).fadeIn(220)}).on("mouseleave",".tt_card",function(){i(this).find(".tt_play_wrap").stop(!0).fadeOut(180),i(this).find(".tt_side_actions").stop(!0).fadeOut(180)}),i(document).on("mouseenter",".tt_sound_card",function(){i(this).find(".tt_sound_btn").addClass("active")}).on("mouseleave",".tt_sound_card",function(){i(this).find(".tt_sound_btn").removeClass("active")});const a=`🐾 Historiawi en TikTok

🎵 Videos cortos de historias positivas de animales
👉 ${e}`,t=c=>{navigator.share?navigator.share({title:"Historiawi TikTok",text:a,url:e}).catch(()=>{}):d(e,c,"¡Link copiado! 🔗")};i("#tt_share, #tt_cta_share").on("click",function(){t(this)})},w=()=>{i(document).off("mouseenter mouseleave",".tt_card, .tt_sound_card"),i("#tt_share, #tt_cta_share").off("click")};export{w as cleanup,k as init,b as render};

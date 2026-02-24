import './facebook.css';
import $ from 'jquery';
import { wiVista, wiTip, wicopy, year } from '../widev.js';

const FB_URL = 'https://www.facebook.com/historiawi';

const stats = { publicaciones: '200+', seguidores: '3.8K+', me_gusta: '3.5K+' };

// ── PUBLICACIONES (landscape 16:9) ───────────────────────────
const posts = [
  { id:1, img:'https://picsum.photos/seed/fb1/640/360', likes:'842',  comentarios:'67', compartidos:'124', tag:'Animales',    titulo:'🐒 Punch, el monito que creyó en sí mismo',    tipo:'foto',   destacado:true  },
  { id:2, img:'https://picsum.photos/seed/fb2/640/360', likes:'512',  comentarios:'38', compartidos:'89',  tag:'Naturaleza',  titulo:'🌿 El árbol que nunca se rindió',               tipo:'video',  destacado:false },
  { id:3, img:'https://picsum.photos/seed/fb3/640/360', likes:'1.4K', comentarios:'95', compartidos:'210', tag:'Animales',    titulo:'🐕 Max y el niño que lo salvó ❤️',              tipo:'video',  destacado:true  },
  { id:4, img:'https://picsum.photos/seed/fb4/640/360', likes:'389',  comentarios:'29', compartidos:'55',  tag:'Inspiración', titulo:'💛 La mariposa que aprendió a volar',           tipo:'foto',   destacado:false },
  { id:5, img:'https://picsum.photos/seed/fb5/640/360', likes:'976',  comentarios:'73', compartidos:'158', tag:'Amor',        titulo:'🌊 El delfín que curó un corazón roto',         tipo:'video',  destacado:true  },
  { id:6, img:'https://picsum.photos/seed/fb6/640/360', likes:'448',  comentarios:'44', compartidos:'72',  tag:'Vida',        titulo:'🦋 Una segunda oportunidad en la vida ✨',       tipo:'foto',   destacado:false },
];

// ── REACCIONES GLOBALES ───────────────────────────────────────
const reacciones = [
  { emoji:'👍', label:'Me gusta',     count:'2.1K', color:'#1877F2' },
  { emoji:'❤️',  label:'Me encanta',  count:'980',  color:'#f33e58' },
  { emoji:'😮', label:'Me asombra',   count:'456',  color:'#f7b125' },
  { emoji:'😢', label:'Me entristece',count:'124',  color:'#f7b125' },
  { emoji:'😂', label:'Me divierte',  count:'310',  color:'#f7b125' },
  { emoji:'👏', label:'Aplaudo',      count:'687',  color:'#1877F2' },
];

// ── CATEGORÍAS ────────────────────────────────────────────────
const cats = [
  { icon:'fa-dog',      label:'Animales',    color:'#0EBEFF' },
  { icon:'fa-leaf',     label:'Naturaleza',  color:'#25b62a' },
  { icon:'fa-heart',    label:'Amor',        color:'#ff3849' },
  { icon:'fa-star',     label:'Inspiración', color:'#ffa726' },
  { icon:'fa-seedling', label:'Vida',        color:'#6a00f5' },
];

const catColor = tag => cats.find(c => c.label === tag)?.color || 'var(--mco)';
const catIcon  = tag => cats.find(c => c.label === tag)?.icon  || 'fa-paw';

// ── TEMPLATE POST ─────────────────────────────────────────────
const tplPost = (p, i) => `
  <a href="${FB_URL}" target="_blank" rel="noopener"
    class="fb_post fb_fade" style="--d:${i * 0.08}s" ${wiTip(p.titulo)}>
    <div class="fb_post_img">
      <img src="${p.img}" alt="${p.titulo}" loading="lazy"
        onerror="this.src='https://placehold.co/640x360?text=📘'" />

      <!-- Badge tipo -->
      ${p.tipo === 'video'
        ? `<span class="fb_post_badge fb_badge_video" ${wiTip('Video')}><i class="fas fa-play"></i> Video</span>`
        : `<span class="fb_post_badge fb_badge_foto" ${wiTip('Foto')}><i class="fas fa-image"></i> Foto</span>`}

      ${p.destacado ? `<span class="fb_post_star" ${wiTip('Publicación destacada')}><i class="fas fa-star"></i></span>` : ''}

      <!-- Overlay hover -->
      <div class="fb_post_over">
        <span class="fb_post_cat" style="--cc:${catColor(p.tag)}">
          <i class="fas ${catIcon(p.tag)}"></i> ${p.tag}
        </span>
        <p class="fb_post_tit">${p.titulo}</p>
        <div class="fb_post_stats">
          <span ${wiTip('Me gusta')}><i class="fas fa-thumbs-up"></i> ${p.likes}</span>
          <span ${wiTip('Comentarios')}><i class="fas fa-comment"></i> ${p.comentarios}</span>
          <span ${wiTip('Compartidos')}><i class="fas fa-share"></i> ${p.compartidos}</span>
        </div>
      </div>
    </div>
  </a>`;

// ── TEMPLATE REACCIÓN ─────────────────────────────────────────
const tplReaccion = (r, i) => `
  <div class="fb_reac fb_fade" style="--d:${i * 0.07}s" ${wiTip(r.label)}>
    <div class="fb_reac_emoji">${r.emoji}</div>
    <div class="fb_reac_info">
      <strong>${r.count}</strong>
      <span>${r.label}</span>
    </div>
  </div>`;

// ── RENDER ────────────────────────────────────────────────────
export const render = () => `
  <div class="fb_wrap">

    <!-- ══ HERO / PORTADA ══ -->
    <section class="fb_hero fb_fade" style="--d:0s">

      <!-- Portada estilo Facebook -->
      <div class="fb_cover">
        <div class="fb_cover_img">
          <div class="fb_cover_grad"></div>
          <div class="fb_cover_pattern" aria-hidden="true">
            ${[...Array(18)].map((_, i) =>
              `<span class="fb_cp" style="--ci:${i}">🐾</span>`).join('')}
          </div>
        </div>

        <!-- Avatar sobre portada -->
        <div class="fb_av_wrap">
          <div class="fb_av_ring">
            <div class="fb_av">
              <i class="fas fa-paw"></i>
            </div>
          </div>
          <div class="fb_av_verified" ${wiTip('Página verificada')}>
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
            <span class="fb_name_badge" ${wiTip('Página verificada')}>
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
            <div class="fb_stat" ${wiTip('Publicaciones')}>
              <strong>${stats.publicaciones}</strong>
              <span>Publicaciones</span>
            </div>
            <div class="fb_stat_div"></div>
            <div class="fb_stat" ${wiTip('Seguidores')}>
              <strong>${stats.seguidores}</strong>
              <span>Seguidores</span>
            </div>
            <div class="fb_stat_div"></div>
            <div class="fb_stat" ${wiTip('Me gusta la página')}>
              <strong>${stats.me_gusta}</strong>
              <span>Me gusta</span>
            </div>
          </div>

          <!-- Tags categorías -->
          <div class="fb_hero_tags">
            ${cats.map(c => `
              <span class="fb_hero_tag" style="--cc:${c.color}" ${wiTip(c.label)}>
                <i class="fas ${c.icon}"></i> ${c.label}
              </span>`).join('')}
          </div>
        </div>

        <!-- Acciones -->
        <div class="fb_hero_right">
          <div class="fb_acciones">
            <a href="${FB_URL}" target="_blank" rel="noopener"
              class="fb_btn_like" ${wiTip('¡Me gusta la página!')}>
              <i class="fas fa-thumbs-up"></i> Me gusta
            </a>
            <a href="${FB_URL}" target="_blank" rel="noopener"
              class="fb_btn_follow" ${wiTip('Seguir página')}>
              <i class="fas fa-bell"></i> Seguir
            </a>
            <button class="fb_btn_share" id="fb_share" ${wiTip('Compartir página')}>
              <i class="fas fa-share-nodes"></i>
            </button>
          </div>
          <div class="fb_hashtags">
            <span ${wiTip('#historiawi')}>#historiawi</span>
            <span ${wiTip('#animales')}>#animales</span>
            <span ${wiTip('#historias')}>#historias</span>
            <span ${wiTip('#positivo')}>#positivo</span>
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
        ${reacciones.map(tplReaccion).join('')}
      </div>
    </section>

    <!-- ══ PUBLICACIONES ══ -->
    <section class="fb_section">
      <div class="fb_sec_head">
        <div class="fb_sec_title">
          <span class="fb_badge_post"><i class="fas fa-newspaper"></i> Posts</span>
          <h2>Publicaciones <span class="fb_grad">recientes</span> 📘</h2>
        </div>
        <a href="${FB_URL}" target="_blank" rel="noopener"
          class="fb_ver_todo" ${wiTip('Ver todas las publicaciones')}>
          Ver página <i class="fas fa-arrow-right"></i>
        </a>
      </div>

      <!-- Grid publicaciones 3 col landscape -->
      <div class="fb_grid">
        ${posts.map(tplPost).join('')}
      </div>
    </section>

    <!-- ══ POR QUÉ DARLE ME GUSTA ══ -->
    <section class="fb_section">
      <div class="fb_sec_head txc">
        <h2>¿Por qué <span class="fb_grad">seguirnos</span>? 💙</h2>
      </div>
      <div class="fb_why_grid">
        ${[
          { icon:'fa-newspaper',   color:'#1877F2', tit:'Posts Diarios',      txt:'Nuevas historias cada día para que tu feed siempre tenga algo bonito' },
          { icon:'fa-paw',         color:'#0EBEFF', tit:'Animales Reales',    txt:'Historias auténticas de animales y naturaleza que tocan el corazón'   },
          { icon:'fa-share-nodes', color:'#25b62a', tit:'Fácil de Compartir', txt:'Comparte las historias con tu familia y amigos en un solo clic'        },
          { icon:'fa-face-smile',  color:'#ffa726', tit:'Solo Positividad',   txt:'Sin odio, sin drama, solo alegría, amor y esperanza en tu muro'        },
        ].map((w, i) => `
          <div class="fb_why_card fb_fade" style="--d:${i * 0.1}s">
            <div class="fb_why_ico" style="--wc:${w.color}">
              <i class="fas ${w.icon}"></i>
            </div>
            <h3>${w.tit}</h3>
            <p>${w.txt}</p>
          </div>`).join('')}
      </div>
    </section>

    <!-- ══ CTA ══ -->
    <section class="fb_cta">
      <div class="fb_cta_bg"></div>
      <div class="fb_cta_thumbs" aria-hidden="true">
        ${['👍','❤️','😮','👏','😂','❤️'].map((t, i) =>
          `<span class="fb_thumb" style="--ti:${i}">${t}</span>`).join('')}
      </div>
      <div class="fb_cta_inner">
        <div class="fb_cta_av">
          <i class="fas fa-paw"></i>
        </div>
        <h2>¡Únete a la comunidad Historiawi! 🐾</h2>
        <p>Dale Me gusta a nuestra página y llena tu muro de historias que inspiran cada día</p>
        <div class="fb_cta_btns">
          <a href="${FB_URL}" target="_blank" rel="noopener"
            class="fb_cta_main" ${wiTip('¡Me gusta la página!')}>
            <i class="fab fa-facebook"></i> Me gusta la página
          </a>
          <button class="fb_cta_share_btn" id="fb_cta_share" ${wiTip('Compartir página')}>
            <i class="fas fa-share-nodes"></i> Compartir
          </button>
        </div>
        <div class="fb_cta_stats">
          <span ${wiTip('Publicaciones')}><i class="fas fa-newspaper"></i> ${stats.publicaciones} posts</span>
          <span ${wiTip('Seguidores')}><i class="fas fa-users"></i> ${stats.seguidores} seguidores</span>
          <span ${wiTip('Me gusta')}><i class="fas fa-thumbs-up"></i> ${stats.me_gusta} me gusta</span>
        </div>
      </div>
    </section>

    <!-- ══ FOOTER REDES ══ -->
    <section class="fb_footer">
      <h3>También estamos en</h3>
      <div class="fb_footer_redes">
        <a href="https://www.youtube.com/@historiawi" target="_blank" rel="noopener"
          class="fb_red_btn yt" ${wiTip('YouTube')}>
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://www.tiktok.com/@historiawi" target="_blank" rel="noopener"
          class="fb_red_btn tt" ${wiTip('TikTok')}>
          <i class="fab fa-tiktok"></i>
        </a>
        <a href="https://www.instagram.com/historiawi" target="_blank" rel="noopener"
          class="fb_red_btn ig" ${wiTip('Instagram')}>
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <p>Creado con ❤️ por <strong>Wilder Taype</strong> · Historiawi © ${year()}</p>
    </section>

  </div>`;

// ── INIT ──────────────────────────────────────────────────────
export const init = () => {

  wiVista('.fb_fade',     null, { anim:'wi_fadeUp', stagger: 55 });
  wiVista('.fb_why_card', null, { anim:'wi_fadeUp', stagger: 80 });

  // Hover posts — mostrar overlay
  $(document).on('mouseenter', '.fb_post', function() {
    $(this).find('.fb_post_over').stop(true).fadeIn(200);
  }).on('mouseleave', '.fb_post', function() {
    $(this).find('.fb_post_over').stop(true).fadeOut(180);
  });

  // Hover reacciones — bounce
  $(document).on('mouseenter', '.fb_reac', function() {
    $(this).find('.fb_reac_emoji').addClass('fb_bounce');
  }).on('mouseleave', '.fb_reac', function() {
    $(this).find('.fb_reac_emoji').removeClass('fb_bounce');
  });

  // Compartir
  const shareMsg = `🐾 Historiawi en Facebook\n\n📘 Historias positivas de animales y naturaleza\n👉 ${FB_URL}`;
  const share = (el) => {
    if (navigator.share) {
      navigator.share({ title:'Historiawi Facebook', text: shareMsg, url: FB_URL }).catch(() => {});
    } else {
      wicopy(FB_URL, el, '¡Link copiado! 🔗');
    }
  };

  $('#fb_share, #fb_cta_share').on('click', function() { share(this); });
};

export const cleanup = () => {
  $(document).off('mouseenter mouseleave', '.fb_post, .fb_reac');
  $('#fb_share, #fb_cta_share').off('click');
};
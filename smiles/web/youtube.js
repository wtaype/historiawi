import './youtube.css';
import $ from 'jquery';
import { wiVista, wiTip, wicopy, year } from '../widev.js';

const YT_CHANNEL = 'https://www.youtube.com/@historiawi';
const YT_ID      = 'UCxxxxxxxxxxxxxxxxx'; // reemplaza con tu channel ID

const stats = { videos: '50+', suscriptores: '1.2K+', vistas: '25K+' };

// ── SHORTS (simulados con thumbnails verticales) ───────────────
const shorts = [
  { id:1, titulo:'🐒 Punch: El monito que creyó en sí mismo',  miniatura:'https://picsum.photos/seed/sh1/400/700',  vistas:'12K', likes:'890', dur:'0:58', tag:'Animales'    },
  { id:2, titulo:'🌿 El árbol que nunca se rindió',             miniatura:'https://picsum.photos/seed/sh2/400/700',  vistas:'8.4K',likes:'640', dur:'0:45', tag:'Naturaleza'  },
  { id:3, titulo:'🐕 Max y el niño que lo salvó',               miniatura:'https://picsum.photos/seed/sh3/400/700',  vistas:'15K', likes:'1.1K',dur:'0:52', tag:'Animales'    },
  { id:4, titulo:'💛 La mariposa que aprendió a volar',         miniatura:'https://picsum.photos/seed/sh4/400/700',  vistas:'9.2K',likes:'720', dur:'0:49', tag:'Inspiración' },
  { id:5, titulo:'🌊 El delfín que curó un corazón roto',       miniatura:'https://picsum.photos/seed/sh5/400/700',  vistas:'11K', likes:'870', dur:'0:55', tag:'Amor'        },
  { id:6, titulo:'🦋 Una segunda oportunidad en la vida',       miniatura:'https://picsum.photos/seed/sh6/400/700',  vistas:'7.8K',likes:'590', dur:'0:44', tag:'Vida'        },
];

// ── VIDEOS DESTACADOS (formato landscape) ─────────────────────
const videos = [
  { id:1, titulo:'La historia completa de Punch 🐒',           thumb:'https://picsum.photos/seed/vid1/640/360', vistas:'5.2K', likes:'410', dur:'5:32', fecha:'hace 3 días'   },
  { id:2, titulo:'10 historias de animales que te harán llorar',thumb:'https://picsum.photos/seed/vid2/640/360', vistas:'8.1K', likes:'650', dur:'12:18',fecha:'hace 1 semana' },
  { id:3, titulo:'Naturaleza salvaje: historias reales 🌿',     thumb:'https://picsum.photos/seed/vid3/640/360', vistas:'3.9K', likes:'290', dur:'7:45', fecha:'hace 2 semanas'},
];

// ── CATEGORÍAS ─────────────────────────────────────────────────
const cats = [
  { icon:'fa-dog',      label:'Animales',    color:'#0EBEFF' },
  { icon:'fa-leaf',     label:'Naturaleza',  color:'#25b62a' },
  { icon:'fa-heart',    label:'Amor',        color:'#ff3849' },
  { icon:'fa-star',     label:'Inspiración', color:'#ffa726' },
  { icon:'fa-seedling', label:'Vida',        color:'#6a00f5' },
];

// ── PLANTILLAS ─────────────────────────────────────────────────
const tplShort = (s, i) => `
  <a href="${YT_CHANNEL}/shorts" target="_blank" rel="noopener"
    class="yt_short yt_fade" style="--d:${i*0.07}s" ${wiTip(s.titulo)}>
    <div class="yt_short_img">
      <img src="${s.miniatura}" alt="${s.titulo}" loading="lazy"
        onerror="this.src='https://placehold.co/400x700?text=▶'" />
      <div class="yt_short_dur">${s.dur}</div>
      <div class="yt_short_play"><i class="fas fa-play"></i></div>
      <div class="yt_short_over">
        <span class="yt_short_tag">${s.tag}</span>
        <div class="yt_short_actions">
          <span ${wiTip('Me gusta')}><i class="fas fa-heart"></i> ${s.likes}</span>
          <span ${wiTip('Vistas')}><i class="fas fa-eye"></i> ${s.vistas}</span>
        </div>
      </div>
    </div>
    <p class="yt_short_tit">${s.titulo}</p>
  </a>`;

const tplVideo = (v, i) => `
  <a href="${YT_CHANNEL}" target="_blank" rel="noopener"
    class="yt_video_card yt_fade" style="--d:${i*0.1}s" ${wiTip(v.titulo)}>
    <div class="yt_video_thumb">
      <img src="${v.thumb}" alt="${v.titulo}" loading="lazy"
        onerror="this.src='https://placehold.co/640x360?text=▶'" />
      <div class="yt_video_dur">${v.dur}</div>
      <div class="yt_video_play"><i class="fas fa-play"></i></div>
    </div>
    <div class="yt_video_info">
      <div class="yt_video_av"><i class="fas fa-paw"></i></div>
      <div class="yt_video_meta">
        <h3>${v.titulo}</h3>
        <span>Historiawi · ${v.vistas} vistas · ${v.fecha}</span>
        <div class="yt_video_stats">
          <span><i class="fas fa-eye"></i> ${v.vistas}</span>
          <span><i class="fas fa-thumbs-up"></i> ${v.likes}</span>
        </div>
      </div>
    </div>
  </a>`;

// ── RENDER ─────────────────────────────────────────────────────
export const render = () => `
  <div class="yt_wrap">

    <!-- ══ HERO ══ -->
    <section class="yt_hero yt_fade" style="--d:0s">
      <div class="yt_hero_bg"></div>
      <div class="yt_hero_inner">

        <!-- Canal info -->
        <div class="yt_canal">
          <div class="yt_canal_av">
            <i class="fas fa-paw"></i>
            <div class="yt_canal_live" ${wiTip('Canal activo')}><i class="fas fa-circle"></i></div>
          </div>
          <div class="yt_canal_info">
            <div class="yt_canal_nombre">
              <h1>Historiawi</h1>
              <span class="yt_verified" ${wiTip('Canal verificado')}><i class="fas fa-circle-check"></i></span>
            </div>
            <span class="yt_canal_handle">@historiawi · ${stats.suscriptores} suscriptores</span>
            <p class="yt_canal_bio">
              🐾 Historias positivas de animales y naturaleza<br>
              ✨ Shorts y videos que llenan el alma de alegría
            </p>
            <div class="yt_canal_tags">
              ${cats.map(c => `
                <span class="yt_canal_tag" style="--cc:${c.color}" ${wiTip(c.label)}>
                  <i class="fas ${c.icon}"></i> ${c.label}
                </span>`).join('')}
            </div>
          </div>
        </div>

        <!-- Stats + acciones -->
        <div class="yt_hero_right">
          <div class="yt_stats">
            <div class="yt_stat" ${wiTip('Total de videos')}>
              <i class="fas fa-film"></i>
              <strong>${stats.videos}</strong>
              <span>Videos</span>
            </div>
            <div class="yt_stat_div"></div>
            <div class="yt_stat" ${wiTip('Suscriptores')}>
              <i class="fas fa-users"></i>
              <strong>${stats.suscriptores}</strong>
              <span>Suscriptores</span>
            </div>
            <div class="yt_stat_div"></div>
            <div class="yt_stat" ${wiTip('Vistas totales')}>
              <i class="fas fa-eye"></i>
              <strong>${stats.vistas}</strong>
              <span>Vistas</span>
            </div>
          </div>
          <div class="yt_acciones">
            <a href="${YT_CHANNEL}" target="_blank" rel="noopener"
              class="yt_btn_sub" ${wiTip('¡Suscríbete gratis!')}>
              <i class="fab fa-youtube"></i> Suscribirse
            </a>
            <button class="yt_btn_share" id="yt_share" ${wiTip('Compartir canal')}>
              <i class="fas fa-share-nodes"></i>
            </button>
          </div>
        </div>

      </div>
    </section>

    <!-- ══ SHORTS ══ -->
    <section class="yt_section">
      <div class="yt_sec_head">
        <div class="yt_sec_title">
          <span class="yt_shorts_badge"><i class="fas fa-bolt"></i> Shorts</span>
          <h2>Historias en <span class="yt_red">segundos</span> ⚡</h2>
        </div>
        <a href="${YT_CHANNEL}/shorts" target="_blank" rel="noopener"
          class="yt_ver_todo" ${wiTip('Ver todos los Shorts')}>
          Ver todos <i class="fas fa-arrow-right"></i>
        </a>
      </div>

      <!-- Carrusel horizontal Shorts -->
      <div class="yt_shorts_scroll" id="yt_shorts_scroll">
        <button class="yt_scroll_btn yt_scroll_prev" id="yt_prev" ${wiTip('Anterior')}>
          <i class="fas fa-chevron-left"></i>
        </button>
        <div class="yt_shorts_track" id="yt_track">
          ${shorts.map(tplShort).join('')}
        </div>
        <button class="yt_scroll_btn yt_scroll_next" id="yt_next" ${wiTip('Siguiente')}>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>

    <!-- ══ VIDEOS DESTACADOS ══ -->
    <section class="yt_section">
      <div class="yt_sec_head">
        <div class="yt_sec_title">
          <span class="yt_vid_badge"><i class="fas fa-film"></i> Videos</span>
          <h2>Historias <span class="yt_red">completas</span> 🎬</h2>
        </div>
        <a href="${YT_CHANNEL}" target="_blank" rel="noopener"
          class="yt_ver_todo" ${wiTip('Ver todos los videos')}>
          Ver canal <i class="fas fa-arrow-right"></i>
        </a>
      </div>
      <div class="yt_videos_grid">
        ${videos.map(tplVideo).join('')}
      </div>
    </section>

    <!-- ══ POR QUÉ SUSCRIBIRSE ══ -->
    <section class="yt_section">
      <div class="yt_sec_head txc">
        <h2>¿Por qué <span class="yt_red">suscribirte</span>? 🎯</h2>
      </div>
      <div class="yt_why_grid">
        ${[
          { icon:'fa-bolt',       color:'#ffa726', tit:'Shorts Diarios',    txt:'Nuevas historias cortas cada día para inspirarte en menos de 1 minuto'  },
          { icon:'fa-paw',        color:'#0EBEFF', tit:'Historias Únicas',  txt:'Relatos originales de animales y naturaleza que no encontrarás en otro lugar' },
          { icon:'fa-heart',      color:'#ff3849', tit:'100% Positivo',     txt:'Contenido seleccionado con amor, cero negatividad, solo alegría y esperanza'  },
          { icon:'fa-bell',       color:'#25b62a', tit:'Notificaciones',    txt:'Activa la campanita 🔔 y no te pierdas ninguna historia nueva'              },
        ].map((w, i) => `
          <div class="yt_why_card yt_fade" style="--d:${i*0.1}s">
            <div class="yt_why_icon" style="--wc:${w.color}">
              <i class="fas ${w.icon}"></i>
            </div>
            <h3>${w.tit}</h3>
            <p>${w.txt}</p>
          </div>`).join('')}
      </div>
    </section>

    <!-- ══ CTA ══ -->
    <section class="yt_cta">
      <div class="yt_cta_bg"></div>
      <div class="yt_cta_inner">
        <i class="fab fa-youtube yt_cta_icon"></i>
        <h2>¡Únete a la familia Historiawi! 🐾</h2>
        <p>Suscríbete gratis y recibe historias que llenan el alma directamente en tu feed</p>
        <div class="yt_cta_btns">
          <a href="${YT_CHANNEL}" target="_blank" rel="noopener"
            class="yt_cta_btn_main" ${wiTip('Ir al canal')}>
            <i class="fab fa-youtube"></i> Suscribirme gratis
          </a>
          <button class="yt_cta_btn_share" id="yt_cta_share" ${wiTip('Compartir canal')}>
            <i class="fas fa-share-nodes"></i> Compartir
          </button>
        </div>
        <div class="yt_cta_stats">
          <span ${wiTip('Videos publicados')}><i class="fas fa-film"></i> ${stats.videos} videos</span>
          <span ${wiTip('Suscriptores')}><i class="fas fa-users"></i> ${stats.suscriptores} suscriptores</span>
          <span ${wiTip('Vistas totales')}><i class="fas fa-eye"></i> ${stats.vistas} vistas</span>
        </div>
      </div>
    </section>

    <!-- ══ FOOTER REDES ══ -->
    <section class="yt_footer">
      <h3>También estamos en</h3>
      <div class="yt_footer_redes">
        <a href="https://www.instagram.com/historiawi" target="_blank" rel="noopener"
          class="yt_red_btn ig" ${wiTip('Instagram')}>
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@historiawi" target="_blank" rel="noopener"
          class="yt_red_btn tt" ${wiTip('TikTok')}>
          <i class="fab fa-tiktok"></i>
        </a>
        <a href="https://www.facebook.com/historiawi" target="_blank" rel="noopener"
          class="yt_red_btn fb" ${wiTip('Facebook')}>
          <i class="fab fa-facebook"></i>
        </a>
      </div>
      <p>Creado con ❤️ por <strong>Wilder Taype</strong> · Historiawi © ${year()}</p>
    </section>

  </div>`;

// ── INIT ───────────────────────────────────────────────────────
export const init = () => {

  // Fade con wiVista
  wiVista('.yt_fade', null, { anim:'wi_fadeUp', stagger: 60 });
  wiVista('.yt_why_card', null, { anim:'wi_fadeUp', stagger: 80 });

  // Carrusel Shorts — scroll horizontal con botones
  const $track = $('#yt_track');
  const cardW  = () => ($track.find('.yt_short').outerWidth(true) || 200) + 16;

  $('#yt_next').on('click', () =>
    $track.animate({ scrollLeft: $track.scrollLeft() + cardW() * 2 }, 350)
  );
  $('#yt_prev').on('click', () =>
    $track.animate({ scrollLeft: $track.scrollLeft() - cardW() * 2 }, 350)
  );

  // Ocultar/mostrar flechas según scroll
  const toggleArrows = () => {
    const sl = $track.scrollLeft();
    const max = $track[0].scrollWidth - $track[0].clientWidth;
    $('#yt_prev').toggleClass('hidden', sl <= 0);
    $('#yt_next').toggleClass('hidden', sl >= max - 4);
  };
  $track.on('scroll', toggleArrows);
  toggleArrows();

  // Compartir canal
  const shareCanalMsg = `🐾 Historiawi en YouTube\n\n🎬 Shorts y videos de historias positivas de animales y naturaleza\n▶️ ${YT_CHANNEL}`;
  const shareCanal = (el) => {
    if (navigator.share) {
      navigator.share({ title: 'Historiawi YouTube', text: shareCanalMsg, url: YT_CHANNEL }).catch(() => {});
    } else {
      wicopy(YT_CHANNEL, el, '¡Link copiado! 🔗');
    }
  };

  $('#yt_share, #yt_cta_share').on('click', function() { shareCanal(this); });

  // Hover efecto play en shorts
  $(document).on('mouseenter', '.yt_short', function() {
    $(this).find('.yt_short_play').stop(true).fadeIn(180);
  }).on('mouseleave', '.yt_short', function() {
    $(this).find('.yt_short_play').stop(true).fadeOut(180);
  });
};

export const cleanup = () => {
  $(document).off('mouseenter mouseleave', '.yt_short');
  $('#yt_next, #yt_prev, #yt_share, #yt_cta_share').off('click');
  $('#yt_track').off('scroll');
};
import './tiktok.css';
import $ from 'jquery';
import { wiVista, wiTip, wicopy, year } from '../widev.js';

const TT_CHANNEL = 'https://www.tiktok.com/@historiawi';

const stats = { videos: '30+', seguidores: '850+', likes: '15K+' };

// ── VIDEOS TIKTOK (formato vertical 9:16) ─────────────────────
const videos = [
  { id:1, titulo:'🐒 Punch, el monito que creyó en sí mismo',   miniatura:'https://picsum.photos/seed/tt1/400/700', vistas:'45K', likes:'3.2K', comentarios:'128', dur:'0:45', tag:'Animales',    trending:true  },
  { id:2, titulo:'🌿 El árbol que nunca se rindió 💪',           miniatura:'https://picsum.photos/seed/tt2/400/700', vistas:'28K', likes:'2.1K', comentarios:'89',  dur:'0:38', tag:'Naturaleza',  trending:false },
  { id:3, titulo:'🐕 Max y el niño que lo salvó ❤️',             miniatura:'https://picsum.photos/seed/tt3/400/700', vistas:'67K', likes:'5.4K', comentarios:'210', dur:'0:52', tag:'Animales',    trending:true  },
  { id:4, titulo:'💛 La mariposa que aprendió a volar',          miniatura:'https://picsum.photos/seed/tt4/400/700', vistas:'19K', likes:'1.8K', comentarios:'64',  dur:'0:41', tag:'Inspiración', trending:false },
  { id:5, titulo:'🌊 El delfín que curó un corazón roto',        miniatura:'https://picsum.photos/seed/tt5/400/700', vistas:'52K', likes:'4.1K', comentarios:'175', dur:'0:49', tag:'Amor',        trending:true  },
  { id:6, titulo:'🦋 Una segunda oportunidad en la vida ✨',      miniatura:'https://picsum.photos/seed/tt6/400/700', vistas:'33K', likes:'2.7K', comentarios:'102', dur:'0:36', tag:'Vida',        trending:false },
  { id:7, titulo:'🐦 El pájaro que nunca perdió la esperanza',    miniatura:'https://picsum.photos/seed/tt7/400/700', vistas:'41K', likes:'3.5K', comentarios:'143', dur:'0:44', tag:'Animales',    trending:false },
  { id:8, titulo:'🌸 Cuando la naturaleza te abraza el alma',     miniatura:'https://picsum.photos/seed/tt8/400/700', vistas:'22K', likes:'1.9K', comentarios:'77',  dur:'0:39', tag:'Naturaleza',  trending:true  },
];

// ── SONIDOS POPULARES (estética TikTok) ───────────────────────
const sonidos = [
  { emoji:'🎵', nombre:'Melodía de esperanza',   autor:'Historiawi',  usos:'2.1K' },
  { emoji:'🎶', nombre:'Naturaleza y calma',      autor:'Historiawi',  usos:'1.8K' },
  { emoji:'🎸', nombre:'Corazón animado',         autor:'Historiawi',  usos:'956'  },
  { emoji:'🎹', nombre:'Historias de amor',       autor:'Historiawi',  usos:'1.3K' },
];

// ── CATEGORÍAS ────────────────────────────────────────────────
const cats = [
  { icon:'fa-dog',      label:'Animales',    color:'#0EBEFF' },
  { icon:'fa-leaf',     label:'Naturaleza',  color:'#25b62a' },
  { icon:'fa-heart',    label:'Amor',        color:'#ff3849' },
  { icon:'fa-star',     label:'Inspiración', color:'#ffa726' },
  { icon:'fa-seedling', label:'Vida',        color:'#6a00f5' },
];

// ── CAT COLORS ────────────────────────────────────────────────
const catColor = tag => cats.find(c => c.label === tag)?.color || 'var(--mco)';
const catIcon  = tag => cats.find(c => c.label === tag)?.icon  || 'fa-paw';

// ── TEMPLATE VIDEO CARD ───────────────────────────────────────
const tplVideo = (v, i) => `
  <a href="${TT_CHANNEL}" target="_blank" rel="noopener"
    class="tt_card tt_fade" style="--d:${i * 0.06}s" ${wiTip(v.titulo)}>

    <!-- Thumbnail -->
    <div class="tt_card_img">
      <img src="${v.miniatura}" alt="${v.titulo}" loading="lazy"
        onerror="this.src='https://placehold.co/400x700?text=♪'" />

      <!-- Overlay gradiente -->
      <div class="tt_card_over"></div>

      <!-- Top badges -->
      <div class="tt_card_top">
        ${v.trending ? `<span class="tt_trending" ${wiTip('En tendencia 🔥')}><i class="fas fa-fire"></i> Trend</span>` : ''}
        <span class="tt_dur">${v.dur}</span>
      </div>

      <!-- Play central -->
      <div class="tt_play_wrap">
        <div class="tt_play_btn">
          <i class="fas fa-play"></i>
        </div>
      </div>

      <!-- Barra lateral acciones estilo TikTok -->
      <div class="tt_side_actions">
        <div class="tt_action" ${wiTip('Me gusta')}>
          <div class="tt_action_ico"><i class="fas fa-heart"></i></div>
          <span>${v.likes}</span>
        </div>
        <div class="tt_action" ${wiTip('Comentarios')}>
          <div class="tt_action_ico"><i class="fas fa-comment-dots"></i></div>
          <span>${v.comentarios}</span>
        </div>
        <div class="tt_action" ${wiTip('Vistas')}>
          <div class="tt_action_ico"><i class="fas fa-eye"></i></div>
          <span>${v.vistas}</span>
        </div>
      </div>

      <!-- Info bottom -->
      <div class="tt_card_bot">
        <span class="tt_cat_tag" style="--cc:${catColor(v.tag)}">
          <i class="fas ${catIcon(v.tag)}"></i> ${v.tag}
        </span>
        <p class="tt_card_tit">${v.titulo}</p>
        <div class="tt_card_audio">
          <i class="fas fa-music tt_spin"></i>
          <span>Historiawi Original</span>
        </div>
      </div>
    </div>
  </a>`;

// ── TEMPLATE SONIDO ───────────────────────────────────────────
const tplSonido = (s, i) => `
  <div class="tt_sound_card tt_fade" style="--d:${i * 0.08}s" ${wiTip(`${s.usos} usos`)}>
    <div class="tt_sound_ico">${s.emoji}</div>
    <div class="tt_sound_info">
      <strong>${s.nombre}</strong>
      <span><i class="fas fa-user-music"></i> ${s.autor} · ${s.usos} usos</span>
    </div>
    <div class="tt_sound_btn">
      <i class="fas fa-play"></i>
    </div>
  </div>`;

// ── RENDER ────────────────────────────────────────────────────
export const render = () => `
  <div class="tt_wrap">

    <!-- ══ HERO ══ -->
    <section class="tt_hero tt_fade" style="--d:0s">
      <div class="tt_hero_bg"></div>
      <div class="tt_hero_particles" aria-hidden="true">
        ${[...Array(12)].map((_, i) => `<span class="tt_p" style="--pi:${i}"></span>`).join('')}
      </div>

      <div class="tt_hero_inner">

        <!-- Avatar -->
        <div class="tt_profile">
          <div class="tt_av_ring">
            <div class="tt_av">
              <i class="fas fa-paw"></i>
            </div>
          </div>
          <div class="tt_av_verified" ${wiTip('Perfil verificado')}>
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
            ${cats.map(c => `
              <span class="tt_hero_tag" style="--cc:${c.color}" ${wiTip(c.label)}>
                <i class="fas ${c.icon}"></i> ${c.label}
              </span>`).join('')}
          </div>
        </div>

        <!-- Stats + acciones -->
        <div class="tt_hero_right">
          <div class="tt_stats_row">
            <div class="tt_stat" ${wiTip('Videos publicados')}>
              <strong>${stats.videos}</strong>
              <span>Videos</span>
            </div>
            <div class="tt_stat_div"></div>
            <div class="tt_stat" ${wiTip('Seguidores')}>
              <strong>${stats.seguidores}</strong>
              <span>Seguidores</span>
            </div>
            <div class="tt_stat_div"></div>
            <div class="tt_stat" ${wiTip('Me gustas totales')}>
              <strong>${stats.likes}</strong>
              <span>Me gustas</span>
            </div>
          </div>
          <div class="tt_acciones">
            <a href="${TT_CHANNEL}" target="_blank" rel="noopener"
              class="tt_btn_follow" ${wiTip('¡Síguenos en TikTok!')}>
              <i class="fab fa-tiktok"></i> Seguir
            </a>
            <button class="tt_btn_share" id="tt_share" ${wiTip('Compartir perfil')}>
              <i class="fas fa-share-nodes"></i>
            </button>
          </div>
          <!-- Hashtags -->
          <div class="tt_hashtags">
            <span ${wiTip('Ver #historiawi')}>#historiawi</span>
            <span ${wiTip('Ver #animales')}>#animales</span>
            <span ${wiTip('Ver #historias')}>#historias</span>
            <span ${wiTip('Ver #viral')}>#viral</span>
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
        <a href="${TT_CHANNEL}" target="_blank" rel="noopener"
          class="tt_ver_todo" ${wiTip('Ver todos en TikTok')}>
          Ver perfil <i class="fas fa-arrow-right"></i>
        </a>
      </div>

      <!-- Grid TikTok vertical -->
      <div class="tt_grid" id="tt_grid">
        ${videos.map(tplVideo).join('')}
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
        ${sonidos.map(tplSonido).join('')}
      </div>
    </section>

    <!-- ══ POR QUÉ SEGUIRNOS ══ -->
    <section class="tt_section">
      <div class="tt_sec_head txc">
        <h2>¿Por qué <span class="tt_grad">seguirnos</span>? 🎯</h2>
      </div>
      <div class="tt_why_grid">
        ${[
          { icon:'fa-fire',        color:'#ff3849', tit:'Contenido Viral',    txt:'Videos que conectan corazones y se comparten por amor, no por fama' },
          { icon:'fa-paw',         color:'#0EBEFF', tit:'Animales Reales',    txt:'Historias auténticas de animales que inspiran y llenan el alma' },
          { icon:'fa-music',       color:'#ffa726', tit:'Audio Original',     txt:'Música y narración original creada con amor por Historiawi' },
          { icon:'fa-face-smile',  color:'#25b62a', tit:'Solo Positividad',   txt:'Cero drama, cero odio. Solo historias que te hacen sonreír' },
        ].map((w, i) => `
          <div class="tt_why_card tt_fade" style="--d:${i * 0.1}s">
            <div class="tt_why_ico" style="--wc:${w.color}">
              <i class="fas ${w.icon}"></i>
            </div>
            <h3>${w.tit}</h3>
            <p>${w.txt}</p>
          </div>`).join('')}
      </div>
    </section>

    <!-- ══ CTA ══ -->
    <section class="tt_cta">
      <div class="tt_cta_bg"></div>
      <div class="tt_cta_notes" aria-hidden="true">
        ${['🎵','🎶','♪','🎵','🎶','♪'].map((n,i) =>
          `<span class="tt_note" style="--ni:${i}">${n}</span>`).join('')}
      </div>
      <div class="tt_cta_inner">
        <div class="tt_cta_av">
          <i class="fas fa-paw"></i>
        </div>
        <h2>¡Únete a la familia Historiawi! 🐾</h2>
        <p>Síguenos en TikTok y recibe historias que llenan el alma cada día</p>
        <div class="tt_cta_btns">
          <a href="${TT_CHANNEL}" target="_blank" rel="noopener"
            class="tt_cta_main" ${wiTip('¡Seguir en TikTok!')}>
            <i class="fab fa-tiktok"></i> Seguirme en TikTok
          </a>
          <button class="tt_cta_share_btn" id="tt_cta_share" ${wiTip('Compartir perfil')}>
            <i class="fas fa-share-nodes"></i> Compartir
          </button>
        </div>
        <div class="tt_cta_stats">
          <span ${wiTip('Videos')}><i class="fas fa-film"></i> ${stats.videos} videos</span>
          <span ${wiTip('Seguidores')}><i class="fas fa-users"></i> ${stats.seguidores} seguidores</span>
          <span ${wiTip('Me gustas')}><i class="fas fa-heart"></i> ${stats.likes} likes</span>
        </div>
      </div>
    </section>

    <!-- ══ FOOTER REDES ══ -->
    <section class="tt_footer">
      <h3>También estamos en</h3>
      <div class="tt_footer_redes">
        <a href="https://www.youtube.com/@historiawi" target="_blank" rel="noopener"
          class="tt_red_btn yt" ${wiTip('YouTube')}>
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com/historiawi" target="_blank" rel="noopener"
          class="tt_red_btn ig" ${wiTip('Instagram')}>
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/historiawi" target="_blank" rel="noopener"
          class="tt_red_btn fb" ${wiTip('Facebook')}>
          <i class="fab fa-facebook"></i>
        </a>
      </div>
      <p>Creado con ❤️ por <strong>Wilder Taype</strong> · Historiawi © ${year()}</p>
    </section>

  </div>`;

// ── INIT ──────────────────────────────────────────────────────
export const init = () => {

  // Fade con wiVista
  wiVista('.tt_fade',     null, { anim:'wi_fadeUp', stagger: 55 });
  wiVista('.tt_why_card', null, { anim:'wi_fadeUp', stagger: 80 });

  // Hover — mostrar/ocultar acciones laterales y play
  $(document).on('mouseenter', '.tt_card', function() {
    $(this).find('.tt_play_wrap').stop(true).fadeIn(200);
    $(this).find('.tt_side_actions').stop(true).fadeIn(220);
  }).on('mouseleave', '.tt_card', function() {
    $(this).find('.tt_play_wrap').stop(true).fadeOut(180);
    $(this).find('.tt_side_actions').stop(true).fadeOut(180);
  });

  // Hover sonidos — cambio color icono
  $(document).on('mouseenter', '.tt_sound_card', function() {
    $(this).find('.tt_sound_btn').addClass('active');
  }).on('mouseleave', '.tt_sound_card', function() {
    $(this).find('.tt_sound_btn').removeClass('active');
  });

  // Compartir
  const shareMsg = `🐾 Historiawi en TikTok\n\n🎵 Videos cortos de historias positivas de animales\n👉 ${TT_CHANNEL}`;
  const share = (el) => {
    if (navigator.share) {
      navigator.share({ title:'Historiawi TikTok', text: shareMsg, url: TT_CHANNEL }).catch(() => {});
    } else {
      wicopy(TT_CHANNEL, el, '¡Link copiado! 🔗');
    }
  };

  $('#tt_share, #tt_cta_share').on('click', function() { share(this); });
};

export const cleanup = () => {
  $(document).off('mouseenter mouseleave', '.tt_card, .tt_sound_card');
  $('#tt_share, #tt_cta_share').off('click');
};
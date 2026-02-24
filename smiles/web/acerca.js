import './acerca.css';
import $ from 'jquery';
import { wiVista, wiTip, wicopy, year } from '../widev.js';

// ── DATA ──────────────────────────────────────────────────────
const stats = [
  { num:'4',    label:'Redes sociales',    icon:'fa-share-nodes',   color:'#0EBEFF' },
  { num:'100%', label:'Contenido positivo',icon:'fa-heart',         color:'#ff3849' },
  { num:'2026', label:'Siempre activos',   icon:'fa-calendar-check',color:'#25b62a' },
  { num:'∞',    label:'Historias de amor', icon:'fa-paw',           color:'#ffa726' },
];

const redes = [
  { icon:'fab fa-youtube',   color:'#FF0000', nombre:'YouTube',   desc:'Shorts y videos completos de historias',       url:'https://www.youtube.com/@historiawi',  seguidores:'1.2K+', badge:'Suscríbete'  },
  { icon:'fab fa-tiktok',    color:'#010101', nombre:'TikTok',    desc:'Videos cortos virales de animales',            url:'https://www.tiktok.com/@historiawi',   seguidores:'850+',  badge:'Síguenos'    },
  { icon:'fab fa-instagram', color:'#bc1888', nombre:'Instagram', desc:'Fotos y reels de naturaleza y animales',       url:'https://www.instagram.com/historiawi', seguidores:'2.4K+', badge:'Seguir'      },
  { icon:'fab fa-facebook',  color:'#1877F2', nombre:'Facebook',  desc:'Historias en tu muro cada día',                url:'https://www.facebook.com/historiawi',  seguidores:'3.8K+', badge:'Me gusta'    },
];

const categorias = [
  { icon:'fa-dog',      color:'#0EBEFF', nombre:'Animales',    desc:'Relatos de perros, gatos, monos y más animales increíbles'         },
  { icon:'fa-leaf',     color:'#25b62a', nombre:'Naturaleza',  desc:'Bosques, océanos y los milagros del mundo natural'                  },
  { icon:'fa-heart',    color:'#ff3849', nombre:'Amor',        desc:'Historias de amor puro entre animales, personas y la vida'          },
  { icon:'fa-star',     color:'#ffa726', nombre:'Inspiración', desc:'Relatos que te motivan a creer en ti mismo cada día'                },
  { icon:'fa-seedling', color:'#6a00f5', nombre:'Vida',        desc:'Segundas oportunidades, renacimientos y esperanza que transforma'   },
];

const beneficios = [
  { icon:'fa-face-smile',   color:'Cielo',  titulo:'Solo Positividad',     desc:'Cero odio, cero drama. Cada historia está elegida para llenarte de alegría, esperanza y amor por la vida.' },
  { icon:'fa-paw',          color:'Dulce',  titulo:'Historias Auténticas',  desc:'Todos los relatos están basados en hechos reales o inspirados en situaciones que tocan el corazón.' },
  { icon:'fa-share-nodes',  color:'Paz',    titulo:'Múltiples Plataformas', desc:'Encuentra nuestro contenido en YouTube, TikTok, Instagram y Facebook. ¡Elige tu favorita!' },
  { icon:'fa-newspaper',    color:'Mora',   titulo:'Blog de Historias',     desc:'Artículos completos con fotos, detalles y la historia entera para que puedas leer con calma.' },
  { icon:'fa-magnifying-glass', color:'Cielo', titulo:'Herramientas Utiles', desc:'Una selección curada de las mejores herramientas para creadores de contenido, gratis y pro.' },
  { icon:'fa-bolt',         color:'Dulce',  titulo:'Contenido Diario',      desc:'Nuevas historias cada día para que tu feed siempre tenga algo que te saque una sonrisa.' },
];

const pasos = [
  { num:'1', icon:'fa-magnifying-glass', titulo:'Descubre',   desc:'Explora historias por categoría: Animales, Naturaleza, Amor, Inspiración y Vida.'    },
  { num:'2', icon:'fa-share-nodes',      titulo:'Síguenos',   desc:'Únete a nosotros en YouTube, TikTok, Instagram o Facebook y llena tu feed de alegría.' },
  { num:'3', icon:'fa-heart',            titulo:'Comparte',   desc:'Comparte las historias que te tocan el corazón con tu familia y amigos.' },
];

const testimonios = [
  { avatar:'👩‍💻', nombre:'María López',     rol:'Seguidora desde 2024',
    texto:'Historiawi llegó a mi vida en un momento difícil. Sus historias de animales me dan fuerzas cada día. 100% recomendado.',       estrellas:5 },
  { avatar:'👨‍🎓', nombre:'Carlos Mendoza',  rol:'Seguidor en YouTube',
    texto:'Los shorts de Historiawi son lo mejor que me pasa cada mañana. Punch el monito se volvió mi historia favorita de todas.',      estrellas:5 },
  { avatar:'👩‍🌾', nombre:'Ana Quispe',      rol:'Seguidora en Instagram',
    texto:'Sigo a muchas cuentas positivas pero Historiawi es especial. Sus historias reales me hacen llorar de emoción y alegría.',       estrellas:5 },
  { avatar:'👨‍💼', nombre:'Pedro Torres',    rol:'Seguidor en TikTok',
    texto:'Me encontré Historiawi por un viral de TikTok y ya no pude dejarlo. Son videos cortos pero te cambian el día completamente.',   estrellas:5 },
];

const valores = [
  { icon:'fa-bullseye', color:'#ff3849', titulo:'Nuestra Misión',
    desc:'Llevar alegría, esperanza y amor a través de historias positivas de animales y naturaleza. Cada relato está elegido para recordarle al mundo que hay bondad en cada rincón.' },
  { icon:'fa-eye',      color:'#0EBEFF', titulo:'Nuestra Visión',
    desc:'Ser el canal de historias positivas más querido de habla hispana, donde millones de personas encuentren inspiración, paz y sonrisas en su día a día.' },
  { icon:'fa-heart',    color:'#25b62a', titulo:'Nuestros Valores',
    desc:'Autenticidad, positividad y amor. Creemos que el mundo es un lugar mejor cuando compartimos historias bonitas. Cada post, cada video, cada historia nace del corazón.' },
];

const tecnologias = [
  { icon:'fab fa-js',               label:'JavaScript',  color:'#FFB800' },
  { icon:'fab fa-css3-alt',         label:'CSS3',        color:'#0EBEFF' },
  { icon:'fab fa-html5',            label:'HTML5',       color:'#ff3849' },
  { icon:'fas fa-fire',             label:'Firebase',    color:'#ff6d00' },
  { icon:'fas fa-bolt',             label:'Vite',        color:'#6a00f5' },
  { icon:'fab fa-youtube',          label:'YouTube',     color:'#FF0000' },
  { icon:'fab fa-tiktok',           label:'TikTok',      color:'#010101' },
  { icon:'fab fa-instagram',        label:'Instagram',   color:'#bc1888' },
];

// ── TEMPLATES ─────────────────────────────────────────────────
const tplRed = (r, i) => `
  <a href="${r.url}" target="_blank" rel="noopener"
    class="ac_red_card ac_fade" style="--d:${i * 0.1}s; --rc:${r.color}" ${wiTip(r.desc)}>
    <div class="ac_red_top">
      <div class="ac_red_ico">
        <i class="${r.icon}"></i>
      </div>
      <span class="ac_red_badge">${r.badge}</span>
    </div>
    <div class="ac_red_info">
      <strong>${r.nombre}</strong>
      <p>${r.desc}</p>
    </div>
    <div class="ac_red_foot">
      <span class="ac_red_seg">
        <i class="fas fa-users"></i> ${r.seguidores}
      </span>
      <span class="ac_red_arrow">
        <i class="fas fa-arrow-up-right-from-square"></i>
      </span>
    </div>
  </a>`;

const tplCat = (c, i) => `
  <div class="ac_cat_card ac_fade" style="--d:${i * 0.08}s; --cc:${c.color}" ${wiTip(c.desc)}>
    <div class="ac_cat_ico">
      <i class="fas ${c.icon}"></i>
    </div>
    <div class="ac_cat_body">
      <strong>${c.nombre}</strong>
      <p>${c.desc}</p>
    </div>
  </div>`;

// ── RENDER ────────────────────────────────────────────────────
export const render = () => `
  <div class="ac_wrap">

    <!-- ══ HERO ══ -->
    <section class="ac_hero ac_fade" style="--d:0s">
      <div class="ac_hero_bg"></div>
      <div class="ac_hero_paws" aria-hidden="true">
        ${[...Array(12)].map((_, i) =>
          `<span class="ac_paw" style="--pi:${i}">🐾</span>`).join('')}
      </div>

      <div class="ac_hero_inner">
        <!-- Logo avatar -->
        <div class="ac_hero_av">
          <div class="ac_hero_av_ring">
            <div class="ac_hero_av_ico">
              <i class="fas fa-paw"></i>
            </div>
          </div>
          <div class="ac_hero_av_dot" ${wiTip('Activo')}></div>
        </div>

        <div class="ac_hero_txt">
          <div class="ac_hero_kicker">
            <span class="ac_kicker_badge">
              <i class="fas fa-paw"></i> Historias Positivas · 100% Original
            </span>
          </div>
          <h1>Bienvenido a <span class="ac_grad">Historiawi</span> 🐾</h1>
          <p class="ac_hero_sub">
            Somos un espacio dedicado a compartir
            <strong>historias positivas de animales y naturaleza</strong>
            que inspiran, emocionan y llenan el alma de alegría. Cada historia
            es un recordatorio de que el mundo es <strong>un lugar hermoso</strong>.
          </p>

          <!-- Stats -->
          <div class="ac_hero_stats">
            ${stats.map(s => `
              <div class="ac_stat" style="--sc:${s.color}" ${wiTip(s.label)}>
                <i class="fas ${s.icon}" style="color:${s.color}"></i>
                <strong>${s.num}</strong>
                <span>${s.label}</span>
              </div>`).join('')}
          </div>

          <!-- Botones -->
          <div class="ac_hero_btns">
            <a href="/blog" class="ac_btn_p">
              <i class="fas fa-book-open"></i> Leer historias
            </a>
            <button class="ac_btn_s" id="ac_compartir">
              <i class="fas fa-share-nodes"></i> Compartir
            </button>
          </div>
        </div>
      </div>

      <!-- Scroll hint -->
      <div class="ac_hero_scroll">
        <i class="fas fa-chevron-down"></i>
      </div>
    </section>

    <!-- ══ COUNTER BAND ══ -->
    <div class="ac_counter_band">
      <div class="ac_counter_item">
        <span class="ac_counter_num" data-target="4">0</span>
        <p>Redes sociales</p>
      </div>
      <div class="ac_counter_sep"></div>
      <div class="ac_counter_item">
        <span class="ac_counter_num" data-target="5">0</span>
        <p>Categorías de contenido</p>
      </div>
      <div class="ac_counter_sep"></div>
      <div class="ac_counter_item">
        <span class="ac_counter_num" data-target="100">0</span><span>%</span>
        <p>Contenido positivo</p>
      </div>
      <div class="ac_counter_sep"></div>
      <div class="ac_counter_item">
        <span class="ac_counter_num" data-target="2026">0</span>
        <p>Siempre actualizados</p>
      </div>
    </div>

    <!-- ══ REDES SOCIALES ══ -->
    <section class="ac_sec">
      <div class="ac_sec_head">
        <div class="ac_sec_badge"><i class="fas fa-share-nodes"></i> Redes sociales</div>
        <h2 class="ac_sec_tit">Encuéntranos en todas las <span class="ac_grad">plataformas</span></h2>
        <p class="ac_sec_sub">Únete a nuestra comunidad en tu red social favorita y llena tu feed de alegría</p>
      </div>
      <div class="ac_redes_grid">
        ${redes.map(tplRed).join('')}
      </div>
    </section>

    <!-- ══ CATEGORÍAS ══ -->
    <section class="ac_sec">
      <div class="ac_sec_head">
        <div class="ac_sec_badge"><i class="fas fa-folder-open"></i> Categorías</div>
        <h2 class="ac_sec_tit">5 mundos de <span class="ac_grad">historias bonitas</span></h2>
        <p class="ac_sec_sub">Cada categoría es una puerta a un universo de historias que te llenarán el corazón</p>
      </div>
      <div class="ac_cats_grid">
        ${categorias.map(tplCat).join('')}
      </div>
    </section>

    <!-- ══ BENEFICIOS ══ -->
    <section class="ac_sec">
      <div class="ac_sec_head">
        <div class="ac_sec_badge"><i class="fas fa-star"></i> ¿Por qué Historiawi?</div>
        <h2 class="ac_sec_tit">Razones para <span class="ac_grad">seguirnos</span> 🐾</h2>
        <p class="ac_sec_sub">Todo lo que hace especial a Historiawi comparado con cualquier otra cuenta</p>
      </div>
      <div class="ac_feat_grid">
        ${beneficios.map((f, i) => `
          <div class="ac_feat_card ac_fade ac_color_${f.color.toLowerCase()}" style="--d:${i * 0.08}s">
            <div class="ac_feat_ico"><i class="fas ${f.icon}"></i></div>
            <h3>${f.titulo}</h3>
            <p>${f.desc}</p>
          </div>`).join('')}
      </div>
    </section>

    <!-- ══ CÓMO FUNCIONA ══ -->
    <section class="ac_sec">
      <div class="ac_sec_head">
        <div class="ac_sec_badge"><i class="fas fa-route"></i> Cómo funciona</div>
        <h2 class="ac_sec_tit">3 pasos para <span class="ac_grad">llenarte de alegría</span></h2>
        <p class="ac_sec_sub">Simple, rápido y 100% gratis. Empieza a disfrutar hoy mismo</p>
      </div>
      <div class="ac_pasos">
        ${pasos.map((p, i) => `
          <div class="ac_paso ac_fade" style="--d:${i * 0.12}s">
            <div class="ac_paso_num">${p.num}</div>
            <div class="ac_paso_ico"><i class="fas ${p.icon}"></i></div>
            <h3>${p.titulo}</h3>
            <p>${p.desc}</p>
          </div>
          ${i < pasos.length - 1
            ? '<div class="ac_paso_sep"><i class="fas fa-chevron-right"></i></div>'
            : ''}`
        ).join('')}
      </div>
    </section>

    <!-- ══ TESTIMONIOS ══ -->
    <section class="ac_sec">
      <div class="ac_sec_head">
        <div class="ac_sec_badge"><i class="fas fa-comments"></i> Testimonios</div>
        <h2 class="ac_sec_tit">Lo que dicen nuestros <span class="ac_grad">seguidores</span></h2>
        <p class="ac_sec_sub">Personas reales que encontraron alegría a través de Historiawi</p>
      </div>
      <div class="ac_test_grid">
        ${testimonios.map((t, i) => `
          <div class="ac_test_card ac_fade" style="--d:${i * 0.09}s">
            <div class="ac_test_stars">${'<i class="fas fa-star"></i>'.repeat(t.estrellas)}</div>
            <p class="ac_test_txt">"${t.texto}"</p>
            <div class="ac_test_autor">
              <span class="ac_test_avatar">${t.avatar}</span>
              <div><strong>${t.nombre}</strong><span>${t.rol}</span></div>
            </div>
          </div>`).join('')}
      </div>
    </section>

    <!-- ══ MISIÓN / VISIÓN ══ -->
    <section class="ac_sec">
      <div class="ac_sec_head">
        <div class="ac_sec_badge"><i class="fas fa-bullseye"></i> Misión y Visión</div>
        <h2 class="ac_sec_tit">Lo que nos <span class="ac_grad">impulsa cada día</span> 💛</h2>
      </div>
      <div class="ac_mv_grid">
        ${valores.map((v, i) => `
          <div class="ac_mv_card ac_fade" style="--d:${i * 0.1}s; --mc:${v.color}">
            <div class="ac_mv_ico" style="background:${v.color}">
              <i class="fas ${v.icon}"></i>
            </div>
            <h3>${v.titulo}</h3>
            <p>${v.desc}</p>
          </div>`).join('')}
      </div>
    </section>

    <!-- ══ TECNOLOGÍA ══ -->
    <section class="ac_sec">
      <div class="ac_sec_head">
        <div class="ac_sec_badge"><i class="fas fa-code"></i> Stack técnico</div>
        <h2 class="ac_sec_tit">Construido con <span class="ac_grad">lo mejor</span> 🚀</h2>
        <p class="ac_sec_sub">Tecnología moderna para una experiencia rápida, fluida y hermosa</p>
      </div>
      <div class="ac_tech_grid">
        ${tecnologias.map((t, i) => `
          <div class="ac_tech_item ac_fade" style="--d:${i * 0.07}s; --tc:${t.color}">
            <i class="${t.icon}" style="color:${t.color}"></i>
            <span>${t.label}</span>
          </div>`).join('')}
      </div>
    </section>

    <!-- ══ CTA ══ -->
    <section class="ac_cta_sec">
      <div class="ac_cta_wrap ac_fade">
        <div class="ac_cta_bg"></div>
        <div class="ac_cta_paws" aria-hidden="true">
          ${['🐾','❤️','🌿','🐕','🦋','🌊'].map((p, i) =>
            `<span class="ac_cta_paw" style="--pi:${i}">${p}</span>`).join('')}
        </div>
        <div class="ac_cta_inner">
          <div class="ac_cta_av">
            <i class="fas fa-paw"></i>
          </div>
          <h2>¡Únete a la familia <span class="ac_grad">Historiawi</span>! 🐾</h2>
          <p>Síguenos en tus redes favoritas y llena tu día de historias que inspiran</p>

          <!-- Chips redes -->
          <div class="ac_cta_chips">
            ${redes.map(r => `
              <a href="${r.url}" target="_blank" rel="noopener"
                class="ac_chip" style="--cc:${r.color}" ${wiTip(r.desc)}>
                <i class="${r.icon}"></i> ${r.nombre}
              </a>`).join('')}
          </div>

          <div class="ac_cta_btns">
            <a href="/blog" class="ac_btn_p ac_btn_lg">
              <i class="fas fa-book-open"></i> Leer el Blog
            </a>
            <a href="/" class="ac_btn_s ac_btn_lg">
              <i class="fas fa-house"></i> Volver al Inicio
            </a>
          </div>

          <p class="ac_footer_txt">
            Hecho con <i class="fas fa-heart"></i> por
            <a href="https://github.com/wtaype" target="_blank" rel="noopener">Wilder Taype</a>
            · Historiawi © ${year()}
          </p>
        </div>
      </div>
    </section>

  </div>`;

// ── COUNTER ANIMATION ─────────────────────────────────────────
const _animateCounters = () => {
  $('.ac_counter_num').each(function() {
    const $el = $(this), target = +$el.data('target'), duration = 1800;
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      $el.text(Math.floor(ease * target).toLocaleString());
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
};

// ── INIT ──────────────────────────────────────────────────────
export const init = () => {

  wiVista('.ac_fade',      null, { anim:'wi_fadeUp', stagger: 55  });
  wiVista('.ac_red_card',  null, { anim:'wi_fadeUp', stagger: 80  });
  wiVista('.ac_cat_card',  null, { anim:'wi_fadeUp', stagger: 70  });
  wiVista('.ac_feat_card', null, { anim:'wi_fadeUp', stagger: 80  });
  wiVista('.ac_paso',      null, { anim:'wi_fadeUp', stagger: 120 });
  wiVista('.ac_mv_card',   null, { anim:'wi_fadeUp', stagger: 100 });
  wiVista('.ac_tech_item', null, { anim:'wi_fadeUp', stagger: 60  });
  wiVista('.ac_test_card', null, { anim:'wi_fadeUp', stagger: 80  });
  wiVista('.ac_cta_wrap',  null, { anim:'wi_fadeUp' });

  // Contador animado al aparecer
  const $band = $('.ac_counter_band')[0];
  if ($band) {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { _animateCounters(); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe($band);
  }

  // Hover redes — efecto borde color
  $(document).on('mouseenter', '.ac_red_card', function() {
    $(this).find('.ac_red_arrow').stop(true).fadeIn(160);
  }).on('mouseleave', '.ac_red_card', function() {
    $(this).find('.ac_red_arrow').stop(true).fadeOut(140);
  });

  // Compartir
  const SHARE_URL = 'https://historiawi.web.app/';
  $('#ac_compartir').on('click', function() {
    if (navigator.share) {
      navigator.share({
        title: 'Historiawi 🐾',
        text: '🐾 Historiawi — Historias positivas de animales y naturaleza que inspiran cada día ✨',
        url: SHARE_URL
      }).catch(() => {});
    } else {
      wicopy(SHARE_URL, this, '¡Link copiado! 🔗');
    }
  });
};

export const cleanup = () => {
  $(document).off('mouseenter mouseleave', '.ac_red_card');
  $('#ac_compartir').off('click');
};
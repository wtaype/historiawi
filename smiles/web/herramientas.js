import './herramientas.css';
import $ from 'jquery';
import { wiVista, wiTip, wicopy, year } from '../widev.js';

// ── CATEGORÍAS DE HERRAMIENTAS ────────────────────────────────
const cats = [
  { id:'todas',      icon:'fa-grid-2',        label:'Todas',        color:'var(--mco)' },
  { id:'redaccion',  icon:'fa-pen-nib',        label:'Redacción',    color:'#1877F2'    },
  { id:'imagenes',   icon:'fa-image',          label:'Imágenes',     color:'#bc1888'    },
  { id:'videos',     icon:'fa-film',           label:'Videos',       color:'#FF0000'    },
  { id:'audio',      icon:'fa-music',          label:'Audio',        color:'#ff0050'    },
  { id:'seo',        icon:'fa-magnifying-glass',label:'SEO',         color:'#25b62a'    },
  { id:'diseno',     icon:'fa-paintbrush',     label:'Diseño',       color:'#ffa726'    },
  { id:'web',        icon:'fa-code',           label:'Web',          color:'#6a00f5'    },
];

// ── HERRAMIENTAS ──────────────────────────────────────────────
const herramientas = [
  // REDACCIÓN
  { id:1,  nombre:'ChatGPT',          desc:'IA para generar textos, ideas y guiones para historias',            url:'https://chat.openai.com',              icon:'fa-robot',           cat:'redaccion', color:'#10a37f', free:true,  pro:true,  stars:5, badge:'IA'      },
  { id:2,  nombre:'Google Docs',      desc:'Editor de texto colaborativo ideal para escribir historias',        url:'https://docs.google.com',              icon:'fa-file-word',       cat:'redaccion', color:'#1877F2', free:true,  pro:false, stars:5, badge:'Gratis'  },
  { id:3,  nombre:'Notion',           desc:'Organiza tus ideas, guiones y contenido en un solo lugar',          url:'https://notion.so',                    icon:'fa-note-sticky',     cat:'redaccion', color:'#000',    free:true,  pro:true,  stars:4, badge:'Popular' },
  { id:4,  nombre:'Hemingway Editor', desc:'Mejora la claridad y legibilidad de tus textos fácilmente',         url:'https://hemingwayapp.com',             icon:'fa-align-left',      cat:'redaccion', color:'#e74c3c', free:true,  pro:true,  stars:4, badge:'Gratis'  },
  { id:5,  nombre:'Copy.ai',          desc:'Genera copies, títulos y descripciones atractivas con IA',          url:'https://copy.ai',                      icon:'fa-wand-magic-sparkles',cat:'redaccion',color:'#7c3aed',free:true, pro:true,  stars:4, badge:'IA'      },

  // IMÁGENES
  { id:6,  nombre:'Canva',            desc:'Crea thumbnails, posters y diseños profesionales fácilmente',       url:'https://canva.com',                    icon:'fa-palette',         cat:'imagenes',  color:'#00c4cc', free:true,  pro:true,  stars:5, badge:'Popular' },
  { id:7,  nombre:'Adobe Express',    desc:'Herramienta de diseño rápido de Adobe con plantillas premium',      url:'https://express.adobe.com',            icon:'fa-a',               cat:'imagenes',  color:'#ff0000', free:true,  pro:true,  stars:4, badge:'Adobe'   },
  { id:8,  nombre:'Remove.bg',        desc:'Elimina el fondo de imágenes automáticamente con 1 clic',           url:'https://remove.bg',                    icon:'fa-scissors',        cat:'imagenes',  color:'#e91e8c', free:true,  pro:true,  stars:5, badge:'Rápido'  },
  { id:9,  nombre:'Unsplash',         desc:'Miles de fotos gratis de alta calidad para tu contenido',           url:'https://unsplash.com',                 icon:'fa-camera',          cat:'imagenes',  color:'#111',    free:true,  pro:false, stars:5, badge:'Gratis'  },
  { id:10, nombre:'Stable Diffusion', desc:'Genera imágenes increíbles con IA a partir de texto',               url:'https://stablediffusionweb.com',       icon:'fa-microchip',       cat:'imagenes',  color:'#6c3483', free:true,  pro:true,  stars:4, badge:'IA'      },

  // VIDEOS
  { id:11, nombre:'CapCut',           desc:'Editor de video intuitivo para reels, shorts y TikToks',            url:'https://capcut.com',                   icon:'fa-scissors',        cat:'videos',    color:'#000',    free:true,  pro:true,  stars:5, badge:'Popular' },
  { id:12, nombre:'DaVinci Resolve',  desc:'Editor profesional de video gratuito con funciones avanzadas',      url:'https://blackmagicdesign.com/products/davinciresolve',icon:'fa-film',cat:'videos',color:'#f39c12',free:true, pro:true,  stars:5, badge:'Pro'     },
  { id:13, nombre:'Pexels Videos',    desc:'Videos libres de derechos para enriquecer tu contenido',            url:'https://pexels.com/videos',            icon:'fa-video',           cat:'videos',    color:'#05a081', free:true,  pro:false, stars:4, badge:'Gratis'  },
  { id:14, nombre:'Veed.io',          desc:'Editor online de video con subtítulos automáticos y más',           url:'https://veed.io',                      icon:'fa-closed-captioning',cat:'videos',   color:'#7c4dff', free:true,  pro:true,  stars:4, badge:'Online'  },
  { id:15, nombre:'Runway ML',        desc:'IA generativa para crear y editar videos de forma mágica',          url:'https://runwayml.com',                 icon:'fa-wand-magic-sparkles',cat:'videos', color:'#0066ff', free:true,  pro:true,  stars:4, badge:'IA'      },

  // AUDIO
  { id:16, nombre:'ElevenLabs',       desc:'Voz IA ultra realista para narrar tus historias en segundos',       url:'https://elevenlabs.io',                icon:'fa-microphone',      cat:'audio',     color:'#f59e0b', free:true,  pro:true,  stars:5, badge:'IA'      },
  { id:17, nombre:'Suno AI',          desc:'Genera música original con IA para tus videos de animales',         url:'https://suno.com',                     icon:'fa-music',           cat:'audio',     color:'#8b5cf6', free:true,  pro:true,  stars:5, badge:'IA'      },
  { id:18, nombre:'Audacity',         desc:'Editor de audio gratuito y potente para cualquier creador',         url:'https://www.audacityteam.org',         icon:'fa-wave-square',     cat:'audio',     color:'#ff6600', free:true,  pro:false, stars:4, badge:'Gratis'  },
  { id:19, nombre:'Pixabay Music',    desc:'Música libre de derechos para monetizar sin problemas',             url:'https://pixabay.com/music',            icon:'fa-headphones',      cat:'audio',     color:'#2ecc71', free:true,  pro:false, stars:4, badge:'Gratis'  },

  // SEO
  { id:20, nombre:'Ubersuggest',      desc:'Encuentra palabras clave y analiza tu competencia fácilmente',      url:'https://neilpatel.com/ubersuggest',    icon:'fa-magnifying-glass-chart',cat:'seo',color:'#ff6b35', free:true,  pro:true,  stars:4, badge:'Popular' },
  { id:21, nombre:'Google Search Console',desc:'Analiza tu posicionamiento en Google de forma gratuita',       url:'https://search.google.com/search-console',icon:'fa-chart-line',  cat:'seo',       color:'#4285F4', free:true,  pro:false, stars:5, badge:'Google'  },
  { id:22, nombre:'Answer The Public', desc:'Descubre qué busca la gente sobre tus temas favoritos',            url:'https://answerthepublic.com',          icon:'fa-people-group',    cat:'seo',       color:'#e74c3c', free:true,  pro:true,  stars:4, badge:'Útil'    },
  { id:23, nombre:'SEMrush',          desc:'Suite completa de SEO para escalar tu contenido al siguiente nivel', url:'https://semrush.com',                 icon:'fa-trophy',          cat:'seo',       color:'#ff642d', free:false, pro:true,  stars:5, badge:'Pro'     },

  // DISEÑO
  { id:24, nombre:'Figma',            desc:'Diseño colaborativo de interfaces y gráficos en el navegador',      url:'https://figma.com',                    icon:'fa-vector-square',   cat:'diseno',    color:'#f24e1e', free:true,  pro:true,  stars:5, badge:'Popular' },
  { id:25, nombre:'Coolors',          desc:'Genera paletas de colores perfectas para tu marca en segundos',     url:'https://coolors.co',                   icon:'fa-droplet',         cat:'diseno',    color:'#7c3aed', free:true,  pro:true,  stars:4, badge:'Rápido'  },
  { id:26, nombre:'Google Fonts',     desc:'Miles de tipografías gratis para personalizar tu contenido',        url:'https://fonts.google.com',             icon:'fa-font',            cat:'diseno',    color:'#4285F4', free:true,  pro:false, stars:5, badge:'Gratis'  },
  { id:27, nombre:'Lottiefiles',      desc:'Animaciones ligeras en JSON para webs y apps, gratis y premium',    url:'https://lottiefiles.com',              icon:'fa-circle-play',     cat:'diseno',    color:'#00ddb4', free:true,  pro:true,  stars:4, badge:'Anima'   },

  // WEB
  { id:28, nombre:'VS Code',          desc:'El mejor editor de código gratuito para desarrollar tu web',        url:'https://code.visualstudio.com',        icon:'fa-code',            cat:'web',       color:'#007acc', free:true,  pro:false, stars:5, badge:'Dev'     },
  { id:29, nombre:'Firebase',         desc:'Hosting, base de datos y auth gratis de Google para tu proyecto',   url:'https://firebase.google.com',          icon:'fa-fire',            cat:'web',       color:'#ff6d00', free:true,  pro:true,  stars:5, badge:'Google'  },
  { id:30, nombre:'Vite',             desc:'Bundler ultrarrápido para construir apps web modernas',              url:'https://vitejs.dev',                   icon:'fa-bolt',            cat:'web',       color:'#646cff', free:true,  pro:false, stars:5, badge:'Rápido'  },
  { id:31, nombre:'Tailwind CSS',     desc:'Framework CSS utility-first para diseñar sin escribir CSS propio',   url:'https://tailwindcss.com',              icon:'fa-paintbrush',      cat:'web',       color:'#06b6d4', free:true,  pro:false, stars:5, badge:'CSS'     },
];

// ── ESTADO ────────────────────────────────────────────────────
let catActiva   = 'todas';
let busqueda    = '';
let soloGratis  = false;

// ── FILTRADO ──────────────────────────────────────────────────
const filtrar = () => herramientas.filter(h => {
  const matchCat  = catActiva === 'todas' || h.cat === catActiva;
  const matchBus  = !busqueda || h.nombre.toLowerCase().includes(busqueda) || h.desc.toLowerCase().includes(busqueda);
  const matchFree = !soloGratis || h.free;
  return matchCat && matchBus && matchFree;
});

// ── ESTRELLAS ─────────────────────────────────────────────────
const tplStars = n => [...Array(5)].map((_, i) =>
  `<i class="fa${i < n ? 's' : 'r'} fa-star" style="color:${i < n ? '#ffa726' : 'var(--brd)'}"></i>`
).join('');

// ── TEMPLATE TARJETA ──────────────────────────────────────────
const tplCard = (h, i) => `
  <a href="${h.url}" target="_blank" rel="noopener"
    class="ht_card ht_fade" style="--d:${i * 0.05}s; --hc:${h.color}"
    ${wiTip(h.desc)}>

    <!-- Borde superior color -->
    <div class="ht_card_top_bar"></div>

    <!-- Badge -->
    <span class="ht_badge">${h.badge}</span>

    <!-- Ícono -->
    <div class="ht_card_ico">
      <i class="fas ${h.icon}"></i>
    </div>

    <!-- Info -->
    <div class="ht_card_body">
      <h3 class="ht_card_name">${h.nombre}</h3>
      <p class="ht_card_desc">${h.desc}</p>
    </div>

    <!-- Footer -->
    <div class="ht_card_foot">
      <div class="ht_stars">${tplStars(h.stars)}</div>
      <div class="ht_pills">
        ${h.free ? `<span class="ht_pill ht_free" ${wiTip('Plan gratuito disponible')}><i class="fas fa-check"></i> Gratis</span>` : ''}
        ${h.pro  ? `<span class="ht_pill ht_pro"  ${wiTip('Tiene versión Pro')}><i class="fas fa-crown"></i> Pro</span>` : ''}
      </div>
    </div>

    <!-- Hover arrow -->
    <div class="ht_card_arrow">
      <i class="fas fa-arrow-up-right-from-square"></i>
    </div>

  </a>`;

// ── TEMPLATE CATEGORÍA ────────────────────────────────────────
const tplCat = (c) => `
  <button class="ht_cat_btn${catActiva === c.id ? ' active' : ''}"
    data-cat="${c.id}" style="--cc:${c.color}" ${wiTip(c.label)}>
    <i class="fas ${c.icon}"></i>
    <span>${c.label}</span>
    <em>${c.id === 'todas' ? herramientas.length : herramientas.filter(h => h.cat === c.id).length}</em>
  </button>`;

// ── RENDER GRID ───────────────────────────────────────────────
const renderGrid = () => {
  const lista = filtrar();
  if (!lista.length) {
    $('#ht_grid').html(`
      <div class="ht_empty">
        <i class="fas fa-magnifying-glass"></i>
        <p>No encontramos herramientas con esos filtros 🔍</p>
        <button id="ht_reset_empty">Limpiar filtros</button>
      </div>`);
    $('#ht_count').text('0 herramientas');
    return;
  }
  $('#ht_grid').html(lista.map(tplCard).join(''));
  $('#ht_count').text(`${lista.length} herramienta${lista.length !== 1 ? 's' : ''}`);
  wiVista('.ht_fade', null, { anim:'wi_fadeUp', stagger: 45 });

  // Reset desde el empty state
  $('#ht_reset_empty').on('click', resetFiltros);
};

// ── RESET ─────────────────────────────────────────────────────
const resetFiltros = () => {
  catActiva  = 'todas';
  busqueda   = '';
  soloGratis = false;
  $('#ht_search').val('');
  $('#ht_toggle_free').prop('checked', false);
  $('.ht_cat_btn').removeClass('active');
  $(`.ht_cat_btn[data-cat="todas"]`).addClass('active');
  renderGrid();
};

// ── RENDER ────────────────────────────────────────────────────
export const render = () => `
  <div class="ht_wrap">

    <!-- ══ HERO ══ -->
    <section class="ht_hero ht_fade" style="--d:0s">
      <div class="ht_hero_bg"></div>
      <div class="ht_hero_gears" aria-hidden="true">
        ${[...Array(8)].map((_, i) =>
          `<i class="fas fa-gear ht_gear" style="--gi:${i}"></i>`).join('')}
      </div>
      <div class="ht_hero_inner">
        <div class="ht_hero_ico">
          <i class="fas fa-toolbox"></i>
        </div>
        <div class="ht_hero_txt">
          <div class="ht_hero_kicker">
            <span class="ht_kicker_badge"><i class="fas fa-toolbox"></i> Kit del Creador</span>
          </div>
          <h1>Herramientas para <span class="ht_grad">Crear Mejor</span> 🚀</h1>
          <p>Las mejores herramientas gratuitas y pro para creadores de contenido. Redacción, diseño, video, audio, SEO y más.</p>
          <div class="ht_hero_nums">
            <div class="ht_num">
              <strong>${herramientas.length}</strong>
              <span>Herramientas</span>
            </div>
            <div class="ht_num_div"></div>
            <div class="ht_num">
              <strong>${herramientas.filter(h => h.free).length}</strong>
              <span>Gratuitas</span>
            </div>
            <div class="ht_num_div"></div>
            <div class="ht_num">
              <strong>${cats.length - 1}</strong>
              <span>Categorías</span>
            </div>
            <div class="ht_num_div"></div>
            <div class="ht_num">
              <strong>${herramientas.filter(h => h.stars === 5).length}</strong>
              <span>⭐ 5 estrellas</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ FILTROS ══ -->
    <section class="ht_filters_wrap">

      <!-- Buscador + toggle gratis -->
      <div class="ht_search_row">
        <div class="ht_search_box">
          <i class="fas fa-magnifying-glass"></i>
          <input type="text" id="ht_search" placeholder="Buscar herramienta..." autocomplete="off" />
          <button class="ht_search_clear" id="ht_search_clear" ${wiTip('Limpiar búsqueda')}>
            <i class="fas fa-xmark"></i>
          </button>
        </div>
        <label class="ht_toggle_wrap" ${wiTip('Mostrar solo herramientas gratuitas')}>
          <input type="checkbox" id="ht_toggle_free" />
          <span class="ht_toggle_track">
            <span class="ht_toggle_thumb"></span>
          </span>
          <span class="ht_toggle_label"><i class="fas fa-check"></i> Solo gratis</span>
        </label>
        <span class="ht_count" id="ht_count">${herramientas.length} herramientas</span>
      </div>

      <!-- Categorías -->
      <div class="ht_cats_row">
        ${cats.map(tplCat).join('')}
      </div>

    </section>

    <!-- ══ GRID HERRAMIENTAS ══ -->
    <section class="ht_section">
      <div class="ht_grid" id="ht_grid">
        ${herramientas.map(tplCard).join('')}
      </div>
    </section>

    <!-- ══ STATS FINALES ══ -->
    <section class="ht_section">
      <div class="ht_stats_grid">
        ${[
          { icon:'fa-toolbox',   color:'var(--mco)', val: herramientas.length,                            label:'Herramientas totales'  },
          { icon:'fa-check',     color:'#25b62a',    val: herramientas.filter(h => h.free).length,        label:'Con plan gratuito'     },
          { icon:'fa-crown',     color:'#ffa726',    val: herramientas.filter(h => h.pro).length,         label:'Con versión Pro'       },
          { icon:'fa-robot',     color:'#6a00f5',    val: herramientas.filter(h => h.badge === 'IA').length, label:'Herramientas de IA'  },
          { icon:'fa-star',      color:'#FF0000',    val: herramientas.filter(h => h.stars === 5).length, label:'Con 5 estrellas ⭐'   },
          { icon:'fa-layer-group',color:'#0EBEFF',   val: cats.length - 1,                                label:'Categorías'            },
        ].map((s, i) => `
          <div class="ht_stat_card ht_fade" style="--d:${i * 0.07}s">
            <div class="ht_stat_ico" style="background:${s.color}">
              <i class="fas ${s.icon}"></i>
            </div>
            <strong>${s.val}</strong>
            <span>${s.label}</span>
          </div>`).join('')}
      </div>
    </section>

    <!-- ══ CTA ══ -->
    <section class="ht_cta">
      <div class="ht_cta_bg"></div>
      <div class="ht_cta_tools" aria-hidden="true">
        ${['🛠️','⚡','🎨','🎵','📸','🚀'].map((t, i) =>
          `<span class="ht_cta_tool" style="--ti:${i}">${t}</span>`).join('')}
      </div>
      <div class="ht_cta_inner">
        <div class="ht_cta_av">
          <i class="fas fa-toolbox"></i>
        </div>
        <h2>¿Conoces una herramienta genial? 🔧</h2>
        <p>Síguenos en nuestras redes y cuéntanos qué herramientas usas para crear contenido increíble</p>
        <div class="ht_cta_redes">
          <a href="https://www.youtube.com/@historiawi" target="_blank" rel="noopener"
            class="ht_red_cta yt" ${wiTip('YouTube')}>
            <i class="fab fa-youtube"></i> YouTube
          </a>
          <a href="https://www.tiktok.com/@historiawi" target="_blank" rel="noopener"
            class="ht_red_cta tt" ${wiTip('TikTok')}>
            <i class="fab fa-tiktok"></i> TikTok
          </a>
          <a href="https://www.instagram.com/historiawi" target="_blank" rel="noopener"
            class="ht_red_cta ig" ${wiTip('Instagram')}>
            <i class="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.facebook.com/historiawi" target="_blank" rel="noopener"
            class="ht_red_cta fb" ${wiTip('Facebook')}>
            <i class="fab fa-facebook"></i> Facebook
          </a>
        </div>
      </div>
    </section>

    <!-- ══ FOOTER ══ -->
    <section class="ht_footer">
      <p>Creado con ❤️ por <strong>Wilder Taype</strong> · Historiawi © ${year()}</p>
    </section>

  </div>`;

// ── INIT ──────────────────────────────────────────────────────
export const init = () => {

  wiVista('.ht_fade',      null, { anim:'wi_fadeUp', stagger: 45 });
  wiVista('.ht_stat_card', null, { anim:'wi_fadeUp', stagger: 70 });

  // Búsqueda
  let debounce;
  $(document).on('input', '#ht_search', function() {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      busqueda = $(this).val().toLowerCase().trim();
      $('#ht_search_clear').toggleClass('visible', busqueda.length > 0);
      renderGrid();
    }, 260);
  });

  // Limpiar búsqueda
  $(document).on('click', '#ht_search_clear', () => {
    $('#ht_search').val('').trigger('input').trigger('focus');
  });

  // Filtro solo gratis
  $(document).on('change', '#ht_toggle_free', function() {
    soloGratis = $(this).prop('checked');
    renderGrid();
  });

  // Categorías
  $(document).on('click', '.ht_cat_btn', function() {
    catActiva = $(this).data('cat');
    $('.ht_cat_btn').removeClass('active');
    $(this).addClass('active');
    renderGrid();
  });

  // Reset filtros (botón en empty)
  $(document).on('click', '#ht_reset_empty', resetFiltros);

  // Hover cards — efecto borde
  $(document).on('mouseenter', '.ht_card', function() {
    $(this).find('.ht_card_arrow').stop(true).fadeIn(160);
  }).on('mouseleave', '.ht_card', function() {
    $(this).find('.ht_card_arrow').stop(true).fadeOut(140);
  });

  // Renderizar inicial
  renderGrid();
};

export const cleanup = () => {
  $(document).off('input', '#ht_search');
  $(document).off('click', '#ht_search_clear, .ht_cat_btn, #ht_reset_empty');
  $(document).off('change', '#ht_toggle_free');
  $(document).off('mouseenter mouseleave', '.ht_card');
};
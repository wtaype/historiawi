import './blog.css';
import $ from 'jquery';
import { wiAuth, wiVista, wiTip, savels, getls, Notificacion } from '../widev.js';
import { db } from '../smile/firebase.js';
import {
  collection, query, where, orderBy,
  limit, getDocs, getDoc, doc
} from 'firebase/firestore';

const COL      = 'blog';
const POR_PAG  = 9;
const TTL_CAT  = 4;   // horas
const TTL_LIST = 2;   // horas

// ── CACHE KEYS ────────────────────────────────────────────────
const listKey = (cat, ord) => `wi_blog_${cat}_${ord}`;

// ── SERIALIZAR Timestamp → ms (JSON safe) ─────────────────────
const serializar = d => ({
  ...d,
  creado:      d.creado?.toDate?.()?.getTime?.()      ?? d.creado      ?? null,
  actualizado: d.actualizado?.toDate?.()?.getTime?.() ?? d.actualizado ?? null,
});

// ── FETCH POSTS ───────────────────────────────────────────────
const getPosts = async (cat = 'todo', orden = 'nuevo', force = false) => {
  const key = listKey(cat, orden);

  // 1️⃣ Intentar desde cache
  if (!force) {
    const cached = getls(key);
    if (Array.isArray(cached) && cached.length) {
      console.log(`[blog] cache hit → ${key} (${cached.length} posts)`);
      return { lista: cached, fromCache: true };
    }
  }

  // 2️⃣ Desde Firestore
  console.log(`[blog] firestore → cat:${cat} ord:${orden}`);
  try {
    let q;
    // Evitar índice compuesto cuando es "todo" + orden por creado
    if (cat === 'todo') {
      q = query(
        collection(db, COL),
        where('activo', '==', true),
        orderBy('creado', 'desc'),
        limit(50)
      );
    } else {
      q = query(
        collection(db, COL),
        where('activo',    '==', true),
        where('categoria', '==', cat),
        orderBy('creado',  'desc'),
        limit(50)
      );
    }

    // Si orden es vistas, ordenamos en cliente para evitar índices extra
    const snap  = await getDocs(q);
    let lista   = snap.docs.map(d => serializar(d.data()));

    if (orden === 'vistas') {
      lista.sort((a, b) => (b.vistas || 0) - (a.vistas || 0));
    }

    console.log(`[blog] firestore → ${lista.length} posts encontrados`);
    if (lista.length) savels(key, lista, cat === 'todo' ? TTL_LIST : TTL_CAT);
    return { lista, fromCache: false };

  } catch (err) {
    console.error('[blog] firestore error:', err.code, err.message);
    // Fallback: traer todo sin filtros y filtrar en cliente
    if (err.code === 'failed-precondition') {
      console.warn('[blog] índice faltante → fallback sin orderBy');
      const snap  = await getDocs(collection(db, COL));
      let lista   = snap.docs
        .map(d => serializar(d.data()))
        .filter(d => d.activo === true);
      if (cat !== 'todo') lista = lista.filter(d => d.categoria === cat);
      lista.sort((a, b) =>
        orden === 'vistas'
          ? (b.vistas || 0) - (a.vistas || 0)
          : (b.creado  || 0) - (a.creado  || 0)
      );
      if (lista.length) savels(key, lista, TTL_LIST);
      return { lista, fromCache: false };
    }
    throw err;
  }
};

// ── CATS & ORDEN ──────────────────────────────────────────────
const CATS = [
  { id:'todo',        icon:'fa-paw',      label:'Todas',       color:'var(--mco)' },
  { id:'Animales',    icon:'fa-dog',      label:'Animales',    color:'#0EBEFF'    },
  { id:'Naturaleza',  icon:'fa-leaf',     label:'Naturaleza',  color:'#25b62a'    },
  { id:'Amor',        icon:'fa-heart',    label:'Amor',        color:'#ff3849'    },
  { id:'Inspiración', icon:'fa-star',     label:'Inspiración', color:'#ffa726'    },
  { id:'Vida',        icon:'fa-seedling', label:'Vida',        color:'#6a00f5'    },
];
const ORDEN = [
  { id:'nuevo',  icon:'fa-clock', label:'Más nuevos' },
  { id:'vistas', icon:'fa-fire',  label:'Más vistos'  },
];

// ── FECHA desde ms ────────────────────────────────────────────
const fmtFecha = ms => {
  if (!ms) return '';
  try {
    return new Date(ms).toLocaleDateString('es-PE', {
      day:'numeric', month:'short', year:'numeric'
    });
  } catch { return ''; }
};

// ── SKELETON ──────────────────────────────────────────────────
const skCard = () => `
  <div class="bl_card_sk">
    <div class="bl_sk_img shimmer"></div>
    <div class="bl_sk_body">
      <div class="bl_sk_cat shimmer"></div>
      <div class="bl_sk_tit shimmer"></div>
      <div class="bl_sk_tit bl_sk_t2 shimmer"></div>
      <div class="bl_sk_p shimmer"></div>
      <div class="bl_sk_p bl_sk_p2 shimmer"></div>
      <div class="bl_sk_foot shimmer"></div>
    </div>
  </div>`;

// ── RENDER ESTÁTICO ───────────────────────────────────────────
export const render = () => `
  <div class="bl_wrap">

    <!-- Hero -->
    <div class="bl_hero bl_fade" style="--d:0s">
      <span class="bl_hero_tag"><i class="fas fa-paw"></i> Historiawi Blog</span>
      <h1 class="bl_hero_tit">Historias que <span class="bl_grad">llenan el alma</span> 🐾</h1>
      <div class="bl_hero_stats" id="bl_stats">
        <span class="bl_stat" ${wiTip('Total de historias')}><i class="fas fa-book-open"></i> <strong id="bl_total">...</strong> historias</span>
        <span class="bl_stat_div"></span>
        <span class="bl_stat" ${wiTip('Categorías')}><i class="fas fa-folder"></i> <strong>5</strong> categorías</span>
        <span class="bl_stat_div"></span>
        <span class="bl_stat" ${wiTip('Siempre gratis')}><i class="fas fa-heart"></i> <strong>100%</strong> gratis</span>
      </div>
    </div>

    <!-- Barra filtros -->
    <div class="bl_bar">
      <div class="bl_cats">
        ${CATS.map(c => `
          <button class="bl_cat_btn ${c.id==='todo'?'active':''}"
            data-cat="${c.id}" style="--cc:${c.color}" ${wiTip(c.label)}>
            <i class="fas ${c.icon}"></i><span>${c.label}</span>
          </button>`).join('')}
      </div>
      <div class="bl_bar_right">
        <div class="bl_orden">
          ${ORDEN.map(o => `
            <button class="bl_ord_btn ${o.id==='nuevo'?'active':''}"
              data-ord="${o.id}" ${wiTip(o.label)}>
              <i class="fas ${o.icon}"></i><span>${o.label}</span>
            </button>`).join('')}
        </div>
        <button class="bl_refresh_btn" id="bl_refresh" ${wiTip('Limpiar cache y recargar')}>
          <i class="fas fa-rotate"></i>
        </button>
      </div>
    </div>

    <!-- Info resultado -->
    <div class="bl_result_bar" id="bl_result_bar"></div>

    <!-- Grid -->
    <div class="bl_grid" id="bl_grid">
      ${[...Array(POR_PAG)].map(skCard).join('')}
    </div>

    <!-- Ver más -->
    <div class="bl_mas_wrap" id="bl_mas_wrap" style="display:none">
      <button class="bl_mas_btn" id="bl_mas" ${wiTip('Ver más historias')}>
        <i class="fas fa-plus"></i> Ver más historias
      </button>
    </div>

    <!-- Sin resultados -->
    <div class="bl_empty dpvc" id="bl_empty" style="display:none">
      <i class="fas fa-paw"></i>
      <h3>Sin historias aquí aún</h3>
      <p>Pronto habrá historias en esta categoría 🐾</p>
    </div>

  </div>`;

// ── CARD TEMPLATE ─────────────────────────────────────────────
const tplCard = (p, i) => {
  const cat   = CATS.find(c => c.id === p.categoria) || CATS[1];
  const fecha = fmtFecha(p.creado);
  const img   = p.imagen || 'https://placehold.co/600x400?text=🐾';
  return `
    <article class="bl_card bl_fade" style="--d:${i * 0.055}s"
      data-slug="${p.slug || p.id}" ${wiTip(p.resumen || p.titulo)}>
      <div class="bl_card_img">
        <img src="${img}" alt="${p.imagenAlt || p.titulo}" loading="lazy"
          onerror="this.src='https://placehold.co/600x400?text=🐾'" />
        <div class="bl_card_over">
          <span class="bl_card_cat" style="--cc:${cat.color}">
            <i class="fas ${cat.icon}"></i> ${p.categoria || 'Sin categoría'}
          </span>
          ${p.destacado ? `<span class="bl_card_dest" ${wiTip('Historia destacada')}><i class="fas fa-star"></i></span>` : ''}
        </div>
      </div>
      <div class="bl_card_body">
        <h2 class="bl_card_tit">${p.titulo}</h2>
        <p class="bl_card_res">${p.resumen || ''}</p>
        <div class="bl_card_meta">
          <span ${wiTip('Autor')}><i class="fas fa-user-pen"></i> ${p.autor || 'Autor'}</span>
          <span ${wiTip('Tiempo de lectura')}><i class="fas fa-clock"></i> ${p.tiempo_lectura || '—'}</span>
          <span ${wiTip('Vistas')}><i class="fas fa-eye"></i> ${p.vistas || 0}</span>
        </div>
        <div class="bl_card_footer">
          <span class="bl_card_fecha"><i class="fas fa-calendar"></i> ${fecha}</span>
          <span class="bl_card_leer">Leer <i class="fas fa-arrow-right"></i></span>
        </div>
      </div>
    </article>`;
};

// ── FADE HELPER ───────────────────────────────────────────────
const animarFade = (root = document) => requestAnimationFrame(() =>
  root.querySelectorAll?.('.bl_fade:not(.bl_visible)').forEach(el => {
    const d = parseFloat(el.style.getPropertyValue('--d') || '0') * 1000;
    setTimeout(() => el.classList.add('bl_visible'), d);
  })
);

// ── INIT ──────────────────────────────────────────────────────
export const init = async () => {
  let catActiva    = 'todo';
  let ordActivo    = 'nuevo';
  let paginaActual = 0;
  let listaActual  = [];
  let cargando     = false;

  // ── Render grid ─────────────────────────────────────────────
  const renderGrid = (lista, append = false) => {
    const $grid = $('#bl_grid');
    if (!append) { $grid.html(''); paginaActual = 0; }

    const desde = append ? paginaActual * POR_PAG : 0;
    const hasta  = desde + POR_PAG;
    const slice  = lista.slice(desde, hasta);

    if (!slice.length && !append) {
      $('#bl_empty').show();
      $('#bl_mas_wrap').hide();
      return;
    }
    $('#bl_empty').hide();
    $grid.append(slice.map((p, i) => tplCard(p, i)).join(''));
    animarFade($grid[0]);
    $('#bl_mas_wrap').toggle(hasta < lista.length);
  };

  // ── Cargar ──────────────────────────────────────────────────
  const cargar = async (force = false) => {
    if (cargando) return;
    cargando = true;

    $('#bl_grid').html([...Array(POR_PAG)].map(skCard).join(''));
    $('#bl_empty').hide();
    $('#bl_mas_wrap').hide();
    $('#bl_result_bar').html('');

    try {
      const { lista, fromCache } = await getPosts(catActiva, ordActivo, force);
      listaActual = lista;

      // Badge fuente
      const badge = fromCache
        ? `<span class="bl_cache_tag" ${wiTip('⚡ Desde cache local')}><i class="fas fa-bolt"></i> Cache</span>`
        : `<span class="bl_fire_tag"  ${wiTip('☁️ Desde Firestore')}><i class="fas fa-database"></i> Firestore</span>`;

      $('#bl_result_bar').html(
        lista.length
          ? `<span><strong>${lista.length}</strong> historia${lista.length!==1?'s':''}</span>${badge}`
          : `<span>Sin resultados</span>${badge}`
      );

      // Actualizar contador hero animado
      const total = lista.length;
      let v = 0;
      const $t = $('#bl_total');
      $t.text(0);
      const timer = setInterval(() => {
        v += Math.ceil(total / 25) || 1;
        if (v >= total) { $t.text(total); clearInterval(timer); }
        else $t.text(v);
      }, 30);

      renderGrid(lista);
      animarFade(document.querySelector('.bl_hero'));

    } catch(err) {
      console.error('[blog] init error:', err);
      Notificacion('No se pudieron cargar las historias', 'error');
      $('#bl_grid').html('');
      $('#bl_empty').show();
    }

    cargando = false;
  };

  // ── Carga inicial ────────────────────────────────────────────
  await cargar();

  wiVista('.bl_hero', null, { anim:'wi_fadeUp' });

  // ── EVENTOS ─────────────────────────────────────────────────

  $(document).on('click', '.bl_cat_btn', function() {
    const cat = $(this).data('cat');
    if (cat === catActiva) return;
    catActiva = cat;
    $('.bl_cat_btn').removeClass('active');
    $(this).addClass('active');
    paginaActual = 0;
    cargar();
  });

  $(document).on('click', '.bl_ord_btn', function() {
    const ord = $(this).data('ord');
    if (ord === ordActivo) return;
    ordActivo = ord;
    $('.bl_ord_btn').removeClass('active');
    $(this).addClass('active');
    paginaActual = 0;
    cargar();
  });

  // Refresh — limpia cache blog y recarga
  $(document).on('click', '#bl_refresh', async function() {
    const $btn = $(this);
    $btn.html('<i class="fas fa-spinner fa-spin"></i>').prop('disabled', true);
    Object.keys(localStorage)
      .filter(k => k.startsWith('wi_blog_'))
      .forEach(k => localStorage.removeItem(k));
    await cargar(true);
    $btn.html('<i class="fas fa-rotate"></i>').prop('disabled', false);
    Notificacion('Cache limpiado ✅', 'success');
  });

  $(document).on('click', '#bl_mas', function() {
    paginaActual++;
    renderGrid(listaActual, true);
  });

  // Navegar al post
  $(document).on('click', '.bl_card', function() {
    const slug = $(this).data('slug');
    if (!slug) return;
    import('../rutas/ruta.js').then(m => m.rutas.navigate(`/${slug}`));
  });
};

export const cleanup = () => {
  $(document).off('click', '.bl_cat_btn, .bl_ord_btn, #bl_refresh, #bl_mas, .bl_card');
};
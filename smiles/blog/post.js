import './post.css';
import $ from 'jquery';
import { wiAuth, wiVista, Notificacion, wicopy, wiTip, savels, getls } from '../widev.js';
import { db } from '../smile/firebase.js';
import { doc, getDoc, updateDoc, increment, collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

const COL      = 'blog';
const TTL_POST = 12;   // horas cache post
const TTL_REL  = 6;    // horas cache relacionados

// ── CACHE — savels/getls (localStorage) ──────────────────────
const cacheKey  = slug => `wi_post_${slug}`;
const relKey    = cat  => `wi_rel_${cat}`;

const getPost = async (slug, force = false) => {
  if (!force) {
    const cached = getls(cacheKey(slug));
    if (cached) return { data: cached, fromCache: true };
  }
  const snap = await getDoc(doc(db, COL, slug));
  if (!snap.exists()) return null;
  const data = snap.data();
  savels(cacheKey(slug), data, TTL_POST);
  return { data, fromCache: false };
};

const getRelacionados = async (slug, categoria, force = false) => {
  if (!force) {
    const cached = getls(relKey(categoria));
    if (cached) return cached.filter(d => d.id !== slug).slice(0, 3);
  }
  const snap = await getDocs(
    query(collection(db, COL),
      where('activo',    '==', true),
      where('categoria', '==', categoria),
      orderBy('creado',  'desc'),
      limit(5))
  ).catch(() => null);
  const lista = snap?.docs.map(d => d.data()) || [];
  if (lista.length) savels(relKey(categoria), lista, TTL_REL);
  return lista.filter(d => d.id !== slug).slice(0, 3);
};

// ── SKELETON ──────────────────────────────────────────────────
export const render = () => `
  <div class="po_wrap">
    <div class="po_layout">
      <div class="po_content">
        <div class="po_sk_img shimmer"></div>
        <div class="po_sk_body">
          <div class="po_sk_cat shimmer"></div>
          <div class="po_sk_tit shimmer"></div>
          <div class="po_sk_tit po_sk_t2 shimmer"></div>
          <div class="po_sk_meta shimmer"></div>
          ${[1,2,3,4,5].map(() => '<div class="po_sk_p shimmer"></div>').join('')}
        </div>
      </div>
      <aside class="po_sidebar">
        ${[1,2,3].map(() => '<div class="po_sk_side shimmer"></div>').join('')}
      </aside>
    </div>
  </div>`;

// ── PLANTILLAS ────────────────────────────────────────────────
const tplShareInline = (p) => [
  { icon:'fab fa-facebook', url:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`, color:'#1877F2', label:'Facebook'  },
  { icon:'fab fa-twitter',  url:`https://twitter.com/intent/tweet?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(p.titulo)}`, color:'#1da1f2', label:'Twitter'   },
  { icon:'fab fa-whatsapp', url:`https://wa.me/?text=${encodeURIComponent(p.titulo+' '+location.href)}`, color:'#25D366', label:'WhatsApp'  },
].map(r => `
  <a href="${r.url}" target="_blank" rel="noopener"
     class="po_share_btn" style="--sc:${r.color}" ${wiTip(r.label)}>
    <i class="${r.icon}"></i>
  </a>`).join('');

const tplShareFull = (p) => [
  { icon:'fab fa-facebook', url:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`, color:'#1877F2', label:'Facebook'  },
  { icon:'fab fa-twitter',  url:`https://twitter.com/intent/tweet?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(p.titulo)}`, color:'#1da1f2', label:'Twitter'   },
  { icon:'fab fa-whatsapp', url:`https://wa.me/?text=${encodeURIComponent(p.titulo+' '+location.href)}`, color:'#25D366', label:'WhatsApp'  },
  { icon:'fab fa-telegram', url:`https://t.me/share/url?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(p.titulo)}`, color:'#0088cc', label:'Telegram'  },
].map(r => `
  <a href="${r.url}" target="_blank" rel="noopener"
     class="po_share_full_btn" style="--sc:${r.color}" ${wiTip(r.label)}>
    <i class="${r.icon}"></i> ${r.label}
  </a>`).join('');

const tplRel = r => `
  <a href="/${r.slug}" class="po_rel_card" ${wiTip(r.resumen || r.titulo)}>
    <div class="po_rel_img">
      <img src="${r.imagen}" alt="${r.imagenAlt||r.titulo}" loading="lazy" />
    </div>
    <div class="po_rel_info">
      <span class="po_rel_cat"><i class="fas fa-paw"></i> ${r.categoria}</span>
      <strong>${r.titulo}</strong>
      <span class="po_rel_meta">
        <i class="fas fa-clock"></i> ${r.tiempo_lectura} &nbsp;·&nbsp;
        <i class="fas fa-eye"></i> ${r.vistas||0}
      </span>
    </div>
  </a>`;

// ── ANIMACIONES SUAVES ────────────────────────────────────────
const animarFade = () => requestAnimationFrame(() =>
  document.querySelectorAll('.po_fade').forEach(el => {
    const d = parseFloat(el.style.getPropertyValue('--d') || '0') * 1000;
    setTimeout(() => el.classList.add('po_visible'), d);
  })
);

// ── INIT ──────────────────────────────────────────────────────
export const init = async (slug, force = false) => {
  if (!slug) return;
  try {
    const result = await getPost(slug, force);
    if (!result || !result.data?.activo) {
      $('#wimain').html(`
        <div class="po_err dpvc">
          <i class="fas fa-paw"></i>
          <h2>Historia no encontrada</h2>
          <p>Esta historia no existe o no está disponible 🐾</p>
          <a href="/blog" class="po_back_btn"><i class="fas fa-arrow-left"></i> Ver todas las historias</a>
        </div>`);
      return;
    }

    const { data: p, fromCache } = result;

    // Vistas++ solo si viene de Firestore (primera visita real)
    if (!fromCache && !force) updateDoc(doc(db, COL, slug), { vistas: increment(1) }).catch(() => {});

    const relacionados = await getRelacionados(slug, p.categoria, force);
    const fecha = p.creado?.toDate?.()?.toLocaleDateString('es-PE',
      { year:'numeric', month:'long', day:'numeric' }) || '';
    const tags = (p.tags || []).map(t => `<span class="po_tag">#${t}</span>`).join('');

    // ── HTML ───────────────────────────────────────────────────
    $('#wimain').html(`
      <div class="po_wrap">
        <div class="po_layout">

          <!-- ══ CONTENT 72% ══ -->
          <div class="po_content">

            <div class="po_hero po_fade" style="--d:0s">
              <img src="${p.imagen}" alt="${p.imagenAlt||p.titulo}" class="po_hero_img" loading="eager" />
              <div class="po_hero_over">
                <a href="/blog" class="po_back" ${wiTip('Volver al blog')}>
                  <i class="fas fa-arrow-left"></i> Blog
                </a>
                <div class="po_hero_badges">
                  <span class="po_cat_badge" ${wiTip(p.categoria)}><i class="fas fa-paw"></i> ${p.categoria}</span>
                  ${p.destacado ? `<span class="po_dest_badge" ${wiTip('Historia destacada')}><i class="fas fa-star"></i> Destacado</span>` : ''}
                </div>
              </div>
            </div>

            <header class="po_header po_fade" style="--d:.15s">
              <h1 class="po_titulo">${p.titulo}</h1>
              <p class="po_resumen">${p.resumen}</p>
              <div class="po_meta">
                <span ${wiTip('Autor')}><i class="fas fa-user-pen"></i> ${p.autor}</span>
                <span ${wiTip('Fecha de publicación')}><i class="fas fa-calendar"></i> ${fecha}</span>
                <span ${wiTip('Tiempo de lectura')}><i class="fas fa-clock"></i> ${p.tiempo_lectura}</span>
                <span ${wiTip('Vistas totales')}><i class="fas fa-eye"></i> ${(p.vistas||0)+1}</span>
                ${fromCache ? `<span class="po_cache_badge" ${wiTip('Cargado desde cache local ⚡')}><i class="fas fa-bolt"></i> Cache</span>` : ''}
              </div>
            </header>

            <div class="po_contenido po_fade" style="--d:.3s">${p.contenido}</div>

            ${tags ? `<div class="po_tags po_fade" style="--d:.45s">${tags}</div>` : ''}

            <div class="po_share po_fade" style="--d:.6s">
              <span><i class="fas fa-share-nodes"></i> Comparte esta historia</span>
              <div class="po_share_btns">
                ${tplShareInline(p)}
                <button class="po_share_btn po_copy" style="--sc:var(--mco)" ${wiTip('Copiar enlace')}>
                  <i class="fas fa-link"></i>
                </button>
              </div>
            </div>

          </div>

          <!-- ══ SIDEBAR 27% ══ -->
          <aside class="po_sidebar">

            <!-- Autor -->
            <div class="po_side_card po_fade" style="--d:.2s">
              <div class="po_side_title"><i class="fas fa-user-pen"></i> Autor</div>
              <div class="po_autor_box">
                <div class="po_autor_av"><i class="fas fa-user-circle"></i></div>
                <div class="po_autor_info">
                  <strong>${p.autor}</strong>
                  <span>Historiawi 🐾</span>
                </div>
              </div>
              <p class="po_autor_bio">Apasionado por compartir historias positivas que llenan el alma de alegría y esperanza.</p>
            </div>

            <!-- Info -->
            <div class="po_side_card po_fade" style="--d:.35s">
              <div class="po_side_title"><i class="fas fa-circle-info"></i> Sobre esta historia</div>
              <ul class="po_info_list">
                <li ${wiTip('Categoría')}><i class="fas fa-folder"></i><span>Categoría</span><strong>${p.categoria}</strong></li>
                <li ${wiTip('Tiempo de lectura')}><i class="fas fa-clock"></i><span>Lectura</span><strong>${p.tiempo_lectura}</strong></li>
                <li ${wiTip('Total de vistas')}><i class="fas fa-eye"></i><span>Vistas</span><strong>${(p.vistas||0)+1}</strong></li>
                <li ${wiTip('Fecha de publicación')}><i class="fas fa-calendar"></i><span>Publicado</span><strong>${fecha}</strong></li>
                ${p.destacado ? `<li ${wiTip('Historia destacada')}><i class="fas fa-star"></i><span>Estado</span><strong class="po_dest_txt">Destacado ⭐</strong></li>` : ''}
              </ul>
            </div>

            <!-- Compartir -->
            <div class="po_side_card po_fade" style="--d:.5s">
              <div class="po_side_title"><i class="fas fa-share-nodes"></i> Compartir</div>
              <div class="po_share_full">
                ${tplShareFull(p)}
                <button class="po_share_full_btn po_copy2" style="--sc:var(--mco)" ${wiTip('Copiar enlace')}>
                  <i class="fas fa-link"></i> Copiar enlace
                </button>
              </div>
            </div>

            <!-- Relacionados -->
            ${relacionados.length ? `
              <div class="po_side_card po_fade" style="--d:.65s">
                <div class="po_side_title"><i class="fas fa-heart"></i> También te gustará</div>
                <div class="po_relacionados">${relacionados.map(tplRel).join('')}</div>
              </div>` : ''}

            <!-- Tags -->
            ${tags ? `
              <div class="po_side_card po_fade" style="--d:.8s">
                <div class="po_side_title"><i class="fas fa-tags"></i> Tags</div>
                <div class="po_tags po_tags_side">${tags}</div>
              </div>` : ''}

            <!-- Admin -->
            ${wiAuth.user?.usuario ? `
              <div class="po_side_card po_admin_card po_fade" style="--d:.95s">
                <div class="po_side_title"><i class="fas fa-screwdriver-wrench"></i> Admin</div>
                <div class="po_admin_info">
                  <div class="po_admin_row">
                    <i class="fas fa-circle-dot" ${wiTip(p.activo ? 'Post visible' : 'Post oculto')}></i>
                    <span>${p.activo ? 'Publicado' : 'Oculto'}</span>
                    <strong class="po_admin_estado ${p.activo ? 'ok' : 'off'}">${p.activo ? 'Activo' : 'Inactivo'}</strong>
                  </div>
                  <div class="po_admin_row" ${wiTip('ID del post en Firestore')}>
                    <i class="fas fa-fingerprint"></i>
                    <span>ID</span>
                    <code class="po_admin_id">${p.id}</code>
                  </div>
                  <div class="po_admin_row" ${wiTip(fromCache ? 'Cargado desde cache local' : 'Cargado desde Firestore')}>
                    <i class="fas fa-${fromCache ? 'bolt' : 'database'}"></i>
                    <span>Fuente</span>
                    <strong class="po_admin_estado ${fromCache ? 'ok' : 'off'}">${fromCache ? '⚡ Cache' : '☁️ Firestore'}</strong>
                  </div>
                </div>
                <div class="po_admin_actions">
                  <a href="/nuevo?edit=${slug}" class="po_admin_btn_edit" ${wiTip('Editar esta historia')}>
                    <i class="fas fa-pen"></i> Editar
                  </a>
                  <button class="po_admin_btn_refresh" id="po_refresh" ${wiTip('Limpiar cache y recargar desde Firestore')}>
                    <i class="fas fa-rotate"></i> Actualizar
                  </button>
                </div>
              </div>` : ''}

          </aside>
        </div>
      </div>`);

    animarFade();
    wiVista('.po_side_card', null, { anim:'wi_fadeUp', stagger: 80 });

    // ── EVENTOS ────────────────────────────────────────────────
    $(document).on('click', '.po_copy, .po_copy2', () =>
      wicopy(location.href, '.po_copy', '¡Enlace copiado! 🔗'));

    $(document).on('click', '.po_rel_card', function(e) {
      e.preventDefault();
      import('../rutas/ruta.js').then(m => m.rutas.navigate($(this).attr('href')));
    });

    $(document).on('click', '#po_refresh', async () => {
      const $btn = $('#po_refresh');
      $btn.html('<i class="fas fa-spinner fa-spin"></i>').prop('disabled', true);
      // Limpiar cache
      localStorage.removeItem(cacheKey(slug));
      localStorage.removeItem(relKey(p.categoria));
      await init(slug, true);
    });

  } catch(err) {
    console.error('post:', err);
    Notificacion('Error al cargar la historia', 'error');
  }
};

export const cleanup = () => {
  $(document).off('click', '.po_copy, .po_copy2, .po_rel_card, #po_refresh');
};
import './nuevo.css';
import $ from 'jquery';
import { wiAuth, wiSpin, Notificacion, Mensaje, wiTip } from '../widev.js';
import { db } from '../smile/firebase.js';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

// ── CONSTANTES ────────────────────────────────────────────────
const CATEGORIAS = ['Animales','Naturaleza','Amor','Inspiración','Vida'];
const COL = 'blog';

// ── HELPERS ───────────────────────────────────────────────────
const toSlug = s => s.trim().toLowerCase()
  .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
  .replace(/\b(el|la|los|las|de|del|en|un|una|y|a|con|por|para|que|es|se)\b/g,' ')
  .replace(/[^a-z0-9\s]/g,'').replace(/\s+/g,'_').replace(/_+/g,'_')
  .replace(/^_|_$/g,'').slice(0,50);

const tiempoLectura = html => {
  const txt = html.replace(/<[^>]*>/g,' ');
  const min = Math.ceil(txt.split(/\s+/).filter(Boolean).length / 200);
  return `${Math.max(1, min)} min`;
};

// ── RENDER ────────────────────────────────────────────────────
export const render = () => {
  const u = wiAuth.user;
  if (!u?.usuario) return `
    <div class="nu_err dpvc">
      <i class="fas fa-lock"></i>
      <h2>Acceso restringido</h2>
      <p>Debes iniciar sesión para crear historias</p>
      <a href="/login" class="nu_btn"><i class="fas fa-sign-in-alt"></i> Iniciar sesión</a>
    </div>`;

  return `
  <div class="nu_wrap">

    <!-- HEAD -->
    <div class="nu_head">
      <div class="nu_head_left">
        <h1><i class="fas fa-pen-fancy"></i> Nueva historia</h1>
        <p>Comparte una historia que inspire al mundo 🐾</p>
      </div>
      <div class="nu_head_right">
        <button type="button" id="nu_preview_pg" class="nu_btn_outline" ${wiTip('Previsualizar post')}>
          <i class="fas fa-eye"></i> Preview
        </button>
        <button type="submit" form="nu_form" id="nu_submit" class="nu_btn_submit">
          <i class="fas fa-paper-plane"></i> Publicar
        </button>
      </div>
    </div>

    <form id="nu_form" autocomplete="off">
      <div class="nu_layout">

        <!-- ══════════ LEFT 61% ══════════ -->
        <div class="nu_left">

          <!-- Título -->
          <div class="nu_card">
            <div class="nu_card_title"><i class="fas fa-heading"></i> Título</div>
            <input id="nu_titulo" type="text" class="nu_titulo_inp"
              placeholder="Ej: El perro que salvó a su familia en la montaña..." maxlength="100" required />
            <!-- Slug editable -->
            <div class="nu_slug_box">
              <span class="nu_slug_label"><i class="fas fa-link"></i> historiawi.web.app/</span>
              <input id="nu_slug_inp" type="text"
                placeholder="mi_historia" maxlength="50" spellcheck="false" />
              <button type="button" id="nu_slug_reset" class="nu_slug_btn" ${wiTip('Regenerar desde título')}>
                <i class="fas fa-rotate"></i>
              </button>
            </div>
            <div id="nu_slug_status" class="nu_slug_status"></div>
          </div>

          <!-- Resumen -->
          <div class="nu_card">
            <div class="nu_card_title"><i class="fas fa-align-left"></i> Resumen <span class="nu_hint">— aparece en las cards del blog</span></div>
            <textarea id="nu_resumen" rows="3" maxlength="160"
              placeholder="Describe en pocas palabras esta historia bonita..."></textarea>
            <div class="nu_counter"><span id="nu_resumen_cnt">0</span>/160</div>
          </div>

          <!-- Contenido HTML -->
          <div class="nu_card nu_card_editor">
            <div class="nu_card_title_row">
              <span><i class="fas fa-code"></i> Contenido HTML</span>
              <div class="nu_editor_tabs">
                <button type="button" class="nu_tab active" data-tab="edit">
                  <i class="fas fa-code"></i> Editor
                </button>
                <button type="button" class="nu_tab" data-tab="prev">
                  <i class="fas fa-eye"></i> Preview
                </button>
              </div>
            </div>
            <div class="nu_toolbar">
              ${[
                ['fa-bold','bold','<strong>texto</strong>'],
                ['fa-italic','italic','<em>texto</em>'],
                ['fa-heading','h2','<h2>Título</h2>'],
                ['fa-heading fa-xs','h3','<h3>Subtítulo</h3>'],
                ['fa-quote-left','quote','<blockquote>cita</blockquote>'],
                ['fa-list-ul','ul','<ul>\n  <li>item</li>\n</ul>'],
                ['fa-image','img','<img src="url" alt="descripción" />'],
                ['fa-link','link','<a href="url">texto</a>'],
              ].map(([ic,name,tag]) => `
                <button type="button" class="nu_tool" data-tag='${tag}' ${wiTip(name)}>
                  <i class="fas ${ic}"></i>
                </button>`).join('')}
            </div>
            <textarea id="nu_contenido" class="nu_code" rows="18"
              placeholder="<p>Había una vez un pequeño perro llamado Max...</p>&#10;<p>Su historia cambió la vida de muchas personas.</p>"></textarea>
            <div id="nu_prev_html" class="nu_html_prev dpn"></div>
            <div class="nu_content_footer">
              <span id="nu_palabras" class="nu_hint"><i class="fas fa-font"></i> 0 palabras</span>
              <span id="nu_lectura" class="nu_hint"><i class="fas fa-clock"></i> 1 min lectura</span>
            </div>
          </div>

        </div>

        <!-- ══════════ RIGHT 38% ══════════ -->
        <div class="nu_right">

          <!-- Publicar -->
          <div class="nu_card nu_card_publish">
            <div class="nu_card_title"><i class="fas fa-rocket"></i> Publicar</div>
            <div class="nu_publish_opts">
              <label class="nu_check_l">
                <input type="checkbox" id="nu_activo" checked />
                <span><i class="fas fa-eye"></i> Visible ahora</span>
              </label>
              <label class="nu_check_l">
                <input type="checkbox" id="nu_destacado" />
                <span><i class="fas fa-star"></i> Destacado</span>
              </label>
            </div>
            <button type="submit" form="nu_form" class="nu_btn_submit nu_btn_full">
              <i class="fas fa-paper-plane"></i> Publicar historia
            </button>
          </div>

          <!-- Categoría -->
          <div class="nu_card">
            <div class="nu_card_title"><i class="fas fa-folder"></i> Categoría</div>
            <div class="nu_cats_grid">
              ${CATEGORIAS.map((c,i) => `
                <label class="nu_cat_opt">
                  <input type="radio" name="nu_cat" value="${c}" ${i===0?'checked':''} />
                  <span>${c}</span>
                </label>`).join('')}
            </div>
          </div>

          <!-- Imagen -->
          <div class="nu_card">
            <div class="nu_card_title"><i class="fas fa-image"></i> Imagen destacada</div>
            <input id="nu_img" type="url" placeholder="https://cdn.pixabay.com/..." />
            <div id="nu_img_prev" class="nu_img_prev dpn">
              <img id="nu_img_el" src="" alt="preview" />
              <button type="button" id="nu_img_clear" class="nu_img_clear" ${wiTip('Quitar imagen')}>
                <i class="fas fa-xmark"></i>
              </button>
            </div>
          </div>

          <!-- Tags -->
          <div class="nu_card">
            <div class="nu_card_title"><i class="fas fa-tags"></i> Tags</div>
            <input id="nu_tags_inp" type="text" placeholder="Escribe tag + Enter" />
            <div id="nu_tags_box" class="nu_tags_box"></div>
          </div>

          <!-- Info autor -->
          <div class="nu_card nu_card_autor">
            <div class="nu_card_title"><i class="fas fa-user-pen"></i> Autor</div>
            <div class="nu_autor_info">
              <div class="nu_autor_av"><i class="fas fa-user-circle"></i></div>
              <div>
                <strong>${wiAuth.user?.nombre || wiAuth.user?.usuario || 'Anónimo'}</strong>
                <span>${wiAuth.user?.email || ''}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </form>
  </div>`;
};

// ── INIT ──────────────────────────────────────────────────────
export const init = () => {
  if (!wiAuth.user?.usuario) return;

  let tagsArr = [], slugTimer, imgTimer, slugCheckTimer;

  // ─ Slug desde título ─
  const genSlug = () => toSlug($('#nu_titulo').val());
  const setSlug = (val) => $('#nu_slug_inp').val(val).trigger('input');

  $('#nu_titulo').on('input', function() {
    clearTimeout(slugTimer);
    slugTimer = setTimeout(() => {
      if (!$('#nu_slug_inp').data('manual')) setSlug(genSlug());
    }, 400);
  });

  // Slug editable — verifica unicidad
  $('#nu_slug_inp').on('input', function() {
    $(this).data('manual', true);
    const val = $(this).val().replace(/[^a-z0-9_]/gi, s => s === ' ' ? '_' : '')
      .toLowerCase().replace(/_{2,}/g,'_');
    $(this).val(val);
    clearTimeout(slugCheckTimer);
    const $st = $('#nu_slug_status');
    if (!val) return $st.html('').removeClass('ok err');
    $st.html('<i class="fas fa-spinner fa-spin"></i> Verificando...').removeClass('ok err');
    slugCheckTimer = setTimeout(async () => {
      if (val.length < 3) return $st.html('<i class="fas fa-exclamation"></i> Muy corto').addClass('err').removeClass('ok');
      const snap = await getDoc(doc(db, COL, val)).catch(() => null);
      snap?.exists()
        ? $st.html('<i class="fas fa-xmark"></i> Ya existe este slug').addClass('err').removeClass('ok')
        : $st.html('<i class="fas fa-check"></i> Disponible').addClass('ok').removeClass('err');
    }, 600);
  });

  $('#nu_slug_reset').on('click', () => {
    $('#nu_slug_inp').removeData('manual');
    setSlug(genSlug());
  });

  // ─ Counter resumen ─
  $('#nu_resumen').on('input', function() {
    $('#nu_resumen_cnt').text($(this).val().length);
  });

  // ─ Preview imagen ─
  $('#nu_img').on('input', function() {
    clearTimeout(imgTimer);
    imgTimer = setTimeout(() => {
      const url = $(this).val().trim();
      if (!url) return $('#nu_img_prev').addClass('dpn');
      $('#nu_img_el').attr('src', url).off('load error')
        .on('load',  () => $('#nu_img_prev').removeClass('dpn'))
        .on('error', () => $('#nu_img_prev').addClass('dpn'));
    }, 600);
  });

  $('#nu_img_clear').on('click', () => {
    $('#nu_img').val(''); $('#nu_img_prev').addClass('dpn');
  });

  // ─ Toolbar HTML ─
  $(document).on('click', '.nu_tool', function() {
    const tag = $(this).data('tag');
    const $ta = $('#nu_contenido');
    const ta  = $ta[0];
    const s = ta.selectionStart, e = ta.selectionEnd;
    const sel = ta.value.substring(s, e) || 'texto';
    // Si el tag tiene "texto" lo reemplaza con la selección
    const ins = tag.replace('texto', sel).replace('cita', sel);
    $ta.val(ta.value.substring(0, s) + ins + ta.value.substring(e));
    ta.focus(); ta.selectionStart = s; ta.selectionEnd = s + ins.length;
    actualizarContador();
  });

  // ─ Tabs editor/preview ─
  $(document).on('click', '.nu_tab', function() {
    const tab = $(this).data('tab');
    $('.nu_tab').removeClass('active'); $(this).addClass('active');
    if (tab === 'prev') {
      $('#nu_prev_html').html($('#nu_contenido').val()).removeClass('dpn');
      $('#nu_contenido').addClass('dpn');
    } else {
      $('#nu_contenido').removeClass('dpn');
      $('#nu_prev_html').addClass('dpn');
    }
  });

  // ─ Contador palabras / tiempo ─
  const actualizarContador = () => {
    const txt  = $('#nu_contenido').val().replace(/<[^>]*>/g,' ');
    const pals = txt.split(/\s+/).filter(Boolean).length;
    const min  = Math.max(1, Math.ceil(pals / 200));
    $('#nu_palabras').html(`<i class="fas fa-font"></i> ${pals} palabras`);
    $('#nu_lectura').html(`<i class="fas fa-clock"></i> ${min} min lectura`);
  };
  $('#nu_contenido').on('input', actualizarContador);

  // ─ Tags con Enter ─
  $('#nu_tags_inp').on('keydown', function(e) {
    if (e.key !== 'Enter' && e.key !== ',') return;
    e.preventDefault();
    const tag = $(this).val().trim().toLowerCase().replace(/\s+/g,'_');
    if (tag && !tagsArr.includes(tag) && tagsArr.length < 8) {
      tagsArr.push(tag);
      renderTags();
    }
    $(this).val('');
  });

  const renderTags = () => {
    $('#nu_tags_box').html(tagsArr.map((t,i) => `
      <span class="nu_tag_chip">
        #${t} <i class="fas fa-xmark nu_tag_rm" data-i="${i}"></i>
      </span>`).join(''));
  };

  $(document).on('click', '.nu_tag_rm', function() {
    tagsArr.splice(+$(this).data('i'), 1);
    renderTags();
  });

  // ─ Submit ─
  $('#nu_form').on('submit', async function(e) {
    e.preventDefault();
    const $btn = $('#nu_submit, .nu_btn_full');
    const u    = wiAuth.user;

    const titulo   = $('#nu_titulo').val().trim();
    const resumen  = $('#nu_resumen').val().trim();
    const cat      = $('input[name="nu_cat"]:checked').val();
    const img      = $('#nu_img').val().trim();
    const contenido= $('#nu_contenido').val().trim();
    const slug     = $('#nu_slug_inp').val().trim();

    if (!titulo || !resumen || !cat || !img || !contenido)
      return Notificacion('Completa todos los campos obligatorios ⚠️', 'warning');
    if (contenido.length < 50)
      return Notificacion('El contenido es muy corto', 'warning');
    if (!slug || slug.length < 3)
      return Notificacion('El slug es inválido o muy corto', 'warning');
    if ($('#nu_slug_status').hasClass('err'))
      return Notificacion('El slug no está disponible', 'error');

    wiSpin($btn, true, 'Publicando...');

    try {
      const existe = await getDoc(doc(db, COL, slug));
      if (existe.exists()) {
        wiSpin($btn, false);
        return Notificacion('Ya existe una historia con ese slug', 'warning');
      }

      const post = {
        id: slug, slug,
        activo:         $('#nu_activo').is(':checked'),
        destacado:      $('#nu_destacado').is(':checked'),
        usuario:        u.usuario,
        email:          u.email,
        autor:          u.nombre || u.usuario,
        titulo, resumen, categoria: cat, contenido,
        imagen: img, imagenAlt: titulo,
        tags: tagsArr,
        vistas:         0,
        tiempo_lectura: tiempoLectura(contenido),
        creado:         serverTimestamp(),
        actualizado:    serverTimestamp(),
      };

      await setDoc(doc(db, COL, slug), post);
      Mensaje('¡Historia publicada! 🐾✨', 'success');
      setTimeout(() => import('../rutas/ruta.js').then(m => m.rutas.navigate(`/${slug}`)), 1200);

    } catch(err) {
      console.error('nuevo:', err);
      Notificacion('Error al publicar. Intenta de nuevo.', 'error');
      wiSpin($btn, false);
    }
  });
};

export const cleanup = () => {
  $('#nu_form, #nu_slug_inp, #nu_titulo, #nu_resumen, #nu_img, #nu_contenido').off();
  $(document).off('click', '.nu_tab, .nu_tool, .nu_tag_rm');
};
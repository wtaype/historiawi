import './inicio.css';
import $ from 'jquery';
import { app, version, autor, link } from '../wii.js';
import { wiVista, year, wiTip, Saludar } from '../widev.js';

// ── DATA ──────────────────────────────────────────────────────
const roles = ['Historias de animales 🐾','Momentos que inspiran ✨','Amor por la naturaleza 🌿','Historias que sanan el alma 💛'];

const stats = [
  { valor:100,  label:'Historias positivas', sufijo:'+' },
  { valor:100,  label:'Gratis',              sufijo:'%' },
  { valor:2026, label:'Actualizado',         sufijo:''  },
  { valor:5,    label:'Categorías bonitas',  sufijo:''  },
];

const features = [
  { id:'blog', icon:'fa-book-open', color:'#0EBEFF', nombre:'Blog',
    desc:'Historias escritas con amor para alegrar tu día',
    items:[
      { icon:'fa-paw',        name:'Animales',    desc:'Historias tiernas de mascotas y vida salvaje' },
      { icon:'fa-leaf',       name:'Naturaleza',  desc:'Momentos mágicos del mundo natural' },
      { icon:'fa-heart',      name:'Inspiración', desc:'Relatos que llenan el corazón de esperanza' },
    ]},
  { id:'youtube', icon:'fab fa-youtube', color:'#FF0000', nombre:'Youtube',
    desc:'Videos positivos y emotivos para tu día',
    items:[
      { icon:'fa-play-circle', name:'Videos bonitos',   desc:'Historias en video que te emocionarán' },
      { icon:'fa-star',        name:'Más vistos',        desc:'Los videos favoritos de nuestra comunidad' },
      { icon:'fa-bell',        name:'Nuevos videos',     desc:'Lo último de nuestro canal' },
    ]},
  { id:'tiktok', icon:'fab fa-tiktok', color:'#FF5C69', nombre:'TikTok',
    desc:'Historias cortas y emotivas en TikTok',
    items:[
      { icon:'fa-fire',       name:'Trending',     desc:'Los TikToks más vistos y compartidos' },
      { icon:'fa-smile',      name:'Más bonitos',  desc:'Momentos que te sacarán una sonrisa' },
      { icon:'fa-share',      name:'Compartidos',  desc:'Los más compartidos por nuestra comunidad' },
    ]},
  { id:'instagram', icon:'fab fa-instagram', color:'#E1306C', nombre:'Instagram',
    desc:'Fotos y reels de animales y naturaleza',
    items:[
      { icon:'fa-image',      name:'Fotos bonitas', desc:'Las mejores fotos de animales del mundo' },
      { icon:'fa-video',      name:'Reels',         desc:'Momentos únicos en video corto' },
      { icon:'fa-heart',      name:'Más amados',    desc:'Las publicaciones con más amor' },
    ]},
  { id:'facebook', icon:'fab fa-facebook', color:'#1877F2', nombre:'Facebook',
    desc:'Comunidad de historias positivas en Facebook',
    items:[
      { icon:'fa-users',      name:'Comunidad',    desc:'Únete a nuestra familia positiva' },
      { icon:'fa-newspaper',  name:'Publicaciones',desc:'Historias diarias para tu muro' },
      { icon:'fa-comment',    name:'Comentarios',  desc:'Comparte lo que sientes con todos' },
    ]},
  { id:'herramientas', icon:'fa-toolbox', color:'#29C72E', nombre:'Herramientas',
    desc:'Recursos para disfrutar mejor las historias',
    items:[
      { icon:'fa-search',     name:'Buscador',     desc:'Encuentra la historia perfecta para ti' },
      { icon:'fa-bookmark',   name:'Guardados',    desc:'Guarda tus historias favoritas' },
      { icon:'fa-share-nodes',name:'Compartir',    desc:'Envía alegría a quien más quieres' },
    ]},
];

const beneficios = [
  { icon:'fa-paw',       titulo:'Solo historias positivas', desc:'Seleccionamos cuidadosamente cada historia. Solo contenido que te llene de alegría, amor y esperanza. Sin negatividad.' },
  { icon:'fa-heart',     titulo:'Hecho con amor',           desc:'Cada historia está elegida para tocarte el corazón. Animales, naturaleza y momentos mágicos que inspiran cada día.' },
  { icon:'fa-rocket',    titulo:'Rápido y bonito',          desc:'Diseño limpio y elegante que se adapta a ti. Con 5 temas de color para disfrutar la experiencia a tu manera.' },
];

const histPreview = [
  { done:true,  txt:'🐶 El perro que salvó a su familia',  color:'#29C72E' },
  { done:true,  txt:'🦋 La mariposa que viajó 4000 km',   color:'#29C72E' },
  { done:false, txt:'🐬 Delfines rescatan a un buzo',      color:'#0EBEFF' },
  { done:false, txt:'🌸 El jardín secreto de la abuela',   color:'#FF5C69' },
];

const categPreview = ['Animales','Naturaleza','Amor','Esperanza','Vida'];

// ── PLANTILLAS ────────────────────────────────────────────────
const tplStat = s => `
  <div class="ini_stat">
    <div class="ini_stat_n" data-target="${s.valor}" data-sufijo="${s.sufijo}">0</div>
    <div class="ini_stat_l">${s.label}</div>
  </div>`;

const tplCateg = (c, i) => `
  <div class="ini_prev_day${i===0?' active':''}">
    <span class="ini_prev_day_n">${c}</span>
    <div class="ini_prev_dots">
      <span class="ini_dot" style="background:#0EBEFF"></span>
      ${i<3?'<span class="ini_dot" style="background:#29C72E"></span>':''}
      ${i===0?'<span class="ini_dot" style="background:#FF5C69"></span>':''}
    </div>
  </div>`;

const tplHist = t => `
  <div class="ini_prev_task${t.done?'':' pending'}">
    <i class="fas ${t.done?'fa-check-circle':'fa-circle'}" style="color:${t.done?'#29C72E':t.color}"></i>
    ${t.txt}
  </div>`;

const tplFeature = f => `
  <div class="ini_cat_card" style="--cc:${f.color}">
    <div class="ini_cat_bar"></div>
    <div class="ini_cat_top">
      <div class="ini_cat_ico"><i class="${f.icon.startsWith('fab')?f.icon:'fas '+f.icon}"></i></div>
      <div class="ini_cat_info"><h3>${f.nombre}</h3><p>${f.desc}</p></div>
    </div>
    <ul class="ini_cat_tools">
      ${f.items.map(it=>`
        <li><a href="/${f.id}" class="ini_tool_a">
          <i class="fas ${it.icon}"></i>
          <div><strong>${it.name}</strong><span>${it.desc}</span></div>
          <i class="fas fa-arrow-right ini_ext"></i>
        </a></li>`).join('')}
    </ul>
  </div>`;

const tplBeneficio = (b, i) => `
  <div class="ini_about_card" style="--d:${i*.15}s">
    <div class="ini_card_ico"><i class="fas ${b.icon}"></i></div>
    <h3>${b.titulo}</h3>
    <p>${b.desc}</p>
  </div>`;

// ── RENDER ────────────────────────────────────────────────────
export const render = () => `
<div class="ini_wrap">

  <!-- ===== HERO ===== -->
  <section class="ini_hero">
    <div class="ini_hero_content">

      <div class="ini_saludo" style="--d:0s">
        <span>${Saludar()} Historiawis!</span><span class="ini_wave">🐾</span>
      </div>

      <h1 class="ini_titulo" style="--d:.18s">
        Historias que <span class="ini_grad">llenan el alma</span>
      </h1>

      <div class="ini_roles" style="--d:.36s">
        ${roles.map((r,i)=>`<span class="ini_role${i===0?' active':''}">${r}</span>`).join('')}
      </div>

      <p class="ini_sub" style="--d:.54s">
        Descubre historias bonitas de animales y momentos mágicos de la naturaleza.
        Un centro de inspiración donde cada historia te llena de alegría, esperanza y amor por la vida. 100% gratis.
      </p>

      <div class="ini_stats" id="in_stats" style="--d:.72s">
        ${stats.map(tplStat).join('')}
      </div>

      <div class="ini_btns" style="--d:.9s">
        <a href="/blog" class="ini_btn_p"><i class="fas fa-book-open"></i> Leer historias</a>
        <a href="/youtube" class="ini_btn_s"><i class="fab fa-youtube"></i> Ver videos</a>
      </div>

    </div>

    <!-- Derecha: preview historias -->
    <div class="ini_hero_visual">
      <div class="ini_planner_preview" style="--d:.3s">
        <div class="ini_prev_header">
          <i class="fas fa-paw"></i>
          <span>Historias de hoy 🐾</span>
          <span class="ini_prev_badge"><i class="fas fa-circle"></i> Nuevas</span>
        </div>
        <div class="ini_prev_cols">
          <div class="ini_prev_left">${categPreview.map(tplCateg).join('')}</div>
          <div class="ini_prev_right">
            <div class="ini_prev_note_title"><i class="fas fa-heart"></i> Historias del día</div>
            ${histPreview.map(tplHist).join('')}
            <div class="ini_prev_add"><i class="fas fa-plus"></i> Ver más historias...</div>
          </div>
        </div>
      </div>
      <div class="ini_ftech ini_ft1" style="--d:.5s"  ${wiTip('Historias de animales')}><i class="fas fa-paw"></i></div>
      <div class="ini_ftech ini_ft2" style="--d:.65s" ${wiTip('Naturaleza')}><i class="fas fa-leaf"></i></div>
      <div class="ini_ftech ini_ft3" style="--d:.8s"  ${wiTip('Amor e inspiración')}><i class="fas fa-heart"></i></div>
      <div class="ini_ftech ini_ft4" style="--d:.95s" ${wiTip('Comparte alegría')}><i class="fas fa-share-nodes"></i></div>
    </div>
  </section>

  <!-- ===== CATEGORÍAS ===== -->
  <section class="ini_cats_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">Todo lo que <span class="ini_grad">inspira</span></h2>
      <div class="ini_sec_line"></div>
      <p class="ini_sec_desc">6 espacios llenos de historias positivas, amor y momentos mágicos</p>
    </div>
    <div class="ini_cats_grid">${features.map(tplFeature).join('')}</div>
  </section>

  <!-- ===== ¿POR QUÉ? ===== -->
  <section class="ini_about_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">¿Por qué <span class="ini_grad">${app}?</span></h2>
      <div class="ini_sec_line"></div>
    </div>
    <div class="ini_about_grid">${beneficios.map(tplBeneficio).join('')}</div>
  </section>

  <!-- ===== CTA ===== -->
  <section class="ini_cta_sec">
    <div class="ini_cta_wrap">
      <i class="fas fa-paw ini_cta_ico"></i>
      <h2>¿Listo para llenarte de alegría? 🐾</h2>
      <p>Empieza ahora, es completamente gratis ✨</p>
      <div class="ini_cta_chips">
        ${features.map(f=>`<a href="/${f.id}" class="ini_chip" style="--cc:${f.color}" ${wiTip(f.desc)}><i class="${f.icon.startsWith('fab')?f.icon:'fas '+f.icon}"></i> ${f.nombre}</a>`).join('')}
      </div>
      <p class="ini_cta_autor">Creado con ❤️ por <a href="${link}" target="_blank" rel="noopener">${autor}</a> · ${version} © ${year()}</p>
    </div>
  </section>

</div>`;

// ── INIT ──────────────────────────────────────────────────────
export const init = () => {

  // Roles rotantes
  let ri = 0;
  const $r = $('.ini_role');
  setInterval(() => { $r.removeClass('active'); $r.eq(ri = (ri+1) % $r.length).addClass('active'); }, 2800);

  // Stats contador — al entrar en viewport
  wiVista('#in_stats', () => {
    $('.ini_stat_n').each(function() {
      const $n = $(this), obj = +$n.data('target'), suf = $n.data('sufijo') || '';
      let v = 0;
      const t = setInterval(() => {
        v += obj / 50;
        if (v >= obj) { $n.text(obj + suf); clearInterval(t); }
        else $n.text(Math.floor(v));
      }, 28);
    });
  });

  // Scroll animations suaves con wiVista
  wiVista('.ini_cat_card',   null, { anim:'wi_fadeUp', stagger:80  });
  wiVista('.ini_about_card', null, { anim:'wi_fadeUp', stagger:140 });
  wiVista('.ini_cta_wrap',   null, { anim:'wi_fadeUp' });
  wiVista('.ini_sec_head',   null, { anim:'wi_fadeUp' });

  console.log(`🐾 ${app} ${version} · Inicio OK`);
};

export const cleanup = () => console.log('🧹 Inicio limpiado');
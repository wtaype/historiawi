import{j as a}from"./vendor-gzd0YkcT.js";import{w as d,b as o,y as g}from"./main-BwmAh3eW.js";import"./main-Xk6liCy7.js";const l=[{id:"todas",icon:"fa-grid-2",label:"Todas",color:"var(--mco)"},{id:"redaccion",icon:"fa-pen-nib",label:"Redacción",color:"#1877F2"},{id:"imagenes",icon:"fa-image",label:"Imágenes",color:"#bc1888"},{id:"videos",icon:"fa-film",label:"Videos",color:"#FF0000"},{id:"audio",icon:"fa-music",label:"Audio",color:"#ff0050"},{id:"seo",icon:"fa-magnifying-glass",label:"SEO",color:"#25b62a"},{id:"diseno",icon:"fa-paintbrush",label:"Diseño",color:"#ffa726"},{id:"web",icon:"fa-code",label:"Web",color:"#6a00f5"}],t=[{id:1,nombre:"ChatGPT",desc:"IA para generar textos, ideas y guiones para historias",url:"https://chat.openai.com",icon:"fa-robot",cat:"redaccion",color:"#10a37f",free:!0,pro:!0,stars:5,badge:"IA"},{id:2,nombre:"Google Docs",desc:"Editor de texto colaborativo ideal para escribir historias",url:"https://docs.google.com",icon:"fa-file-word",cat:"redaccion",color:"#1877F2",free:!0,pro:!1,stars:5,badge:"Gratis"},{id:3,nombre:"Notion",desc:"Organiza tus ideas, guiones y contenido en un solo lugar",url:"https://notion.so",icon:"fa-note-sticky",cat:"redaccion",color:"#000",free:!0,pro:!0,stars:4,badge:"Popular"},{id:4,nombre:"Hemingway Editor",desc:"Mejora la claridad y legibilidad de tus textos fácilmente",url:"https://hemingwayapp.com",icon:"fa-align-left",cat:"redaccion",color:"#e74c3c",free:!0,pro:!0,stars:4,badge:"Gratis"},{id:5,nombre:"Copy.ai",desc:"Genera copies, títulos y descripciones atractivas con IA",url:"https://copy.ai",icon:"fa-wand-magic-sparkles",cat:"redaccion",color:"#7c3aed",free:!0,pro:!0,stars:4,badge:"IA"},{id:6,nombre:"Canva",desc:"Crea thumbnails, posters y diseños profesionales fácilmente",url:"https://canva.com",icon:"fa-palette",cat:"imagenes",color:"#00c4cc",free:!0,pro:!0,stars:5,badge:"Popular"},{id:7,nombre:"Adobe Express",desc:"Herramienta de diseño rápido de Adobe con plantillas premium",url:"https://express.adobe.com",icon:"fa-a",cat:"imagenes",color:"#ff0000",free:!0,pro:!0,stars:4,badge:"Adobe"},{id:8,nombre:"Remove.bg",desc:"Elimina el fondo de imágenes automáticamente con 1 clic",url:"https://remove.bg",icon:"fa-scissors",cat:"imagenes",color:"#e91e8c",free:!0,pro:!0,stars:5,badge:"Rápido"},{id:9,nombre:"Unsplash",desc:"Miles de fotos gratis de alta calidad para tu contenido",url:"https://unsplash.com",icon:"fa-camera",cat:"imagenes",color:"#111",free:!0,pro:!1,stars:5,badge:"Gratis"},{id:10,nombre:"Stable Diffusion",desc:"Genera imágenes increíbles con IA a partir de texto",url:"https://stablediffusionweb.com",icon:"fa-microchip",cat:"imagenes",color:"#6c3483",free:!0,pro:!0,stars:4,badge:"IA"},{id:11,nombre:"CapCut",desc:"Editor de video intuitivo para reels, shorts y TikToks",url:"https://capcut.com",icon:"fa-scissors",cat:"videos",color:"#000",free:!0,pro:!0,stars:5,badge:"Popular"},{id:12,nombre:"DaVinci Resolve",desc:"Editor profesional de video gratuito con funciones avanzadas",url:"https://blackmagicdesign.com/products/davinciresolve",icon:"fa-film",cat:"videos",color:"#f39c12",free:!0,pro:!0,stars:5,badge:"Pro"},{id:13,nombre:"Pexels Videos",desc:"Videos libres de derechos para enriquecer tu contenido",url:"https://pexels.com/videos",icon:"fa-video",cat:"videos",color:"#05a081",free:!0,pro:!1,stars:4,badge:"Gratis"},{id:14,nombre:"Veed.io",desc:"Editor online de video con subtítulos automáticos y más",url:"https://veed.io",icon:"fa-closed-captioning",cat:"videos",color:"#7c4dff",free:!0,pro:!0,stars:4,badge:"Online"},{id:15,nombre:"Runway ML",desc:"IA generativa para crear y editar videos de forma mágica",url:"https://runwayml.com",icon:"fa-wand-magic-sparkles",cat:"videos",color:"#0066ff",free:!0,pro:!0,stars:4,badge:"IA"},{id:16,nombre:"ElevenLabs",desc:"Voz IA ultra realista para narrar tus historias en segundos",url:"https://elevenlabs.io",icon:"fa-microphone",cat:"audio",color:"#f59e0b",free:!0,pro:!0,stars:5,badge:"IA"},{id:17,nombre:"Suno AI",desc:"Genera música original con IA para tus videos de animales",url:"https://suno.com",icon:"fa-music",cat:"audio",color:"#8b5cf6",free:!0,pro:!0,stars:5,badge:"IA"},{id:18,nombre:"Audacity",desc:"Editor de audio gratuito y potente para cualquier creador",url:"https://www.audacityteam.org",icon:"fa-wave-square",cat:"audio",color:"#ff6600",free:!0,pro:!1,stars:4,badge:"Gratis"},{id:19,nombre:"Pixabay Music",desc:"Música libre de derechos para monetizar sin problemas",url:"https://pixabay.com/music",icon:"fa-headphones",cat:"audio",color:"#2ecc71",free:!0,pro:!1,stars:4,badge:"Gratis"},{id:20,nombre:"Ubersuggest",desc:"Encuentra palabras clave y analiza tu competencia fácilmente",url:"https://neilpatel.com/ubersuggest",icon:"fa-magnifying-glass-chart",cat:"seo",color:"#ff6b35",free:!0,pro:!0,stars:4,badge:"Popular"},{id:21,nombre:"Google Search Console",desc:"Analiza tu posicionamiento en Google de forma gratuita",url:"https://search.google.com/search-console",icon:"fa-chart-line",cat:"seo",color:"#4285F4",free:!0,pro:!1,stars:5,badge:"Google"},{id:22,nombre:"Answer The Public",desc:"Descubre qué busca la gente sobre tus temas favoritos",url:"https://answerthepublic.com",icon:"fa-people-group",cat:"seo",color:"#e74c3c",free:!0,pro:!0,stars:4,badge:"Útil"},{id:23,nombre:"SEMrush",desc:"Suite completa de SEO para escalar tu contenido al siguiente nivel",url:"https://semrush.com",icon:"fa-trophy",cat:"seo",color:"#ff642d",free:!1,pro:!0,stars:5,badge:"Pro"},{id:24,nombre:"Figma",desc:"Diseño colaborativo de interfaces y gráficos en el navegador",url:"https://figma.com",icon:"fa-vector-square",cat:"diseno",color:"#f24e1e",free:!0,pro:!0,stars:5,badge:"Popular"},{id:25,nombre:"Coolors",desc:"Genera paletas de colores perfectas para tu marca en segundos",url:"https://coolors.co",icon:"fa-droplet",cat:"diseno",color:"#7c3aed",free:!0,pro:!0,stars:4,badge:"Rápido"},{id:26,nombre:"Google Fonts",desc:"Miles de tipografías gratis para personalizar tu contenido",url:"https://fonts.google.com",icon:"fa-font",cat:"diseno",color:"#4285F4",free:!0,pro:!1,stars:5,badge:"Gratis"},{id:27,nombre:"Lottiefiles",desc:"Animaciones ligeras en JSON para webs y apps, gratis y premium",url:"https://lottiefiles.com",icon:"fa-circle-play",cat:"diseno",color:"#00ddb4",free:!0,pro:!0,stars:4,badge:"Anima"},{id:28,nombre:"VS Code",desc:"El mejor editor de código gratuito para desarrollar tu web",url:"https://code.visualstudio.com",icon:"fa-code",cat:"web",color:"#007acc",free:!0,pro:!1,stars:5,badge:"Dev"},{id:29,nombre:"Firebase",desc:"Hosting, base de datos y auth gratis de Google para tu proyecto",url:"https://firebase.google.com",icon:"fa-fire",cat:"web",color:"#ff6d00",free:!0,pro:!0,stars:5,badge:"Google"},{id:30,nombre:"Vite",desc:"Bundler ultrarrápido para construir apps web modernas",url:"https://vitejs.dev",icon:"fa-bolt",cat:"web",color:"#646cff",free:!0,pro:!1,stars:5,badge:"Rápido"},{id:31,nombre:"Tailwind CSS",desc:"Framework CSS utility-first para diseñar sin escribir CSS propio",url:"https://tailwindcss.com",icon:"fa-paintbrush",cat:"web",color:"#06b6d4",free:!0,pro:!1,stars:5,badge:"CSS"}];let c="todas",r="",u=!1;const m=()=>t.filter(e=>{const s=c==="todas"||e.cat===c,n=!r||e.nombre.toLowerCase().includes(r)||e.desc.toLowerCase().includes(r),h=!u||e.free;return s&&n&&h}),b=e=>[...Array(5)].map((s,n)=>`<i class="fa${n<e?"s":"r"} fa-star" style="color:${n<e?"#ffa726":"var(--brd)"}"></i>`).join(""),p=(e,s)=>`
  <a href="${e.url}" target="_blank" rel="noopener"
    class="ht_card ht_fade" style="--d:${s*.05}s; --hc:${e.color}"
    ${o(e.desc)}>

    <!-- Borde superior color -->
    <div class="ht_card_top_bar"></div>

    <!-- Badge -->
    <span class="ht_badge">${e.badge}</span>

    <!-- Ícono -->
    <div class="ht_card_ico">
      <i class="fas ${e.icon}"></i>
    </div>

    <!-- Info -->
    <div class="ht_card_body">
      <h3 class="ht_card_name">${e.nombre}</h3>
      <p class="ht_card_desc">${e.desc}</p>
    </div>

    <!-- Footer -->
    <div class="ht_card_foot">
      <div class="ht_stars">${b(e.stars)}</div>
      <div class="ht_pills">
        ${e.free?`<span class="ht_pill ht_free" ${o("Plan gratuito disponible")}><i class="fas fa-check"></i> Gratis</span>`:""}
        ${e.pro?`<span class="ht_pill ht_pro"  ${o("Tiene versión Pro")}><i class="fas fa-crown"></i> Pro</span>`:""}
      </div>
    </div>

    <!-- Hover arrow -->
    <div class="ht_card_arrow">
      <i class="fas fa-arrow-up-right-from-square"></i>
    </div>

  </a>`,_=e=>`
  <button class="ht_cat_btn${c===e.id?" active":""}"
    data-cat="${e.id}" style="--cc:${e.color}" ${o(e.label)}>
    <i class="fas ${e.icon}"></i>
    <span>${e.label}</span>
    <em>${e.id==="todas"?t.length:t.filter(s=>s.cat===e.id).length}</em>
  </button>`,i=()=>{const e=m();if(!e.length){a("#ht_grid").html(`
      <div class="ht_empty">
        <i class="fas fa-magnifying-glass"></i>
        <p>No encontramos herramientas con esos filtros 🔍</p>
        <button id="ht_reset_empty">Limpiar filtros</button>
      </div>`),a("#ht_count").text("0 herramientas");return}a("#ht_grid").html(e.map(p).join("")),a("#ht_count").text(`${e.length} herramienta${e.length!==1?"s":""}`),d(".ht_fade",null,{anim:"wi_fadeUp",stagger:45}),a("#ht_reset_empty").on("click",f)},f=()=>{c="todas",r="",u=!1,a("#ht_search").val(""),a("#ht_toggle_free").prop("checked",!1),a(".ht_cat_btn").removeClass("active"),a('.ht_cat_btn[data-cat="todas"]').addClass("active"),i()},$=()=>`
  <div class="ht_wrap">

    <!-- ══ HERO ══ -->
    <section class="ht_hero ht_fade" style="--d:0s">
      <div class="ht_hero_bg"></div>
      <div class="ht_hero_gears" aria-hidden="true">
        ${[...Array(8)].map((e,s)=>`<i class="fas fa-gear ht_gear" style="--gi:${s}"></i>`).join("")}
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
              <strong>${t.length}</strong>
              <span>Herramientas</span>
            </div>
            <div class="ht_num_div"></div>
            <div class="ht_num">
              <strong>${t.filter(e=>e.free).length}</strong>
              <span>Gratuitas</span>
            </div>
            <div class="ht_num_div"></div>
            <div class="ht_num">
              <strong>${l.length-1}</strong>
              <span>Categorías</span>
            </div>
            <div class="ht_num_div"></div>
            <div class="ht_num">
              <strong>${t.filter(e=>e.stars===5).length}</strong>
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
          <button class="ht_search_clear" id="ht_search_clear" ${o("Limpiar búsqueda")}>
            <i class="fas fa-xmark"></i>
          </button>
        </div>
        <label class="ht_toggle_wrap" ${o("Mostrar solo herramientas gratuitas")}>
          <input type="checkbox" id="ht_toggle_free" />
          <span class="ht_toggle_track">
            <span class="ht_toggle_thumb"></span>
          </span>
          <span class="ht_toggle_label"><i class="fas fa-check"></i> Solo gratis</span>
        </label>
        <span class="ht_count" id="ht_count">${t.length} herramientas</span>
      </div>

      <!-- Categorías -->
      <div class="ht_cats_row">
        ${l.map(_).join("")}
      </div>

    </section>

    <!-- ══ GRID HERRAMIENTAS ══ -->
    <section class="ht_section">
      <div class="ht_grid" id="ht_grid">
        ${t.map(p).join("")}
      </div>
    </section>

    <!-- ══ STATS FINALES ══ -->
    <section class="ht_section">
      <div class="ht_stats_grid">
        ${[{icon:"fa-toolbox",color:"var(--mco)",val:t.length,label:"Herramientas totales"},{icon:"fa-check",color:"#25b62a",val:t.filter(e=>e.free).length,label:"Con plan gratuito"},{icon:"fa-crown",color:"#ffa726",val:t.filter(e=>e.pro).length,label:"Con versión Pro"},{icon:"fa-robot",color:"#6a00f5",val:t.filter(e=>e.badge==="IA").length,label:"Herramientas de IA"},{icon:"fa-star",color:"#FF0000",val:t.filter(e=>e.stars===5).length,label:"Con 5 estrellas ⭐"},{icon:"fa-layer-group",color:"#0EBEFF",val:l.length-1,label:"Categorías"}].map((e,s)=>`
          <div class="ht_stat_card ht_fade" style="--d:${s*.07}s">
            <div class="ht_stat_ico" style="background:${e.color}">
              <i class="fas ${e.icon}"></i>
            </div>
            <strong>${e.val}</strong>
            <span>${e.label}</span>
          </div>`).join("")}
      </div>
    </section>

    <!-- ══ CTA ══ -->
    <section class="ht_cta">
      <div class="ht_cta_bg"></div>
      <div class="ht_cta_tools" aria-hidden="true">
        ${["🛠️","⚡","🎨","🎵","📸","🚀"].map((e,s)=>`<span class="ht_cta_tool" style="--ti:${s}">${e}</span>`).join("")}
      </div>
      <div class="ht_cta_inner">
        <div class="ht_cta_av">
          <i class="fas fa-toolbox"></i>
        </div>
        <h2>¿Conoces una herramienta genial? 🔧</h2>
        <p>Síguenos en nuestras redes y cuéntanos qué herramientas usas para crear contenido increíble</p>
        <div class="ht_cta_redes">
          <a href="https://www.youtube.com/@historiawi" target="_blank" rel="noopener"
            class="ht_red_cta yt" ${o("YouTube")}>
            <i class="fab fa-youtube"></i> YouTube
          </a>
          <a href="https://www.tiktok.com/@historiawi" target="_blank" rel="noopener"
            class="ht_red_cta tt" ${o("TikTok")}>
            <i class="fab fa-tiktok"></i> TikTok
          </a>
          <a href="https://www.instagram.com/historiawi" target="_blank" rel="noopener"
            class="ht_red_cta ig" ${o("Instagram")}>
            <i class="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.facebook.com/historiawi" target="_blank" rel="noopener"
            class="ht_red_cta fb" ${o("Facebook")}>
            <i class="fab fa-facebook"></i> Facebook
          </a>
        </div>
      </div>
    </section>

    <!-- ══ FOOTER ══ -->
    <section class="ht_footer">
      <p>Creado con ❤️ por <strong>Wilder Taype</strong> · Historiawi © ${g()}</p>
    </section>

  </div>`,k=()=>{d(".ht_fade",null,{anim:"wi_fadeUp",stagger:45}),d(".ht_stat_card",null,{anim:"wi_fadeUp",stagger:70});let e;a(document).on("input","#ht_search",function(){clearTimeout(e),e=setTimeout(()=>{r=a(this).val().toLowerCase().trim(),a("#ht_search_clear").toggleClass("visible",r.length>0),i()},260)}),a(document).on("click","#ht_search_clear",()=>{a("#ht_search").val("").trigger("input").trigger("focus")}),a(document).on("change","#ht_toggle_free",function(){u=a(this).prop("checked"),i()}),a(document).on("click",".ht_cat_btn",function(){c=a(this).data("cat"),a(".ht_cat_btn").removeClass("active"),a(this).addClass("active"),i()}),a(document).on("click","#ht_reset_empty",f),a(document).on("mouseenter",".ht_card",function(){a(this).find(".ht_card_arrow").stop(!0).fadeIn(160)}).on("mouseleave",".ht_card",function(){a(this).find(".ht_card_arrow").stop(!0).fadeOut(140)}),i()},C=()=>{a(document).off("input","#ht_search"),a(document).off("click","#ht_search_clear, .ht_cat_btn, #ht_reset_empty"),a(document).off("change","#ht_toggle_free"),a(document).off("mouseenter mouseleave",".ht_card")};export{C as cleanup,k as init,$ as render};

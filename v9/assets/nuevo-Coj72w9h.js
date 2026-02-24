const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-D-dBIy7l.js","assets/main-CizL1w6Z.js","assets/vendor-gzd0YkcT.js"])))=>i.map(i=>d[i]);
import{_ as M}from"./main-CizL1w6Z.js";import{j as a}from"./vendor-gzd0YkcT.js";import{e as c,N as r,f as b,M as P,b as f}from"./main-D-dBIy7l.js";import{db as h}from"./firebase-BVCWd-XR.js";import{a as E,d as x,s as A,b as S}from"./firebase-BmOP8wkl.js";const q=["Animales","Naturaleza","Amor","Inspiración","Vida"],k="blog",I=n=>n.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\b(el|la|los|las|de|del|en|un|una|y|a|con|por|para|que|es|se)\b/g," ").replace(/[^a-z0-9\s]/g,"").replace(/\s+/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,"").slice(0,50),L=n=>{const e=n.replace(/<[^>]*>/g," "),l=Math.ceil(e.split(/\s+/).filter(Boolean).length/200);return`${Math.max(1,l)} min`},V=()=>c.user?.usuario?`
  <div class="nu_wrap">

    <!-- HEAD -->
    <div class="nu_head">
      <div class="nu_head_left">
        <h1><i class="fas fa-pen-fancy"></i> Nueva historia</h1>
        <p>Comparte una historia que inspire al mundo 🐾</p>
      </div>
      <div class="nu_head_right">
        <button type="button" id="nu_preview_pg" class="nu_btn_outline" ${f("Previsualizar post")}>
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
              <button type="button" id="nu_slug_reset" class="nu_slug_btn" ${f("Regenerar desde título")}>
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
              ${[["fa-bold","bold","<strong>texto</strong>"],["fa-italic","italic","<em>texto</em>"],["fa-heading","h2","<h2>Título</h2>"],["fa-heading fa-xs","h3","<h3>Subtítulo</h3>"],["fa-quote-left","quote","<blockquote>cita</blockquote>"],["fa-list-ul","ul",`<ul>
  <li>item</li>
</ul>`],["fa-image","img",'<img src="url" alt="descripción" />'],["fa-link","link",'<a href="url">texto</a>']].map(([e,l,m])=>`
                <button type="button" class="nu_tool" data-tag='${m}' ${f(l)}>
                  <i class="fas ${e}"></i>
                </button>`).join("")}
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
              ${q.map((e,l)=>`
                <label class="nu_cat_opt">
                  <input type="radio" name="nu_cat" value="${e}" ${l===0?"checked":""} />
                  <span>${e}</span>
                </label>`).join("")}
            </div>
          </div>

          <!-- Imagen -->
          <div class="nu_card">
            <div class="nu_card_title"><i class="fas fa-image"></i> Imagen destacada</div>
            <input id="nu_img" type="url" placeholder="https://cdn.pixabay.com/..." />
            <div id="nu_img_prev" class="nu_img_prev dpn">
              <img id="nu_img_el" src="" alt="preview" />
              <button type="button" id="nu_img_clear" class="nu_img_clear" ${f("Quitar imagen")}>
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
                <strong>${c.user?.nombre||c.user?.usuario||"Anónimo"}</strong>
                <span>${c.user?.email||""}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </form>
  </div>`:`
    <div class="nu_err dpvc">
      <i class="fas fa-lock"></i>
      <h2>Acceso restringido</h2>
      <p>Debes iniciar sesión para crear historias</p>
      <a href="/login" class="nu_btn"><i class="fas fa-sign-in-alt"></i> Iniciar sesión</a>
    </div>`,O=()=>{if(!c.user?.usuario)return;let n=[],e,l,m;const y=()=>I(a("#nu_titulo").val()),C=s=>a("#nu_slug_inp").val(s).trigger("input");a("#nu_titulo").on("input",function(){clearTimeout(e),e=setTimeout(()=>{a("#nu_slug_inp").data("manual")||C(y())},400)}),a("#nu_slug_inp").on("input",function(){a(this).data("manual",!0);const s=a(this).val().replace(/[^a-z0-9_]/gi,i=>i===" "?"_":"").toLowerCase().replace(/_{2,}/g,"_");a(this).val(s),clearTimeout(m);const t=a("#nu_slug_status");if(!s)return t.html("").removeClass("ok err");t.html('<i class="fas fa-spinner fa-spin"></i> Verificando...').removeClass("ok err"),m=setTimeout(async()=>{if(s.length<3)return t.html('<i class="fas fa-exclamation"></i> Muy corto').addClass("err").removeClass("ok");(await E(x(h,k,s)).catch(()=>null))?.exists()?t.html('<i class="fas fa-xmark"></i> Ya existe este slug').addClass("err").removeClass("ok"):t.html('<i class="fas fa-check"></i> Disponible').addClass("ok").removeClass("err")},600)}),a("#nu_slug_reset").on("click",()=>{a("#nu_slug_inp").removeData("manual"),C(y())}),a("#nu_resumen").on("input",function(){a("#nu_resumen_cnt").text(a(this).val().length)}),a("#nu_img").on("input",function(){clearTimeout(l),l=setTimeout(()=>{const s=a(this).val().trim();if(!s)return a("#nu_img_prev").addClass("dpn");a("#nu_img_el").attr("src",s).off("load error").on("load",()=>a("#nu_img_prev").removeClass("dpn")).on("error",()=>a("#nu_img_prev").addClass("dpn"))},600)}),a("#nu_img_clear").on("click",()=>{a("#nu_img").val(""),a("#nu_img_prev").addClass("dpn")}),a(document).on("click",".nu_tool",function(){const s=a(this).data("tag"),t=a("#nu_contenido"),i=t[0],u=i.selectionStart,d=i.selectionEnd,_=i.value.substring(u,d)||"texto",p=s.replace("texto",_).replace("cita",_);t.val(i.value.substring(0,u)+p+i.value.substring(d)),i.focus(),i.selectionStart=u,i.selectionEnd=u+p.length,w()}),a(document).on("click",".nu_tab",function(){const s=a(this).data("tab");a(".nu_tab").removeClass("active"),a(this).addClass("active"),s==="prev"?(a("#nu_prev_html").html(a("#nu_contenido").val()).removeClass("dpn"),a("#nu_contenido").addClass("dpn")):(a("#nu_contenido").removeClass("dpn"),a("#nu_prev_html").addClass("dpn"))});const w=()=>{const t=a("#nu_contenido").val().replace(/<[^>]*>/g," ").split(/\s+/).filter(Boolean).length,i=Math.max(1,Math.ceil(t/200));a("#nu_palabras").html(`<i class="fas fa-font"></i> ${t} palabras`),a("#nu_lectura").html(`<i class="fas fa-clock"></i> ${i} min lectura`)};a("#nu_contenido").on("input",w),a("#nu_tags_inp").on("keydown",function(s){if(s.key!=="Enter"&&s.key!==",")return;s.preventDefault();const t=a(this).val().trim().toLowerCase().replace(/\s+/g,"_");t&&!n.includes(t)&&n.length<8&&(n.push(t),T()),a(this).val("")});const T=()=>{a("#nu_tags_box").html(n.map((s,t)=>`
      <span class="nu_tag_chip">
        #${s} <i class="fas fa-xmark nu_tag_rm" data-i="${t}"></i>
      </span>`).join(""))};a(document).on("click",".nu_tag_rm",function(){n.splice(+a(this).data("i"),1),T()}),a("#nu_form").on("submit",async function(s){s.preventDefault();const t=a("#nu_submit, .nu_btn_full"),i=c.user,u=a("#nu_titulo").val().trim(),d=a("#nu_resumen").val().trim(),_=a('input[name="nu_cat"]:checked').val(),p=a("#nu_img").val().trim(),v=a("#nu_contenido").val().trim(),o=a("#nu_slug_inp").val().trim();if(!u||!d||!_||!p||!v)return r("Completa todos los campos obligatorios ⚠️","warning");if(v.length<50)return r("El contenido es muy corto","warning");if(!o||o.length<3)return r("El slug es inválido o muy corto","warning");if(a("#nu_slug_status").hasClass("err"))return r("El slug no está disponible","error");b(t,!0,"Publicando...");try{if((await E(x(h,k,o))).exists())return b(t,!1),r("Ya existe una historia con ese slug","warning");const D={id:o,slug:o,activo:a("#nu_activo").is(":checked"),destacado:a("#nu_destacado").is(":checked"),usuario:i.usuario,email:i.email,autor:i.nombre||i.usuario,titulo:u,resumen:d,categoria:_,contenido:v,imagen:p,imagenAlt:u,tags:n,vistas:0,tiempo_lectura:L(v),creado:A(),actualizado:A()};await S(x(h,k,o),D),P("¡Historia publicada! 🐾✨","success"),setTimeout(()=>M(()=>import("./main-D-dBIy7l.js").then(g=>g.o),__vite__mapDeps([0,1,2])).then(g=>g.rutas.navigate(`/${o}`)),1200)}catch($){console.error("nuevo:",$),r("Error al publicar. Intenta de nuevo.","error"),b(t,!1)}})},B=()=>{a("#nu_form, #nu_slug_inp, #nu_titulo, #nu_resumen, #nu_img, #nu_contenido").off(),a(document).off("click",".nu_tab, .nu_tool, .nu_tag_rm")};export{B as cleanup,O as init,V as render};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-CQ3XODTH.js","assets/main-XZfKW5oW.js","assets/vendor-gzd0YkcT.js"])))=>i.map(i=>d[i]);
import{_ as P}from"./main-XZfKW5oW.js";import{j as a}from"./vendor-gzd0YkcT.js";import{e as y,N as r,f as w,M as S,b as g,g as j}from"./main-CQ3XODTH.js";import{db as b}from"./firebase-BaoQaXbW.js";import{g as D,d as k,u as I,s as T,a as M}from"./firebase-C6DIho6d.js";import{getPost as R,COL as $,clearPostCache as V,clearBlogCache as z}from"./devblog-Co34B27N.js";const N=["Animales","Naturaleza","Amor","Inspiración","Vida"],O=e=>e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\b(el|la|los|las|de|del|en|un|una|y|a|con|por|para|que|es|se)\b/g," ").replace(/[^a-z0-9\s]/g,"").replace(/\s+/g,"_").replace(/_{2,}/g,"_").replace(/^_|_$/g,"").slice(0,50),q=e=>{const t=e.replace(/<[^>]*>/g," ").split(/\s+/).filter(Boolean);return{words:t.length,min:Math.max(1,Math.ceil(t.length/200))}},L=()=>j.params()?.edit||new URLSearchParams(location.search).get("edit")||null,U=()=>{if(!y.user?.usuario)return'<div class="nu_err dpvc"><i class="fas fa-lock"></i><h2>Acceso restringido</h2><p>Inicia sesión para crear historias</p></div>';const e=y.user,t=L();return`
  <div class="nu_wrap">
    <div class="nu_head">
      <div class="nu_head_left"><h1><i class="fas fa-${t?"pen":"pen-fancy"}"></i> ${t?"Editar historia":"Nueva historia"}</h1><p>${t?`Editando: <strong>${t}</strong> ✏️`:"Comparte una historia que inspire 🐾"}</p></div>
      <div class="nu_head_right">
        ${t?`<a href="/${t}" class="nu_btn_outline" ${g("Ver post")}><i class="fas fa-eye"></i> Ver</a>`:`<button type="button" id="nu_preview_pg" class="nu_btn_outline" ${g("Preview")}><i class="fas fa-eye"></i> Preview</button>`}
        <button type="submit" form="nu_form" id="nu_submit" class="nu_btn_submit"><i class="fas fa-${t?"save":"paper-plane"}"></i> ${t?"Guardar":"Publicar"}</button>
      </div>
    </div>
    <form id="nu_form" autocomplete="off"><div class="nu_layout">
      <div class="nu_left">
        <div class="nu_card">
          <div class="nu_card_title"><i class="fas fa-heading"></i> Título</div>
          <input id="nu_titulo" type="text" class="nu_titulo_inp" placeholder="El perro que salvó a su familia..." maxlength="100" required/>
          <div class="nu_slug_box">
            <span class="nu_slug_label"><i class="fas fa-link"></i> historiawi.web.app/</span>
            <input id="nu_slug_inp" type="text" placeholder="mi_historia" maxlength="50" spellcheck="false" ${t?"readonly":""}/>
            ${t?"":`<button type="button" id="nu_slug_reset" class="nu_slug_btn" ${g("Regenerar")}><i class="fas fa-rotate"></i></button>`}
          </div>
          <div id="nu_slug_status" class="nu_slug_status">${t?'<span class="ok"><i class="fas fa-lock"></i> Slug bloqueado (edición)</span>':""}</div>
        </div>
        <div class="nu_card">
          <div class="nu_card_title"><i class="fas fa-align-left"></i> Resumen</div>
          <textarea id="nu_resumen" rows="3" maxlength="160" placeholder="Describe en pocas palabras..."></textarea>
          <div class="nu_counter"><span id="nu_resumen_cnt">0</span>/160</div>
        </div>
        <div class="nu_card nu_card_editor">
          <div class="nu_card_title_row">
            <span><i class="fas fa-code"></i> Contenido HTML</span>
            <div class="nu_editor_tabs">
              <button type="button" class="nu_tab active" data-tab="edit"><i class="fas fa-code"></i> Editor</button>
              <button type="button" class="nu_tab" data-tab="prev"><i class="fas fa-eye"></i> Preview</button>
            </div>
          </div>
          <div class="nu_toolbar">${[["fa-bold","<strong>texto</strong>"],["fa-italic","<em>texto</em>"],["fa-heading","<h2>Título</h2>"],["fa-quote-left","<blockquote>cita</blockquote>"],["fa-list-ul",`<ul>
  <li>item</li>
</ul>`],["fa-image",'<img src="url" alt="desc"/>'],["fa-link",'<a href="url">texto</a>']].map(([l,d])=>`<button type="button" class="nu_tool" data-tag='${d}' ${g(l)}><i class="fas ${l}"></i></button>`).join("")}</div>
          <textarea id="nu_contenido" class="nu_code" rows="18" placeholder="<p>Había una vez...</p>"></textarea>
          <div id="nu_prev_html" class="nu_html_prev dpn"></div>
          <div class="nu_content_footer"><span id="nu_palabras" class="nu_hint"><i class="fas fa-font"></i> 0 palabras</span><span id="nu_lectura" class="nu_hint"><i class="fas fa-clock"></i> 1 min</span></div>
        </div>
      </div>
      <div class="nu_right">
        <div class="nu_card nu_card_publish">
          <div class="nu_card_title"><i class="fas fa-rocket"></i> ${t?"Actualizar":"Publicar"}</div>
          <div class="nu_publish_opts">
            <label class="nu_check_l"><input type="checkbox" id="nu_activo" checked/><span><i class="fas fa-eye"></i> Visible</span></label>
            <label class="nu_check_l"><input type="checkbox" id="nu_destacado"/><span><i class="fas fa-star"></i> Destacado</span></label>
          </div>
          <button type="submit" form="nu_form" class="nu_btn_submit nu_btn_full"><i class="fas fa-${t?"save":"paper-plane"}"></i> ${t?"Guardar cambios":"Publicar"}</button>
        </div>
        <div class="nu_card">
          <div class="nu_card_title"><i class="fas fa-folder"></i> Categoría</div>
          <div class="nu_cats_grid">${N.map((l,d)=>`<label class="nu_cat_opt"><input type="radio" name="nu_cat" value="${l}" ${d===0?"checked":""}/><span>${l}</span></label>`).join("")}</div>
        </div>
        <div class="nu_card">
          <div class="nu_card_title"><i class="fas fa-image"></i> Imagen</div>
          <input id="nu_img" type="url" placeholder="https://cdn.pixabay.com/..."/>
          <div id="nu_img_prev" class="nu_img_prev dpn"><img id="nu_img_el" src="" alt=""/><button type="button" id="nu_img_clear" class="nu_img_clear" ${g("Quitar")}><i class="fas fa-xmark"></i></button></div>
        </div>
        <div class="nu_card">
          <div class="nu_card_title"><i class="fas fa-tags"></i> Tags</div>
          <input id="nu_tags_inp" type="text" placeholder="Tag + Enter"/>
          <div id="nu_tags_box" class="nu_tags_box"></div>
        </div>
        <div class="nu_card nu_card_autor">
          <div class="nu_card_title"><i class="fas fa-user-pen"></i> Autor</div>
          <div class="nu_autor_info"><div class="nu_autor_av"><i class="fas fa-user-circle"></i></div><div><strong>${e?.nombre||e?.usuario||"Anónimo"}</strong><span>${e?.email||""}</span></div></div>
        </div>
      </div>
    </div></form>
  </div>`},W=async()=>{if(!y.user?.usuario)return;const e=L();let t=[],l,d,E,_=!!e;const A=()=>O(a("#nu_titulo").val()),x=()=>{const{words:i,min:s}=q(a("#nu_contenido").val());a("#nu_palabras").html(`<i class="fas fa-font"></i> ${i} palabras`),a("#nu_lectura").html(`<i class="fas fa-clock"></i> ${s} min`)},C=()=>a("#nu_tags_box").html(t.map((i,s)=>`<span class="nu_tag_chip">#${i} <i class="fas fa-xmark nu_tag_rm" data-i="${s}"></i></span>`).join(""));if(_)try{const i=await R(e,!0);if(!i?.data){r("Post no encontrado","error");return}const s=i.data;a("#nu_titulo").val(s.titulo),a("#nu_slug_inp").val(s.slug||s.id),a("#nu_resumen").val(s.resumen||"").trigger("input"),a("#nu_contenido").val(s.contenido||""),a("#nu_img").val(s.imagen||""),a("#nu_activo").prop("checked",s.activo!==!1),a("#nu_destacado").prop("checked",!!s.destacado),s.categoria&&a(`input[name="nu_cat"][value="${s.categoria}"]`).prop("checked",!0),t=Array.isArray(s.tags)?[...s.tags]:[],C(),s.imagen&&(a("#nu_img_el").attr("src",s.imagen),a("#nu_img_prev").removeClass("dpn")),a("#nu_resumen_cnt").text((s.resumen||"").length),x()}catch(i){console.error("edit load:",i),r("Error cargando post","error")}_||(a("#nu_titulo").on("input",function(){clearTimeout(l),l=setTimeout(()=>{a("#nu_slug_inp").data("m")||a("#nu_slug_inp").val(A()).trigger("input")},400)}),a("#nu_slug_inp").on("input",function(){a(this).data("m",!0),a(this).val(a(this).val().replace(/[^a-z0-9_]/gi,n=>n===" "?"_":"").toLowerCase().replace(/_{2,}/g,"_")),clearTimeout(E);const i=a(this).val(),s=a("#nu_slug_status");if(!i)return s.html("").removeClass("ok err");s.html('<i class="fas fa-spinner fa-spin"></i>').removeClass("ok err"),E=setTimeout(async()=>{if(i.length<3)return s.html('<i class="fas fa-exclamation"></i> Muy corto').addClass("err").removeClass("ok");(await D(k(b,$,i)).catch(()=>null))?.exists()?s.html('<i class="fas fa-xmark"></i> Ya existe').addClass("err").removeClass("ok"):s.html('<i class="fas fa-check"></i> OK').addClass("ok").removeClass("err")},600)}),a("#nu_slug_reset").on("click",()=>{a("#nu_slug_inp").removeData("m").val(A()).trigger("input")})),a("#nu_resumen").on("input",function(){a("#nu_resumen_cnt").text(a(this).val().length)}),a("#nu_img").on("input",function(){clearTimeout(d),d=setTimeout(()=>{const i=a(this).val().trim();if(!i)return a("#nu_img_prev").addClass("dpn");a("#nu_img_el").attr("src",i).off("load error").on("load",()=>a("#nu_img_prev").removeClass("dpn")).on("error",()=>a("#nu_img_prev").addClass("dpn"))},600)}),a("#nu_img_clear").on("click",()=>{a("#nu_img").val(""),a("#nu_img_prev").addClass("dpn")}),a("#nu_contenido").on("input",x),a("#nu_tags_inp").on("keydown",function(i){if(i.key!=="Enter"&&i.key!==",")return;i.preventDefault();const s=a(this).val().trim().toLowerCase().replace(/\s+/g,"_");s&&!t.includes(s)&&t.length<8&&(t.push(s),C()),a(this).val("")}),a(document).on("click.nuevo",".nu_tool",function(){const i=a(this).data("tag"),s=a("#nu_contenido"),n=s[0],u=n.selectionStart,p=n.selectionEnd,m=n.value.substring(u,p)||"texto",v=i.replace("texto",m).replace("cita",m);s.val(n.value.substring(0,u)+v+n.value.substring(p)),n.focus(),n.selectionStart=u,n.selectionEnd=u+v.length,x()}).on("click.nuevo",".nu_tab",function(){const i=a(this).data("tab");a(".nu_tab").removeClass("active"),a(this).addClass("active"),i==="prev"?(a("#nu_prev_html").html(a("#nu_contenido").val()).removeClass("dpn"),a("#nu_contenido").addClass("dpn")):(a("#nu_contenido").removeClass("dpn"),a("#nu_prev_html").addClass("dpn"))}).on("click.nuevo",".nu_tag_rm",function(){t.splice(+a(this).data("i"),1),C()}),a("#nu_form").on("submit",async function(i){i.preventDefault();const s=a("#nu_submit,.nu_btn_full"),n=y.user,[u,p,m,v,f,o]=[a("#nu_titulo").val().trim(),a("#nu_resumen").val().trim(),a('input[name="nu_cat"]:checked').val(),a("#nu_img").val().trim(),a("#nu_contenido").val().trim(),a("#nu_slug_inp").val().trim()];if(!u||!p||!m||!v||!f)return r("Completa todos los campos","warning");if(f.length<50)return r("Contenido muy corto","warning");if(!o||o.length<3)return r("Slug inválido","warning");if(!_&&a("#nu_slug_status").hasClass("err"))return r("Slug no disponible","error");w(s,!0,_?"Guardando...":"Publicando...");try{const h=`${q(f).min} min`;if(_)await I(k(b,$,e),{activo:a("#nu_activo").is(":checked"),destacado:a("#nu_destacado").is(":checked"),titulo:u,resumen:p,categoria:m,contenido:f,imagen:v,imagenAlt:u,tags:t,tiempo_lectura:h,actualizado:T()}),V(e),z(),S("¡Historia actualizada! 🐾✨","success"),setTimeout(()=>P(()=>import("./main-CQ3XODTH.js").then(c=>c.p),__vite__mapDeps([0,1,2])).then(c=>c.rutas.navigate(`/${e}`)),1200);else{if((await D(k(b,$,o))).exists())return w(s,!1),r("Slug existente","warning");await M(k(b,$,o),{id:o,slug:o,activo:a("#nu_activo").is(":checked"),destacado:a("#nu_destacado").is(":checked"),usuario:n.usuario,email:n.email,autor:n.nombre||n.usuario,titulo:u,resumen:p,categoria:m,contenido:f,imagen:v,imagenAlt:u,tags:t,vistas:0,tiempo_lectura:h,creado:T(),actualizado:T()}),z(),S("¡Historia publicada! 🐾✨","success"),setTimeout(()=>P(()=>import("./main-CQ3XODTH.js").then(c=>c.p),__vite__mapDeps([0,1,2])).then(c=>c.rutas.navigate(`/${o}`)),1200)}}catch(h){console.error("nuevo:",h),r(_?"Error al guardar":"Error al publicar","error"),w(s,!1)}})},Y=()=>{a("#nu_form,#nu_slug_inp,#nu_titulo,#nu_resumen,#nu_img,#nu_contenido").off(),a(document).off(".nuevo")};export{Y as cleanup,W as init,U as render};

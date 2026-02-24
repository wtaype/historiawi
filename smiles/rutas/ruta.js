import $ from 'jquery';
import { app } from '../wii.js';
import { Notificacion } from '../widev.js';
import { wiPath, wiFade } from './rutadev.js';

class WiRutas {
  constructor() {
    this.rutas    = {};
    this.actual   = null;
    this.modActual= null;
    this.cargand  = false;
    this.precach  = new Set();
    this.PAGE     = 'web';
    this.HOME     = 'inicio';
    this.main     = '#wimain';
    this.slugMod  = null; // módulo para slugs dinámicos
  }

  register(ruta, mod) { this.rutas[ruta] = mod; }

  // Registra el módulo que maneja slugs dinámicos /:slug
  registerSlug(mod) { this.slugMod = mod; }

  async navigate(ruta, historial = true) {
    if (this.cargand) return;
    this.cargand = true;

    let norm = wiPath.limpiar(ruta);
    if (norm === '/') norm = `/${this.HOME}`;

    // Ruta exacta → slug dinámico → 404
    const esSlug = !this.rutas[norm] && this.slugMod && norm.split('/').length === 2;
    const cargar = this.rutas[norm] ?? (esSlug ? this.slugMod : () => import(`../${this.PAGE}/404.js`));

    try {
      this.modActual?.cleanup?.();
      const mod   = typeof cargar === 'function' ? await cargar() : cargar;
      const slug  = esSlug ? norm.slice(1) : null;
      const html  = await mod.render(slug);
      const titulo = `${norm.slice(1).replace(/^(\w)/, c => c.toUpperCase()) || 'Inicio'} - ${app}`;

      this.marcarNav(norm);
      await wiFade(this.main, html);
      document.title = titulo;
      mod.init?.(slug);
      if (historial) wiPath.poner(norm === `/${this.HOME}` ? '/' : norm, titulo);
      this.actual    = norm;
      this.modActual = mod;
    } catch (err) {
      Notificacion('Error al cargar la página');
      console.error('navigate:', err);
    } finally {
      this.cargand = false;
    }
  }

  marcarNav(norm) {
    const pag = norm.slice(1) || this.HOME;
    $('.nv_item').removeClass('active');
    $(`.nv_item[data-page="${pag}"]`).addClass('active');
  }

  async prefetch(ruta) {
    let norm = wiPath.limpiar(ruta);
    if (norm === '/') norm = `/${this.HOME}`;
    if (this.precach.has(norm) || typeof this.rutas[norm] !== 'function') return;
    try { this.rutas[norm] = await this.rutas[norm](); this.precach.add(norm); }
    catch (e) { console.warn('Prefetch:', norm); }
  }

  init() {
    const rActual = wiPath.actual === '/' ? `/${this.HOME}` : wiPath.limpiar(wiPath.actual);
    this.marcarNav(rActual);

    $(document).on('click', '.nv_item', (e) => {
      e.preventDefault();
      const pag = $(e.currentTarget).data('page');
      this.navigate(pag === this.HOME ? '/' : `/${pag}`);
    });

    window.addEventListener('popstate', (e) => {
      this.navigate(e.state?.ruta || wiPath.actual, false);
    });

    this.navigate(wiPath.actual, false);
  }
}
export const rutas = new WiRutas();
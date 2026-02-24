import $ from 'jquery';
import { getls } from './widev.js';
import { rutas } from './rutas/ruta.js';

['inicio','youtube','tiktok','instagram','facebook','herramientas','acerca'].forEach(pg => rutas.register(`/${pg}`, () => import(`./web/${pg}.js`)));
['blog','nuevo'].forEach(pg => rutas.register(`/${pg}`, () => import(`./blog/${pg}.js`)));
['descubre','login','smile'].forEach(pg => rutas.register(`/${pg}`, () => import(`./smile/${pg}.js`)));

rutas.registerSlug(() => import('./blog/post.js')); // Slugs dinámicos de posts → /genial, /el-perro-heroe, etc.

import('./header.js'); import('./footer.js');
rutas.init();
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import DefaultLayout from '~/layouts/Default.vue';
import InstantSearch from 'vue-instantsearch';

export default function (Vue, { appOptions, head, router }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  const opts = {} //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(opts);

  // Use Vue InstantSearch. 
  // Gridsome的官方插件太坑，还是用Algolia给的Vue插件吧。 上文档：https://gridsome.org/docs/assets-scripts/#add-globally
  Vue.use(InstantSearch);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  router.mode = 'history'; // 这一步很重要
}
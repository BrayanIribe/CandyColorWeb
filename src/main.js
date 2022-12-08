import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store';
import routes from './router'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faSearch, faPlus, faArrowLeft, faClose } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faArrowLeft)
library.add(faPlus)
library.add(faBars)
library.add(faSearch)
library.add(faFacebook)
library.add(faTwitter)
library.add(faGoogle)
library.add(faClose)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

import api from './services/api';
Vue.mixin({
  computed: {
    $api() {
      return api;
    },
    $loading() {
      return store.state.isLoading === true;
    },
    $usuario() {
      return store.state.user;
    }
  },
  methods: {
    $error(text) {
      this.$swal({ icon: 'error', text });
    },
    $ok(text) {
      this.$swal({ icon: 'success', text });
    }
  }
});

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);



const router = new VueRouter({
  mode: 'history',
  routes,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


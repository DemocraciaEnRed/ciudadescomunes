import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "UA-1234567-1" },
  params: {
      send_page_view: false
    }
  },
  router
);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

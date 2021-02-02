import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";
import VueScrollReveal from "vue-scroll-reveal";
import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap-vue/dist/bootstrap-vue.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueScrollReveal);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      mirror: true,
    });
  },
  router,
  render: (h) => h(App),
}).$mount("#app");

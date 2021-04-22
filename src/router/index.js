import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App.vue";
import Home from "../views/Landing.vue";
import Resume from "../views/Resume.vue";
import ResumeModal from "../components/ResumeModal.vue";



Vue.use(VueRouter);

const routes = [
  {
      path: "/",
      name: "Home",
      component: Home,
    },
  {
      path: "/resume",
      name: "Resume",
      component: Resume,
  },
  {
      path: "/resumeModal",
      name: "ResumeModal",
      component: ResumeModal,
    }
];

const router = new VueRouter({
  routes,
});

export default router;

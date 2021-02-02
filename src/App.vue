<template>
  <div>
    <NavBar /> <Home /> <Testimonial /> <About /> <Contact /> <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Home from "@/components/Home.vue";
import Testimonial from "@/components/Testimonial.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    NavBar: () => import("@/components/NavBar"),
    Home: () => import("@/components/Home"),
    Testimonial: () => import("@/components/Testimonial"),
    About: () => import("@/components/About"),
    Contact: () => import("@/components/Contact"),
    Footer: () => import("@/components/footer"),
  },
};
</script>
<style scoped></style>

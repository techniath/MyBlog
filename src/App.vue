<template>
  <div>
    <NavBar /> <ShowCase /> <Testimonial /> <About /> <Contact /> <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import ShowCase from "@/components/ShowCase.vue";
import Testimonial from "@/components/Testimonial.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    NavBar: () => import("@/components/NavBar"),
    ShowCase: () => import("@/components/ShowCase"),
    Testimonial: () => import("@/components/Testimonial"),
    About: () => import("@/components/About"),
    Contact: () => import("@/components/Contact"),
    Footer: () => import("@/components/footer"),
  },
};
</script>
<style scoped></style>

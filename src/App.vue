<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {
    NavBar: () => import("@/components/NavBar"),
    Home: () => import("@/components/Home"),
    Testimonial: () => import("@/components/Testimonial"),
    About: () => import("@/components/About"),
    Contact: () => import("@/components/Contact"),
    Footer: () => import("@/components/footer"),
    TimeLine: () => import("@/components/TimeLine"),
  },
};
</script>
@import'~bootstrap/dist/css/bootstrap.css'
<style scoped></style>

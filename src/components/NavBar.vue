<template>
  <div class="wrapper">
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand v-scroll-reveal="{ delay: 300 }" href="/">
        Faizan Mohammed</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="toHome()">Home</b-nav-item>
          <b-nav-item @click="toAboutMe()">About</b-nav-item>
          <b-nav-item @click="toMyTimeLine()">Time Line</b-nav-item>
          <b-nav-item @click="toContactForm()">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    toMyTimeLine() {
      document.getElementById('timeline').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },
    toContactForm() {
      document.getElementById('contact').scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    },
    toAboutMe() {
      document.getElementById('about').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },
    toHome() {
      document.getElementById('home').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  },
};
</script>
<style scoped>
.wrapper {
  z-index: 9999;
}
</style>

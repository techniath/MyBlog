<template>
  <div class="wrapper">
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand v-scroll-reveal="{ delay: 300 }" href="/">
        Faizan Mohammed</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#home">Home</b-nav-item>
          <b-nav-item href="#about">About</b-nav-item>
          <b-nav-item href="#timeline">Time Line</b-nav-item>
          <b-nav-item href="#contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
.wrapper {
  z-index: 9999;
}
</style>

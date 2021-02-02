<template>
  <div class="wrapper">
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand data-aos="fade-down" data-aos-duration="2000" href="#"
        >Faizan Mohammed</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#showcase">Home</b-nav-item>
          <b-nav-item href="#about">About</b-nav-item>
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

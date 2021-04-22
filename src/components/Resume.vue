<template>
  <div class="container">
    <nav class="navbar">
      <ul>
        <li><a href="#description">Description</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
    </nav>
    <section id="description">
      <h1>Welcome to my site</h1>
      <p class="lead">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, alias?
        Consequatur, doloribus quasi fuga voluptates molestiae, tempore corrupti
        sapiente illum quae ducimus amet expedita voluptatibus necessitatibus
        esse optio, asperiores neque?
      </p>
    </section>
    <section id="experience">
      <h1>Welcome to my site</h1>
      <p class="lead">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, alias?
        Consequatur, doloribus quasi fuga voluptates molestiae, tempore corrupti
        sapiente illum quae ducimus amet expedita voluptatibus necessitatibus
        esse optio, asperiores neque?
      </p>
    </section>
    <section id="education">
      <h1>Welcome to my site</h1>
      <p class="lead">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, alias?
        Consequatur, doloribus quasi fuga voluptates molestiae, tempore corrupti
        sapiente illum quae ducimus amet expedita voluptatibus necessitatibus
        esse optio, asperiores neque?
      </p>
    </section>
    <section id="skills">
      <h1>Welcome to my site</h1>
      <p class="lead">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, alias?
        Consequatur, doloribus quasi fuga voluptates molestiae, tempore corrupti
        sapiente illum quae ducimus amet expedita voluptatibus necessitatibus
        esse optio, asperiores neque?
      </p>
    </section>
  </div>
</template>
<script>
export default {
  name: "Resume",
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #333;
  color: #fff;
  height: 100vh;
  line-height: 1.6;
  overflow: hidden;
}

.container {
  width: 100%;
  height: 100%;

  /* CSS Smooth Scroll */
}

.lead {
  font-size: 1.5rem;
}

.navbar {
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.7);
}

.navbar ul {
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: center;
}

.navbar ul li {
  margin: 0 1rem;
  padding: 1rem;
}

.navbar ul li a {
  text-decoration: none;
  text-transform: uppercase;
  color: #f4f4f4;
}

.navbar ul li a:hover {
  color: skyblue;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
}

section h1 {
  font-size: 4rem;
}

/* Section Images */
section#description {
  background: url("https://source.unsplash.com/bZZp1PmHI0E/1600x900") no-repeat
    center center/cover;
}

section#experience {
  background: url("https://source.unsplash.com/VRxo0yY-gyM/1600x900") no-repeat
    center center/cover;
}

section#education {
  background: url("https://source.unsplash.com/K2tdx2mFDHc/1600x900") no-repeat
    center center/cover;
}

section#skills {
  background: url("https://source.unsplash.com/2aAHlfDOhJM/1600x900") no-repeat
    center center/cover;
}
</style>

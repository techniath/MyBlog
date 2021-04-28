<template>
  <section id="home">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <div
          class="showcase-left"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <img
            class="phone-align-image"
            src="../assets/home-image.jpeg"
            alt="IMAGE"
          />
        </div>
      </div>
      <div class="col-md-6 col-sm-6">
        <div
          class="showcase-right phone-align-text"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h1>
            Welcome
          </h1>
          <p>
            Hi! My name is Faizan Mohammed and I am currently residing in Pennsylvania, USA. I
            am a Full Stack Software Engineer with 4+ years of industry experience and also an
            aspiring freelance developer.<br />
            <br />
            When developing web applications, I primarily use Java and Spring Framework for the
            back-end on large scale projects. On smaller to mid-sized projects, with less complex
            business logic, I prefer to use Backend-as-a-Service (BaaS) platforms, such as Google&#39;s
            Firebase. For the front-end, I use Vue.js and Nuxt.js in combination with CSS
            frameworks and libraries, such as Buefy and Bootstrap.
            <br/> <br/>
            Didn't find the tech stack you are looking for? Don't worry! I use the appropriate tech
            stack that fits the project's requirements. I am always open to learning new
            technologies or discussing the trends. Please browse through my work timeline below
            and feel free to contact me.
          </p>
        </div>
        <br />
      <div class="row is-7">
        <div class="phone-align-btn pad-left">
          <b-button
            class="btn btn-primary"
            data-aos="fade-up"
            data-aos-duration="2000"
            @click="toMyTimeLine()"
            >My Timeline</b-button
          >
        </div>
        <div class="phone-align-btn pad-left">
          <b-button
            class="btn btn-primary"
            data-aos="fade-up"
            data-aos-duration="2000"
            @click="toContactForm()"
            >Contact me</b-button
          >
        </div>
      </div>
      </div>
      
    </div>
  </section>
</template>
<script>
export default {
  name: "Home",

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
    }
  },
};
</script>

<style scoped>
#home h1 {
  font-size: 50px;
  margin-bottom: 20px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Poppins;
}

p {
  font-family: Roboto;
}

#home img {
  width: 90%;
  margin-left: 60px;
  size: 50%;
}
#home .showcase-right {
  margin-top: 90px;
}
section {
  overflow-x: hidden;
  font-size: 16px;
}
@media (max-width: 550px) {
  section {
    overflow-y: hidden;
  }
  .phone-align-text {
    padding-left: 30px;
  }
  .phone-align-image {
    padding-right: 40px;
  }
  .phone-align-btn {
    text-align: center;
  }
}
.pad-left {
    padding-left: 2em;
  }

#showcase {
  max-width: 100vw;
}
</style>

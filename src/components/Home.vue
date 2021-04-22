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
            Hi! I am Faizan Mohammed currently living in Pennsylvania, USA. I am a Fullstack Software developer with 4+ years of Industry experience
            and an aspiring freelancer.<br />
            <br />
            When developing web apps, I mostly use Java and Spring framework for the backend. But for smaller to mid size projects which donot
            involve complex logic, I prefer to use Backend as service platforms like Google's Firebase. 
            For front end I use VueJS or NuxtJS in combination with
            CSS frameworks and libraries like Buefy, bootstrap.
            <br/> <br/>
            Didn't find the tech-stack you are looking for? Don't worry! I use the appropriate tech stack that fits the project's requirements.
            I am always open
            to learning new technologies or discuss the trends, Please browse through my Time Line below and feel free to Contact me.
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

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
            Hi! My name is Faizan Mohammed. I am a Fullstack Software developer
            and a freelancer. I have diverse set of skills ranging from Java,
            Javascript & Frameworks to Cloud technologies and more.. <br />
            <br />
            I primarily use Java, VueJS and GCP/Firebase for the Fullstack
            development depending on the project requirements. I am always open
            to learning new technologies, Please download my resume to learn
            more about my Stack.
          </p>
        </div>
        <br />
        <div class="phone-align-btn">
          <b-button
            class="btn btn-primary"
            data-aos="fade-up"
            data-aos-duration="2000"
            >My Resume</b-button
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Home",
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

#showcase {
  max-width: 100vw;
}
</style>

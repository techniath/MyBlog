<template>
  <div>
    <section id="about">
      <div id="container">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div
              class="info-left"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
            <br/> <br/>
              <img class="phone-align-image" src="../assets/running-design.jpeg" alt="" />
            </div>
          </div>
          <div class="col-md-6 col-sm-6">
            <div
              class="info-right"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h2 class="phone-align-text">A little more about me...</h2>
              <p class="phone-align-text">
                Apart from being a Software developer, I am also an ISSA
                Certified Elite trainer and Nutritionist. Its not a profession but a
                hobby. Feel free to reach out to me to chat about
                about both Worlds.
                <br/>
                <p class="phone-align-text">Funfact: I have more experience as a Fitness trainer than as a Software developer.</p>
              </p>
              <br />
              <div class="phone-align-btn">
              <b-button @click="toContactForm()" class="btn btn-primary">Contact me</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <!-- <section id="info2">
      <div id="container">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div
              class="info-left"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h2>Latest Update - As a Software developer</h2>
              <p>
                Currently I am working fulltime, developing web application for Department of Transportation and freelancing for a Medical transporation company.<br/>
                My high-level stack that I use frequently...
                <br/> <br/>
                <ul class="b">
                  <li>Spring Boot</li>
                  <li>Microservices</li>
                  <li>Javascript/VueJS</li>
                  <li>Azure</li>
                  <li>REDIS</li>
                  <li>GCP/Firebase</li>
                  <li>GIT</li>
                  <li>Jenkins</li>
                  <li>Docker</li>
                  <li>Oracle DB</li>
                  & more... 
                  <a @click="toContactForm()"> Contact me</a> for my resume.
              </ul>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-sm-6">
            <div
              class="info-right"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h2>As a Fitness trainer</h2>
              <p>
                Since the COVID-19, not only I had to reorganize my workout schedule but also the approach to workout as whole. 
                I am an advocate of Time under tension and Hypertrophy, so I am biased towards in-gym training. <br/>
                However COVID-19 forced me to start bodyweight training and Calisthenics and I must say I was missing out on lot of things...
              </p>
              <img class="animated-gif" src="../assets/Cert_Logo.gif" alt="">
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>
<script>
export default {
  methods: {
    toContactForm() {
      document.getElementById('contact').scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }
  }
}
</script>
<style scoped>
img {
  width: 90%;
  margin-left: 60px;
  size: 50%;
}
#about .info-right {
  margin-top: 90px;
}
section {
  margin-top: 70px;
  font-size: 18px;
  overflow-x: hidden;
}
#info2 {
  margin: 20px 60px 60px 70px;
}
ul.b {
  list-style-type: square;
}
@media (max-width: 550px) {
  .phone-align-text{
  padding-left: 30px 
}
.phone-align-btn{
  text-align: center;
}
.phone-align-image{
  padding-right: 40px
}
}
img.animated-gif{
  width: 120px;
  height: auto;
}


</style>

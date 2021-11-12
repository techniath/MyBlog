<template>
  <section id="contact">
    <div class="row">
      <div class="col-md-5 col-sm-5">
        <div
          class="contact-form"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <form @submit.prevent="submit">
            <div class="form-group">
              <h2>Contact Me</h2>
              <label>Name: </label>
              <input
                variant="primary"
                name="name"
                type="text"
                placeholder="Name *"
                class="form-control"
                v-model="name"
              />
            </div>
            <div class="form-group">
              <label>Email: </label>
              <input
                class="form-control"
                name="email"
                type="text"
                placeholder="Email *"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <label>Message: </label>
              <textarea
                name="message"
                placeholder="Your message"
                variant="primary"
                class="form-control"
                v-model="message"
              ></textarea>
            </div>
            <div>
              <input type="submit" value="Send message" />
            </div>
          </form>
        </div>
        <div class="col-md-7 col-sm-7"></div>
      </div>
    </div>
  </section>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      name: null,
      email: null,
      message: null,
      emailRequest:
        this.name +
        " wants to contact you, Reach out to his Email " +
        this.email +
        " Below is the message " +
        this.message,
    };
  },

  methods: {
    submit(e) {
      if (!this.name || !this.email || !this.message) {
        this.$swal(
          "INVALID INPUT",
          "Please enter the required information",
          "error"
        );
      } else {
        try {
          emailjs.sendForm(
            "service_myBlog",
            "template_dmd",
            e.target,
            "user_okDxzWlNI4S8X5Jbuxsnw",
            {
              emailRequest: this.emailRequest,
              email: this.email,
            }
          );
          this.name = null;
          this.email = null;
          this.message = null;
          this.$swal(
            "Email Sent",
            "Thank you for contacting me, I will reach out to you ASAP",
            "success"
          );
        } catch (error) {
          console.log({ error });
        }
      }
    },
  },
};
</script>
<style scoped>
section {
  margin-left: 70px;
}
#contact {
  padding: 40px;
  color: #fff;
  border-top: #333 7px solid;
  border-bottom: #333 7px solid;
  margin-right: 60px;
}
label,
h2,
b,
li {
  color: black;
}
</style>

<template>
    <main id="timeline">
  <br/>
  <h3>My Timeline</h3>
  <br/>
  <section class="timeline">
      <br/>
  <h5 style="background-color:#CBCFD2">Profession Experience </h5>
  <br/>
    <ul>
      <li v-for="(info, index) in timeline_data_experience" v-bind:key="index">
        <span></span>
        <div> <strong>{{ info.company }} </strong></div>
        <br/>
        <div>{{ info.About }}</div>
        <br/>
        <div v-if="info.project1"><a href="https://doormeat.com/" target="_blank" style="color:#4e9bfa"> Door Meat</a> {{info.project1}} </div>
        <br/>
        <div v-if="info.project2"><a href="https://elitetransportationpa.com/" target="_blank" style="color:#4e9bfa"> Elite Transportation </a> {{info.project1}} </div>
        <br/>
        <div v-if="info.project3"><a href="https://drivingmissdaisy.com/" target="_blank" style="color:#4e9bfa"> Driving Miss Daisy Transportation </a> {{info.project2}} </div>
        <br/>
        <div v-if="info.project4"><a href="https://dreamerschildcare.com/" target="_blank" style="color:#4e9bfa"> Dreamers Child Care </a> {{info.project3}} </div>
        <br/>
        <div>  <strong>Tech Stack: </strong>{{ info.stack }}</div>
        <div class="year">
          <span>{{ info.yearEnd }}</span>
          <span>{{ info.yearStart }}</span>
        </div>
      </li>
    </ul>
    <br/>
    <h5 style="background-color:#CBCFD2">Education </h5>
    <br/>
    <ul>
      <li v-for="(info, index) in timeline_data_education" v-bind:key="index">
        <span></span>
        <div> <strong>{{ info.school }} </strong></div>
        <br/>
        <div>{{ info.course }}</div>
        <div class="year">
          <span>{{ info.yearEnd }}</span>
          <span>{{ info.yearStart }}</span>
        </div>
      </li>
    </ul>
  </section>
</main>
</template>
<script>
export default {
  data () {
    return {
      timeline_data_experience: [
        {
          "company":"Deloitte USDC, Full Stack Developer",
          "About":"Working at Deloitte as a Full Stack Engineer on the MVDLS (Dept. of Transportation) project. Revamping the existing legacy code application into modern Java Microservices architecture.",
          "stack":"Java, Spring Framework, Microservices, Hibernate, Oracle, JDBC, HTML, CSS, JavaScript, VueJS, Docker, Kubernetes, Azure, Jenkins, REST, SOAP, REDIS, GIT.",
          "yearStart":"2019",
          "yearEnd":"Now"
        },
        {
          "company":"Freelancer",
          "About":"Since my college days, I had a goal of having my own website/blog. However, I took my skills and converted the hobby into a profession. It helped me to explore the avenues of web development for small to mid-sized applications/blogs. With this experience, I have significantly improved my code quality and decision making under intense pressure.",
          "stack":"Java, UI/UX, HTML, CSS, JavaScript, VueJS, NuxtJs, Firebase, GCP, Firestore, NodeJS, Python.",
          "project1" : " - Door Meat, a meat delivery/subscription service. This is my personal project and an attempt on my start up idea. Although its still under development and has been deployed for some specific occasion, I plan on building in to something big one day. Its built using NuxtJS/VueJS and Firebase, integrated with Stripe for payment services.",
          "project2" : " - Developed a website for a trucking agency, which is spread across USA, Canada, and Mexico. Apart from the website, I have developed an application to allow the employees to fill their timesheets and add notes, which assists the company in tracking the hours and generating payroll.",
          "project3" : " - I was approached by my previous employer to design and develop a website for a non-emergency, medical transportation company. The admin panel is still under development, which would track the incoming rides and time duration. I plan to use analytics to determine the rides being requested by various age groups.",
          "project4" : " - I had an opportunity to develop a Day care website and integrate with Shark Tank famed startup 'Bright Wheel'. I improved it performance and SEO ranking using NuxtJS Server side rendering abilities.",
          "yearStart":"2020",
          "yearEnd":"Now"
        },
        {
          "company":"Cup Foods, Java Developer",
          "About":"For this project I have worked to replace the older middleware application, IBM Messaging Queues, to Web Services using Spring Boot in order to improve the performance and also to modernize the legacy application via web services for better maintainability and scalability.",
          "stack":"Java, VueJS, Spring Framework, Microservices, GCP, MySQL, PGSQL.",
          "yearStart":"2018",
          "yearEnd":"2019"
        },  
        {
          "company":"St Cloud State University, Research Assistant",
          "About":"In SCSU’s Learning Resources services, I have developed a web interface using HTML, CSS and JavaScript with Spring MVC Framework, which allows users to view usage of library resources stored in a MSSQL Server DB. I have also developed Data Cubes using SQL Server Analysis Services (SSAS), ETL operations using SQL Server Integration Services (SSIS) and generated reports using SQL Server Reporting Services (SSRS).",
          "stack":"HTML, CSS, JavaScript, SSRS, SSIS, SSAS, JAVA, MSSQL, Spring Framework.",
          "yearStart":"2016",
          "yearEnd":"2018"
        }
      ],
      timeline_data_education: [
          {
          "school":"St Cloud State University, USA.",
          "course":"MSIA- Masters in Information Assurance",
          "yearStart":"2015",
          "yearEnd":"2018"
        },
        {
          "school":"Osmania University, INDIA.",
          "course":"Bachelors in Electrical and Electronics Engineering",
          "yearStart":"2011",
          "yearEnd":"2015"
        }
      ]
    }
 
}
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
    $font-stack: 'Montserrat', sans-serif;
$font-color: rgb(70, 34, 34);
$bg-color: #fff;
$dark-blue: #ffffff;
$light-blue: #4e9bfa;

@mixin clearfix {
  content: '';
  position: absolute;
  top: 0; left: 0;
}
@mixin set-border($thickness, $color, $radius) {
  border: $thickness solid $color;
  border-radius: $radius;
}

body {
    background-color: $bg-color;
}
*, *::before, *::after {
    margin: 0; padding: 0;
	  box-sizing: border-box;
	  font-family: $font-stack;
	  color: $font-color;
}
main {
    width: 90vw;
    height: 100%;
    margin: 1em auto;
    padding: 40px;
    background: $dark-blue;
    border-radius: 4px;
    box-shadow: 0 5px 15px rgba(0,0,0,.5);
}
.timeline {
  padding: 5px 45px;
  ul {
    position: relative;
    &::before {
      @include clearfix();
      height: 100%;
    }
  }
  li {
    position: relative;
    margin: 60px 35px;
    width: 100%;
    list-style: none;
    line-height: 25px;
    &>span {
      @include clearfix();
      left: -25px;
      height: 110%;
      @include set-border(2px, $font-color, none);
    }
    &>span::before, &>span::after {
      @include clearfix();
      width: 14px; height: 14px;
      @include set-border(3px, $font-color, 50%);
      left: -7px;
      background: $light-blue;
    }
    &>span::before {
      top: -15px;
    }
    &>span::after {
      top: 100%;
    }
    div {
      &:nth-child(2) {
        font-size: 1.2em;
      }
      &:nth-child(3), &:nth-child(4) {
        font-size: 1em;
        font-style: italic;
        color: darken($font-color, 25%);
      }
    }
    .year span {
      position: absolute;
      font-size: 1em;
      left: -85px;
      width: 40px;
      text-align: right;
      &:first-child {
        top: -20px;
      }
      &:last-child {
        top: 100%;
      }
    }
  }
}
</style>
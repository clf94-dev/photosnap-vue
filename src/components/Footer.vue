<template>
   <b-container fluid>
       <b-row class="footer-section">
           <b-col class="logo-col col" xs="12" sm="12" md="3" lg="3">
                <img :src="logo" alt="Photosnap" />
        <b-row class="social-row" >
            <i className="fab fa-facebook faceb fa-gradient"></i>
            <i className="fab fa-youtube yout"></i>
            <i className="fab fa-twitter twitt"></i>
            <i className="fab fa-pinterest pint"></i>
            <i className="fab fa-instagram instag"></i>
        </b-row>
           </b-col>
           <b-col class="footer-links col" xs="12" sm="12" md="3" lg="3" @click="scrollToTop()">
               <router-link to='/home' class="single-link" > Home</router-link>
               <router-link to='/stories' class="single-link"> Stories</router-link>
               <router-link to='/features' class="single-link"> Features</router-link>
               <router-link to='/pricing' class="single-link"> Pricing</router-link>
           </b-col>
           <b-col class="col" xs="12" sm="12" md="3" lg="3"></b-col>
           <b-col class="copy-col col" xs="12" sm="12" md="3" lg="3">
                <button class="btn">
      <b-row>
        <b-col xs="8" sm="8" md="8" lg="8">GET AN INVITE</b-col>
        <b-col xs="4" sm="4" md="4" lg="4">
          <img :src="arrowW" alt="arrow" />
        </b-col>
      </b-row>
    </button>

        <p>Copyright 2019. All Rights Reserved</p>
           </b-col>

       </b-row>
   </b-container>
</template>

<script>
    export default {
        name:'Footer',
        data(){
            return{
                logo: require("../assets/images/shared/desktop/logo copy.svg"),
                arrowW: require("../assets/images/shared/desktop/arrow copy.svg"),
                
            }
        },
        methods: {
          scrollToTop() {
                window.scrollTo(0,0);
           },
        }
    }
</script>

<style scoped>
.footer-section {
  padding: 7%;
  background-color: black;
  color: white;
}

@media screen and (max-width: 756px) {
  .footer-section {
    text-align: center;
  }
}

@media screen and (max-width: 600px) {
  .footer-section .col {
    width: 100%;
  }
}

@media screen and (min-width: 901px) {
  .footer-section .col {
    width: 25%;
  }
}

@media screen and (max-width: 900px) and (min-width: 601px) {
  .footer-section .col {
    width: 50%;
  }
}

.footer-section .logo-col .social-row {
  margin: 20px auto;
}

@media screen and (min-width: 756px) {
  .footer-section .logo-col .social-row {
    margin-top: 25%;
  }
}

.footer-section .logo-col .social-row i {
  margin-right: 10px;
  cursor: pointer;
  color: white;
  font-size: 20px !important;
}

.footer-section .logo-col .social-row .faceb:hover {
  background: -webkit-linear-gradient(45deg, #6028F1, #63AFDB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-section .logo-col .social-row .yout:hover {
  background: -webkit-linear-gradient(45deg, #D3205A, #FF5A5A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-section .logo-col .social-row .twitt:hover {
  background: -webkit-linear-gradient(45deg, #27718A, #65FFEB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-section .logo-col .social-row .pint:hover {
  background: -webkit-linear-gradient(45deg, #DE3838, #F6C683);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-section .logo-col .social-row .instag:hover {
  background: -webkit-linear-gradient(45deg, #5A77FF, #BC7198, #FFC593);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 756px) {
  .footer-section .footer-links {
    margin-bottom: 45px;
  }
}

.footer-section .footer-links .single-link {
  text-decoration: none !important;
  line-height: 2.2rem;
  text-decoration: none !important;
  color: white;
  font-size: 18px;
  margin: 12px 7px !important;
}

.footer-section .copy-col .btn {
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: none;
  font-size: 15px;
  color: #ffffff;
  text-align: start;
  text-transform: uppercase;
}


.footer-section .copy-col .btn.white {
  color: #ffffff !important;
}

.footer-section .copy-col .btn:hover {
  transition: all 0.3s ease;
  cursor: pointer;
}

.footer-section .copy-col p {
  margin-top: 25px;
}

</style>
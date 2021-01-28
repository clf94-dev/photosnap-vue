<template>
   <b-container fluid>
       <b-row class="footer-section">
           <b-col class="logo-col col" xs="12" sm="12" md="3" lg="3">
                <img :src="logo" alt="Photosnap" />
        <b-row class="social-row" >
            <i className="faa fa-facebook faceb fa-gradient"></i>
            <i className="fab fa-youtube yout"></i>
            <i className="fab fa-twitter twitt"></i>
            <i className="fab fa-pinterest pint"></i>
            <i className="fab fa-instagram instag"></i>
        </b-row>
           </b-col>
           <b-col class="footer-links col" xs="12" sm="12" md="3" lg="3">
               <router-link to='/home'> Home</router-link>
               <router-link to='/stories'> Stories</router-link>
               <router-link to='/features'> Features</router-link>
               <router-link to='/pricing'> Pricing</router-link>
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
        }
    }
</script>

<style scoped>

</style>
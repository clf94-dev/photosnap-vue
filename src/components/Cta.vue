<template>
    <b-container fluid class="cta-cont">
         <img class="backg" :src="backgroundD" :srcset="`${backgroundD} 1000w,${backgroundT} 999w, ${backgroundM} 600w`" alt="beta bag" />
<b-row class="cta-content">
    <b-col class="text-col" xs="12" sm="12" md="6" lg="6">
         <h2>We're in Beta. Get your invite today!</h2>
    </b-col>
    <b-col class="btn-col" xs="12" sm="12" md="6" lg="6">
           <button class="btn">
      <b-row>
        <b-col xs="8" sm="8" md="8" lg="8">GET AN INVITE</b-col>
        <b-col xs="4" sm="4" md="4" lg="4">
          <img :src="arrowW" alt="arrow" />
        </b-col>
      </b-row>
    </button>
    </b-col>
</b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'Cta',
        data(){
            return{
                arrowW: require("../assets/images/shared/desktop/arrow copy.svg"),
                backgroundD:require("../assets/images/shared/desktop/bg-beta.jpg"),
                backgroundT:require("../assets/images/shared/tablet/bg-beta.jpg"),
                backgroundM:require("../assets/images/shared/mobile/bg-beta.jpg")
            }
        }
    }
</script>

<style scoped>
.cta-cont {
  border-left: 4px solid linear-gradient(to bottom, #5A77FF, #BC7198, #FFC593) !important;
  
}

.cta-cont .backg {
  width: 100%;
  height: 61%;
  position: absolute;
  left: 0;
  z-index: -1;
}

.cta-cont .cta-content {
  padding: 5% 7% 7% !important;
  text-align: start;
}

.cta-cont .cta-content .text-col {
  width: 100%;
}



.cta-cont .cta-content .text-col h2 {
  color: white;
  font-weight: 400;
  font-size: 53px;
}

@media screen and (max-width: 600px) {
  .cta-cont .cta-content .text-col h2 {
    font-size: 40px !important;
  }
}

@media screen and (min-width: 756px) {
  .cta-cont .cta-content .text-col h2 {
    margin-right: 40% ;
  }
}

.cta-cont .cta-content .btn-col {
  width: 100%;
}

@media screen and (min-width: 800px) {
  .cta-cont .cta-content .btn-col {
    width: 50%;
  }
}

.cta-cont .cta-content .btn-col .btn {
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: none;
  font-size: 15px;
  color: #ffffff;
  text-align: start;
  text-transform: uppercase;
}

.cta-cont .cta-content .btn-col .btn.white {
  color: #ffffff !important;
}

.cta-cont .cta-content .btn-col .btn:hover {
  transition: all 0.3s ease;
  cursor: pointer;
}

.cta-cont .cta-content .btn-col .btn img {
  width: 43px !important;
}

</style>
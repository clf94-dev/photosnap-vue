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

</style>
<template>
     <b-container fluid>
        <b-row class="topprice-cont">
            <b-col class="text-col" xs="12" sm="7" md="5" lg="5">
          <h2>Pricing</h2>
        <p>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>

            </b-col>
            <b-col class="img-col" xs="12" sm="5" md="7" lg="7">
                <img :src="topPriceD" :srcset="`${topPriceD} 1000w, ${topPriceT} 800w, ${topPriceM} 600w`" alt="Features">
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'TopPricing',
        data(){
            return{
                topPriceD: require("../assets/images/pricing/desktop/hero.jpg"),
                topPriceT: require("../assets/images/pricing/tablet/hero.jpg"),
                topPriceM: require("../assets/images/pricing/mobile/hero.jpg"),
            }
        }
    }
</script>

<style scoped>

</style>
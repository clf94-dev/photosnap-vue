<template>
    <b-container fluid>
        <b-row class="topfeat-cont">
            <b-col class="text-col" xs="12" sm="7" md="5" lg="5">
                  <h2>Features</h2>
        <p>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>

            </b-col>
            <b-col class="img-col" xs="12" sm="5" md="7" lg="7">
                <img :src="topFeatD" :srcset="`${topFeatD} 1000w, ${topFeatT} 800w, ${topFeatM} 600w`" alt="Features">
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'TopFeatures',
        data(){
            return{
                topFeatD: require("../assets/images/features/desktop/hero.jpg"),
                topFeatT: require("../assets/images/features/tablet/hero.jpg"),
                topFeatM: require("../assets/images/features/mobile/hero.jpg"),
            }
        }
    }
</script>

<style scoped>

</style>
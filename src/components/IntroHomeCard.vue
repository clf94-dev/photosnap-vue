<template>
    <b-container fluid>
<b-row :class="info.classes">
    <b-col class="img-col" xs="12" sm="6" md="6" lg="6">
<img :src="info.src" :alt="info.imgAlt">
    </b-col>
        <b-col class="text-col" xs="12" sm="6" md="6" lg="6">
 <h2>{{info.title}}</h2>
      <p>{{info.text}}</p>
      <button :class="info.index===0? 'btn white': 'btn'" @click="info.link && goToStories()">
        <b-row>
         <b-col xs="8" sm="8" md="8" lg="8">
                   {{info.btn}}
         </b-col >
          <b-col xs="4" sm="4" md="4" lg="4">
          <img :src="`${info.arrow==0? ArrowW : Arrow }`" alt="arrow">
          </b-col >

        </b-row>

      </button>
        </b-col>
</b-row>

    </b-container>
</template>

<script>
    export default {
        name: 'IntroHomeCard',
        props: ["info"],
        data(){
            return{
                Arrow: require("../assets/images/shared/desktop/arrow.svg"),
                ArrowW: require("../assets/images/shared/desktop/arrow copy.svg"),
            }
        }
    }
</script>

<style scoped>

</style>
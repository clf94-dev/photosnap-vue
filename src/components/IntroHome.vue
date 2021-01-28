<template>
   <b-container fluid>
       <div v-for="data of introdata" v-bind:key="data.title">
           <IntroHomeCard :info="data"></IntroHomeCard>
       </div>
   </b-container>
</template>

<script>
import IntroHomeCard from './IntroHomeCard.vue'
    export default {
        name: 'IntroHome',
        components: {
            IntroHomeCard
        },
        data(){
            return{
                introdata: [{
                    title: "Create and share your photo Stories",
                    text:"Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
                    btn:"Get an Invite",
                    classes: "intro-row reversed dark",
                    index:0,
                    arrow: 0,
                    src: require("../assets/images/home/desktop/create-and-share.jpg"),
                    imgAlt:"",
                    link: false
                },
                {
                    title: "Beautiful stories every time",
                    text:"We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
                    btn:"View the stories",
                    classes: "intro-row",
                   index:1,
                    arrow: 1,
                    src: require("../assets/images/home/desktop/beautiful-stories.jpg"),
                    imgAlt:"",
                    link: true
                },
                {
                    title: "Designed for everyone",
                    text:"Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
                    btn:"View the stories",
                    classes: "intro-row reversed",
                    index:2,
                    arrow: 1,
                    src: require("../assets/images/home/desktop/designed-for-everyone.jpg"),
                    imgAlt:"",
                    link: true
                },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <b-container fluid>
        <b-row class="stories-row">
            <b-col class="story-cont" v-for="data of storiesdata" v-bind:key="data.title" xs="12" sm="6" md="3" lg="3">
                <div class="img-col">

            <img :src="data.srcD" :srcset="`${data.srcD} 700w, ${data.srcM} 600w`" :alt="data.imgAlt" />
        </div>
        <div class="text-col" >
            <h4>{{data.date }}</h4>
            <h3>
                {{data.title }}
            </h3>
            <h4>{{data.author }}</h4>
            <hr />
            <button class="btn" @click="goToStories()">
            <b-row>
              <b-col  xs="8" sm="8" md="8" lg="8" >READ STORY</b-col>
              <b-col xs="4" sm="4" md="4" lg="4" >
                <img :src="arrowW " alt="arrow" />
              </b-col>
            </b-row>
          </button>
        </div>
            </b-col>

        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'StoriesHome',
        data(){
            return{
arrowW: require("../assets/images/shared/desktop/arrow copy.svg"),
storiesdata: [
    {
        title: "The Mountains",
        author: "by John Appleseed",
        srcD: require("../assets/images/stories/desktop/mountains.jpg"),
        srcT: require("../assets/images/stories/desktop/mountains.jpg"),
        srcM: require("../assets/images/stories/mobile/mountains.jpg"),
        imgAlt: "The Mountains"
    },
    {
        title: "Sunset Cityscapes",
        author: "by Benjamin Cruz",
        srcD: require("../assets/images/stories/desktop/cityscapes.jpg"),
        srcT: require("../assets/images/stories/desktop/cityscapes.jpg"),
        srcM: require("../assets/images/stories/mobile/cityscapes.jpg"),
        imgAlt: "Sunset Cityscapes"
    },
    {
        title: "18 Days Voyage",
        author: "by Alexei Borodin",
        srcD: require("../assets/images/stories/desktop/18-days-voyage.jpg"),
        srcT: require("../assets/images/stories/desktop/18-days-voyage.jpg"),
        srcM: require("../assets/images/stories/mobile/18-days-voyage.jpg"),
        imgAlt: "18 Days Voyage"
    },
    {
        title: "Architecturals",
        author: "by Samantha Brooke",
        srcD: require("../assets/images/stories/desktop/architecturals.jpg"),
        srcT: require("../assets/images/stories/desktop/architecturals.jpg"),
        srcM: require("../assets/images/stories/mobile/architecturals.jpg"),
        imgAlt: "Architecturals"
    }
]
            }
        }
    }
</script>

<style scoped>

</style>
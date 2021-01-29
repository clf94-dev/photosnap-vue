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
        methods:{
            goToStories(){
                this.$router.push('/stories');
                 window.scrollTo(0,0);
            }
        },
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
.stories-row .story-cont {
  width: 100%;
  padding: 0;
}

.stories-row .story-cont .img-col img {
  z-index: -1 !important;
  width: 110%;
  height: 100%;
}

@media screen and (max-width: 800px) {
  .stories-row .story-cont .img-col img {
    width: 100% !important;
  }
  .stories-row .story-cont .img-col img:hover {
    scale: 1 !important;
  }
}

@media screen and (max-width: 600px) {
  .stories-row .story-cont .img-col img {
    width: 135% !important;
  }
  .stories-row .story-cont .img-col img:hover {
    scale: 1 !important;
  }
}

.stories-row .story-cont .img-col img:hover {
  scale: 1.05;
}

.stories-row .story-cont .text-col {
  z-index: 1;
  position: absolute;
  margin-top: -150px;
  margin-left: 40px;
  width: 270px;
  color: #ffffff;
  text-align: start;
}

@media screen and (max-width: 900px) and (min-width: 600px) {
  .stories-row .story-cont .text-col {
    margin-top: -20vw;
    margin-left: 20px;
  }
}



.stories-row .story-cont .text-col h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.stories-row .story-cont .text-col h4 {
  font-size: 12px;
  margin-bottom: 10px;
}

.stories-row .story-cont .text-col hr {
  color: #DFDFDF !important;
  width: 100%;
  margin: 10px auto;
  border: 1px solid #DFDFDF;
 
}

.stories-row .story-cont .text-col .btn {
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: none;
  font-size: 15px;
  color: #ffffff;
  text-align: start;
  text-transform: uppercase;
}

.stories-row .story-cont .text-col .btn:hover {
  transition: all 0.3s ease;
  cursor: pointer;
}

</style>
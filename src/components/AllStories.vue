<template>
 <b-container fluid>
     <b-row class="stories-row">
         <b-col class="story-cont" xs="12" sm="4" md="3" lg="3" v-for="data of storiesdata" v-bind:key="data.title">
<div class="img-col" >
            <img :src="data.srcD" :srcset="`${data.srcD} 700w, ${data.srcM} 600w`" :alt="data.imgAlt" />
        </div>
        <div class="text-col">
            <h4>{{ data.date }}</h4>
            <h3>
                {{ data.title }}
            </h3>
            <h4>{{ data.author }}</h4>
            <hr />
            <button class="btn">
        <b-row>
          <b-col xs="8" sm="8" md="8" lg="8">READ STORY</b-col>
          <b-col xs="4" sm="4" md="4" lg="4">
            <img :src="arrowW" alt="arrow" />
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
       name: 'AllStories',
        data(){
            return{
arrowW: require("../assets/images/shared/desktop/arrow copy.svg"),
storiesdata: [
    {
        date: "April 16th 2020",
        title: "The Mountains",
        author: "by John Appleseed",
        srcD: require("../assets/images/stories/desktop/mountains.jpg"),
        srcT: require("../assets/images/stories/desktop/mountains.jpg"),
        srcM: require("../assets/images/stories/mobile/mountains.jpg"),
        imgAlt: "The Mountains"
    },
    {
        date: "April 14th 2020",
        title: "Sunset Cityscapes",
        author: "by Benjamin Cruz",
        srcD: require("../assets/images/stories/desktop/cityscapes.jpg"),
        srcT: require("../assets/images/stories/desktop/cityscapes.jpg"),
        srcM: require("../assets/images/stories/mobile/cityscapes.jpg"),
        imgAlt: "Sunset Cityscapes"
    },
    {
        date: "April 11th 2020",
        title: "18 Days Voyage",
        author: "by Alexei Borodin",
        srcD: require("../assets/images/stories/desktop/18-days-voyage.jpg"),
        srcT: require("../assets/images/stories/desktop/18-days-voyage.jpg"),
        srcM: require("../assets/images/stories/mobile/18-days-voyage.jpg"),
        imgAlt: "18 Days Voyage"
    },
    {
        date: "April 9th 2020",
        title: "Architecturals",
        author: "by Samantha Brooke",
        srcD: require("../assets/images/stories/desktop/architecturals.jpg"),
        srcT: require("../assets/images/stories/desktop/architecturals.jpg"),
        srcM: require("../assets/images/stories/mobile/architecturals.jpg"),
        imgAlt: "Architecturals"
    },
    {
        date: "April 7th 2020",
        title: "World Tour 2019",
        author: "by Timothy Wagner",
        srcD: require("../assets/images/stories/desktop/world-tour.jpg"),
        srcT: require("../assets/images/stories/desktop/world-tour.jpg"),
        srcM: require("../assets/images/stories/mobile/world-tour.jpg"),
        imgAlt: "World Tour 2019"
    },
    {
        date: "April 3rd 2020",
        title: "Unforeseen Corners",
        author: "by William Malcolm",
        srcD: require("../assets/images/stories/desktop/unforeseen-corners.jpg"),
        srcT: require("../assets/images/stories/desktop/unforeseen-corners.jpg"),
        srcM: require("../assets/images/stories/mobile/unforeseen-corners.jpg"),
        imgAlt: "Unforeseen Corners"
    },
    {
        date: "March 29th 2020",
        title: "King on Africa: Part II",
        author: "by Tim Hillenburg",
        srcD: require("../assets/images/stories/desktop/king-on-africa.jpg"),
        srcT: require("../assets/images/stories/desktop/king-on-africa.jpg"),
        srcM: require("../assets/images/stories/mobile/king-on-africa.jpg"),
        imgAlt: "King on Africa: Part II"
    },
    {
        date: "March 21st 2020",
        title: "The Trip to Nowhere",
        author: "by Felicia Rourke",
        srcD: require("../assets/images/stories/desktop/trip-to-nowhere.jpg"),
        srcT: require("../assets/images/stories/desktop/trip-to-nowhere.jpg"),
        srcM: require("../assets/images/stories/mobile/trip-to-nowhere.jpg"),
        imgAlt: "The Trip to Nowhere"
    },
     {
        date: "March 19th 2020",
        title: "Rage of The Sea",
        author: "by Mohammed Abdul",
        srcD: require("../assets/images/stories/desktop/rage-of-the-sea.jpg"),
        srcT: require("../assets/images/stories/desktop/rage-of-the-sea.jpg"),
        srcM: require("../assets/images/stories/mobile/rage-of-the-sea.jpg"),
        imgAlt: "Rage of The Sea"
    },
    {
        date: "March 16th 2020",
        title: "Running Free",
        author: "by Michelle",
        srcD: require("../assets/images/stories/desktop/running-free.jpg"),
        srcT: require("../assets/images/stories/desktop/running-free.jpg"),
        srcM: require("../assets/images/stories/mobile/running-free.jpg"),
        imgAlt: "Running Free"
    },
    {
        date: "March 11th 2020",
        title: "Behind the Waves",
        author: "by Lamarr Wilson",
        srcD: require("../assets/images/stories/desktop/behind-the-waves.jpg"),
        srcT: require("../assets/images/stories/desktop/behind-the-waves.jpg"),
        srcM: require("../assets/images/stories/mobile/behind-the-waves.jpg"),
        imgAlt: "Behind the Waves"
    },
    {
        date: " March 9th 2020",
        title: "Calm Waters",
        author: "by Felicia Rourke",
        srcD: require("../assets/images/stories/desktop/calm-waters.jpg"),
        srcT: require("../assets/images/stories/desktop/calm-waters.jpg"),
        srcM: require("../assets/images/stories/mobile/calm-waters.jpg"),
        imgAlt: "Calm Waters"
    },
    {
        date: "March 5th 2020",
        title: "The Milky Way",
        author: "by Benjamin Cruz",
        srcD: require("../assets/images/stories/desktop/milky-way.jpg"),
        srcT: require("../assets/images/stories/desktop/milky-way.jpg"),
        srcM: require("../assets/images/stories/mobile/milky-way.jpg"),
        imgAlt: "The Milky Way"
    },
    {
        date: "March 4th 2020",
        title: "Night at The Dark Forest",
        author: "by Mohammed Abdul",
        srcD: require("../assets/images/stories/desktop/dark-forest.jpg"),
        srcT: require("../assets/images/stories/desktop/dark-forest.jpg"),
        srcM: require("../assets/images/stories/mobile/dark-forest.jpg"),
        imgAlt: "Night at The Dark Forest"
    },
    {
        date: "March 1st 2020",
        title: "Somwarpet’s Beauty",
        author: "by Michelle",
        srcD: require("../assets/images/stories/desktop/somwarpet.jpg"),
        srcT: require("../assets/images/stories/desktop/somwarpet.jpg"),
        srcM: require("../assets/images/stories/mobile/somwarpet.jpg"),
        imgAlt: "Somwarpet’s Beauty"
    },
    {
        date: "February 25th 2020",
        title: "Land of Dreams",
        author: "by William Malcolm",
        srcD: require("../assets/images/stories/desktop/land-of-dreams.jpg"),
        srcT: require("../assets/images/stories/desktop/land-of-dreams.jpg"),
        srcM: require("../assets/images/stories/mobile/land-of-dreams.jpg"),
        imgAlt: "Land of Dreams"
    },
]
            }
        }
    }
</script>

<style scoped>
.stories-row {
  background-color: #000000;
}

.stories-row .story-cont {
  width: 100%;
  padding: 0;
}

.stories-row .story-cont .img-col img {
  z-index: -1;
  width: 100%;
}

@media screen and (max-width: 900px) {
  .stories-row .story-cont .img-col img {
    width: 100%;
  }
  .stories-row .story-cont .img-col img:hover {
    scale: 1 !important;
  }
}

@media screen and (max-width: 600px) {
  .stories-row .story-cont .img-col img {
    width: 120% !important;
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
  text-align: start;
  position: absolute;
  top: 70%;
  left: 25px;
  width: 270px;
  color: #ffffff;
}

@media screen and (max-width: 900px) {
  .stories-row .story-cont .text-col {
        position: absolute;
    top:55%;
    left: 10px;
  }
}
@media screen and (max-width: 600px) {
  .stories-row .story-cont .text-col {
        position: absolute;
    top:65%;
    left: 30px;
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
  color: #DFDFDF;
  width: 80%;
  position:relative;
  left: -10%;
  border: 1px solid #DFDFDF ;
  margin: 10px auto;
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

@media screen and (max-width: 900px) {
    .stories-row .story-cont .text-col .btn {
        width: 60%;
    }
}

.stories-row .story-cont .text-col .btn.white {
  color: #ffffff !important;
}

.stories-row .story-cont .text-col .btn:hover {
  transition: all 0.3s ease;
  cursor: pointer;
}

</style>
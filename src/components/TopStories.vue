<template>
   <b-container fluid>
       <b-row class="topStory-cont">
           <b-col class="text-col" xs="12" sm="7" md="5" lg="5">
                <h3 className="intro-p">Last month's featured story</h3>
        <h2>Hazy full moon of Appalachia</h2>
        <b-row>
            <p>March 2nd 2020</p>

            <p className="author-p">by John Appleseed</p>
            <p>
                The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.
            </p>
            <button class="btn">
        <div fxLayout="row wrap">
          <div fxFlex="66%">READ THE STORY</div>
          <div fxFlex="33%">
            <img :src="arrowW" alt="arrow" />
          </div>
        </div>
      </button>
        </b-row>
           </b-col>
           <b-col class="img-col" xs="12" sm="5" md="7" lg="7">
               <img :src=" topStoriesD " :srcset="`${topStoriesT} 1000w,${topStoriesT} 900w, ${topStoriesM} 600w`" alt="moon of appalacia" />
           </b-col>
       </b-row>
   </b-container>
</template>

<script>
    export default {
        name: 'TopStories',
        data(){
            return{
                topStoriesD: require("../assets/images/stories/desktop/moon-of-appalacia.jpg"),
topStoriesT: require("../assets/images/stories/tablet/moon-of-appalacia.jpg"),
topStoriesM: require("../assets/images/stories/mobile/moon-of-appalacia.jpg"),
arrowW: require("../assets/images/shared/desktop/arrow copy.svg"),
            }
        }
    }
</script>

<style scoped>

</style>
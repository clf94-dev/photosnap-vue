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
               <img :src=" topStoriesD " :srcset="`${topStoriesD} 1000w,${topStoriesT} 999w, ${topStoriesM} 600w`" alt="moon of appalacia" />
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
.topStory-cont {
  padding: 0;
}

.topStory-cont .text-col {
  width: 42%;
  padding: 7% 10% 5% 3%;
  color: #ffffff;
    text-align: start;
}

@media screen and (max-width: 500px) {
  .topStory-cont .text-col {
    width: 100%;
  }
}

@media screen and (min-width: 500px) and (max-width: 800px) {
  .topStory-cont .text-col {
    width: 58%;
  }
}

@media screen and (max-width: 720px) {
  .topStory-cont .text-col {
    padding: 47% 10% 10% 7%;
    background-color: #000000;
    min-height: 650px;
    color: #ffffff;
  }
}

.topStory-cont .text-col h3 {
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.topStory-cont .text-col h2 {
  font-size: 48px !important;
  text-transform: uppercase;
  font-weight: normal;
  margin-bottom: 15px;
}

@media screen and (min-width: 756px) {
  .topStory-cont .text-col h2 {
    padding-right: 25%;
  }
}

.topStory-cont .text-col p {
  font-size: 16px;
  margin-bottom: 30px;
  line-height: 1.5rem;
}

.topStory-cont .text-col .btn {
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: none;
  font-size: 15px;
  color: #ffffff;
  text-align: start;
  text-transform: uppercase;
}

.topStory-cont .text-col .btn.white {
  color: #ffffff !important;
}

.topStory-cont .text-col .btn:hover {
  transition: all 0.3s ease;
  cursor: pointer;
}

.topStory-cont .text-col .author-p {
  margin-left: 20px !important;
  font-weight: bold;
}

@media screen and (min-width: 720px) {
  .topStory-cont .text-col .author-p {
    margin-left: 30px;
  }
}

@media screen and (min-width: 720px) {
  .topStory-cont .img-col {
    position: absolute;
    z-index: -1;
    
  }
}
.topStory-cont .img-col{
    padding: 0;
  
}

.topStory-cont .img-col img {
  width: 100%;
}

@media screen and (min-width: 1001px) {
  .topStory-cont .img-col img {
    width: 240%;
  }
}

@media screen and (min-width: 600px) and (max-width: 999px) {
  .topStory-cont .img-col img {
    width: 240%;
  }
}

@media screen and (max-width: 756px) {
  .topStory-cont {
    flex-direction: column-reverse !important;
  }
}

</style>
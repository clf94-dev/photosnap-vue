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
.intro-row .img-col {
	width: 58%;
}

@media screen and (max-width: 500px) {
	.intro-row .img-col {
		width: 100%;
	}
}

@media screen and (min-width: 500px) and (max-width: 800px) {
	.intro-row .img-col {
		width: 42%;
	}
}

.intro-row .img-col img {
	width: 100%;
	height: 100%;
}

.intro-row .text-col {
	width: 42%;
	padding: 12% 11% 15% 7%;
}

@media screen and (max-width: 500px) {
	.intro-row .text-col {
		width: 100%;
	}
}

@media screen and (min-width: 500px) and (max-width: 800px) {
	.intro-row .text-col {
		width: 58%;
	}
}

.intro-row .text-col h2 {
	font-size: 40px;
	text-transform: uppercase;
	font-weight: normal;
	margin-bottom: 10px;
}

.intro-row .text-col p {
	font-size: 16px;
	font-weight: normal;
	line-height: 2rem;
	margin-bottom: 20px;
}

.intro-row .text-col .btn {
	width: 100%;
	height: 50px;
	background-color: transparent;
	border: none;
	font-size: 15px;
	color: #000000;
	text-align: start;
	text-transform: uppercase;
}

.intro-row .text-col .btn.white {
	color: #ffffff !important;
}

.intro-row .text-col .btn:hover {
	transition: all 0.3s ease;
	cursor: pointer;
}

.dark {
	background-color: black;
	color: white;
}

@media screen and (min-width: 500px) {
	.reversed {
		flex-direction: row-reverse !important;
	}
}
</style>
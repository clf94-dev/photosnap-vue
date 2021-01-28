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
@media screen and (max-width: 480px) {
	.topprice-cont {
		flex-direction: column-reverse;
	}
}

.topprice-cont .text-col {
	width: 42%;
	padding: 12% 12% 14% 7% !important;
	background-color: #000000;
	height: 100% !important;
	color: #ffffff;
}

@media screen and (max-width: 500px) {
	.topprice-cont .text-col {
		width: 100%;
       
	}
}

@media screen and (min-width: 500px) and (max-width: 800px) {
	.topprice-cont .text-col {
		width: 58%;
	}
}

@media screen and (max-width: 450px) {
	.topprice-cont .text-col {
		padding: 45% 7% 10% 7% !important;
	}
}

@media screen and (min-width: 450px) and (max-width: 800px) {
	.topprice-cont .text-col {
		padding: 25% 7% 27.5% 7% !important;
	}
}

.topprice-cont .text-col h2 {
	font-size: 48px !important;
	text-transform: uppercase;
	font-weight: normal;
	margin-bottom: 20px;
}

.topprice-cont .text-col p {
	font-size: 16px !important;
	margin-bottom: 30px;
	line-height: 1.5rem;
}

.topprice-cont .img-col {
	width: 58%;
     padding: 0;
}

@media screen and (max-width: 500px) {
	.topprice-cont .img-col {
		width: 100%;
	}
}

@media screen and (min-width: 500px) and (max-width: 800px) {
	.topprice-cont .img-col {
		width: 42%;
	}
}

.topprice-cont .img-col img {
	width: 100%;
	height: 100%;
}

@media screen and (max-width: 720px) {
	.topprice-cont .img-col img {
		width: 100%;
	}
}
</style>
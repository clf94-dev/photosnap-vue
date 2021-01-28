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
@media screen and (max-width: 480px) {
	.topfeat-cont {
		flex-direction: column-reverse;
	}
}

.topfeat-cont .text-col {
	width: 42%;
	padding: 12% 12% 14% 7% !important;
	background-color: #000000;
	height: 100% !important;
	color: #ffffff;
}

@media screen and (max-width: 500px) {
	.topfeat-cont .text-col {
		width: 100%;
	}
}

@media screen and (min-width: 500px) and (max-width: 800px) {
	.topfeat-cont .text-col {
		width: 58%;
	}
}

@media screen and (max-width: 450px) {
	.topfeat-cont .text-col {
		padding: 45% 7% 10% 7% !important;
	}
}

@media screen and (min-width: 450px) and (max-width: 800px) {
	.topfeat-cont .text-col {
		padding: 25% 7% 27.5% 7% !important;
	}
}

.topfeat-cont .text-col h2 {
	font-size: 48px !important;
	text-transform: uppercase;
	font-weight: normal;
	margin-bottom: 20px;
}

.topfeat-cont .text-col p {
	font-size: 16px !important;
	margin-bottom: 30px;
	line-height: 1.5rem;
}

.topfeat-cont .img-col {
	width: 58%;
    padding: 0;
}

@media screen and (max-width: 500px) {
	.topfeat-cont .img-col {
		width: 100%;
	}
}

@media screen and (min-width: 500px) and (max-width: 800px) {
	.topfeat-cont .img-col {
		width: 42%;
	}
}

.topfeat-cont .img-col img {
	width: 100%;
	height: 100%;
}

@media screen and (max-width: 720px) {
	.topfeat-cont .img-col img {
		width: 100%;
	}
}
</style>
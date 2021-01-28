<template>

    <b-container fluid>
        <b-row class="feat-cont">
            <b-col class="feat-card" xs="12"  sm="12" md="4" lg="4" v-for="data of featuresdata" v-bind:key="data.title">
<img :src="data.src" :alt="data.imgAlt"/>
        <h3>{{data.title}}</h3>
        <p>{{data.text}}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'FeaturesHome',
        data(){
            return{
                featuresdata:[
                    {
                        title: "100% Responsive",
                        text:"No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
                        src: require("../assets/images/features/desktop/responsive.svg"),
                        imgAlt:"100% Responsive"
                    },
                    {
                        title: "No Photo Upload Limit",
                        text:"Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
                        src: require("../assets/images/features/desktop/no-limit.svg"),
                        imgAlt:"No Photo Upload Limit"
                    },
                    {
                        title: "Available to Embed",
                        text:"Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
                        src: require("../assets/images/features/desktop/embed.svg"),
                        imgAlt:"Available to Embed"
                    },

                ]
            }
        }
    }
</script>

<style scoped>
.feat-cont {
	padding: 7%;
	text-align: center !important;
	align-items: flex-end;
}

.feat-cont .feat-card {

	margin-bottom: 50px;
	padding: 1% 3%;
}

@media screen and (max-width: 450px) {
	.feat-cont .feat-card {
		width: 100% !important;
	}
}

.feat-cont .feat-card img {
	margin-bottom: 20px;
}

.feat-cont .feat-card h3 {
	font-size: 18px;
	margin-bottom: 15px;
}

.feat-cont .feat-card p {
	margin-bottom: 0;
}
</style>
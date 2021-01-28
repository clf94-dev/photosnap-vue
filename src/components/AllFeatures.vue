<template>
   <b-container fluid>
        <b-row class="feat-cont">
            <b-col class="feat-card" xs="12"  sm="6" md="4" lg="4" v-for="data of featuresdata" v-bind:key="data.title">
<img :src="data.src" :alt="data.imgAlt"/>
        <h3>{{data.title}}</h3>
        <p>{{data.text}}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'AllFeatures',
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
                     {
                        title: "Custom Domain",
                        text:"With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
                        src: require("../assets/images/features/desktop/custom-domain.svg"),
                        imgAlt:"Custom Domain"
                    },
                    {
                        title: "Boost Your Exposure",
                        text:"Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
                        src: require("../assets/images/features/desktop/boost-exposure.svg"),
                        imgAlt:"Boost Your Exposure"
                    },
                    {
                        title: "Drag & Drop Image",
                        text:"Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
                        src: require("../assets/images/features/desktop/drag-drop.svg"),
                        imgAlt:"Drag & Drop Image"
                    }

                ]
            }
        }
    }
</script>

<style scoped>
.feat-cont {
	padding: 7%;
	text-align: center;
	align-items: flex-end;
}

.feat-cont .feat-card {

	margin-bottom: 50px;
	padding: 1% 3% !important;
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
	padding: 0 15%;
	line-height: 1.3rem;
}
</style>
<template>
    <div>
<IntroHome></IntroHome>
<StoriesHome>
</StoriesHome>
<FeaturesHome></FeaturesHome>
    </div>
</template>

<script>
import IntroHome from '../IntroHome.vue'
import StoriesHome from '../StoriesHome.vue'
import FeaturesHome from '../FeaturesHome.vue'
    export default {
        name: 'Home',
        components: {
            IntroHome,
            StoriesHome,
            FeaturesHome
        }

        
    }
</script>

<style scoped>

</style>
<template>
    <div>
<TopFeatures></TopFeatures>
<AllFeatures></AllFeatures>
<Cta></Cta>
    </div>
</template>

<script>
import TopFeatures from '../TopFeatures.vue',
import AllFeatures from '../AllFeatures.vue',
import Cta from '../Cta.vue'
    export default {
        name: 'Features',
        components: {
            TopFeatures,
            AllFeatures,
            Cta
        }
    }
</script>

<style scoped>

</style>
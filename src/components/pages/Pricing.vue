<template>
    <div>
<TopPricing></TopPricing>
<PricingPlans></PricingPlans>
<Cta></Cta>
    </div>
</template>

<script>
import TopPricing from '../TopPricing.vue'
import PricingPlans from '../PricingPlans.vue'
import Cta from '../Cta.vue'
    export default {
        name: 'Pricing',
        components: {
            TopPricing, 
            PricingPlans,
            Cta
            
        }
    }
</script>

<style scoped>

</style>
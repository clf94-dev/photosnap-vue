<template>
    <div>
<TopStories></TopStories>
<AllStories></AllStories>
    </div>
</template>

<script>
import TopStories from '../TopStories.vue'
import AllStories from '../AllStories.vue'
    export default {
       name: 'Stories',
       components: {
           TopStories,
           AllStories
       }
    }
</script>

<style scoped>

</style>
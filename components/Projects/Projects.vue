<template>
  <div class="bg-white pb-8">
    <div class="w-8/12 9:w-7/12 m-auto">
        <h3 class="pt-24 text-6xl text-black font-roboto">Projets</h3>
        <Card />
    </div>
  </div>
</template>

<script>
import Card from '~/components/Projects/Card.vue';
export default {
    components: { Card }
}
</script>

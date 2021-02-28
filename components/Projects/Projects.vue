<template>
  <div>
    <div class="bg-white pb-8">
      <div  class="w-11/12 4:w-9/12 8:w-8/12 9:w-7/12 m-auto">
          <h3 id="projects" class="mt-24 text-5xl 9:text-6xl text-black font-roboto">Projets</h3>
          <Card />
      </div>
    </div>
    <div class="bg-black pt-12">
      <Slider />
    </div>
  </div>
</template>

<script>
import Card from '~/components/Projects/Card.vue';
import Slider from '~/components/Slider/Slider.vue';

export default {
    components: { Card, Slider }
}
</script>

<template>
  <div class="flex flex-col h-screen bg-black">
      <Header />
      <div class="w-10/12 mx-auto flex flex-1 items-center justify-between">
        <Desk />
        <Information />
      </div>
      <Slider />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Desk from '~/components/Home/Desk.vue';
import Information from '~/components/Home/Information.vue';
import Slider from '~/components/Slider/Slider.vue';

export default {
    components: { Header, Information, Slider, Desk }
}
</script>

<style>

</style>
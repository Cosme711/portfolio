<template>
  <div class="flex flex-col h-screen bg-black">
      <Header />
      <div class="my-auto flex flex-col 8:flex-row items-center">
        <Desk class="w-full 8:w-2/3"/>
        <Information class="8:w-1/3"/>
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
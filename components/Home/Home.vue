<template>
  <div class="flex flex-col h-screen bg-black">
      <Header />
      <Information />
      <Slider />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Information from '~/components/Home/Information.vue';
import Slider from '~/components/Slider.vue';

export default {
    components: { Header, Information, Slider }
}
</script>

<style>

</style>
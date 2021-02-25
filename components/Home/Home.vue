<template>
  <div class="h-screen bg-black">
      <Header />
      <div class="flex justify-center">
        <Information />
      </div>
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
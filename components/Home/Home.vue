<template>
  <div class="flex flex-col h-screen bg-black">
      <Header />
      <div class="flex justify-center ml-140 mt-52 ">
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
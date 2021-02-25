<template>
  <div class="h-screen bg-black">
      <Header />
      <Information />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Information from '~/components/Home/Information.vue';

export default {
    components: { Header, Information }

}
</script>

<style>

</style>
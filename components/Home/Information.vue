<template>
  <div class="flex justify-center">
    <div class="font-bold text-white">
        <h1 class="text-4xl 8:text-5xl">Cosme Gressier</h1>
        <h2 class="text-lg 8:text-xl font-medium title">Développeur web Vuejs Freelance</h2>
        <div class="mt-6 flex items-center justify-center 3:justify-start">
            <a :href="cvData[0].cv[0].url" target="_blank" rel="noreferrer" class="w-140 h-45 flex items-center justify-center bg-white rounded-full">
                <img class="mr-2" src="~/assets/icons/CV_Logo.svg" height="23" width="30" alt="CV Logo">
                <p class="text-2xl text-purple">CV</p>
            </a>
            <a @click="goTo" class="ml-4 w-140 h-45 flex items-center justify-center bg-purple rounded-full cursor-pointer">
                <p class="text-xl">Projects</p>
            </a>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  mounted: function() {
    this.$store.dispatch('getCvData')
  },
  computed: mapState({
    cvData: state => state.cvData
  }),
  methods: {
    goTo() {
      document.getElementById('projects').scrollIntoView({ behavior: "smooth" })
    }
  }
}
</script>

<style>
.title {
  word-spacing: 4px;
} 
</style>
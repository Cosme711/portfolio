<template>
  <div class="flex justify-center mt-auto pt-40 6:pt-0">
    <div class="6:ml-auto 6:mr-56 font-bold text-white">
        <h1 class="text-4xl 8:text-5xl">Cosme Gressier</h1>
        <h2 class="text-lg 8:text-xl font-medium title">Développeur web Vuejs Freelance</h2>
        <div class="mt-6 flex items-center justify-center 3:justify-start">
            <a :href="cvData[0].cv[0].url" target="_blank" class="w-140 h-45 flex items-center justify-center bg-white rounded-full">
                <img class="mr-2" src="~/assets/icons/CV_Logo.svg" height="23" width="30" alt="CV Logo">
                <p class="text-2xl text-purple">CV</p>
            </a>
            <router-link :to="{ path: '/', hash: 'projects'}" @click.native="handleScroll" class="ml-4 w-140 h-45 flex items-center justify-center bg-purple rounded-full">
                <p class="text-xl">Projects</p>
            </router-link>
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
    handleScroll() {
    if (this.$route.hash) {
      const anchor = document.querySelector(`#projects`)

      // Check if the anchor has been found
      if (anchor) {
        window.scrollTo({
          // Scroll so that the anchor is at the top of the view
          top: anchor.getBoundingClientRect().top + window.pageYOffset
        })
      }
    }
  }
  }
}
</script>

<style>
.title {
  word-spacing: 4px;
} 
</style>
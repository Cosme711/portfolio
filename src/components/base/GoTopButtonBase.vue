<template>
  <Transition name="fade">
    <div
      v-if="isScrolled"
      class="fixed bottom-6 right-6 w-14 h-14 bg-purple rounded-full flex justify-center items-center cursor-pointer"
      @click="goTop"
    >
      <icon-base name="arrow" size="w-6 h-6" color="white">
        <arrow-icon />
      </icon-base>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
  import { onBeforeUnmount, onMounted, ref } from 'vue'

  const isScrolled = ref(false)

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  function handleScroll() {
    if (window.scrollY > 0) {
      isScrolled.value = true
    } else {
      isScrolled.value = false
    }
  }

  function goTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>

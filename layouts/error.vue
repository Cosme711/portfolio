<template>
    <div class="bg-black h-screen text-white flex justify-center items-center">
        <div>
            <h1 v-if="error.statusCode === 404" class="text-4xl">Page not found</h1>
            <h1 v-else class="text-4xl">An error occurred</h1>
            <NuxtLink v-if="error.statusCode === 404" to="/" class="mt-4 w-140 h-45 flex items-center justify-center bg-purple rounded-full cursor-pointer font-semibold text-xl uppercase">Home</NuxtLink>
            <a v-else @click="reload" class="mt-4 w-160 h-45 flex items-center justify-center bg-purple rounded-full cursor-pointer font-semibold text-xl uppercase">Try again</a>
        </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error',
    methods: {
        reload() {
            window.location.reload()
        }
    }
  }
</script>
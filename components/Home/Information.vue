<template>
  <div class="flex justify-center mt-auto pt-40 6:pt-0">
    <div class="6:ml-auto 6:mr-56 font-bold text-white">
        <h1 class="text-4xl 8:text-5xl">Cosme Gressier</h1>
        <h2 class="text-lg 8:text-xl font-medium">Développeur web Vuejs Freelance</h2>
        <div class="mt-6 flex items-center justify-center 3:justify-start">
            <a href="" class="w-140 h-45 flex items-center justify-center bg-white rounded-full">
                <img class="mr-2" src="~/assets/icons/CV_Logo.svg" height="23" width="30" alt="CV Logo">
                <p class="text-2xl text-purple">CV</p>
            </a>
            <router-link class="ml-4 w-140 h-45 flex items-center justify-center bg-purple rounded-full" to="/">
                <p class="text-xl">Projects</p>
            </router-link>
        </div>
    </div>
  </div>
</template>

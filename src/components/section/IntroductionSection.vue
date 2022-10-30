<template>
  <div class="flex flex-col min-h-screen pb-10 text-white bg-black">
    <!-- Header -->
    <header
      class="flex items-center justify-between py-10 pl-0 pr-6 sm:pl-10 sm:pr-20"
    >
      <logo-base>
        <main-logo />
      </logo-base>
      <div class="flex items-center ml-4 space-x-6 sm:space-x-16">
        <a
          href="https://www.malt.fr/profile/cosmegressier"
          target="_blank"
          rel="noreferrer"
        >
          <icon-base name="Malt">
            <malt-icon />
          </icon-base>
        </a>
        <a
          href="https://www.linkedin.com/in/cosme-gressier"
          target="_blank"
          rel="noreferrer"
        >
          <icon-base name="Linkedin">
            <linkedin-icon />
          </icon-base>
        </a>
        <a
          href="https://github.com/Cosme711"
          target="_blank"
          rel="noreferrer"
        >
          <icon-base name="Github">
            <github-icon />
          </icon-base>
        </a>
      </div>
    </header>
    <!-- Informations -->
    <div
      class="flex items-center justify-center flex-1 text-center md:text-left md:justify-end md:pr-40 xl:pr-60"
    >
      <div>
        <h1 class="text-3xl font-bold sm:text-5xl">Cosme Gressier</h1>
        <h2 class="text-sm sm:text-lg">Développeur web Vuejs Nuxt Freelance</h2>
        <div
          class="flex items-center justify-center mt-6 space-x-4 text-xl md:justify-start"
        >
          <a
            target="_blank"
            class="flex items-center justify-center px-8 py-1 font-bold bg-white rounded-full text-purple"
          >
            CV
          </a>
          <div
            class="flex items-center justify-center px-8 py-1 rounded-full cursor-pointer bg-purple"
          >
            <p class="uppercase">Projects</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

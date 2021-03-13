<template>
  <div class="bg-gray-white">
    <div class="w-10/12 7:w-9/12 8:w-8/12 9:w-7/12 m-auto">
      <h3 class="pt-24 text-4xl 5:text-5xl 9:text-6xl text-black font-roboto">Compétences</h3>
      <div class="mt-16 pb-32 grid 6:grid-cols-2 6:gap-16 7:gap-20 font-bold">
          <div>
            <skills-front-end />
            <skills-design class="mt-24"/>
          </div>
          <div class="6:mt-12 flex flex-col-reverse 6:flex-col">
            <skills-description class="mt-24 6:mt-0"/>
            <div>
              <skills-back-end class="mt-24"/>
              <skills-soft-skills class="mt-24"/>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style>
.shadows {
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
</style>
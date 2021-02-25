<template>
  <div class="bg-gray-white">
    <div class="w-7/12 m-auto">
      <h3 class="pt-24 text-6xl text-black font-roboto">Compétences</h3>
      <div class="mt-16 grid grid-cols-2 gap-20 font-bold">
          <div>
            <FrontEnd />
            <Design  class="mt-12"/>
          </div>
          <div class="mt-12">
            <Description />
            <BackEnd class="mt-12"/>
            <SoftSkills class="mt-12"/>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import FrontEnd from '~/components/Skills/FrontEnd.vue'
import Design from '~/components/Skills/Design.vue'
import Description from '~/components/Skills/Description.vue'
import BackEnd from '~/components/Skills/BackEnd.vue'
import SoftSkills from '~/components/Skills/SoftSkills.vue'

export default {
    components: { FrontEnd, Description, Design, BackEnd, SoftSkills }

}
</script>

<style>

</style>
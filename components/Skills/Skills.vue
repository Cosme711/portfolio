<template>
  <div class="bg-gray-white">
    <div class="w-9/12 m-auto">
      <h3 class="pt-24 text-5xl text-black font-roboto">Compétences</h3>
      <div class="mt-16 grid grid-cols-2 gap-20 font-bold">
          <div>
            <FrontEnd />
            <Design  class="mt-12"/>
          </div>
          <div>
            <Description />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import FrontEnd from '~/components/Skills/FrontEnd.vue'
import Design from '~/components/Skills/Design.vue'
import Description from '~/components/Skills/Description.vue'

export default {
    components: { FrontEnd, Description, Design }

}
</script>

<style>

</style>
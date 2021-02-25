<template>
    <div class="my-10 grid grid-cols-2 grid-rows-2 gap-24">
        <div v-for="project in projectData" :key="project.id">
            <a :href="project.link" target="_blank">
                <div class="relative">
                    <img class="rounded-md" :src="project.screenshot[0].url" :alt="project.alt">
                    <div class="absolute bottom-0 pb-10 pl-10 text-white font-ubuntu">
                        <p class="text-3xl font-bold">{{ project.title }}</p>
                        <p class="text-lg">{{ project.description }}</p>
                    </div>
                </div>
            </a>
            <div class="mt-3 flex items-center justify-between">
                <div>
                    <a href="" class="px-5 py-2 inline-flex items-center bg-purple rounded-full">
                        <img src="~/assets/icons/Github_Logo.svg" class="w-5" alt="">
                        <p class="text-lg ml-3 text-white font-ubuntu ">Github</p>
                    </a>
                </div>
                <div class="flex items-center text-gray">
                    <p class="px-2" v-for="hashtag in project.hashtag" :key="hashtag.id">
                        {{ hashtag }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    mounted: function() {
        this.$store.dispatch('getProjectData')
    },
    computed: mapState({
        projectData: state => state.projectData
    }),
}
</script>
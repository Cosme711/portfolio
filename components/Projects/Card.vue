<template>
    <div class="my-10 7:pt-10 8:pt-0 grid 8:grid-cols-2 grid-rows-2 gap-16 7:gap-20 justify-center">
        <div v-for="project in projectData" :key="project.id" class="max-w-500">
            <a :href="project.link" target="_blank" rel="noreferrer">
                <div class="relative">
                    <img 
                        :src="project.screenshot[0].formats.small.url" 
                        :alt="project.alt"
                        sizes="(min-width: 450px) 245px, 500px"
                        class="rounded-md"
                        width="500px"
                        height="281px"
                    >
                    <div class="absolute bottom-0 pb-10 pl-6 1:pl-10 text-white font-ubuntu">
                        <p class="text-xl 1:text-2xl 3:text-3xl font-bold">{{ project.title }}</p>
                        <p class="text-sm 1:text-base 3:text-lg">{{ project.description }}</p>
                    </div>
                </div>
            </a>
            <div class="mt-3 flex items-center justify-between">
                <div>
                    <a class="px-3 3:px-5 py-2 inline-flex items-center bg-purple rounded-full" :href="project.github" target="_blank" rel="noreferrer">
                        <img src="~/assets/icons/Github_Logo.svg" class="w-5" alt="Github Logo" width="40" height="33">
                        <p class="text-sm 3:text-lg ml-1 3:ml-3 text-white font-ubuntu ">Github</p>
                    </a>
                </div>
                <div class="text-sm 6:text-base 8:text-sm flex items-center text-gray">
                    <p class="px-1 3:px-2" v-for="hashtag in project.hashtag" :key="hashtag.id">
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
    methods: {
        test() {
            console.log(this.projectData[0].screenshot[0].formats.small.url)
        }
    }
}
</script>

<!-- :srcset="project.screenshot[0].formats.small.url" -->

<!-- :srcset="`${project.screenshot[0].formats.small.url} 500w, ${project.screenshot[0].formats.medium.url} 750w`"
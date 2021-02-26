<template>
  <div class="mt-auto pb-12">
    <div class="mr-24 mb-10 flex justify-end text-white">
        <div @click="slidePrev" class="mr-8 select-none rotate-90">
            <img src="~/assets/icons/Arrow_Logo.svg" class="cursor-pointer transform rotate-180" alt="">
        </div>
        <div @click="slideNext" class="select-none">
            <img src="~/assets/icons/Arrow_Logo.svg" class="cursor-pointer" alt="">
        </div>
    </div>
    <Hooper style="height: auto" class="outline-none" ref="slider" :settings="hooperSettings">
        <Slide v-for="slide in sliderData" :key="slide.id">
            <a :href="slide.link" target="_blank" @click="clickSlide">
                <img :src="slide.screenshot[0].url" :alt="slide.alt" class="rounded">
            </a>
        </Slide>
    </Hooper>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    components: { Hooper, Slide },
    computed: mapState({
        sliderData: state => state.sliderData
    }),
    data() {
        return {
            hooperSettings: {
                itemsToShow: 2.5,
                infiniteScroll: true,
                centerMode: true,
                breakpoints: {
                    1200: {
                        itemsToShow: 4
                    }
                }
            }
        }
    },
    methods: {
        slidePrev() {
            this.$refs.slider.slidePrev()
        },
        slideNext() {
            this.$refs.slider.slideNext()
        },
        clickSlide(event) {
            if (this.$refs.slider.isSliding) {
                event.preventDefault()
            }
        }
    }
}
</script>

<style>
.hooper-slide {
  padding: 0 5px;
}
</style>

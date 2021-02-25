<template>
  <div class="mt-auto mb-16">
    <div class="mr-24 mb-10 flex justify-end text-white">
        <div @click="slidePrev" class="mr-8 select-none rotate-90">
            <img src="~/assets/icons/Arrow_Logo.svg" class="cursor-pointer transform rotate-180" alt="">
        </div>
        <div @click="slideNext" class="select-none">
            <img src="~/assets/icons/Arrow_Logo.svg" class="cursor-pointer" alt="">
        </div>
    </div>
    <Hooper style="height: 236px" class="outline-none" ref="slider" :settings="hooperSettings">
        <Slide v-for="slide in sliderData" :key="slide.id">
            <a :href="slide.link" target="_blank" @click="preventDefault">
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
                itemsToShow: 2,
                infiniteScroll: true,
                touchDrag: false,
                centerMode: true,
                breakpoints: {
                    1000: {
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
        preventDefault(e) {
            e.preventDefault()
        }
    }
}
</script>

<style>
.hooper-slide {
  padding: 0 5px;
}
</style>

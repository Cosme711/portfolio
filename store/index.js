import Service from '@/services/Service.js'

export const state = () => ({
    sliderData: []
})

export const mutations = {
    SAVE_SLIDER_DATA(state, data) {
        state.sliderData = data
    }
}

export const actions = {
    getSliderData({ commit }) {
        return Service.getData().then(response => {
            commit("SAVE_SLIDER_DATA", response.data)
        })
    }
}
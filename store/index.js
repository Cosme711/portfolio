import Service from '@/services/Service.js'

export const state = () => ({
    sliderData: [],
    projectData: [],
    cvData: [
        {
            'cv': [
                {
                    'url': null
                }
            ]
        }
    ]
})

export const mutations = {
    SAVE_SLIDER_DATA(state, data) {
        state.sliderData = data
    },
    SAVE_PROJECT_DATA(state, data) {
        state.projectData = data
    },
    SAVE_CV_DATA(state, data) {
        state.cvData = data
    }
}

export const actions = {
    getSliderData({ commit }) {
        return Service.getSliderData().then(response => {
            commit("SAVE_SLIDER_DATA", response.data)
        })
    },
    getProjectData({ commit }) {
        return Service.getProjectData().then(response => {
            commit("SAVE_PROJECT_DATA", response.data)
        })
    },
    getCvData({ commit }) {
        return Service.getCvData().then(response => {
            commit("SAVE_CV_DATA", response.data)
        })
    }
}
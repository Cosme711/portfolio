<template>
  <div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch('getSliderData')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again'
      })
    }
  },
  computed: mapState({
    sliderData: state => state.sliderData,
  }),
}
</script>

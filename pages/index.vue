<template>
  <div>
    <Home />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
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
  }
}
</script>

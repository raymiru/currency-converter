<template>
  <div id="app">
    <layout />
  </div>
</template>

<script>
import Layout from './layouts/Layout'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: { Layout },
  methods: {
    ...mapActions({ initApp: 'INIT_APP' })
  },
  mounted() {
    this.initApp()
  }
}
</script>

<style lang="scss">
#app {
  font-family: var(--app-main-font-family);
  font-size: var(--app-main-font-size);
}
</style>

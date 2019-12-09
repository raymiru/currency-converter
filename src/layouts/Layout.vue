<template>
  <div class="layout-container">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/core/Header/Header'
export default {
  name: 'Layout',
  components: { AppHeader }
}
</script>

<style lang="scss">
.layout-container {
  display: flex;
  flex-direction: column;
}

.layout-container > header {
  top: 0;
  position: fixed;
}

.layout-container > main {
  margin-top: 54px;
}
</style>

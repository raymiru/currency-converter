<template>
  <header class="header-wrapper">
    <div class="header-container">
      <main-navigation />
      <currency-selector />
    </div>
  </header>
</template>

<script>
import MainNavigation from '@/components/core/Header/MainNavigation'
import CurrencySelector from '@/components/core/Header/CurrencySelector'
export default {
  name: 'AppHeader',
  components: { CurrencySelector, MainNavigation }
}
</script>

<style lang="scss">
.header-wrapper {
  background-color: #1f1f23;
  width: 100%;
}

.header-container {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  color: white;
  max-width: var(--app-main-max-width);
  width: 100%;
  margin: auto;
  height: 54px;

  .nav-container {
    flex: 5;
  }

  .currency-selector-container {
    flex: 1;
    margin-right: var(--app-main-left-gap);
    min-width: 90px;
  }

  > div:first-child {
    padding-left: var(--app-main-left-gap);
  }
}
</style>

<template>
  <div class="nav-container">
    <router-link class="nav-link" to="/" exact>Home</router-link>
    <router-link class="nav-link" to="/converter">Converter</router-link>
  </div>
</template>

<script>
export default {
  name: 'MainNavigation'
}
</script>

<style lang="scss">
.router-link-active {
  color: #89a3ff;
}
.nav-container {
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;

  .nav-link {
    font-weight: 500;
    text-decoration: none;
    color: #efeff1;
    margin-right: 20px;

    &:hover,
    &.router-link-active,
    &.router-link-exact-active {
      color: indianred;
      cursor: pointer;
    }
  }
}
</style>

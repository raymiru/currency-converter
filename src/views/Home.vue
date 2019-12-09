<template>
  <main class="page-container">
    <div class="currencies-table-container">
      <div class="currencies-table-header">
        <div class="table-currency-title">Currency</div>
        <div class="table-rate-title">Rate</div>
        <div class="table-name-title">Name</div>
        <div class="table-favorite-title">Favorite</div>
      </div>
      <div class="currencies-items-container">
        <table-currency-item
          v-for="(currency, index) in currencies"
          :key="index"
          :index="index"
          :symbol="currency.symbol"
          :name="currency.name"
          :favorite_default="currency.favorite"
        >
          {{ currency }}
        </table-currency-item>
      </div>
    </div>
  </main>
</template>

<script>
import TableCurrencyItem from '@/components/core/pages/TableCurrencyItem'
export default {
  name: 'Home',
  components: { TableCurrencyItem },
  computed: {
    currencies() {
      return this.$store.getters.currencies
    }
  }
}
</script>

<style lang="scss">
.page-container {
  max-width: var(--app-main-max-width);
  width: 100%;
  margin: auto;
}

.currencies-table-container {
  margin-top: 15px;
  box-sizing: border-box;
  border-left: 1px solid #d9e5ea;
  border-right: 1px solid #d9e5ea;
  border-radius: 3px;
}

.currencies-table-header {
  padding-left: var(--app-main-left-gap);
  background-color: #2c2c2c;
  color: white;
  display: flex;
  flex-direction: row;

  .table-currency-title {
    flex: 2;
  }

  .table-rate-title {
    flex: 2;
  }

  .table-name-title {
    flex: 4;
  }

  .table-favorite-title {
    flex: 1;
  }

  > div {
    padding: 10px 10px;
    box-sizing: border-box;

  }

  > div:first-child {
    padding-left: 0;
  }
}
</style>

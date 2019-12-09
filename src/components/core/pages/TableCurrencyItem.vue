<template>
  <div class="table-currency-item-container">
    <div class="item-symbol">
      <span>{{ symbol }}</span>
    </div>
    <div class="item-rate">
      <span>{{ rate || 1 }}</span>
    </div>
    <div class="item-name">
      <span>{{ name }}</span>
    </div>
    <div class="item-favorite">
      <svg
        @click="change"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          v-if="!fav"
          d="M4.84912 23.4335C4.7602 23.4335 4.67127 23.406 4.59652 23.3515C4.46421 23.2552 4.39805 23.0924 4.42598 22.9313L5.75384 15.1909L0.130058 9.70978C0.0132094 9.59551 -0.0288906 9.42496 0.0213717 9.26987C0.0720635 9.11436 0.206526 9.00095 0.368482 8.97732L8.1398 7.84793L11.6156 0.80563C11.6878 0.65871 11.8373 0.565918 12.0005 0.565918C12.1642 0.565918 12.3137 0.65871 12.3855 0.80563L15.8608 7.84793L23.6326 8.97732C23.7945 9.00095 23.9286 9.11393 23.9797 9.26987C24.03 9.42496 23.9883 9.59594 23.871 9.70978L18.2472 15.1918L19.5747 22.9317C19.6022 23.0928 19.536 23.2557 19.4041 23.3519C19.2718 23.449 19.0961 23.4614 18.9513 23.3845L12.0005 19.7304L5.04888 23.3845C4.98616 23.4172 4.91743 23.4335 4.84912 23.4335ZM1.35311 9.70204L6.51508 14.7339C6.61603 14.8322 6.66243 14.9749 6.63837 15.114L5.41962 22.2186L11.8008 18.8644C11.9258 18.7982 12.0749 18.7982 12.2007 18.8644L18.581 22.2186L17.3627 15.114C17.3386 14.9749 17.385 14.8327 17.486 14.7339L22.648 9.70204L15.5146 8.66544C15.3745 8.64525 15.2538 8.55718 15.1911 8.43045L12.0005 1.96682L8.80996 8.43088C8.74724 8.55761 8.62652 8.64568 8.48648 8.66587L1.35311 9.70204Z"
          fill="black"
        />
        <path
          v-if="fav"
          d="M12.0002 0.317871L15.708 8.21809L24 9.48529L17.9999 15.6344L19.4163 24.3179L12.0002 20.2183L4.58373 24.3179L6.00011 15.6344L0 9.48529L8.29198 8.21809L12.0002 0.317871Z"
          fill="#EFCE4A"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableCurrencyItem',

  props: {
    symbol: String,
    name: String,
    index: Number
  },
  methods: {
    change() {
      this.$store.dispatch('CHANGE_CURRENCIES', this.index)
    }
  },
  computed: {
    fav() {
      return this.$store.getters.currencies[this.index].favorite
    },

    rate() {
      return this.$store.getters.rates[this.symbol]
    }
  }
}
</script>

<style lang="scss">
.fav {
  background-color: red;
}

.table-currency-item-container {
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  padding-left: var(--app-main-left-gap);

  &:hover {
    background-color: var(--app-main-item-bg-hover);
    transition: 0.1s linear;
  }

  .item-symbol {
    flex: 2;
  }

  .item-name {
    flex: 4;
  }

  .item-rate {
    flex: 2;
  }

  .item-favorite {
    flex: 1;
  }

  .item-favorite > svg {
    cursor: pointer;
  }

  > div {
    box-sizing: border-box;
    padding: 10px 10px;

  }

  > div:first-child {
    padding-left: 0;
  }
}
</style>

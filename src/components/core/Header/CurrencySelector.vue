<template>
  <div class="currency-selector-container">
    <div class="input-wrapper" @click="baseClear">
      <input
        ref="input"
        @focusout="focusOut"
        class="currency-selector-input"
        type="text"
        v-model="baseCurrency"
      />
      <svg
        v-if="!showDropdown"
        width="24"
        height="24"
        viewBox="0 -2 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6376 16.0461C11.832 16.2405 12.0792 16.2405 12.2712 16.0461L22.4568 5.9541L23.76 7.2693L13.5792 17.3589C12.6648 18.2733 11.2464 18.2733 10.3296 17.3565L0.23999 7.2669L1.54799 5.9589L11.6376 16.0461Z"
          fill="black"
        />
      </svg>
    </div>
    <div
      @mouseover="dropdownOver = true"
      @mouseleave="dropdownOver = false"
      v-if="showDropdown"
      class="currency-selector-dropdown"
    >
      <span
        class="currency-item"
        @click="currencyChoose(currency.symbol)"
        v-for="currency in currencyKeys"
        :key="currency.symbol"
        >{{ currency.symbol }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrencySelector',
  data() {
    return {
      baseCurrency: this.$store.getters.baseCurrency,
      showDropdown: false,
      dropdownOver: false
    }
  },
  methods: {
    baseClear() {
      this.baseCurrency = ''
      this.$refs.input.focus()
    },

    focusOut() {
      if (!this.dropdownOver) {
        this.baseCurrency = this.$store.getters.baseCurrency
      }
    },
    currencyChoose(value) {
      console.log(value)
      this.baseCurrency = value
      this.dropdownOver = false
    }
  },
  computed: {
    currencyKeys() {
      return this.$store.getters.currencies.filter(currency =>
        currency.symbol.includes(this.baseCurrency.toUpperCase())
      )
    }
  },
  watch: {
    baseCurrency(value) {
      if (
        value.length === 3 &&
        this.$store.getters.currencies.filter(currency =>
          currency.symbol.includes(this.baseCurrency.toUpperCase())
        )
      ) {
        this.showDropdown = false
        this.$store.commit('SET_BASE_CURRENCY', value.toUpperCase())
        this.$store.dispatch('INIT_APP')
      } else {
        if (!this.showDropdown) this.showDropdown = true
      }
    }
  }
}
</script>

<style lang="scss">
.currency-selector-container {
  position: relative;
  display: flex;
  flex-direction: column;

  .input-wrapper {
    display: flex;
    margin: auto;
    background-color: white;
    border-radius: 3px;

    > svg {
      padding-right: 10px;
    }

    &:hover,
    &:focus {
      background-color: var(--app-main-item-bg-hover);
    }

    > input:focus {
      background-color: var(--app-main-item-bg-hover);
    }
  }

  .currency-selector-input {
    background-color: transparent;
    font-size: 16px;
    font-weight: 700;
    box-sizing: border-box;
    padding-left: 14px;
    padding-right: 10px;
    height: 28px;
    display: flex;
    width: 100%;
    outline: none;
    border-radius: 3px;
    border: none;
  }

  .currency-selector-dropdown {
    z-index: 2;
    background-color: white;
    color: black;
    box-sizing: border-box;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    position: absolute;
    top: 58px;
    display: flex;
    flex-direction: column;
    max-height: 500px;
    overflow-y: auto;

    > span:first-child {
      padding-top: 6px;
    }
    > span:last-child {
      padding-bottom: 6px;
    }

    > span {
      padding-left: 14px;
      padding-top: 3px;
      padding-bottom: 3px;
    }

    .currency-item {
      cursor: pointer;
    }

    .currency-item:hover {
      transition: 0.1s linear;
      background-color: var(--app-main-item-bg-hover);
    }
  }
}
</style>

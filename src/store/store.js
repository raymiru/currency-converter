import Vue from 'vue'
import Vuex from 'vuex'
import dataset from '@/config/dataset'
import { mergeWithFavorites, sortCurrencies } from '@/store/utils/merge'

Vue.use(Vuex)

const state = {
  baseCurrency: localStorage.getItem('baseCurrency') || 'RUB',
  currencies: {},
  rates: {}
}

export const getters = {
  baseCurrency(state) {
    return state.baseCurrency
  },

  currencies(state) {
    return state.currencies
  },

  rates(state) {
    return state.rates
  }
}

export const mutations = {
  /*
  Уставливаем начальные значения используемых валют и их полные названия
   */
  INIT_CURRENCIES(state, currencies) {
    const userData = JSON.parse(localStorage.getItem('currencies'))
    if (userData) state.currencies = sortCurrencies(userData)
    else state.currencies = mergeWithFavorites(currencies, null)
  },

  /*
  Установить значения используемых валют
   */
  SET_CURRENCIES(state, currencies) {
    state.currencies = sortCurrencies(currencies)
  },

  /*
  Изменить значение свойства favorite по индексу
   */
  SET_FAVORITE(state, index) {
    state.currencies[index].favorite = !state.currencies[index].favorite
    localStorage.setItem('currencies', JSON.stringify(state.currencies))
  },

  /*
  Устанавливаем базовую валюту приложения
   */
  SET_BASE_CURRENCY(state, base) {
    state.baseCurrency = base
    localStorage.setItem('baseCurrency', base)
  },

  /*
  Устанавливаем список валютных курсов
   */
  SET_RATES(state, { rates }) {
    state.rates = rates
  }
}

export const actions = {
  CHANGE_CURRENCIES({ getters, commit }, index) {
    commit('SET_FAVORITE', index)
    commit('SET_CURRENCIES', getters.currencies)
  },

  /*
Инициализация приложения
 */
  async INIT_APP({ dispatch, commit, getters }) {
    await dispatch('GET_CURRENCIES_FROM_API')
    commit('SET_BASE_CURRENCY', getters.baseCurrency)
    await dispatch('GET_RATES_FROM_API')
  },

  /*
  Получаем список валют, для инициализации работы приложения
   */
  async GET_CURRENCIES_FROM_API({ commit }) {
    const response = await fetch(`${dataset.host}${dataset.currencies}`)
    if (response.ok) commit('INIT_CURRENCIES', await response.json())
    else throw new Error('Ошибка при получении данных. GET - /currencies')
  },
  /*
  Получаем последние данные курсов валют по базовой валюте и инициируем мутацию
   */
  async GET_RATES_FROM_API({ commit, getters }) {
    const response = await fetch(
      `${dataset.host}${dataset.rates}?from=${getters.baseCurrency}`
    )
    if (response.ok) commit('SET_RATES', await response.json())
    else throw new Error('Ошибка при получении данных. GET - /latest')
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

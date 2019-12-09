import { mutations } from '../store'

describe('mutations', () => {
  it('should be correctly set base currency', () => {
    const base = 'rub'
    const state = {
      baseCurrency: ''
    }
    mutations.SET_BASE_CURRENCY(state, base)
    expect(state.baseCurrency).toBe(base)
  })

  it('should be correctly set list of currencies ', () => {
    const currencies = { RUB: 'Russian ruble' }
    const state = {
      currencies: {}
    }
    mutations.INIT_CURRENCIES(state, currencies)
    expect(state.currencies).toBe(currencies)
  })
})

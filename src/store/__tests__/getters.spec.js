import { getters } from '@/store/store'

describe('getters', () => {
  it('return currencies', () => {
    const state = {
      currencies: [{ symbol: 'RUB', name: 'Russian ruble', favorite: 'false' }]
    }
    const actual = getters.currencies(state)
    expect(actual).toEqual(state.currencies)
  })

  it('return base currency', () => {
    const state = {
      baseCurrency: 'rub'
    }
    const actual = getters.baseCurrency(state)
    expect(actual).toEqual(state.baseCurrency)
  })

  it('return rates', () => {
    const state = {
      rates: { RUB: 63 }
    }
    const actual = getters.rates(state)
    expect(actual).toEqual(state.rates)
  })
})

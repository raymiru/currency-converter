import { actions } from '../store'
import options from '../../config/options'

const dispatch = jest.fn()
const commit = jest.fn()

global.fetch = jest.fn(() => {
  return new Promise(resolve =>
    resolve({
      ok: true,
      json: () => new Promise(resolve1 => resolve1({}))
    })
  )
})

describe('actions', () => {
  it('init app', () => {
    actions.INIT_APP({ dispatch, commit })
    expect(dispatch).toHaveBeenCalledWith('GET_CURRENCIES_FROM_API')
    expect(commit).toHaveBeenCalledWith(
      'SET_BASE_CURRENCY',
      options.baseCurrency
    )
  })

  it('get list of currencies from api and commit mutation', async () => {
    await actions.GET_CURRENCIES_FROM_API({ commit })
    expect(commit).toHaveBeenCalledWith('SET_CURRENCIES', {})
  })

  it('get latest currencies rates', async () => {
    const getters = {
      base(state) {
        return state.base
      }
    }
    await actions.GET_RATES_FROM_API({ commit, getters })
    expect(commit).toHaveBeenCalledWith('SET_RATES', {})
  })
})

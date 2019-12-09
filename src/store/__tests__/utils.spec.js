import { mergeWithFavorites } from '@/store/utils/merge'

describe('store/utils', () => {
  it('should be return merged array and sorted by favorite property', () => {
    const obj = { AAA: 'Something', BBB: 'SDSDSDS' }
    const userData = [{ symbol: 'AAA', name: 'SOMETHING', favorite: true }]
    let mergedArray = mergeWithFavorites(obj, userData)
    console.log(mergedArray)
  })
})

export function mergeWithFavorites(currencies, userData) {
  // Получаем пользовательские данные
  return (
    Object.keys(currencies)
      // Мапим массив ключей объекта в общий массив
      .map((item, index) => {
        return {
          symbol: item,
          name: currencies[item],
          favorite: (() =>
            userData && userData[index] ? userData[index].favorite : false)()
        }
      })
      // сортируем по свойству favorite
      .sort((a, b) => {
        if (a.favorite > b.favorite) return -1
        else if (a.favorite === b.favorite) return 0
        else return 1
      })
  )
}

export function sortCurrencies(currencies) {
  const alphabetSort = currencies.sort((a, b) => {
    if (a.symbol < b.symbol) return -1
    else if (a.symbol === b.symbol) return 0
    else return 1
  })
  return alphabetSort.sort((a, b) => {
    if (a.favorite > b.favorite) return -1
    else if (a.favorite === b.favorite) return 0
    else return 1
  })
}

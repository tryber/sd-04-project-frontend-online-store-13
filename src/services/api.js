export async function getCategories() {
  await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then(response => response.json())
    .catch(err => console.log('getCategoriesAPI', err))
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!categoryId && query) {
    await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then(response => response.json())
      .catch(err => console.log('GetProductsFromQuery', err))
  }
  else if (!query && categoryId) {
    await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then(response => response.json())
      .catch(err => console.log('GetProductsFromCategory', err))
  } else {
      await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
        .then(response => response.json())
        .catch(err => console.log('getProductsFromCategoryAndQuery', err))
  }
}  


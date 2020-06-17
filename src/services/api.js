export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((data) => data.json())
    .catch((err) => console.log('getCategoriesAPI', err));
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!categoryId && query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then((data) => data.json())
      .catch((err) => console.log('GetProductsFromQuery', err));
  }
  else if (!query && categoryId) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((data) => data.json())
      .catch((err) => console.log('GetProductsFromCategory', err));
  } else {
      return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=
        ${categoryId}&q=
        ${query}`)
        .then((data) => data.json())
        .catch((err) => console.log('getProductsFromCategoryAndQuery', err));
  }
}

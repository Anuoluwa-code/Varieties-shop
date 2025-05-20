export const filterByCategory = (products, category) => {
  if (category === 'All') return products;
  return products.filter(product => product.category === category);
};
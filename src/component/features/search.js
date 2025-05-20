export const filterBySearch = (products, searchTerm) => {
  return products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
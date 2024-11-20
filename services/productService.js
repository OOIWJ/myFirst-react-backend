const productData = require('../data/productData');

async function getAllProducts() {
  return await productData.getAllProducts();
}

async function getProductById(id) {
  const product = await productData.getProductById(id);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
}

module.exports = {
  getAllProducts,
  getProductById
};
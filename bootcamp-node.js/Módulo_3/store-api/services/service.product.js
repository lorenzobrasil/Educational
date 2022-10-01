import repositoryProduct from "../repositories/repository.product.js";
import repositorySupplier from "../repositories/repository.supplier.js";

async function createProduct(product) {
  if (await repositorySupplier.getSupplier(product.supplier_id)) {
    return await repositoryProduct.insertProduct(product);
  } else {
    throw new Error("Supplier não cadastrado");
  }
}

async function getProducts() {
  return await repositoryProduct.getProducts();
}

async function getProduct(id) {
  return await repositoryProduct.getProduct(id);
}

async function deleteProduct(id) {
  return await repositoryProduct.deleteProduct(id);
}

async function updateProduct(product) {
  if (await repositorySupplier.getSupplier(product.supplier_id)) {
    return await repositoryProduct.updateProduct(product);
  } else {
    throw new Error("Supplier não cadastrado");
  }
}
export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};

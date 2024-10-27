import repositorySale from "../repositories/repository.sale.js";
import repositoryClient from "../repositories/repository.client.js";
import repositoryProduct from "../repositories/repository.product.js";

async function createSale(sale) {
  if (!(await repositoryClient.getClient(sale.client_id))) {
    throw new Error("Client ID não informado ou não encontrado");
  }

  const product = await repositoryProduct.getProduct(sale.product_id);

  if (!product) {
    throw new Error("Product ID não informado ou não encontrado");
  } else if (product.stock > 0) {
    await repositorySale.insertSale(sale);
    const newProductData = await repositoryProduct.getProduct(sale.product_id);
    newProductData.stock--;
    await repositoryProduct.updateProduct(newProductData);
    return sale;
  } else {
    throw new Error("O produto informado não possui estoque");
  }
}

async function getSales(product_id) {
  if (product_id) {
    return await repositorySale.getSalesByProductId(product_id);
  } else {
    return await repositorySale.getSales();
  }
}

async function getSale(id) {
  return await repositorySale.getSale(id);
}

async function deleteSale(id) {
  const sale = await repositorySale.getSale(id);
  if (sale) {
    const product = await repositoryProduct.getProduct(sale.product_id);
    product.stock++;
    await repositoryProduct.updateProduct(product);
    return await repositorySale.deleteSale(id);
  } else {
    throw new Error("O ID da sale informada não existe");
  }
}

async function updateSale(sale) {
  if (!(await repositoryClient.getClient(sale.client_id))) {
    throw new Error("Client ID não informado ou não encontrado");
  } else if (!(await repositoryProduct.getProduct(sale.product_id))) {
    throw new Error("Product ID não informado ou não encontrado");
  } else {
    return await repositorySale.updateSale(sale);
  }
}

export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale,
};

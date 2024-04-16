import serviceProduct from "../services/service.product.js";

async function createProduct(req, res, next) {
  try {
    const product = req.body;
    switch (product) {
      case !product.name:
        throw new Error("Name é campo obrigatório");
      case !product.description:
        throw new Error("Description é campo obrigatório");
      case !product.value:
        throw new Error("Value é campo obrigatório");
      case !product.stock:
        throw new Error("Stock é campo obrigatório");
      case !product.supplier_id:
        throw new Error("Supplier_id é campo obrigatório");
      default:
        res.send(await serviceProduct.createProduct(product));
        logger.info(`POST /product - ${product}`);
        break;
    }
  } catch (err) {
    next(err);
  }
}

async function getProducts(req, res, next) {
  try {
    res.send(await serviceProduct.getProducts());
    logger.info("GET /product");
  } catch (err) {
    next(err);
  }
}

async function getProduct(req, res, next) {
  try {
    res.send(await serviceProduct.getProduct(req.params.id));
    logger.info("GET /product/:id");
  } catch (err) {
    next(err);
  }
}

async function deleteProduct(req, res, next) {
  try {
    serviceProduct.deleteProduct(req.params.id);
    res.end();
    logger.info("DELETE /product/:id");
  } catch (err) {
    next(err);
  }
}

async function updateProduct(req, res, next) {
  try {
    let product = req.body;
    switch (product) {
      case !product.name:
        throw new Error("Name é campo obrigatório");
      case !product.description:
        throw new Error("Description é campo obrigatório");
      case !product.value:
        throw new Error("Value é campo obrigatório");
      case !product.stock:
        throw new Error("Stock é campo obrigatório");
      case !product.supplier_id:
        throw new Error("Supplier_id é campo obrigatório");
      case !product.product_id:
        throw new Error("Product_id é campo obrigatório");
      default:
        product = {
          name: req.body.name,
          description: req.body.description,
          value: req.body.value,
          stock: req.body.stock,
          supplier_id: req.body.supplier_id,
          product_id: req.body.product_id,
        };
        res.send(await serviceProduct.updateProduct(product));
        logger.info(`UPDATE /product - ${JSON.stringify(product)}`);
        break;
    }
  } catch (err) {
    next(err);
  }
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};

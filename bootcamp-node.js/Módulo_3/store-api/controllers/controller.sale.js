import serviceSale from "../services/service.sale.js";

async function createSale(req, res, next) {
  try {
    const sale = req.body;
    switch (sale) {
      case !sale.value:
        throw new Error("Value é campo obrigatório");
      case !sale.date:
        throw new Error("Date é campo obrigatório");
      case !sale.client_id:
        throw new Error("Client ID é campo obrigatório");
      case !sale.product_id:
        throw new Error("Product ID é campo obrigatório");
      default:
        res.send(await serviceSale.createSale(sale));
        logger.info(`POST /sale - ${sale}`);
        break;
    }
  } catch (err) {
    next(err);
  }
}

async function getSales(req, res, next) {
  try {
    res.send(await serviceSale.getSales(req.query.product_id));
    logger.info("GET /sale");
  } catch (err) {
    next(err);
  }
}

async function getSale(req, res, next) {
  try {
    res.send(await serviceSale.getSale(req.params.id));
    logger.info("GET /sale/:id");
  } catch (err) {
    next(err);
  }
}

async function deleteSale(req, res, next) {
  try {
    serviceSale.deleteSale(req.params.id);
    res.end();
    logger.info("DELETE /sale/:id");
  } catch (err) {
    next(err);
  }
}

async function updateSale(req, res, next) {
  try {
    let sale = req.body;
    switch (sale) {
      case !sale.sale_id:
        throw new Error("Sale ID é campo obrigatório");
      case !sale.value:
        throw new Error("Value é campo obrigatório");
      case !sale.date:
        throw new Error("Date é campo obrigatório");
      case !sale.client_id:
        throw new Error("Client ID é campo obrigatório");
      case !sale.product_id:
        throw new Error("Product ID é campo obrigatório");
      default:
        sale = {
          sale_id: req.body.sale_id,
          value: req.body.value,
          date: req.body.date,
          client_id: req.body.client_id,
          product_id: req.body.product_id,
        };
        res.send(await serviceSale.updateSale(sale));
        logger.info(`UPDATE /sale - ${JSON.stringify(sale)}`);
        break;
    }
  } catch (err) {
    next(err);
  }
}

export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale,
};

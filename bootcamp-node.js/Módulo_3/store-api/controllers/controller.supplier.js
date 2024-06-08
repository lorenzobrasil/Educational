import serviceSupplier from "../services/service.supplier.js";

async function createSupplier(req, res, next) {
  try {
    const supplier = req.body;
    switch (supplier) {
      case !supplier.name:
        throw new Error("Name é campo obrigatório");
      case !supplier.cnpj:
        throw new Error("CNPJ é campo obrigatório");
      case !supplier.phone:
        throw new Error("Phone é campo obrigatório");
      case !supplier.email:
        throw new Error("Email é campo obrigatório");
      case !supplier.address:
        throw new Error("Address é campo obrigatório");
      default:
        res.send(await serviceSupplier.createSupplier(supplier));
        logger.info(`POST /supplier - ${supplier}`);
        break;
    }
  } catch (err) {
    next(err);
  }
}

async function getSuppliers(req, res, next) {
  try {
    res.send(await serviceSupplier.getSuppliers());
    logger.info("GET /supplier");
  } catch (err) {
    next(err);
  }
}

async function getSupplier(req, res, next) {
  try {
    res.send(await serviceSupplier.getSupplier(req.params.id));
    logger.info("GET /supplier/:id");
  } catch (err) {
    next(err);
  }
}

async function deleteSupplier(req, res, next) {
  try {
    serviceSupplier.deleteSupplier(req.params.id);
    res.end();
    logger.info("DELETE /supplier/:id");
  } catch (err) {
    next(err);
  }
}

async function updateSupplier(req, res, next) {
  try {
    let supplier = req.body;
    switch (supplier) {
      case !supplier.name:
        throw new Error("Name é campo obrigatório");
      case !supplier.cnpj:
        throw new Error("CNPJ é campo obrigatório");
      case !supplier.phone:
        throw new Error("Phone é campo obrigatório");
      case !supplier.email:
        throw new Error("Email é campo obrigatório");
      case !supplier.address:
        throw new Error("Address é campo obrigatório");
      case !supplier.supplier_id:
        throw new Error("Supplier_id é campo obrigatório");
      default:
        supplier = {
          name: req.body.name,
          cnpj: req.body.cnpj,
          phone: req.body.phone,
          email: req.body.email,
          address: req.body.address,
          supplier_id: req.body.supplier_id,
        };
        res.send(await serviceSupplier.updateSupplier(supplier));
        logger.info(`UPDATE /supplier - ${JSON.stringify(supplier)}`);
        break;
    }
  } catch (err) {
    next(err);
  }
}

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier,
};

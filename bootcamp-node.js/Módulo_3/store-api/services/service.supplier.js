import repositorySupplier from "../repositories/repository.supplier.js";

async function createSupplier(supplier) {
  return await repositorySupplier.insertSupplier(supplier);
}

async function getSuppliers() {
  return await repositorySupplier.getSuppliers();
}

async function getSupplier(id) {
  return await repositorySupplier.getSupplier(id);
}

async function deleteSupplier(id) {
  return await repositorySupplier.deleteSupplier(id);
}

async function updateSupplier(supplier) {
  return await repositorySupplier.updateSupplier(supplier);
}
export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier,
};

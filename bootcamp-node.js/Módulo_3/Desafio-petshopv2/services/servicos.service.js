import servicoRepository from "../repositories/servicos.repository.js";

async function insertService(servico) {
  return await servicoRepository.insertService(servico);
}

async function getServices() {
  return await servicoRepository.getServices();
}

async function getServiceByProprietaryId(proprietaryId) {
  return await servicoRepository.getServiceByProprietaryId(proprietaryId);
}

export default {
  insertService,
  getServices,
  getServiceByProprietaryId,
};

import proprietarioRepository from "../repositories/proprietarios.repository.js";

async function insertProprietario(proprietario) {
  return await proprietarioRepository.insertProprietario(proprietario);
}

async function updateProprietario(proprietario) {
  return await proprietarioRepository.updateProprietario(proprietario);
}

async function deleteProprietario(id) {
  return await proprietarioRepository.deleteProprietario(id);
}

async function getProprietarios() {
  return await proprietarioRepository.getProprietarios();
}

async function getProprietario(id) {
  return await proprietarioRepository.getProprietario(id);
}

export default {
  insertProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario,
};

import proprietarioModel from "../models/proprietarios.model.js";

async function insertProprietario(proprietario) {
  try {
    return await proprietarioModel.create(proprietario);
  } catch (err) {
    throw err;
  }
}

async function updateProprietario(proprietario) {
  try {
    return await proprietarioModel.update(proprietario, {
      where: { proprietarioId: proprietario.proprietarioId },
    });
  } catch (err) {
    throw err;
  }
}

async function deleteProprietario(id) {
  try {
    return await proprietarioModel.destroy({
      where: { proprietarioId: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getProprietarios() {
  try {
    return await proprietarioModel.findAll();
  } catch (err) {
    throw err;
  }
}

async function getProprietario(id) {
  try {
    return await proprietarioModel.findByPk(id);
  } catch (err) {
    throw err;
  }
}

export default {
  insertProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario,
};

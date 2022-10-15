import Servico from "../models/servicos.model.js";
import Animal from "../models/animais.model.js";

async function insertService(service) {
  try {
    return await Servico.create(service);
  } catch (err) {
    throw err;
  }
}

async function getServices() {
  try {
    return await Servico.findAll();
  } catch (err) {
    throw err;
  }
}

async function getServiceByProprietaryId(proprietaryId) {
  try {
    const animais = await Animal.findAll({
      where: {
        proprietario_id: proprietaryId,
      },
    });

    const resObj = {};

    for (var i in animais) {
      resObj["servicos-" + animais[i].nome] = await Servico.findAll({
        where: { animalId: animais[i].animalId },
      });
    }

    return resObj;
  } catch (err) {
    throw err;
  }
}

export default {
  insertService,
  getServices,
  getServiceByProprietaryId,
};

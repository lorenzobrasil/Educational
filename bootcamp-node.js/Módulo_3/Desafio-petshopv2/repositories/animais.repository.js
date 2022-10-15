import connection from "./db.js";
import Animal from "../models/animais.model.js";

async function insertAnimal(animal) {
  try {
    return await Animal.create(animal);
  } catch (err) {
    throw err;
  }
}

async function updateAnimal(animal) {
  try {
    return await Animal.update(animal, {
      where: { animalId: animal.animalId },
    });
  } catch (err) {
    throw err;
  }
}

async function deleteAnimal(id) {
  try {
    return await Animal.destroy({ where: { animalId: id } });
  } catch (err) {
    throw err;
  }
}

async function getAnimals() {
  try {
    return await Animal.findAll();
  } catch (err) {
    throw err;
  }
}

async function getAnimal(id) {
  try {
    return await Animal.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function getAnimalsPerProprietary(proprietario_id) {
  try {
    return await Animal.findAll({ where: { proprietarioId: proprietario_id } });
  } catch (err) {
    throw err;
  }
}

export default {
  insertAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimal,
  getAnimalsPerProprietary,
};

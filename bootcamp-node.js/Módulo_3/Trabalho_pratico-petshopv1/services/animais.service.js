import animalRepository from "../repositories/animais.repository.js";

async function insertAnimal(animal) {
  return await animalRepository.insertAnimal(animal);
}

async function updateAnimal(animal) {
  return await animalRepository.updateAnimal(animal);
}

async function deleteAnimal(id) {
  return await animalRepository.deleteAnimal(id);
}

async function getAnimals() {
  return await animalRepository.getAnimals();
}

async function getAnimal(id) {
  return await animalRepository.getAnimal(id);
}

async function getAnimalsPerProprietary(proprietario_id) {
  return await animalRepository.getAnimalsPerProprietary(proprietario_id);
}

export default {
  insertAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimal,
  getAnimalsPerProprietary,
};

import animalService from "../services/animais.service.js";

async function insertAnimal(req, res, next) {
  try {
    const animal = req.body;
    switch (animal) {
      case !animal.nome:
        throw new Error("Campo 'nome' de animal é obrigatório");
      case !animal.tipo:
        throw new Error("Campo 'tipo' de animal é obrigatório");
      case !animal.proprietario_id:
        throw new Error("Campo 'proprietario_id' de animal é obrigatório");
      default:
        res.status(200).send(await animalService.insertAnimal(animal));
    }
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(req, res, next) {
  try {
    const animal = req.body;
    switch (animal) {
      case !animal.nome:
        throw new Error("Campo 'nome' de animal é obrigatório");
      case !animal.tipo:
        throw new Error("Campo 'tipo' de animal é obrigatório");
      case !animal.proprietario_id:
        throw new Error("Campo 'proprietario_id' de animal é obrigatório");
      case !animal.animal_id:
        throw new Error("Campo 'animal_id' de animal é obrigatório");
      default:
        res.status(200).send(await animalService.updateAnimal(animal));
    }
  } catch (err) {
    next(err);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    res.status(200).send(await animalService.deleteAnimal(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function getAnimals(req, res, next) {
  try {
    if (req.query.proprietario_id) {
      res
        .status(200)
        .send(
          await animalService.getAnimalsPerProprietary(
            req.query.proprietario_id
          )
        );
    } else {
      res.status(200).send(await animalService.getAnimals());
    }
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  try {
    res.status(200).send(await animalService.getAnimal(req.params.id));
  } catch (err) {
    next(err);
  }
}

export default {
  insertAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimal,
};

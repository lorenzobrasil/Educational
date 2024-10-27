import proprietarioService from "../services/proprietarios.service.js";
import animalService from "../services/animais.service.js";

async function insertProprietario(req, res, next) {
  try {
    const proprietario = req.body;
    switch (proprietario) {
      case !proprietario.nome:
        throw new Error("Campo nome de proprietário deve ser preenchido");
      case !proprietario.telefone:
        throw new Error("Campo 'telefone' de proprietário deve ser preenchido");
      default:
        res
          .status(200)
          .send(await proprietarioService.insertProprietario(proprietario));
    }
  } catch (err) {
    next(err);
  }
}

async function updateProprietario(req, res, next) {
  try {
    const proprietario = req.body;
    switch (proprietario) {
      case !proprietario.nome:
        throw new Error("Campo nome de proprietário deve ser preenchido");
      case !proprietario.telefone:
        throw new Error("Campo 'telefone' de proprietário deve ser preenchido");
      case !proprietario.proprietario_id:
        throw new Error(
          "Campo 'proprietario_id' de proprietário deve ser preenchido"
        );
      default:
        res
          .status(200)
          .send(await proprietarioService.updateProprietario(proprietario));
    }
  } catch (err) {
    next(err);
  }
}

// Falta coisa aqui
async function deleteProprietario(req, res, next) {
  try {
    if (
      animalService.getAnimalsPerProprietary(req.params.proprietario_id) !== []
    ) {
      res
        .status(200)
        .send(await proprietarioService.deleteProprietario(req.params.id));
    } else {
      throw new Error(
        "O proprietário não pode ser excluído pois possui pelo menos um animal cadastrado"
      );
    }
  } catch (err) {
    next(err);
  }
}

async function getProprietarios(req, res, next) {
  try {
    res.status(200).send(await proprietarioService.getProprietarios());
  } catch (err) {
    next(err);
  }
}

async function getProprietario(req, res, next) {
  try {
    res
      .status(200)
      .send(await proprietarioService.getProprietario(req.params.id));
  } catch (err) {
    next(err);
  }
}

export default {
  insertProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario,
};

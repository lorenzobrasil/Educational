import servicoService from "../services/servicos.service.js";

async function insertService(req, res, next) {
  try {
    if (!req.body.descricao) {
      throw new Error("Descrição é campo obrigatório");
    } else if (!req.body.valor) {
      throw new Error("Valor é campo obrigatório");
    } else if (!req.body.animal_id) {
      throw new Error("ID do animal é campo obrigatório");
    }

    const service = {
      descricao: req.body.descricao,
      valor: req.body.valor,
      animalId: req.body.animal_id,
    };

    res.send(await servicoService.insertService(service));
  } catch (err) {
    next(err);
  }
}

async function getServices(req, res, next) {
  try {
    res.send(await servicoService.getServices());
  } catch (err) {
    next(err);
  }
}

async function getServiceByProprietaryId(req, res, next) {
  try {
    if (!req.params.proprietary_id) {
      throw new Error("ID do proprietário é campo obrigatório");
    }
    res.send(
      await servicoService.getServiceByProprietaryId(req.params.proprietary_id)
    );
  } catch (err) {
    next(err);
  }
}

export default {
  insertService,
  getServices,
  getServiceByProprietaryId,
};

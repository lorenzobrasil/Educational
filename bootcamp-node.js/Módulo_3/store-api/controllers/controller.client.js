import serviceClient from "../services/service.client.js";

async function createClient(req, res, next) {
  try {
    const client = req.body;
    switch (client) {
      case !client.name:
        throw new Error("Name é campo obrigatório");
      case !client.cpf:
        throw new Error("CPF é campo obrigatório");
      case !client.phone:
        throw new Error("Phone é campo obrigatório");
      case !client.email:
        throw new Error("Email é campo obrigatório");
      case !client.address:
        throw new Error("Address é campo obrigatório");
      default:
        res.send(await serviceClient.createClient(client));
        logger.info(`POST /client - ${client}`);
        break;
    }
  } catch (err) {
    next(err);
  }
}

async function getClients(req, res, next) {
  try {
    res.send(await serviceClient.getClients());
    logger.info("GET /client");
  } catch (err) {
    next(err);
  }
}

async function getClient(req, res, next) {
  try {
    res.send(await serviceClient.getClient(req.params.id));
    logger.info("GET /client/:id");
  } catch (err) {
    next(err);
  }
}

async function deleteClient(req, res, next) {
  try {
    serviceClient.deleteClient(req.params.id);
    res.end();
    logger.info("DELETE /client/:id");
  } catch (err) {
    next(err);
  }
}

async function updateClient(req, res, next) {
  try {
    let client = req.body;
    switch (client) {
      case !client.name:
        throw new Error("Name é campo obrigatório");
      case !client.cpf:
        throw new Error("CPF é campo obrigatório");
      case !client.phone:
        throw new Error("Phone é campo obrigatório");
      case !client.email:
        throw new Error("Email é campo obrigatório");
      case !client.address:
        throw new Error("Address é campo obrigatório");
      case !client.client_id:
        throw new Error("Client_id é campo obrigatório");
      default:
        client = {
          name: req.body.name,
          cpf: req.body.cpf,
          phone: req.body.phone,
          email: req.body.email,
          address: req.body.address,
          client_id: req.body.client_id,
        };
        res.send(await serviceClient.updateClient(client));
        logger.info(`UPDATE /client - ${JSON.stringify(client)}`);
        break;
    }
  } catch (err) {
    next(err);
  }
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
};

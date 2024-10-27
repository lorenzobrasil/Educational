import repositoryClient from "../repositories/repository.client.js";

async function createClient(client) {
  return await repositoryClient.insertClient(client);
}

async function getClients() {
  return await repositoryClient.getClients();
}

async function getClient(id) {
  return await repositoryClient.getClient(id);
}

async function deleteClient(id) {
  return await repositoryClient.deleteClient(id);
}

async function updateClient(client) {
  return await repositoryClient.updateClient(client);
}
export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
};

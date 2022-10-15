import { promises as fs } from "fs";

async function getAccounts() {
  const data = JSON.parse(await fs.readFile(global.fileName));
  return data.accounts;
}

async function getAccountsId(id) {
  const data = await getAccounts();

  //obs: método .find() é mais eficiente já que traz o primeiro "match", não checando o restante dos valores, enquanto o .filter() checa o array inteiro.
  const account = data.filter((acc) => {
    return acc.id === id;
  });
  if (account) {
    return account[0];
  } else {
    throw new Error("ID not found");
  }
}

async function insertAccount(account) {
  const data = JSON.parse(await fs.readFile(global.fileName));
  const accountToBeAdded = {
    id: data.nextId++,
    name: account.name,
    balance: account.balance,
  };
  // Obs: uso do spread operator (...) é útil para pegar todos os dados que são enviados, nesse exemplo, no body da requisição

  data.accounts.push(accountToBeAdded);
  await fs.writeFile(global.fileName, JSON.stringify(data, null, 2));
  // Obs: o parâmetro 2 da função JSON.stringify() deixa os objetos escritos no arquivo em formato "pretty". Não é ideal em arquivos projetados para armazenarem muitos dados.

  return accountToBeAdded;
}

async function deleteAccount(id) {
  let data = JSON.parse(await fs.readFile(global.fileName));
  data.accounts = data.accounts.filter((account) => {
    return account.id != id;
  });
  await fs.writeFile(global.fileName, JSON.stringify(data));
}

async function updateAccount(account) {
  const data = JSON.parse(await fs.readFile(global.fileName));
  const index = data.accounts.findIndex((a) => {
    return a.id == account.id;
  });

  data.accounts[index].name = account.name;
  data.accounts[index].balance = account.balance;

  await fs.writeFile(global.fileName, JSON.stringify(data));
  return data.accounts[index];
}

export default {
  getAccounts,
  getAccountsId,
  insertAccount,
  deleteAccount,
  updateAccount,
};

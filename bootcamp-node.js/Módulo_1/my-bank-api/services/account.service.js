import accountRepository from "../repositories/account.repository.js";

async function createAccount(account) {
  return await accountRepository.insertAccount(account);
}

async function getAccounts() {
  return await accountRepository.getAccounts();
}

async function getAccountsId(id) {
  return await accountRepository.getAccountsId(id);
}

async function getIds() {
  const data = await accountRepository.getAccounts();

  let ids = [];

  for (let i = 0; i < data.length; i++) {
    ids.push(parseInt(data[i].id));
  }
  return ids;
}

async function deleteAccount(id) {
  return await accountRepository.deleteAccount(id);
}

async function putAccount(account) {
  return await accountRepository.updateAccount(account);
}

async function updateAccountBalance(account) {
  let acc = await accountRepository.getAccountsId(account.id);
  acc.balance = account.balance;
  return await accountRepository.updateAccount(acc);
}

export default {
  createAccount,
  getAccounts,
  getIds,
  getAccountsId,
  deleteAccount,
  putAccount,
  updateAccountBalance,
};

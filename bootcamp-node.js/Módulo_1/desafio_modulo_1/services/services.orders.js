import controllersOrders from "../controllers/controllers.orders.js";
import repositoryOrders from "../repositories/repositories.orders.js";

async function getIds() {
  return await repositoryOrders.getOrdersId();
}

async function getCustomerNames() {
  return await repositoryOrders.customerNames();
}

async function getProducts() {
  return await repositoryOrders.getProducts();
}

async function createOrder(order) {
  return await repositoryOrders.createOrder(order);
}

async function updateOrder(newOrder) {
  return await repositoryOrders.updateOrder(newOrder);
}

async function updateDeliverStatus(orderId, orderDeliverStatus) {
  return await repositoryOrders.updateOrderDeliver(orderId, orderDeliverStatus);
}

async function deleteOrder(id) {
  return await repositoryOrders.deleteOrder(id);
}

async function getOrder(id) {
  return await repositoryOrders.getOrder(id);
}

async function totalAmountSpentByCustomer(customerName) {
  return await repositoryOrders.totalAmountSpentByCustomer(customerName);
}

async function totalIncomeByProduct(product) {
  return await repositoryOrders.totalIncomeByProduct(product);
}

async function topSellers() {
  return await repositoryOrders.topSellers();
}

export default {
  getIds,
  createOrder,
  updateOrder,
  updateDeliverStatus,
  deleteOrder,
  getOrder,
  getCustomerNames,
  totalAmountSpentByCustomer,
  getProducts,
  totalIncomeByProduct,
  topSellers,
};

import serviceOrders from "../services/services.orders.js";

async function createOrder(req, res, next) {
  try {
    if (!req.body.cliente || !req.body.produto || !req.body.valor) {
      throw new Error("Cliente, produto e valor são campos obrigatórios");
    }
    let accountToBeCreated = await serviceOrders.createOrder(req.body);
    res.send(accountToBeCreated);
  } catch (err) {
    next(err);
  }
}

async function updateOrder(req, res, next) {
  try {
    const ordersIds = await serviceOrders.getIds();
    if (!req.params.id in ordersIds) {
      throw new Error("ID do pedido não identificado");
    } else if (
      !req.body.cliente ||
      !req.body.produto ||
      !req.body.valor ||
      !req.body.entregue
    ) {
      throw new Error(
        "Cliente, produto, valor e status de entrega são campos obrigatórios."
      );
    } else {
      const orderUpdated = {
        id: parseInt(req.params.id),
        cliente: req.body.cliente,
        produto: req.body.produto,
        valor: req.body.valor,
        entregue: req.body.entregue,
      };
      await serviceOrders.updateOrder(orderUpdated);
      res.end();
    }
  } catch (err) {
    next(err);
  }
}

async function updateDeliverStatus(req, res, next) {
  try {
    const orderIds = await serviceOrders.getIds();
    if (!req.params.id in orderIds) {
      throw new Error("ID do pedido não foi encontrado");
    } else if (
      req.body.entregue == null ||
      (req.body.entregue != true && req.body.entregue != false)
    ) {
      throw new Error("Status de entrega não informado ou não reconhecido");
    } else {
      await serviceOrders.updateDeliverStatus(req.params.id, req.body.entregue);
      res.end();
    }
  } catch (err) {
    next(err);
  }
}

async function deleteOrder(req, res, next) {
  try {
    const orderIds = await serviceOrders.getIds();
    if (req.params.id == null || !req.params.id in orderIds) {
      throw new Error("ID não informado ou não encontrado");
    } else {
      await serviceOrders.deleteOrder(parseInt(req.params.id));
      res.end();
    }
  } catch (err) {
    next(err);
  }
}

async function getOrder(req, res, next) {
  try {
    const orderIds = await serviceOrders.getIds();

    if (req.params.id == null || !req.params.id in orderIds) {
      throw new Error("ID não informado ou não encontrado");
    } else {
      const order = await serviceOrders.getOrder(parseInt(req.params.id));
      res.send(order);
    }
  } catch (err) {
    next(err);
  }
}

async function totalAmountSpentByCustomer(req, res, next) {
  try {
    const customers = await serviceOrders.getCustomerNames();
    if (req.body.cliente == null || !req.body.cliente in customers) {
      throw new Error("Cliente não encontrado ou inexistente");
    } else {
      const sumCustomer = await serviceOrders.totalAmountSpentByCustomer(
        req.body.cliente
      );
      res.send({
        cliente: req.body.cliente,
        total_gasto: sumCustomer,
      });
    }
    //const customer = req.body.cliente;
  } catch (err) {
    next(err);
  }
}

async function totalIncomeByProduct(req, res, next) {
  try {
    const products = await serviceOrders.getProducts();
    if (req.body.produto == null || !req.body.produto in products) {
      throw new Error("Produto não informado ou não encontrado.");
    } else {
      const totalIncomeByProduct = await serviceOrders.totalIncomeByProduct(
        req.body.produto
      );
      res.send({
        produto: req.body.produto,
        receita: totalIncomeByProduct,
      });
    }
  } catch (err) {
    next(err);
  }
}

async function topSellers(req, res, next) {
  try {
    let topSellersArr = await serviceOrders.topSellers();
    topSellersArr = topSellersArr.sort((a, b) => {
      if (a[1] > b[1]) {
        return -1;
      } else if (a[1] < b[1]) {
        return 1;
      } else {
        return 0;
      }
    });
    for (let element in topSellersArr) {
      topSellersArr[
        element
      ] = `${topSellersArr[element][0]} - ${topSellersArr[element][1]}`;
    }
    res.send(topSellersArr);
  } catch (err) {
    next(err);
  }
}

export default {
  createOrder,
  updateOrder,
  updateDeliverStatus,
  deleteOrder,
  getOrder,
  totalAmountSpentByCustomer,
  totalIncomeByProduct,
  topSellers,
};

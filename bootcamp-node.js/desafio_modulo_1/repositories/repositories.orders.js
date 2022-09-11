import { promises as fs } from "fs";
import moment from "moment";

async function readData() {
  const data = JSON.parse(await fs.readFile(global.fileName));

  return data;
}

async function customerNames() {
  try {
    const data = await readData();
    const customers = [];

    for (let pedido of data.pedidos) {
      if (pedido.cliente in customers) {
        //pass
      } else {
        customers.push(pedido.cliente);
      }
    }
    return customers;
  } catch (err) {
    throw new Error("Um erro ocorreu durante a busca pelos nomes dos clientes");
  }
}

async function getProducts() {
  try {
    const data = await readData();
    const products = [];

    for (let pedido of data.pedidos) {
      if (!pedido.produto in products) {
        products.push(pedido.produto);
      }
    }
    return products;
  } catch (err) {
    throw new Error("Erro ao consultar os produtos.");
  }
}

async function writeData(data) {
  return await fs.writeFile(global.fileName, JSON.stringify(data));
}

async function getOrdersId() {
  const data = await readData();
  let orderIds = [];

  for (let i = 0; i < data.pedidos.length; i++) {
    orderIds.push(data.pedidos[i].id);
  }

  return orderIds;
}

async function createOrder(order) {
  const data = await readData();
  let newOrder = {
    id: data.nextId++,
    entregue: false,
    timestamp: moment().format("YYYY-MM-DD HH:m:s"),
    ...order,
  };
  data.pedidos.push(newOrder);

  await writeData(data);

  return newOrder;
}

async function updateOrder(orderUpdated) {
  try {
    const data = await readData();
    const orderIndex = data.pedidos.findIndex((order) => {
      return order.id == orderUpdated.id;
    });
    data.pedidos[orderIndex] = {
      id: orderUpdated.id,
      timestamp: data.pedidos[orderIndex].timestamp,
      ...orderUpdated,
    };
    return await writeData(data);
  } catch (err) {
    throw new Error("Aconteceu algum erro atualizando o pedido.");
  }
}

async function updateOrderDeliver(orderId, orderStatusDeliver) {
  try {
    const data = await readData();
    const orderIndex = data.pedidos.findIndex((order) => {
      return order.id == orderId;
    });
    data.pedidos[orderIndex].entregue = orderStatusDeliver;
    return await writeData(data);
  } catch (err) {
    throw new Error(
      "Algum erro aconteceu durante a atualização de status de entrega."
    );
  }
}

async function deleteOrder(orderId) {
  try {
    const data = await readData();
    const orderToBeDeletedIndex = data.pedidos.findIndex((order) => {
      return order.id == orderId;
    });
    data.pedidos.splice(orderToBeDeletedIndex, 1);
    return await writeData(data);
  } catch (err) {
    throw new Error("Problema ao deletar pedido.");
  }
}

async function getOrder(id) {
  try {
    const data = await readData();
    const order = data.pedidos.filter((order) => {
      return order.id == id;
    });
    return order;
  } catch (err) {
    throw new Error("Conta não encontrada");
  }
}

async function totalAmountSpentByCustomer(customerName) {
  try {
    const data = await readData();
    let total = 0;

    for (var customerIteration of data.pedidos) {
      if (customerName != customerIteration.cliente) {
        //pass
      } else if (customerName == customerIteration.cliente) {
        if (customerIteration.entregue == true) {
          total += customerIteration.valor;
        }
      } else {
        //pass
      }
    }
    return total;
  } catch (err) {
    throw new Error("Erro ao consultar o valor gasto pelo cliente.");
  }
}

async function totalIncomeByProduct(product) {
  try {
    const data = await readData();
    let totalByProduct = 0;

    for (let order of data.pedidos) {
      if (order.produto == product && order.entregue == true) {
        totalByProduct += order.valor;
      } else {
        //pass
      }
    }
    return totalByProduct;
  } catch (err) {
    throw new Error(
      `Problemas ao calcular a receita gerada pelo produto ${product}`
    );
  }
}

async function topSellers() {
  try {
    const data = await readData();
    const orderedPizzas = [];

    for (let order of data.pedidos) {
      if (!orderedPizzas.find((pedido) => pedido == order.produto)) {
        orderedPizzas.push(order.produto);
      }
    }

    for (let pizza in orderedPizzas) {
      let sum = 0;
      for (var order in data.pedidos) {
        if (
          data.pedidos[order].produto == orderedPizzas[pizza] &&
          data.pedidos[order].entregue == true
        ) {
          sum++;
        }
      }
      orderedPizzas[pizza] = [orderedPizzas[pizza], sum];
    }
    return orderedPizzas;
  } catch (err) {
    throw new Error("Problema consultando principais pedidos.");
  }
}

export default {
  readData,
  customerNames,
  getOrdersId,
  createOrder,
  updateOrder,
  updateOrderDeliver,
  deleteOrder,
  getOrder,
  totalAmountSpentByCustomer,
  getProducts,
  totalIncomeByProduct,
  topSellers,
};

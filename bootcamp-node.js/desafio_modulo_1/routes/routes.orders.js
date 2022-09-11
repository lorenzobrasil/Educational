import express from "express";
import controllerOrders from "../controllers/controllers.orders.js";

const router = express.Router();

router.post("/", controllerOrders.createOrder);

router.put("/updateOrder/:id", controllerOrders.updateOrder);

router.patch(
  "/updateOrder/deliverStatus/:id",
  controllerOrders.updateDeliverStatus
);

router.delete("/deleteOrder/:id", controllerOrders.deleteOrder);

router.get("/search/:id", controllerOrders.getOrder);

router.get(
  "/customer/totalAmountSpentByCustomer",
  controllerOrders.totalAmountSpentByCustomer
);

router.get(
  "/product/totalIncomeByProduct",
  controllerOrders.totalIncomeByProduct
);

router.get("/topSellers", controllerOrders.topSellers);

router.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

export default router;

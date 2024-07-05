import express from "express";

import validateRequest from "../../middlewares/validateRequest";
import { OrderValidation } from "./orders.validation";
import { OrderControllers } from "./orders.controller";

const router = express.Router();

// router.get("/:id", ProductControllers.getSingleProduct);
router.post(
  "",
  validateRequest(OrderValidation.orderValidationSchema),
  OrderControllers.createOrder
);

router.get("", OrderControllers.getUserOrders);
router.get("", OrderControllers.getAllOrders);
// router.delete("/:id", ProductControllers.deleteProduct);

// router.put(
//   "/:id",

//   ProductControllers.updateProduct
// );

export const OrderRoutes = router;

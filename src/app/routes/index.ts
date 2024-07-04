import express from "express";

import { ProductRoutes } from "../modules/products/products.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;

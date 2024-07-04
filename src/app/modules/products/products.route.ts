import express from "express";

import { ProductControllers } from "./products.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "./products.validation";

const router = express.Router();

// router.get('/:id', BookController.getSingleBook)
router.post(
  "",
  validateRequest(ProductValidation.productValidationSchema),
  ProductControllers.createProduct
);
// router.post(
//   '/review/:id',
//   // validateRequest(BookValidation.createBookZodSchema),
//   BookController.reviewBook
// )

// router.get('/review/:id', BookController.getBookReview)
// router.get('', BookController.getAllBooks)
// router.delete('/:id', BookController.deleteBook)

// router.patch(
//   '/:id',
//   validateRequest(BookValidation.updateBookZodSchema),
//   BookController.updateBook
// )

export const ProductRoutes = router;

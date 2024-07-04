import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { TProduct } from "./products.interface";
import { ProductServices } from "./products.service";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const { ...productData } = req.body;
  console.log(req.body);
  const result = await ProductServices.createProduct(productData);

  sendResponse<TProduct>(res, {
    statusCode: 200,
    success: true,
    message: "Product created successfully!",
    data: result,
  });
});

// const getAllBooks = catchAsync(async (req: Request, res: Response) => {
//   // const filters = pick(req.query, BookFilterableFields)
//   const paginationOptions = pick(req.query, paginationFields);

//   const result = await BookService.getAllBooks(paginationOptions);

//   sendResponse<IBook[]>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Books retrieved successfully !",
//     meta: result.meta,
//     data: result.data,
//   });
// });

// const getSingleBook = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const result = await BookService.getSingleBook(id);

//   sendResponse<IBook>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Book retrieved successfully !",
//     data: result,
//   });
// });

// const updateBook = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const updatedData = req.body;

//   const result = await BookService.updateBook(id, updatedData);

//   sendResponse<IBook>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Book updated successfully !",
//     data: result,
//   });
// });

// const reviewBook = catchAsync(async (req: Request, res: Response) => {
//   const bookId = req.params.id;
//   const review = req.body.review;

//   const result = await BookService.reviewBook(bookId, review);
//   console.log(result);
//   sendResponse<string>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Book review successfully !",
//     data: result,
//   });
// });

// const getBookReview = catchAsync(async (req: Request, res: Response) => {
//   const bookId = req.params.id;

//   const result = await BookService.getBookReview(bookId);

//   sendResponse<any>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Book Review retrieved successfully !",
//     data: result,
//   });
// });

// const deleteBook = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const result = await BookService.deleteBook(id);

//   sendResponse<IBook>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Book deleted successfully !",
//     data: result,
//   });
// });

export const ProductControllers = {
  createProduct,
};

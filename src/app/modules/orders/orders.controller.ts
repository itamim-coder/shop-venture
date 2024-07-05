import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";

import { OrderServices } from "./orders.service";
import { TOrders } from "./orders.interface";

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { ...orderData } = req.body;
  console.log(req.body);
  const result = await OrderServices.createOrder(orderData);

  sendResponse<TOrders>(res, {
    success: true,
    message: "Orders created successfully!",
    data: result,
  });
});

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  console.log(req.query);
  const result = await OrderServices.getAllOrders();

  sendResponse<TOrders[]>(res, {
    success: true,
    message: "Orders fetched successfully!",

    data: result,
  });
});
const getUserOrders = catchAsync(async (req: Request, res: Response) => {
  const email = req.query.email;
  console.log(typeof email);
  if (!email) {
    throw new Error("Order not found");
  }
  const result = await OrderServices.getUserOrders(email);
  if (result.length > 0) {
    sendResponse<TOrders[]>(res, {
      success: true,
      message: "Orders fetched successfully for user email!",

      data: result,
    });
  } else {
    sendResponse(res, {
      success: false,
      message: "Orders not found!",
    });
  }
});

// const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const result = await ProductServices.getSingleProduct(id);

//   sendResponse<TProduct>(res, {
//     success: true,
//     message: "Product fetched successfully!",
//     data: result,
//   });
// });

// const updateProduct = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const updatedData = req.body;

//   const result = await ProductServices.updateProduct(id, updatedData);

//   sendResponse<TProduct>(res, {
//     success: true,
//     message: "Product updated successfully !",
//     data: result,
//   });
// });

// const deleteProduct = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   await ProductServices.deleteProduct(id);

//   sendResponse<TProduct>(res, {
//     success: true,
//     message: "Product deleted successfully !",
//     data: null,
//   });
// });

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getUserOrders,
};

import { TProduct } from "./products.interface";
import { Product } from "./products.model";

const createProduct = async (product: TProduct): Promise<TProduct | null> => {
  let createdProduct: TProduct | null = null;

  try {
    createdProduct = await Product.create(product);

    return createdProduct;
  } catch (err) {
    throw new Error("Failed to create Product");
  }
};

export const ProductServices = {
  createProduct,
};

import { z } from "zod";

const productVariantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const productInventorySchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

export const productValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()), 
  variants: z.array(productVariantSchema),
  inventory: productInventorySchema,
});

export default productValidationSchema;

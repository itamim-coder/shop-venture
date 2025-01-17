export type TProductFilterRequest = {
  searchTerm?: string | undefined;
  name?: string | undefined;
  tags?: string | undefined;
  category?: string | undefined;
};

export type TProductVariant = {
  type: string;
  value: string;
};

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TProductVariant[];
  inventory: TInventory;
};

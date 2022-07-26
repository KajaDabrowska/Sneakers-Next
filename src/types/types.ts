export type ProductType = {
  brand: string;
  name: string;
  imageUrl: string;
  images: string[];
  description: string;
  hasMultiplePrices: boolean;
  price: {
    current: number;
    old: number;
  };
};

export type ItemType = ProductType & {
  id: string;
  quantity: number;
};

export type CategoryType = {
  title: string;
  items: ItemType[];
};

export type CategoryMapType = {
  [key: string]: ItemType[];
};

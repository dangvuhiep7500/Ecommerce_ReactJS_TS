export interface ICatalogProduct {
  _id: string;
  image: string;
  title: string;
  categoryId: string;
  description: string;
  imageDetail: [string];
  price: number;
  quantity: number;
}

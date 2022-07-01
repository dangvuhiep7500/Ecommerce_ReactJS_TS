interface IState {
  selectedProductReducer: ISelectedProductReducer;
  productReducer: IProductsReducer;
}

 interface IProduct {
  _id: string;
  image: string;
  title: string;
  categoryId: string;
  description: string;
  price: number;
}
 interface ICategory {
  _id: string;
  categoryName: string;
  categoryImage: string
}

// interface IRating {
//   count: number;
//   rate: number;
// }

// interface IProducts {
//   products: IProduct[];
// }
interface CartItem {
  product: IProduct
  quantity: number
}
// type IProducts = IProduct[];

// interface IProductsReducer {
//   products: IProducts;
// }

// interface ISelectedProductReducer {
//   product: IProduct;
// }

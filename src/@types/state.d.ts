interface IState {
  selectedProductReducer: ISelectedProductReducer;
  productReducer: IProductsReducer;
}
interface IUser {
  user: IProfile;
  token: string;
}
interface IProfile {
  _id: string,
  firstName: string,
  lastName: string,
  phoneNumber: number,
  email: string,
  password: string,
  roles?: string,
}

interface IProduct {
  _id: string;
  image: string;
  title: string;
  categoryId: string;
  description: string;
  imageDetail: [string];
  price: number;
  quantity: number;
}

interface ICategory {
  _id: string;
  categoryName: string;
  categoryImage: string;
  slug: string;
  children: [
    {
      _id: string;
      categoryName: string;
      categoryImage: string;
      parentId: string;
      slug: string;
    }
  ];
}

interface CartItem {
  product: IProduct;
  quantity: number;
}

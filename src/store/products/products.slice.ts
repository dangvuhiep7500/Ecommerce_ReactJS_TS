import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  products: IProduct[];
  filteredProducts: IProduct[];
  isLoading: boolean;
  error: string;
  sort: string,
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  isLoading: false,
  error: "",
  sort: '',
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    startFetching(state) {
      state.isLoading = true;
    },
    successFetching(state, action: PayloadAction<IProduct[]>) {
      state.isLoading = false;
      state.error = "";
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    errorFetching(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    searchFilter(state, action: PayloadAction<string>) {
      state.filteredProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(action.payload)
      );
    },
    // filterByPrice(state, action: PayloadAction<number[]>) {
    //   state.filteredProducts = state.products.filter((product) => {
    //     return (
    //       product.price > action.payload[0] &&
    //       product.price <= action.payload[1]
    //     );
    //   });
    // },
    filterByCategory(state, action: PayloadAction<String>) {
      if (action.payload !== "") {
        state.filteredProducts = state.products.filter(
          (product) => product.categoryId === action.payload
        );
      } else {
        state.filteredProducts = state.products;
      }
    },
  },
});
export const allState = (state:any) => state.productsSlice;
export const {
  startFetching,
  successFetching,
  errorFetching,
  searchFilter,
  filterByCategory,
} = productsSlice.actions;

export default productsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  products: IProduct[];
  filteredProducts: IProduct[];
  isLoading: boolean;
  error: string;
  sort: string,
  filterValues: {
    sort: '',
    price: 0,
  },
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  isLoading: false,
  error: "",
  sort: '',
  filterValues: {
    sort: '',
    price: 0,
  },
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
    setFilterValues: (state, action) => {
      switch (action.payload.type) {
        case 'sort':
          state.filterValues.sort = action.payload.val;
          break;
        case 'price':
          state.filterValues.price = action.payload.val;
          break;
      }
    },
    handleFilterBySort(state, action) {
      state.filteredProducts = state.products.sort((a,b) =>{
        if (state.filterValues.sort.toString() ==='Giá (Thấp - Cao)') {
          if (a.price > b.price) return 1;
          return -1;
        } else if (state.filterValues.sort.toString() === 'Giá (Cao - Thấp)') {
          if (a.price < b.price) return 1;
          return -1;
        } else if (state.filterValues.sort.toString() === 'Tên (A - Z)') {
          if (a.title > b.title) return 1;
          return -1;
        } else if (state.filterValues.sort.toString() === 'Tên (Z - A)') {
          if (a.title < b.title) return 1;
          return -1;
        } else {
          if (a._id > b._id) return 1;
          return -1;
        }
      })
    },
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
export const {
  startFetching,
  successFetching,
  errorFetching,
  searchFilter,
  filterByCategory,
  setFilterValues,
  handleFilterBySort,
} = productsSlice.actions;

export default productsSlice.reducer;

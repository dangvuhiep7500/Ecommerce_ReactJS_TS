import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CategoriesState {
   categories: ICategory[]
   filteredCategories: ICategory[]
   isLoading: boolean
   error: string
}

const initialState: CategoriesState = {
   categories: [],
   filteredCategories: [],
   isLoading: false,
   error: '',
}
export const categoriesSlice = createSlice({
   name: 'categories',
   initialState,
   reducers: {
      startFetching(state) {
         state.isLoading = true
      },
      successFetching(state, action: PayloadAction<ICategory[]>) {
         state.isLoading = false
         state.error = ''
         state.categories = action.payload
         state.filteredCategories = action.payload
      },
      errorFetching(state, action: PayloadAction<string>) {
         state.isLoading = false
         state.error = action.payload
      },
      // searchFilter(state, action: PayloadAction<string>) {
      //    state.filteredCategories = state.categories.filter((category) =>
      //    category.categoryName.toLowerCase().includes(action.payload)
      //    )
      // },
      // filterByPrice(state, action: PayloadAction<number[]>) {
      //    state.filteredProducts = state.products.filter((product) => {
      //       return (
      //          product.price > action.payload[0] &&
      //          product.price <= action.payload[1]
      //       )
      //    })
      // },
      // filterByCategory(state, action: PayloadAction<string>) {
      //    if (action.payload !== 'All') {
      //       state.filteredProducts = state.products.filter(
      //          (product) => product.category === action.payload
      //       )
      //    } else {
      //       state.filteredProducts = state.products
      //    }
      // },
   },
})

export const {
   startFetching,
   successFetching,
   errorFetching,
} = categoriesSlice.actions

export default categoriesSlice.reducer

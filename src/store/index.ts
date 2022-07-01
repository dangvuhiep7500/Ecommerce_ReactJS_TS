// import { combineReducers, compose, createStore } from "redux";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cart.slice'
import productsReducer from './products/products.slice'
import categoriesReducer from './category/categories.slice'
const combinedReducers = combineReducers({
  productsReducer,
  cartReducer,
  categoriesReducer,
});
export const store = configureStore({
  reducer: combinedReducers,
})
// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(combinedReducers, composeEnhancers());
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
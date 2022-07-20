// import { combineReducers, compose, createStore } from "redux";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cart.slice'
import authReducer from './auth/auth.slice'
import productsReducer from './products/products.slice'
import categoriesReducer from './category/categories.slice'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const cartpersistConfig = {
  key: "cart",
  version: 1,
  storage,
};
const userPersistConfig = {
  key: 'user',
  version: 1,
  storage,
  // blacklist: ['success']
}
const combinedReducers = combineReducers({
  productsReducer,
  cartReducer: persistReducer(cartpersistConfig, cartReducer),
  categoriesReducer,
  // authReducer,
  authReducer: persistReducer(userPersistConfig, authReducer)
});
// const persistedReducer = persistReducer(persistConfig, combinedReducers);
export const store = configureStore({
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
  reducer: combinedReducers,
})
// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(combinedReducers, composeEnhancers());
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
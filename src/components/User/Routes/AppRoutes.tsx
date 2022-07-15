import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../../../pages/User/cart'
import CategoryPage from '../../../pages/User/category'
import Detail from '../../../pages/User/detail'
import Home from '../../../pages/User/home'
import LoginPage from '../../../pages/User/login'
import RegisterPage from '../../../pages/User/register'
import ScrollToTop from '../../ScollToTop/scolltotop'

const AppRoutes = () => {
   return (
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path={"/products/:productId"} element={<Detail />} />
      {/* <Route path={"/categories/:categoryId"} element={<CategoryPage />} /> */}
      <Route path={"/categories/:slug"} element={<CategoryPage />} />
      <Route path={"/:slug"} element={<CategoryPage />} />
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      {/* <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />} />
      <Route path="/bill" element={<Bill />} />
      <Route path="/bill/:id" element={<SingleBill />} />
      <Route path="/product/:id" element={<Detail />} />
      <Route path="/product/" element={<List />} />
     
      <Route path="/admin" element={<HomeAdmin />} /> */}
    </Routes>
  </BrowserRouter>
   )
}

export default AppRoutes

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/index.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/User/home';
import Detail from "./pages/User/detail";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/product/:id" element={<Detail />} />
    {/* <Route path="/login" element={<Login />}></Route>
    <Route path="/register" element={<Register />} />
    <Route path="/bill" element={<Bill />} />
    <Route path="/bill/:id" element={<SingleBill />} />
    <Route path="/product/:id" element={<Detail />} />
    <Route path="/product/" element={<List />} />
    <Route path="/cart" element={<Cart />}></Route>
    <Route path="/admin" element={<HomeAdmin />} /> */}
  </Routes>
</BrowserRouter>
  );
}

export default App;

import { useEffect } from "react";
import "./sass/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppRoutes from "./components/Client/Routes/AppRoutes";
import { useAppDispatch } from "./hooks";
import { fetchProducts } from "./store/products/products.action";
import { fetchCategories } from "./store/category/categories.action";
const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return <AppRoutes />;
};

export default App;

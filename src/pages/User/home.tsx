import React, { FC } from "react";
import Footer from "../../components/User/Footer/footer";
import LayoutHeader from "../../components/User/Layout/layout";
import Category from "../../components/User/Category/category";
import Featuredlist from "../../components/User/FeaturedList/featuredList";
import FeaturedProduct2 from "../../components/User/FeaturedProduct2/featuredProduct2";
import FeaturedProduct from "../../components/User/FeaturedProduct/featuredProduct";
import { useAppDispatch, useAppSelector } from "../../hooks";
import AlertComponent from "../../components/User/Alert/AlertComponent";
import { toggleItemAdded } from "../../store/cart/cart.slice";

const Home: FC = () => {
  const { itemAdded } = useAppSelector((state) => state.cartReducer)
   const dispatch = useAppDispatch()
    return (
      <div>
        <LayoutHeader />
        <Category />
        <Featuredlist />
        <FeaturedProduct />
        <FeaturedProduct2 />
        <AlertComponent
            open={itemAdded}
            setOpen={() => dispatch(toggleItemAdded(false))}
            severity={'success'}
            text={'Successfully added to cart!'}
         />
        <Footer />
      </div>
    );
  }
  
  export default Home;
import React, { FC } from "react";
import Footer from "../../components/User/Footer/footer";
import LayoutHeader from "../../components/User/Layout/layout";
import Category from "../../components/User/Category/category";
import Featuredlist from "../../components/User/FeaturedList/featuredList";
import FeaturedProduct2 from "../../components/User/FeaturedProduct2/featuredProduct2";
import FeaturedProduct from "../../components/User/FeaturedProduct/featuredProduct";

const Home: FC = () => {
    return (
      <div>
        <LayoutHeader />
        <Category />
        <Featuredlist />
        <FeaturedProduct />
        <FeaturedProduct2 />
        <Footer />
      </div>
    );
  }
  
  export default Home;
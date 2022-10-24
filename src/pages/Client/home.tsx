import React, { FC, useState } from "react";
import Footer from "../../components/Client/Footer/footer";
import LayoutHeader from "../../components/Client/Layout/layout";
import Category from "../../components/Client/Category/category";
import Featuredlist from "../../components/Client/FeaturedList/featuredList";
import FeaturedProduct2 from "../../components/Client/FeaturedProduct2/featuredProduct2";
import FeaturedProduct from "../../components/Client/FeaturedProduct/featuredProduct";

const Home: FC = () => {
  const [isLoding, setIsLoding] = useState(true);
  setTimeout(() => {
    setIsLoding(false);
  }, 3000);
    return (
      <>
        {isLoding ? (
       <div className="loader"></div>
      ) : (
        <>
        <LayoutHeader />
        <Category />
        <Featuredlist />
        <FeaturedProduct2 />
        <Footer />
        </>
      )}
     
      </>
    );
  }
  
  export default Home;
import React, { FC } from "react";
import ProductDetail from "../../components/Client/ProductDetail/product-detail";
import Footer from "../../components/Client/Footer/footer";
import LayoutHeader from "../../components/Client/Layout/layout";

const Detail: FC = () => {
    return (
      <div>
        <LayoutHeader />
        <ProductDetail />
        <Footer />
      </div>
    );
  }
  
  export default Detail;
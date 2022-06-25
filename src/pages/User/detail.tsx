import React, { FC } from "react";
import ProductDetail from "../../components/User/Detail/detail";
import Footer from "../../components/User/Footer/footer";
import LayoutHeader from "../../components/User/Layout/layout";

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
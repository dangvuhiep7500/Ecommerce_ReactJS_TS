import React, { FC } from "react";
import Cart from "../../components/User/Cart/cart";
import Footer from "../../components/User/Footer/footer";
import LayoutHeader from "../../components/User/Layout/layout";

const Detail: FC = () => {
    return (
      <div>
        <LayoutHeader />
        <Cart />
        <Footer />
      </div>
    );
  }
  
  export default Detail;
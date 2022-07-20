import React, { FC } from "react";
import CheckOut from "../../components/Client/CheckOut/check-out";
import Footer from "../../components/Client/Footer/footer";
import LayoutHeader from "../../components/Client/Layout/layout";

const CheckOutPage: FC = () => {
    return (
      <div>
        <LayoutHeader />
        <CheckOut />
        <Footer />
      </div>
    );
  }
  
  export default CheckOutPage;
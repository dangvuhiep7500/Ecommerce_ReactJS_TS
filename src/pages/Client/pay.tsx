import React, { FC } from "react";
import Footer from "../../components/Client/Footer/footer";
import LayoutHeader from "../../components/Client/Layout/layout";
import Pay from "../../components/Client/Instructions/pay";

const LoginPage: FC = () => {
    return (
      <div>
        <LayoutHeader />
        <Pay />
        <Footer />
      </div>
    );
  }
  
  export default LoginPage;
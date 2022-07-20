import React, { FC } from "react";
import Footer from "../../components/Client/Footer/footer";
import LayoutHeader from "../../components/Client/Layout/layout";
import Login from "../../components/Client/Account/login";

const LoginPage: FC = () => {
    return (
      <div>
        <LayoutHeader />
        <Login />
        <Footer />
      </div>
    );
  }
  
  export default LoginPage;
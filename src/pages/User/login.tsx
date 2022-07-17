import React, { FC } from "react";
import Footer from "../../components/User/Footer/footer";
import LayoutHeader from "../../components/User/Layout/layout";
import Login from "../../components/User/Account/login";

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
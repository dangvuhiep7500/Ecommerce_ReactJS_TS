import React, { FC } from "react";
import Footer from "../../components/User/Footer/footer";
import LayoutHeader from "../../components/User/Layout/layout";
import Register from "../../components/User/Account/register";

const RegisterPage: FC = () => {
    return (
      <div>
        <LayoutHeader />
        <Register />
        <Footer />
      </div>
    );
  }
  
  export default RegisterPage;
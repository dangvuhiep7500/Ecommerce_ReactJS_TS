import React, { FC } from "react";
import Footer from "../../components/Client/Footer/footer";
import LayoutHeader from "../../components/Client/Layout/layout";
import Register from "../../components/Client/Account/register";

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
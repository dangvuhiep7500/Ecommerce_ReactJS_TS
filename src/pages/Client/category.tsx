import React, { FC } from "react";
import CategoryDetail from "../../components/Client/Category/category-detail";
import Footer from "../../components/Client/Footer/footer";
import LayoutHeader from "../../components/Client/Layout/layout";

const CategoryPage: FC = () => {
    return (
      <div>
        <LayoutHeader />
        <CategoryDetail />
        <Footer />
      </div>
    );
  }
  
  export default CategoryPage;
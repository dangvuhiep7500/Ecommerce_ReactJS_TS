import React, { FC } from "react";
import CategoryDetail from "../../components/User/Category/category-detail";
import Footer from "../../components/User/Footer/footer";
import LayoutHeader from "../../components/User/Layout/layout";

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
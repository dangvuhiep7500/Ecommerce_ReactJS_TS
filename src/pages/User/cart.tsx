import React, { FC } from "react";
import Cart from "../../components/User/Cart/cart";
import Footer from "../../components/User/Footer/footer";
import LayoutHeader from "../../components/User/Layout/layout";
import { useAppDispatch, useAppSelector } from "../../hooks";
import AlertComponent from "../../components/User/Alert/AlertComponent";
import { toggleItemAdded } from "../../store/cart/cart.slice";
const Detail: FC = () => {
  const { itemAdded } = useAppSelector((state) => state.cartReducer)
  const dispatch = useAppDispatch()
    return (
      <div>
        <LayoutHeader />
        <Cart />
        <AlertComponent
            open={itemAdded}
            setOpen={() => dispatch(toggleItemAdded(false))}
            severity={'success'}
            text={'Thêm vào giỏ hàng thành công!'}
         />
        <Footer />
      </div>
    );
  }
  
  export default Detail;
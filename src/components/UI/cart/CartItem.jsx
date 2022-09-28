import React from "react";
import { ListGroupItem } from "reactstrap";

import "../../../styles/cart-item.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const CartItem = ({ item }) => {
  const { id, title, price, img1, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        img1,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart_item">
      <div className="cart_item-info ">
        <div className="cart_product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div className="">
            <img src={img1} alt="product-img" />
          </div>
          <div>
            <h6 className="cart_product-title">{title}</h6>
            <p className=" d-flex align-items-center gap-5 cart_product-price">
              <span>${totalPrice}</span>
            </p>
          </div>
          <div className=" d-flex align-items-center justify-content-between increase_decrease-btn">
            <span className="decrease_btn" onClick={decreaseItem}>
              <AiOutlineMinus />
              <span className="quantity">{quantity}</span>
              <span className="increase_btn" onClick={incrementItem}>
                <AiOutlinePlus />
              </span>
            </span>
          </div>

          <span className="delete_btn" onClick={deleteItem}>
            <BsFillTrashFill />
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;

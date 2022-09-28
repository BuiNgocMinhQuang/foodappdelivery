import React from "react";

import "../../../styles/product-card.scss";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { MdShoppingBasket } from "react-icons/md";
const ProductCard = (props) => {
  const { id, title, img1, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        img1,
        price,
      })
    );
  };

  return (
    <div className="product_item">
      <div className="product_img">
        <Link to={`/foods/${id}`}>
          <img src={img1} alt="product-img" className="" />
        </Link>
      </div>

      <button className="addtocart_btn" onClick={addToCart}>
        <MdShoppingBasket />
      </button>
      <div className="product_content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product_price">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

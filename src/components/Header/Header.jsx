import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/logonew.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdShoppingBasket } from "react-icons/md";
import { FaUserAlt, FaHamburger } from "react-icons/fa";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.scss";

const nav_links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav_links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active_menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav_right d-flex align-items-center gap-4 ">
            <span className="cart_icon" onClick={toggleCart}>
              <MdShoppingBasket />
              <span className="cart_badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <FaUserAlt />
              </Link>
            </span>

            <span className="mobile_menu" onClick={toggleMenu}>
              <FaHamburger />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

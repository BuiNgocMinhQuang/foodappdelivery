import React, { useState, useEffect } from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommenSection from "../components/UI/common-section/CommentSection";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { MdShoppingBasket } from "react-icons/md";
import "../styles/product-details.scss";
import ProductCard from "../components/UI/product-card/ProductCard";
const Foodetails = () => {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.img1);
  const { title, price, category, desc, img1 } = product;
  const relatedProduct = products.filter((item) => category === item.category);
  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        img1,
      })
    );
  };
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredName, enteredEmail, reviewMsg);
  };

  useEffect(() => {
    setPreviewImg(product.img1);
  }, [product]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title="Product-details">
      <CommenSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product-img">
                <div
                  className="img-item mb-3"
                  onClick={() => setPreviewImg(product.img1)}
                >
                  <img src={product.img1} alt="" className="w-50" />
                </div>
                <div
                  className="img-item mb-3"
                  onClick={() => setPreviewImg(product.img2)}
                >
                  <img src={product.img2} alt="" className="w-50" />
                </div>
                <div
                  className="img-item"
                  onClick={() => setPreviewImg(product.img3)}
                >
                  <img src={product.img3} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product-main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single-product-content">
                <h2 className="product_title">{title}</h2>
                <span className="product_price">{price}</span>
                <p className="category mb-5">
                  Category: <span>${category}</span>
                </p>
                <button onClick={addItem} className=" addtocart_btn r-0">
                  <MdShoppingBasket />
                </button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-2">
                <h6
                  className={`${tab === "desc" ? "tab_active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "review" ? "tab_active" : ""}`}
                  onClick={() => setTab("review")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab_content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab_form mb-3">
                  <div className="review pt-5">
                    <p className="user_name mb-0">Harry</p>
                    <p className="user_mail">harry@gmail.com</p>
                    <p className="feedback_text">Great Product</p>
                  </div>
                  <div className="review">
                    <p className="user_name mb-0">Harry</p>
                    <p className="user_mail">harry@gmail.com</p>
                    <p className="feedback_text">Great Product</p>
                  </div>
                  <div className="review">
                    <p className="user_name mb-0">Harry</p>
                    <p className="user_mail">harry@gmail.com</p>
                    <p className="feedback_text">Great Product</p>
                  </div>
                  <form className="form" onSubmit={submitHandler}>
                    <div className="form_group">
                      <input
                        type="text"
                        placeholder="Enter you name"
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form_group">
                      <input
                        type="text"
                        placeholder="Enter you email"
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form_group">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Write your review "
                        onChange={(e) => setReviewMsg(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className=" addtocart_btn r-0">
                      <MdShoppingBasket />
                    </button>
                  </form>
                </div>
              )}
            </Col>
            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related_Product-title">You might also like</h2>
            </Col>
            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Foodetails;

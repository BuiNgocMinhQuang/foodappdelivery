import React from "react";
import { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { FiChevronsRight } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsShieldCheck } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import img1 from "../assets/images/shipper.png";
import { Link } from "react-router-dom";
import "../styles/shipper-section.scss";
import Category from "../components/UI/category/Category";
import "../styles/home.scss";
import featureIMG1 from "../assets/images/service-01.png";
import featureIMG2 from "../assets/images/service-02.png";
import featureIMG3 from "../assets/images/service-03.png";
import products from "../assets/fake-data/products";
import meaticon from "../assets/images/meat-icon.svg";
import fishicon from "../assets/images/fish-icon.svg";
import saladicon from "../assets/images/salad-icon.svg";
import pizzaicon from "../assets/images/pizza-icon.svg";
import icecreamicon from "../assets/images/icecream-icon.svg";
import ProductCard from "../components/UI/product-card/ProductCard";
import whyIMG from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider";
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureIMG1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  {
    title: "Super Dine In",
    imgUrl: featureIMG2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureIMG3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
];
const Home = () => {
  const [category, setCategory] = useState("STEAK");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    // if (category === "ALL") {
    //   setAllProducts(products);
    // }

    if (category === "STEAK") {
      const filteredProducts = products.filter(
        (item) => item.category === "Steak"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "FISH") {
      const filteredProducts = products.filter(
        (item) => item.category === "Fish"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "ICECREAM") {
      const filteredProducts = products.filter(
        (item) => item.category === "IceCream"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "CUPCAKE") {
      const filteredProducts = products.filter(
        (item) => item.category === "CupCake"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "FRUITS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Fruits"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "SALAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Salad"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "DRINK") {
      const filteredProducts = products.filter(
        (item) => item.category === "Drink"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title="HomePage">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="shipper_content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 shipper_title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis, tenetur autem,
                  sint veritatis!
                </p>

                <div className="shipper_btns d-flex align-items-center gap-5 mt-4">
                  <button className="order_btn d-flex align-items-center justify-content-between">
                    Order now <FiChevronsRight />
                  </button>

                  <button className="all_foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className=" shipper_service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping_icon">
                      <TbTruckDelivery className="i" />
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping_icon">
                      <BsShieldCheck className="i" />
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="shipper_img">
                <img src={img1} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature_subtitle mb-4">What we serve</h5>
              <h2 className="feature_title">Just sit back at home</h2>
              <h2 className="feature_title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature_text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="4" key={index} className="mt-5">
                <div className="feature_item text-center py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-30 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food_category d-flex align-items-center  gap-4 ">
                <button
                  className={`d-flex flex-column align-items-center gap-2 ${
                    category === "STEAK" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("STEAK")}
                >
                  <img src={meaticon} alt="" />
                  Steak
                </button>

                <button
                  className={`d-flex flex-column align-items-center gap-2 ${
                    category === "FISH" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("FISH")}
                >
                  <img src={fishicon} alt="" />
                  Fish
                </button>

                <button
                  className={`d-flex flex-column align-items-center gap-2 ${
                    category === "SALAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("SALAD")}
                >
                  <img src={saladicon} alt="" />
                  Salad
                </button>
                <button
                  className={`d-flex flex-column align-items-center gap-2 ${
                    category === "ICECREAM" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ICECREAM")}
                >
                  <img src={icecreamicon} alt="" />
                  Ice Cream
                </button>

                <button
                  className={`d-flex flex-column align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={pizzaicon} alt="" />
                  Pizza
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="why_choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyIMG} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why_tasty-treat">
                <h2 className="tasty_treat-title mb-4">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="tasty_treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose_us-title d-flex align-items-center gap-2 ">
                      <AiOutlineCheckCircle className="check-i " /> Fresh and
                      tasty foods
                    </p>
                    <p className="choose_us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us-title d-flex align-items-center gap-2 ">
                      <AiOutlineCheckCircle className="check-i " /> Quality
                      support
                    </p>
                    <p className="choose_us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us-title d-flex align-items-center gap-2 ">
                      <AiOutlineCheckCircle className="check-i " />
                      Order from any location
                    </p>
                    <p className="choose_us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img
                src={networkImg}
                alt="testimonial-img"
                className="w-100 net-img"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;

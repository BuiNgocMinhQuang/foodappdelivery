import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/meat-icon.svg";
import categoryImg02 from "../../../assets/images/fish-icon.svg";
import categoryImg03 from "../../../assets/images/pizza-icon.svg";
import categoryImg04 from "../../../assets/images/icecream-icon.svg";

import "../../../styles/category.scss";

const categoryData = [
  {
    display: "Steak",
    imgUrl: categoryImg01,
  },
  {
    display: "Fish",
    imgUrl: categoryImg02,
  },

  {
    display: "Fast Food",
    imgUrl: categoryImg03,
  },

  {
    display: "Desserts",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category_item d-flex align-items-center gap-3">
              <div className="category_img">
                <img src={item.imgUrl} alt="category_item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;

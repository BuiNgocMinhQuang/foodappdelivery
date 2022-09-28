import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommentSection from "../components/UI/common-section/CommentSection";
import { Container, Row, Col } from "reactstrap";
import { BsSearch } from "react-icons/bs";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import "../styles/allfood.scss";
import "../styles/pagination.scss";
import ReactPaginate from "react-paginate";
const AllFood = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Helmet title="All-Foods">
      <CommentSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div
                className="search-widget d-flex align-item-center 
              justify-content-between "
              >
                <input
                  type="text"
                  placeholder="What are you looking ?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <BsSearch />
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting-widget text-end">
                <select className="">
                  <option>Default</option>
                  <option value="ascending">A to Z</option>
                  <option value="descending">Z to A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-5">
                <ProductCard item={item} key={item.id} />
              </Col>
            ))}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFood;

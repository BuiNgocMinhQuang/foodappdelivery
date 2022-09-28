import React from "react";
import { Container } from "reactstrap";
import "../../../styles/commonsection.scss";
const CommenSection = (props) => {
  return (
    <section className="common__section ">
      <Container>
        <h2 className="text-white">{props.title}</h2>
      </Container>
    </section>
  );
};

export default CommenSection;

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import FormMain from "../Form/FormMain";
import girl1Icon from "../../resources/images/girl2.jpg";
export const FormPage = () => {
  return (
    <Container style={{ marginTop: "120px", marginBottom: "20px" }}>
      <Row>
        <Col sm={true}>
          <FormMain />
        </Col>
        <Col sm={true} className="fill ">
          <Image src={`${girl1Icon}`} thumbnail />
        </Col>
      </Row>
    </Container>
  );
};

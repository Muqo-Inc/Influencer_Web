import React, { useRef } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import MuqoIcon from "../../resources/images/muqo.svg";
import { withRouter } from "react-router-dom";
import InternationalImg from "../../resources/images/international2.png";
import UsaCanadaImg from "../../resources/images/UsaCanada.png";

export const GetStartedPage = ({ history, location }) => {
  const target = useRef(null);

  return (
    <div>
      <Container style={{ marginTop: "120px", marginBottom: "20px" }}>
        <Row>
          <Col></Col>
          <Col>
            {" "}
            <Image src={MuqoIcon} fluid />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col style={{ textAlign: "center" }}>
            <h1>Influencer</h1>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col style={{ textAlign: "center" }}>
            <h1>Choose Your Region</h1>
          </Col>
          <Col></Col>
        </Row>
        <Row
          className="justify-content-md-center"
          style={{ alignItems: "center", textAlign: "center" }}
        >
          <Col xs lg="2">
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              animation="false"
              overlay={
                <Tooltip id="button-tooltip">
                  Click here to choose your region
                </Tooltip>
              }
              key={"1"}
            >
              <Button
                variant="primary"
                size="lg"
                style={{ width: "200px", height: "150px" }}
                onClick={() =>
                  history.push({
                    pathname: "/form",
                    state: {
                      mainType: location.state.mainType,
                      subType: "north_america",
                    },
                  })
                }
              >
                <Image
                  ref={target}
                  src={UsaCanadaImg}
                  alt="my image"
                  className="get-started-page-img-class"
                />
                North America
              </Button>
            </OverlayTrigger>
          </Col>
          <Col md="auto"></Col>
          <br />
          <Col xs lg="2">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip id="button-tooltip">
                  Click here to choose your region
                </Tooltip>
              }
              animation="false"
              key={"2"}
            >
              <Button
                variant="primary"
                size="lg"
                style={{ width: "200px", height: "150px" }}
                onClick={() =>
                  history.push({
                    pathname: "/form",
                    state: {
                      mainType: location.state.mainType,
                      subType: "international",
                    },
                  })
                }
              >
                <Image
                  src={InternationalImg}
                  alt="my image"
                  className="get-started-page-img-class"
                  ref={target}
                />
                International
              </Button>
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default withRouter(GetStartedPage);

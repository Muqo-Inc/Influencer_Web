import React, { useState, useEffect } from "react";
import backgroundVideo from "../../../resources/videos/background_c.mp4";
import backgroundVideo2 from "../../../resources/videos/background1.mp4";
import muqoIcon from "../../../resources/images/muqo.svg";
import "./landing-page.css";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function LandingPage({ history }) {
  const [videoSrc, setVideoSrc] = useState(backgroundVideo);
  var bool = true;

  const videoTimePlay = async () => {
    await setInterval(() => {
      if (bool) {
        setVideoSrc(backgroundVideo2);
        bool = !bool;
      } else {
        setVideoSrc(backgroundVideo);
        bool = !bool;
      }
    }, 1000 * 25);
  };
  useEffect(() => {
    videoTimePlay();
  }, [videoTimePlay]);

  return (
    <div>
      <div className="video-background">
        <div className="video-wrap">
          <div id="video">
            <video
              autoPlay="autoplay"
              loop="loop"
              muted
              key={videoSrc}
              id={"vgvid"}
              playsInline="playsinline"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="caption text-center">
        <div className="inner">
          <Image src={muqoIcon} className="landingpage-brand-image" />
          <h1 className="cursive">Verified Influencer</h1>
          <h4 style={{ color: "red" }}>We Are Music </h4>
          <br />
          <Container>
            <Container>
              <Row className="justify-content-md-center">
                <Col xs lg="2">
                  <Button
                    variant="outline-danger"
                    size="lg"
                    style={{ width: "200px" }}
                    onClick={() =>
                      history.push({
                        pathname: "/get_started",
                        state: { mainType: "prop_affliate" },
                      })
                    }
                  >
                    Pro Affiliates
                  </Button>
                </Col>
                <Col md="auto"></Col>
                <br />
                <Col xs lg="2">
                  <Button
                    variant="outline-danger"
                    size="lg"
                    style={{ width: "200px" }}
                    onClick={() =>
                      history.push({
                        pathname: "/get_started",
                        state: { mainType: "vip" },
                      })
                    }
                  >
                    VIP
                  </Button>{" "}
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LandingPage);

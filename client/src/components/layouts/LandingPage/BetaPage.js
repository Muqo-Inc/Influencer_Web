import React, { useState } from "react";
import axios from "axios";

import { Button, Image, Form, Container, Row, Col } from "react-bootstrap";

import "./landing-page.css";
import muqoIcon from "../../../resources/images/mq.svg";
const BetaPage = () => {
  let inititalBetaUser = { name: "", username: "", email: "" };
  const [betaUser, setBetaUser] = useState(inititalBetaUser);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setBetaUser({ ...betaUser, [name]: value });
  };
  const handleRecordSubmission = (event) => {
    event.preventDefault();
    submitBetaUserForm(betaUser);
    setBetaUser(inititalBetaUser);
  };

  const submitBetaUserForm = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`/api/beta-user`, formData, config);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container style={{ marginTop: "10%" }}>
        <Row className="justify-content-md-center">
          <Col>
            <div>
              <Image src={muqoIcon} className="beta-page-icon" />
              <h5 style={{ padding: "5px", textAlign: "center" }}>
                Hey, Mq Music is currently an invite only private beta app but
                our team is working hard to make it open to everyone very soon!
              </h5>
              <h6 style={{ padding: "5px" }}>
                You can reserve your username and join our waitlist by entering
                your name and email below.
              </h6>
              <Form
                inline
                onSubmit={handleRecordSubmission}
                style={{
                  padding: "5px",
                  textAlign: "center",
                  alignItems: "center",
                  margin: "auto",
                  width: "70% ",
                }}
              >
                <Form.Label htmlFor="inlineFormInputName2" srOnly>
                  Name
                </Form.Label>
                <Form.Control
                  className="mb-2 mr-sm-2"
                  id="inlineFormInputName2"
                  placeholder="Your Name"
                  type="text"
                  name="name"
                  value={betaUser.name}
                  onChange={handleOnChange}
                  required
                />{" "}
                <Form.Label htmlFor="inlineFormInputName2" srOnly>
                  Username
                </Form.Label>
                <Form.Control
                  className="mb-2 mr-sm-2"
                  id="inlineFormInputName2"
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={betaUser.username}
                  onChange={handleOnChange}
                  required
                />{" "}
                <Form.Label htmlFor="inlineFormInputName2" srOnly>
                  E-Mail{" "}
                </Form.Label>
                <Form.Control
                  className="mb-2 mr-sm-2"
                  id="inlineFormInputName2"
                  placeholder="E-Mail"
                  type="email"
                  name="email"
                  value={betaUser.email}
                  onChange={handleOnChange}
                  required
                />
                <Button type="submit" className="mb-2">
                  Submit
                </Button>
              </Form>
              <p
                style={{
                  fontSize: " 90%",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Welcome to the music movement.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BetaPage;

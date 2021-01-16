import React from "react";
import {
  Button,
  Image,
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import "./landing-page.css";
import muqoIcon from "../../../resources/images/muqo.svg";
const BetaPage = () => {
  return (
    <>
      <div className="centered ">
        <Image src={muqoIcon} className="beta-page-icon" />
        <h4>
          Hey, Mq Music is currently an invite only private beta app but our
          team is working hard to make it open to everyone very soon!
        </h4>
        <h5>
          You can reserve your username and join our waitlist by entering your
          name and email below.
        </h5>
        <Form inline>
          <Form.Label htmlFor="inlineFormInputName2" srOnly>
            Name
          </Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="Your Name"
            type="text"
          />{" "}
          <Form.Label htmlFor="inlineFormInputName2" srOnly>
            Username
          </Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="Username"
            type="text"
          />{" "}
          <Form.Label htmlFor="inlineFormInputName2" srOnly>
            E-Mail{" "}
          </Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="E-Mail"
            type="email"
          />
          <Button type="submit" className="mb-2">
            Submit
          </Button>
        </Form>
        <h6>We look forward to having you join the music movement.</h6>
      </div>
    </>
  );
};

export default BetaPage;

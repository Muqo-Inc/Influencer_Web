import React, { useState } from "react";
import { Form, Button, Col, Container, Row, Image } from "react-bootstrap";
import "./login-page.css";
import muqoIcon from "../../../resources/images/muqo.svg";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../redux/actions/influencersActions";

const LogInPage = ({ isAuthenticated, login }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/admin" />;
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Image
            src={muqoIcon}
            style={{ height: "150px", width: "150px" }}
            rounded
          />{" "}
          <h1 className="large text-primary">Log In</h1>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                onChange={(e) => onChange(e)}
                value={username}
                name="username"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => onChange(e)}
                minLength="6"
                name="password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Log In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

LogInPage.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.influencer.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LogInPage);

import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { nextStep } from "../../redux/actions/influencersActions";

import { connect } from "react-redux";

const StepOne = ({ nextStep, inputChange, values }) => {
  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={inputChange()}
              value={values.firstName}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={inputChange()}
              value={values.lastName}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={inputChange()}
              value={values.email}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>PhoneNumber</Form.Label>
            <Form.Control
              placeholder="Phone Number"
              type="tel"
              name="phoneNumber"
              onChange={inputChange()}
              value={values.phoneNumber}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              name="street"
              onChange={inputChange()}
              value={values.address["street"] || ""}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="address">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city"
              onChange={inputChange()}
              value={values.address["city"] || ""}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="address">
            <Form.Label>State</Form.Label>
            <Form.Control
              name="state"
              onChange={inputChange()}
              value={values.address["state"] || ""}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="address">
            <Form.Label>Country</Form.Label>
            <Form.Control
              name="country"
              onChange={inputChange()}
              value={values.address["country"] || ""}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="address">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              name="zip"
              onChange={inputChange()}
              value={values.address["zip"] || ""}
            />
          </Form.Group>
        </Form.Row>
      </Form.Group>
      <br />

      <div className="text-right">
        <Button
          variant="primary"
          onClick={() => {
            nextStep();
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default connect(null, {
  nextStep,
})(StepOne);

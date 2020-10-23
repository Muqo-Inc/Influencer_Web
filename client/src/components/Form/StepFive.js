import React from "react";
import { Form, Button, Col } from "react-bootstrap";

import { nextStep, prevStep } from "../../redux/actions/influencersActions";

import { connect } from "react-redux";

const StepFive = ({ nextStep, prevStep, inputChange, values }) => {
  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
              Please list any special talents you have, or anything you would
              like us to know about you. For example, are you a musician or
              dancer? Are you a professional or social media sensation? *
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="specialTalents"
              onChange={inputChange()}
              value={values.specialTalents}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label style={{ fontSize: 16, fontWeight: "bold" }}>
              Headshot *
            </Form.Label>
            <Form.File
              style={{ fontSize: 11, fontWeight: "bold" }}
              id="exampleFormControlFile1"
              name="knowledgeAboutApp"
              onChange={inputChange()}
            />
            <Form.Label>Allowed file jpg, jpeg, png, pdf</Form.Label>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label style={{ fontSize: 16, fontWeight: "bold" }}>
              Full Body Photo *
            </Form.Label>
            <Form.File
              style={{ fontSize: 11, fontWeight: "bold" }}
              id="exampleFormControlFile1"
              name="knowledgeAboutApp"
              onChange={inputChange()}
            />
            <Form.Label>Allowed file jpg, jpeg, png, pdf</Form.Label>
          </Form.Group>
        </Form.Row>
      </Form.Group>
      <br />

      <div className="row">
        <div className="col-6">
          <Button
            variant="danger"
            onClick={() => {
              prevStep();
            }}
          >
            Back
          </Button>
        </div>
        <div className="col-6 text-right">
          <Button variant="primary" onClick={() => nextStep()}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
export default connect(null, {
  nextStep,
  prevStep,
})(StepFive);

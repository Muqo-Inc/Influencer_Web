import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { nextStep, prevStep } from "../../redux/actions/influencersActions";

import { connect } from "react-redux";
const StepTwo = ({ nextStep, prevStep, inputChange, values }) => {
  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
            <Form.Label>What is your profession?</Form.Label>
            <Form.Control
              as="select"
              name="profession"
              onChange={inputChange()}
              value={values.profession}
            >
              <option>Choose...</option>
              <option value="Musician">Musician</option>
              <option value="DJ">DJ</option>
              <option value="Dancer">Dancer</option>
              <option value="Athlete">Athlete</option>
              <option value="Model">Model</option>
              <option value="Gamer">Gamer</option>
              <option value="Comedian">Comedian</option>
              <option value="Influencer">Influencer</option>
              <option value="Entrepreneur">Entrepreneur</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
              I want to be a Mq Music Influencer/Musician because…
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="whyInfluencer"
              onChange={inputChange()}
              value={values.whyInfluencer}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
              Have you ever worked as a promotional musician/ dancer/
              model/athlete/ambassador?
            </Form.Label>
            <Form.Check
              custom
              inline
              label="Yes"
              type={"radio"}
              name="workedPromotional"
              id={`workedPromotional-custom-inline-checkbox-1`}
              value={true}
              onChange={inputChange()}
            />
            <Form.Check
              custom
              inline
              label="No"
              type={"radio"}
              name="workedPromotional"
              id={`workedPromotional-custom-inline-checkbox-2`}
              value={false}
              onChange={inputChange()}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridUsedApp">
            <Form.Label>
              Do you, or have you, used our app to make or watch music videos?
            </Form.Label>
            <br />
            <Form.Check
              custom
              inline
              label="Yes"
              type={"radio"}
              name="usedTheApp"
              value={true}
              id={`usedTheApp-custom-inline-checkbox-3`}
              onChange={inputChange()}
            />
            <Form.Check
              custom
              inline
              label="No"
              type={"radio"}
              name="usedTheApp"
              id={`usedTheApp-custom-inline-checkbox-4`}
              value={false}
              onChange={inputChange()}
            />
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
})(StepTwo);

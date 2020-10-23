import React from "react";
import { Form, Button, Col } from "react-bootstrap";

import { prevStep } from "../../redux/actions/influencersActions";

import { connect } from "react-redux";

const StepSeven = ({ prevStep, inputChange }) => {
  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridUsedApp">
            <Form.Label>
              Once accepted as a Verified influencer partner do you give us
              permission to promote your posts on Muqo’s trending page and share
              your posts to other social media accounts?
            </Form.Label>
            <br />
            <Form.Check
              label="Yes"
              type={"radio"}
              name="canPromotePosts"
              onChange={inputChange()}
              id={`canPromotePosts-custom-inline-checkbox-5`}
              value={true}
            />
            <Form.Check
              label="No"
              type={"radio"}
              name="canPromotePosts"
              onChange={inputChange()}
              id={`canPromotePosts-custom-inline-checkbox-5`}
              value={false}
            />{" "}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridUsedApp">
            <Form.Label>
              Once accepted as a Verified Influencer Partner will you share your
              referral code to other social media accounts?
            </Form.Label>
            <br />
            <Form.Check
              label="Yes"
              type={"radio"}
              name="shareRefCode"
              onChange={inputChange()}
              id={`shareRefCode-custom-inline-checkbox-5`}
              value={true}
            />
            <Form.Check
              label="No"
              type={"radio"}
              name="shareRefCode"
              onChange={inputChange()}
              id={`shareRefCode-custom-inline-checkbox-5`}
              value={false}
            />{" "}
          </Form.Group>
        </Form.Row>
      </Form.Group>
      <br />

      <div className="row">
        <div className="col-6">
          <Button variant="danger" onClick={() => prevStep()}>
            Back
          </Button>
        </div>
        <div className="col-6 text-right">
          <Button variant="success" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  prevStep,
})(StepSeven);

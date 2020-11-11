import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";

import { prevStep, nextStep } from "../../redux/actions/influencersActions";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as yup from "yup";
import { Formik } from "formik";

const StepSeven = ({ prevStep, nextStep, formData, handleFormSubmit }) => {
  const [direction, setDirection] = useState("back");

  const schema = yup.object({
    canPromotePosts: yup.bool().required("This field  is Required"),
    shareRefCode: yup.bool().required("This field  is Required"),
  });

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          direction === "back" ? prevStep() : handleFormSubmit();
        }}
        initialValues={formData}
      >
        {({ handleSubmit, values }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
              <ListGroup>
                <ListGroup.Item as="li" active>
                  Please Confirm and Submit
                </ListGroup.Item>
                <ListGroup.Item>First Name : {values.firstName}</ListGroup.Item>
                <ListGroup.Item>Last Name : {values.firstName}</ListGroup.Item>
                <ListGroup.Item>Email : {values.email}</ListGroup.Item>
                <ListGroup.Item>
                  Phone Number : {values.phoneNumber}
                </ListGroup.Item>
              </ListGroup>
            </Form.Group>
            <br />

            <div className="row">
              <div className="col-6">
                <Button
                  variant="danger"
                  type="submit"
                  name="back_button"
                  onClick={() => setDirection("back")}
                >
                  Back
                </Button>
              </div>
              <div className="col-6 text-right">
                <Button
                  variant="success"
                  type="submit"
                  onClick={() => setDirection("forward")}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default connect(null, {
  prevStep,
  nextStep,
})(withRouter(StepSeven));

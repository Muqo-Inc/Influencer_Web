import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";

import { prevStep } from "../../redux/actions/influencersActions";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as yup from "yup";
import { Formik } from "formik";

const StepSeven = ({ prevStep, formData, setFormData, handleFormSubmit }) => {
  const [direction, setDirection] = useState("back");

  const schema = yup.object({
    canPromotePosts: yup.bool().required("This field  is Required"),
    shareRefCode: yup.bool().required("This field  is Required"),
  });

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={(values, e) => {
          setFormData(values);
          if (direction === "back") {
            prevStep();
          }
        }}
        initialValues={formData}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={(e) => handleFormSubmit(e)}>
            <Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridUsedApp">
                  <Form.Label>
                    Once accepted as a Verified influencer partner do you give
                    us permission to promote your posts on Muqo’s trending page
                    and share your posts to other social media accounts?
                  </Form.Label>
                  <br />
                  <Form.Check
                    custom
                    inline
                    label="Yes"
                    type={"radio"}
                    name="canPromotePosts"
                    id={`canPromotePosts-custom-inline-checkbox-5`}
                    value={true}
                    onChange={handleChange}
                    isInvalid={!!errors.canPromotePosts}
                  />
                  <Form.Check
                    custom
                    inline
                    label="No"
                    type={"radio"}
                    name="canPromotePosts"
                    onChange={handleChange}
                    isInvalid={!!errors.canPromotePosts}
                    id={`canPromotePosts-custom-inline-checkbox-6`}
                    value={false}
                  />{" "}
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridUsedApp">
                  <Form.Label>
                    Once accepted as a Verified Influencer Partner will you
                    share your referral code to other social media accounts?
                  </Form.Label>
                  <br />
                  <Form.Check
                    custom
                    inline
                    label="Yes"
                    type={"radio"}
                    name="shareRefCode"
                    onChange={handleChange}
                    isInvalid={!!errors.shareRefCode}
                    id={`shareRefCode-custom-inline-checkbox-5`}
                    value={true}
                  />
                  <Form.Check
                    custom
                    inline
                    label="No"
                    type={"radio"}
                    name="shareRefCode"
                    onChange={handleChange}
                    isInvalid={!!errors.shareRefCode}
                    id={`shareRefCode-custom-inline-checkbox-6`}
                    value={false}
                  />{" "}
                </Form.Group>
              </Form.Row>
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
})(withRouter(StepSeven));

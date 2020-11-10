import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { nextStep, prevStep } from "../../redux/actions/influencersActions";
import * as yup from "yup";
import { Formik } from "formik";

import { connect } from "react-redux";

const StepTwo = ({
  nextStep,
  prevStep,

  formData,
  setFormData,
}) => {
  const [direction, setDirection] = useState("back");

  const schema = yup.object({
    profession: yup.string().required("profession is Required"),
    whyInfluencer: yup.string().required("This field  is Required"),
    workedPromotional: yup.bool().required("This field  is Required"),
    usedTheApp: yup.bool().required("This field  is Required"),
  });

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          setFormData(values);
          direction === "back" ? prevStep() : nextStep();
        }}
        initialValues={formData}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,

          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                  <Form.Label>What is your profession?</Form.Label>
                  <Form.Control
                    as="select"
                    name="profession"
                    onChange={handleChange}
                    value={values.profession}
                    isInvalid={!!errors.profession}
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

                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
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
                    onChange={handleChange}
                    value={values.whyInfluencer}
                    isInvalid={!!errors.whyInfluencer}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.whyInfluencer}
                  </Form.Control.Feedback>
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
                    // checked={values.workedPromotional === true}
                    onChange={handleChange}
                    isInvalid={!!errors.workedPromotional}
                    // feedback={errors.workedPromotional}
                  />
                  <Form.Check
                    custom
                    inline
                    label="No"
                    type={"radio"}
                    name="workedPromotional"
                    id={`workedPromotional-custom-inline-checkbox-2`}
                    value={false}
                    // checked={values.workedPromotional === false}
                    onChange={handleChange}
                    isInvalid={!!errors.workedPromotional}
                    // feedback={errors.workedPromotional}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridUsedApp">
                  <Form.Label>
                    Do you, or have you, used our app to make or watch music
                    videos?
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
                    onChange={handleChange}
                    isInvalid={!!errors.usedTheApp}
                  />
                  <Form.Check
                    custom
                    inline
                    label="No"
                    type={"radio"}
                    name="usedTheApp"
                    id={`usedTheApp-custom-inline-checkbox-4`}
                    value={false}
                    onChange={handleChange}
                    isInvalid={!!errors.usedTheApp}
                  />
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
                  variant="primary"
                  type="submit"
                  name="continue_button"
                  onClick={() => setDirection("forward")}
                >
                  Continue
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <br />
    </div>
  );
};

export default connect(null, {
  nextStep,
  prevStep,
})(StepTwo);

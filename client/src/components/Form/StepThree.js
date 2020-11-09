import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { nextStep, prevStep } from "../../redux/actions/influencersActions";
import * as yup from "yup";
import { Formik, Field } from "formik";
import { connect } from "react-redux";

const StepThree = ({
  nextStep,
  prevStep,
  inputChange,
  formData,
  setFormData,
}) => {
  const [direction, setDirection] = useState("back");

  const schema = yup.object({
    knowledgeAboutApp: yup.string().required("This field is Required"),
    timeForMusic: yup.number().required("This field  is Required"),
    partOfTeam: yup.bool().required("This field  is Required"),
    favMusicGenre: yup.array().required("This field  is Required"),
  });
  return (
    <div>
      {" "}
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
          touched,
          isValid,
          isInvalid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {console.log(values, errors)}
            <Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridUsedApp">
                  <Form.Label>How much do you know about our app? *</Form.Label>
                  <br />
                  <Form.Check
                    label="I am an expert"
                    type={"radio"}
                    id={`knowledgeAboutApp-custom-inline-checkbox-1`}
                    name="knowledgeAboutApp"
                    onChange={handleChange}
                    value={"expert"}
                    isInvalid={!!errors.knowledgeAboutApp}
                  />
                  <Form.Check
                    label="I know quite a bit"
                    type={"radio"}
                    name="knowledgeAboutApp"
                    id={`knowledgeAboutApp-custom-inline-checkbox-2`}
                    onChange={handleChange}
                    value={"I know quite a bit"}
                    isInvalid={!!errors.knowledgeAboutApp}
                  />{" "}
                  <Form.Check
                    label="I’ve heard of them"
                    type={"radio"}
                    name="knowledgeAboutApp"
                    id={`knowledgeAboutApp-custom-inline-checkbox-3`}
                    onChange={handleChange}
                    value={"I’ve heard of them"}
                    isInvalid={!!errors.knowledgeAboutApp}
                  />{" "}
                  <Form.Check
                    label="What’s Mq Music?"
                    type={"radio"}
                    name="knowledgeAboutApp"
                    id={`knowledgeAboutApp-custom-inline-checkbox-4`}
                    onChange={handleChange}
                    isInvalid={!!errors.knowledgeAboutApp}
                    value={"What’s Mq Music?"}
                  />
                </Form.Group>
                <Form.Control.Feedback type="invalid">
                  {errors.knowledgeAboutApp}
                </Form.Control.Feedback>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>
                    Have you ever been part of a band, dance group or team? *
                  </Form.Label>
                  <br />
                  <Form.Check
                    custom
                    inline
                    label="Yes"
                    type={"radio"}
                    name="partOfTeam"
                    id={`partOfTeam-custom-inline-checkbox-1`}
                    onChange={handleChange}
                    value={true}
                    onChange={handleChange}
                    isInvalid={!!errors.partOfTeam}
                  />
                  <Form.Check
                    custom
                    inline
                    label="No"
                    type={"radio"}
                    name="partOfTeam"
                    id={`partOfTeam-custom-inline-checkbox-2`}
                    onChange={handleChange}
                    value={false}
                    isInvalid={!!errors.partOfTeam}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>
                    How many times a week do you play music / dance?
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="timeForMusic"
                    onChange={handleChange}
                    value={values.timeForMusic}
                    isInvalid={!!errors.timeForMusic}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Whats your favourite music genre?</Form.Label>
                  <br />
                  <Form.Check
                    label="HipHop"
                    type={"checkbox"}
                    name="favMusicGenre"
                    id={`favMusicGenre-custom-inline-checkbox-1`}
                    onChange={handleChange}
                    value={"HipHop"}
                    checked={values.favMusicGenre["HipHop"]}
                    isInvalid={!!errors.favMusicGenre}
                  />{" "}
                  <Form.Check
                    label="Rock"
                    type={"checkbox"}
                    name="favMusicGenre"
                    id={`favMusicGenre-custom-inline-checkbox-2`}
                    onChange={handleChange}
                    value={"Rock"}
                    checked={values.favMusicGenre["Rock"]}
                    isInvalid={!!errors.favMusicGenre}
                  />
                  <Form.Check
                    label="POP"
                    type={"checkbox"}
                    name="favMusicGenre"
                    id={`favMusicGenre-custom-inline-checkbox-3`}
                    onChange={handleChange}
                    value={"POP"}
                    checked={values.favMusicGenre["POP"]}
                    isInvalid={!!errors.favMusicGenre}
                  />{" "}
                  <Form.Check
                    label="EDM"
                    type={"checkbox"}
                    name="favMusicGenre"
                    id={`favMusicGenre-custom-inline-checkbox-4`}
                    onChange={handleChange}
                    value={"EDM"}
                    checked={values.favMusicGenre["EDM"]}
                    isInvalid={!!errors.favMusicGenre}
                  />{" "}
                  <Form.Check
                    label="COUNTRY"
                    type={"checkbox"}
                    name="favMusicGenre"
                    id={`favMusicGenre-custom-inline-checkbox-5`}
                    onChange={handleChange}
                    value={"COUNTRY"}
                    checked={values.favMusicGenre["COUNTRY"]}
                    isInvalid={!!errors.favMusicGenre}
                  />
                  <Form.Check
                    label="Jazz"
                    type={"checkbox"}
                    name="favMusicGenre"
                    id={`favMusicGenre-custom-inline-checkbox-6`}
                    onChange={handleChange}
                    value={"Jazz"}
                    checked={values.favMusicGenre["Jazz"]}
                    isInvalid={!!errors.favMusicGenre}
                  />
                </Form.Group>
                <Form.Control.Feedback type="invalid">
                  {errors.favMusicGenre}
                </Form.Control.Feedback>
              </Form.Row>
            </Form.Group>
            <br />

            <div className="row">
              <div className="col-6">
                <Button
                  variant="danger"
                  type="submit"
                  onClick={() => setDirection("back")}
                >
                  Back
                </Button>
              </div>
              <div className="col-6 text-right">
                <Button
                  variant="primary"
                  type="submit"
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
})(StepThree);

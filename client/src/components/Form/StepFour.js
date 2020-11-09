import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { nextStep, prevStep } from "../../redux/actions/influencersActions";

import { connect } from "react-redux";
import * as yup from "yup";
import { Formik, Field } from "formik";

const StepFour = ({ nextStep, prevStep, formData, setFormData }) => {
  const [direction, setDirection] = useState("back");

  const schema = yup.object({
    favSocialMedia: yup.array().required("This field is Required"),
    whyInfluencer: yup.string().required("This field  is Required"),
    workedPromotional: yup.bool().required("This field  is Required"),
    verifiedSocialMedia: yup.bool().required("This field  is Required"),
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
          touched,
          isValid,
          isInvalid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {console.log(values, errors)}
            <Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>
                    Whats your favourite social media app?
                  </Form.Label>
                  <br />
                  <Form.Check
                    label="Facebook"
                    type={"checkbox"}
                    name="favSocialMedia"
                    id={`favSocialMedia-custom-inline-checkbox-1`}
                    onChange={handleChange}
                    checked={values.favSocialMedia["Facebook"]}
                    value={"Facebook"}
                    isInvalid={!!errors.favSocialMedia}
                  />
                  <Form.Check
                    label="Twitter"
                    type={"checkbox"}
                    name="favSocialMedia"
                    id={`favSocialMedia-custom-inline-checkbox-2`}
                    onChange={handleChange}
                    checked={values.favSocialMedia["Twitter"]}
                    value={"Twitter"}
                    isInvalid={!!errors.favSocialMedia}
                  />{" "}
                  <Form.Check
                    label="TikTok"
                    type={"checkbox"}
                    name="favSocialMedia"
                    id={`favSocialMedia-custom-inline-checkbox-3`}
                    onChange={handleChange}
                    checked={values.favSocialMedia["TikTok"]}
                    value={"TikTok"}
                    isInvalid={!!errors.favSocialMedia}
                  />{" "}
                  <Form.Check
                    label="Snapchat"
                    type={"checkbox"}
                    name="favSocialMedia"
                    id={`favSocialMedia-custom-inline-checkbox-4`}
                    onChange={handleChange}
                    checked={values.favSocialMedia["Snapchat"]}
                    value={"Snapchat"}
                    isInvalid={!!errors.favSocialMedia}
                  />
                  <Form.Check
                    label="Instagram"
                    type={"checkbox"}
                    name="favSocialMedia"
                    id={`favSocialMedia-custom-inline-checkbox-5`}
                    onChange={handleChange}
                    checked={values.favSocialMedia["Instagram"]}
                    value={"Instagram"}
                    isInvalid={!!errors.favSocialMedia}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridUsedApp">
                  <Form.Label>
                    Are you verified on any other social media apps?
                  </Form.Label>
                  <br />
                  <Form.Check
                    custom
                    inline
                    label="Yes"
                    type={"radio"}
                    name="verifiedSocialMedia"
                    id={`verifiedSocialMedia-custom-inline-checkbox-3`}
                    onChange={handleChange}
                    isInvalid={!!errors.verifiedSocialMedia}
                    value={true}
                  />
                  <Form.Check
                    custom
                    inline
                    label="No"
                    type={"radio"}
                    name="verifiedSocialMedia"
                    id={`verifiedSocialMedia-custom-inline-checkbox-4`}
                    onChange={handleChange}
                    value={false}
                    isInvalid={!!errors.verifiedSocialMedia}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>If Yes</Form.Label>
                  <Form.Control
                    type="text"
                    name="verifiedSocialMediaName"
                    placeholder="what is that?"
                    onChange={handleChange}
                    value={values.verifiedSocialMediaName}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Label>
                  Please list all social media accounts and how many
                  followers/friends you have on each.
                </Form.Label>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      placeholder="Instagram Username"
                      onChange={handleChange}
                      name={"instagramName"}
                      value={values.instagramName}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control
                      type="number"
                      placeholder="Instagram Followers"
                      onChange={handleChange}
                      name={"instagramFollowers"}
                      value={values.instagramFollowers}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      placeholder="YouTube/Twitch Channel"
                      onChange={handleChange}
                      name={"youtubeName"}
                      value={values.youtubeName}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control
                      type="number"
                      placeholder="Number of YouTube Subscribers"
                      onChange={handleChange}
                      name={"youtubeFollowers"}
                      value={values.youtubeFollowers}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      placeholder="TikTok Username"
                      onChange={handleChange}
                      name={"tiktokName"}
                      value={values.tiktokName}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control
                      type="number"
                      placeholder="TikTok Followers"
                      onChange={handleChange}
                      name={"tiktokFollowers"}
                      value={values.tiktokFollowers}
                    />
                  </Form.Group>
                </Form.Row>
              </Form.Group>
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
    </div>
  );
};

export default connect(null, {
  nextStep,
  prevStep,
})(StepFour);

import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { nextStep, prevStep } from "../../redux/actions/influencersActions";

import { connect } from "react-redux";

const StepFour = ({ nextStep, prevStep, inputChange, values }) => {
  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Whats your favourite social media app?</Form.Label>
            <br />
            <Form.Check
              label="Facebook"
              type={"checkbox"}
              name="favSocialMedia"
              id={`favSocialMedia-custom-inline-checkbox-1`}
              onChange={inputChange()}
              checked={values.favSocialMedia["Facebook"]}
              value={"Facebook"}
            />
            <Form.Check
              label="Twitter"
              type={"checkbox"}
              name="favSocialMedia"
              id={`favSocialMedia-custom-inline-checkbox-2`}
              onChange={inputChange()}
              checked={values.favSocialMedia["Twitter"]}
              value={"Twitter"}
            />{" "}
            <Form.Check
              label="TikTok"
              type={"checkbox"}
              name="favSocialMedia"
              id={`favSocialMedia-custom-inline-checkbox-3`}
              onChange={inputChange()}
              checked={values.favSocialMedia["TikTok"]}
              value={"TikTok"}
            />{" "}
            <Form.Check
              label="Snapchat"
              type={"checkbox"}
              name="favSocialMedia"
              id={`favSocialMedia-custom-inline-checkbox-4`}
              onChange={inputChange()}
              checked={values.favSocialMedia["Snapchat"]}
              value={"Snapchat"}
            />
            <Form.Check
              label="Instagram"
              type={"checkbox"}
              name="favSocialMedia"
              id={`favSocialMedia-custom-inline-checkbox-5`}
              onChange={inputChange()}
              checked={values.favSocialMedia["Instagram"]}
              value={"Instagram"}
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
              onChange={inputChange()}
              value={true}
            />
            <Form.Check
              custom
              inline
              label="No"
              type={"radio"}
              name="verifiedSocialMedia"
              id={`verifiedSocialMedia-custom-inline-checkbox-4`}
              onChange={inputChange()}
              value={false}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>If Yes</Form.Label>
            <Form.Control
              type="text"
              name="verifiedSocialMediaName"
              placeholder="what is that?"
              onChange={inputChange()}
              value={values.verifiedSocialMediaName}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>
            Please list all social media accounts and how many followers/friends
            you have on each.
          </Form.Label>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                placeholder="Instagram Username"
                onChange={inputChange()}
                name={"instagramName"}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                type="number"
                placeholder="Instagram Followers"
                onChange={inputChange()}
                name={"instagramFollowers"}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                placeholder="YouTube/Twitch Channel"
                onChange={inputChange()}
                name={"youtubeName"}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                type="number"
                placeholder="Number of YouTube Subscribers"
                onChange={inputChange()}
                name={"youtubeFollowers"}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                placeholder="TikTok Username"
                onChange={inputChange()}
                name={"tiktoName"}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                type="number"
                placeholder="TikTok Followers"
                onChange={inputChange()}
                name={"tiktokFollowers"}
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
})(StepFour);

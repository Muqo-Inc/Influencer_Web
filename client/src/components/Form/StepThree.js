import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { nextStep, prevStep } from "../../redux/actions/influencersActions";

import { connect } from "react-redux";
const StepThree = ({ nextStep, prevStep, inputChange, values }) => {
  return (
    <div>
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
              onChange={inputChange("knowledgeAboutApp")}
              value={"expert"}
            />
            <Form.Check
              label="I know quite a bit"
              type={"radio"}
              name="knowledgeAboutApp"
              id={`knowledgeAboutApp-custom-inline-checkbox-2`}
              onChange={inputChange("knowledgeAboutApp")}
              value={"I know quite a bit"}
            />{" "}
            <Form.Check
              label="I’ve heard of them"
              type={"radio"}
              name="knowledgeAboutApp"
              id={`knowledgeAboutApp-custom-inline-checkbox-3`}
              onChange={inputChange("knowledgeAboutApp")}
              value={"I’ve heard of them"}
            />{" "}
            <Form.Check
              label="What’s Mq Music?"
              type={"radio"}
              name="knowledgeAboutApp"
              id={`knowledgeAboutApp-custom-inline-checkbox-4`}
              onChange={inputChange("knowledgeAboutApp")}
              value={"What’s Mq Music?"}
            />
          </Form.Group>
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
              onChange={inputChange("partOfTeam")}
              value={true}
            />
            <Form.Check
              custom
              inline
              label="No"
              type={"radio"}
              name="partOfTeam"
              id={`partOfTeam-custom-inline-checkbox-2`}
              onChange={inputChange("partOfTeam")}
              value={false}
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
              onChange={inputChange("timeForMusic")}
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
              onChange={inputChange()}
              value={"HipHop"}
              checked={values.favMusicGenre["HipHop"]}
            />{" "}
            <Form.Check
              label="Rock"
              type={"checkbox"}
              name="favMusicGenre"
              id={`favMusicGenre-custom-inline-checkbox-2`}
              onChange={inputChange()}
              value={"Rock"}
              checked={values.favMusicGenre["Rock"]}
            />
            <Form.Check
              label="POP"
              type={"checkbox"}
              name="favMusicGenre"
              id={`favMusicGenre-custom-inline-checkbox-3`}
              onChange={inputChange()}
              value={"POP"}
              checked={values.favMusicGenre["POP"]}
            />{" "}
            <Form.Check
              label="EDM"
              type={"checkbox"}
              name="favMusicGenre"
              id={`favMusicGenre-custom-inline-checkbox-4`}
              onChange={inputChange()}
              value={"EDM"}
              checked={values.favMusicGenre["EDM"]}
            />{" "}
            <Form.Check
              label="COUNTRY"
              type={"checkbox"}
              name="favMusicGenre"
              id={`favMusicGenre-custom-inline-checkbox-5`}
              onChange={inputChange()}
              value={"COUNTRY"}
              checked={values.favMusicGenre["COUNTRY"]}
            />
            <Form.Check
              label="Jazz"
              type={"checkbox"}
              name="favMusicGenre"
              id={`favMusicGenre-custom-inline-checkbox-6`}
              onChange={inputChange()}
              value={"Jazz"}
              checked={values.favMusicGenre["Jazz"]}
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
})(StepThree);

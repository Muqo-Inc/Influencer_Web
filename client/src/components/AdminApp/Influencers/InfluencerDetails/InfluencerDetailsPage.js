import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAinfluencers } from "../../../../redux/actions/influencersActions";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Image,
  Tabs,
  Tab,
  ListGroup,
} from "react-bootstrap";

const InfluencerDetailsPage = ({
  influencer,
  sideBar,
  getAinfluencers,
  match,
}) => {
  useEffect(() => {
    getAinfluencers(match.params.id);
  }, [getAinfluencers, match.params.id]);

  console.log(influencer);
  return (
    <div
      className={sideBar ? " sidebar-open-content" : " sidebar-close-content"}
    >
      {influencer ? (
        <div>
          {
            <Container>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0d4CrFaUnD7NjPTdmbULFdsZ9DCcifMoj4Q&usqp=CAU"
                    rounded
                  />
                  <h6
                    style={{ alignItems: "center", textAlign: "center" }}
                  >{`${influencer.firstName}   ${influencer.lastName}`}</h6>
                  <h6
                    style={{ alignItems: "center", textAlign: "center" }}
                  >{`${influencer.region}`}</h6>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col>
                  <Tabs
                    defaultActiveKey="personal-details"
                    id="uncontrolled-tab-example"
                  >
                    <Tab eventKey="personal-details" title="Personal Details">
                      <ListGroup>
                        <ListGroup.Item>{`Name : ${influencer.firstName}  ${influencer.lastName}`}</ListGroup.Item>
                        <ListGroup.Item>{`Email : ${influencer.email}  `}</ListGroup.Item>
                        <ListGroup.Item>{`Phone Number : ${influencer.phoneNumber}  `}</ListGroup.Item>
                        <ListGroup.Item>{`Address : ${influencer.address}  `}</ListGroup.Item>
                        <ListGroup.Item>{`Age : ${influencer.age}  `}</ListGroup.Item>
                        <ListGroup.Item>{`Occupation : ${influencer.occupation}  `}</ListGroup.Item>
                        <ListGroup.Item>{`Profession : ${influencer.profession}  `}</ListGroup.Item>
                      </ListGroup>
                    </Tab>
                    <Tab eventKey="Muqo" title="Muqo">
                      <ListGroup>
                        <ListGroup.Item>{`WhyMqInfluencer : ${influencer.whyInfluencer}`}</ListGroup.Item>
                        <ListGroup.Item>{`workedPromotional : ${influencer.workedPromotional}  `}</ListGroup.Item>
                        <ListGroup.Item>{`usedTheApp : ${influencer.usedTheApp}  `}</ListGroup.Item>
                        <ListGroup.Item>{`knowledgeAboutApp : ${influencer.knowledgeAboutApp}  `}</ListGroup.Item>
                        <ListGroup.Item>{`partOfTeam : ${influencer.partOfTeam}  `}</ListGroup.Item>
                        <ListGroup.Item>{`timeForMusic : ${influencer.timeForMusic}  `}</ListGroup.Item>
                        <ListGroup.Item>{`favMusicGenre : ${influencer.favMusicGenre}  `}</ListGroup.Item>
                        <ListGroup.Item>{`specialTalents : ${influencer.specialTalents}  `}</ListGroup.Item>
                      </ListGroup>
                    </Tab>
                    <Tab eventKey="social-media" title="Social Media">
                      <ListGroup>
                        <ListGroup.Item>{`favSocialMedia : ${influencer.favSocialMedia}  `}</ListGroup.Item>
                        <ListGroup.Item>{`verifiedSocialMedia : ${influencer.verifiedSocialMedia}  `}</ListGroup.Item>
                        <ListGroup.Item>{`socialMedia : ${influencer.socialMedia}  `}</ListGroup.Item>
                        <ListGroup.Item>{`verifiedSocialMedia : ${influencer.verifiedSocialMedia}  `}</ListGroup.Item>
                        <ListGroup.Item>{`canPromotePosts : ${influencer.canPromotePosts}  `}</ListGroup.Item>
                        <ListGroup.Item>{`shareRefCode : ${influencer.shareRefCode}  `}</ListGroup.Item>
                      </ListGroup>
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </Container>
          }
        </div>
      ) : null}
    </div>
  );
};

InfluencerDetailsPage.propTypes = {
  influencer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  influencer: state.influencer.influencer,
  sideBar: state.influencer.sideBar,
});
export default connect(mapStateToProps, { getAinfluencers })(
  withRouter(InfluencerDetailsPage)
);

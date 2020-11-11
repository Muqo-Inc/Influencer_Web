import React, { useState } from "react";
import StepFive from "./StepFive";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import {
  submitInfluencerForm,
  nextStep,
  prevStep,
  closeFormSubmissionSuccessModal,
} from "../../redux/actions/influencersActions";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import FormConfirm from "./Confirm";

const FormMain = ({
  submitInfluencerForm,
  nextStep,
  prevStep,
  formStep,
  closeFormSubmissionSuccessModal,
  influencerFormSubmissionModalOpen,
  history,
  location,
}) => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: {},
    profession: "",
    whyInfluencer: "",
    workedPromotional: "",
    usedTheApp: "",
    knowledgeAboutApp: "",
    partOfTeam: "",
    timeForMusic: "",
    favMusicGenre: [],
    favSocialMedia: [],
    verifiedSocialMedia: "",
    verifiedSocialMediaName: "",
    instagramName: "",
    instagramFollowers: "",
    youtubeName: "",
    youtubeFollowers: "",
    tiktokName: "",
    tiktokFollowers: "",

    specialTalents: "",
    canPromotePosts: "",
    shareRefCode: "",
    region: "",
    influencerType: "",
  };
  const [influencer, setInfluencer] = useState(initialFormState);
  const [showModal, setShowModal] = useState(influencerFormSubmissionModalOpen);

  // const handleOnChange = () => (e) => {
  //   if (e.target.type === "checkbox") {
  //     if (e.target.name === "favMusicGenre") {
  //       if (influencer.favMusicGenre.includes(e.target.value)) {
  //         influencer.favMusicGenre = influencer.favMusicGenre.filter(
  //           (x) => x !== e.target.value
  //         );
  //       } else {
  //         influencer.favMusicGenre = [
  //           ...influencer.favMusicGenre,
  //           e.target.value,
  //         ];
  //       }
  //     } else if (e.target.name === "favSocialMedia") {
  //       if (influencer.favSocialMedia.includes(e.target.value)) {
  //         influencer.favSocialMedia = influencer.favSocialMedia.filter(
  //           (x) => x !== e.target.value
  //         );
  //       } else {
  //         influencer.favSocialMedia = [
  //           ...influencer.favSocialMedia,
  //           e.target.value,
  //         ];
  //       }
  //     }
  //   }

  //   if (e.target.id === "address") {
  //     influencer.address[e.target.name] = e.target.value;
  //   }
  //   console.log(influencer);
  //   setInfluencer({
  //     ...influencer,
  //     [e.target.name]: e.target.value,
  //     favMusicGenre: influencer.favMusicGenre,
  //     favSocialMedia: influencer.favSocialMedia,
  //     address: influencer.address,
  //     region: location.state.subType,
  //     influencerType: location.state.mainType,
  //   });
  // };
  console.log("in submit funcion", influencerFormSubmissionModalOpen);

  const handleSubmit = () => {
    // e.preventDefault();

    submitInfluencerForm(influencer);
    handleModalOpen();
  };

  const handleModalClose = () => {
    closeFormSubmissionSuccessModal();
    setShowModal(influencerFormSubmissionModalOpen);
    history.push(`/`);
  };
  const handleModalOpen = () => {
    setShowModal(influencerFormSubmissionModalOpen);
  };

  return (
    <div>
      {(() => {
        switch (formStep) {
          case 1:
            return (
              <StepOne
                nextStep={nextStep}
                formData={influencer}
                setFormData={setInfluencer}
              />
            );
          case 2:
            return (
              <StepTwo
                nextStep={nextStep}
                prevStep={prevStep}
                formData={influencer}
                setFormData={setInfluencer}
              />
            );
          case 3:
            return (
              <StepThree
                nextStep={nextStep}
                prevStep={prevStep}
                formData={influencer}
                setFormData={setInfluencer}
              />
            );
          case 4:
            return (
              <StepFour
                nextStep={nextStep}
                prevStep={prevStep}
                formData={influencer}
                setFormData={setInfluencer}
              />
            );
          case 5:
            return (
              <StepFive
                nextStep={nextStep}
                prevStep={prevStep}
                formData={influencer}
                setFormData={setInfluencer}
              />
            );
          case 6:
            return (
              <StepSix
                nextStep={nextStep}
                prevStep={prevStep}
                formData={influencer}
                setFormData={setInfluencer}
              />
            );
          case 7:
            return (
              <StepSeven
                nextStep={nextStep}
                prevStep={prevStep}
                formData={influencer}
                setFormData={setInfluencer}
              />
            );
          case 8:
            return (
              <FormConfirm
                nextStep={nextStep}
                prevStep={prevStep}
                formData={influencer}
                setFormData={setInfluencer}
                handleFormSubmit={handleSubmit}
              />
            );

          default:
            return null;
        }
      })()}

      {/* modal component */}

      <>
        <Modal
          show={influencerFormSubmissionModalOpen}
          onHide={handleModalClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Muqo</Modal.Title>
          </Modal.Header>
          <Modal.Body>Thanks for Submitting the Influencer Form</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleModalClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

FormMain.propTypes = {
  submitInfluencerForm: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  formStep: state.influencer.formStep,
  influencerFormSubmissionModalOpen:
    state.influencer.influencerFormSubmissionModalOpen,
});
export default connect(mapStateToProps, {
  submitInfluencerForm,
  nextStep,
  prevStep,
  closeFormSubmissionSuccessModal,
})(withRouter(FormMain));

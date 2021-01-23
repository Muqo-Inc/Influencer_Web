import React, { useEffect } from "react";
import { getInfluencers } from "../../../../redux/actions/influencersActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../DashBoard/dash-board.css";
import { withRouter } from "react-router-dom";
import BetaUserListPage from "./BetaUserListPage";

const InfluencersListPage = ({
  getInfluencers,
  influencers,
  sideBar,
  history,
}) => {
  useEffect(() => {
    getInfluencers();
  }, [getInfluencers]);

  console.log(influencers);
  const handleInfluencerSelect = (id) => {
    history.push(`/admin/influencer/${id}`);
  };
  return (
    <div
      className={
        sideBar
          ? "list-group sidebar-open-content"
          : "list-group sidebar-close-content"
      }
    >
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">E-MAIL</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {influencers &&
            influencers.map((influencer) => {
              return (
                <tr
                  key={influencer._id}
                  onClick={() => handleInfluencerSelect(influencer._id)}
                >
                  <td>{influencer.firstName}</td>
                  <td>{influencer.lastName}</td>
                  <td>{influencer.email}</td>
                  <td>{influencer.phoneNumber}</td>
                  <td>{"Canada"}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

InfluencersListPage.propTypes = {
  influencers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  influencers: state.influencer.influencers,
  sideBar: state.influencer.sideBar,
});

export default connect(mapStateToProps, { getInfluencers })(
  withRouter(BetaUserListPage)
);

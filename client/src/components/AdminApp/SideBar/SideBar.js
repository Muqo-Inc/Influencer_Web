import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./side-bar.css";
import { IconContext } from "react-icons";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  setActiveSidebar,
  setRemoveActiveSidebar,
} from "../../../redux/actions/influencersActions";

function SideBar({ setRemoveActiveSidebar, setActiveSidebar, sideBar }) {
  const handleSideBarChange = () => {
    if (sideBar) {
      setRemoveActiveSidebar();
    } else {
      setActiveSidebar();
    }
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar-admin ">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={handleSideBarChange} />
          </Link>
        </div>
        <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle" onClick={handleSideBarChange}>
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

SideBar.propTypes = {
  setRemoveActiveSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sideBar: state.influencer.sideBar,
});
export default connect(mapStateToProps, {
  setRemoveActiveSidebar,
  setActiveSidebar,
})(withRouter(SideBar));

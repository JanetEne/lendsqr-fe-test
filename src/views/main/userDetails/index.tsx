import ButtonComponent from "components/button";
import React from "react";
import { ReactComponent as BackArrow } from "assets/svg/backArrow.svg";
import { ReactComponent as ProfileIcon } from "assets/svg/profile.svg";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="userDetailsContainer">
      <div
        className="backArrowContainer"
        onClick={() => navigate("/app/users")}
        style={{ cursor: "pointer" }}>
        <BackArrow />
        <h3>Back to Users</h3>
      </div>
      <div className="headerTextButton">
        <h5>User Details</h5>
        <div className="buttonContainer">
          <ButtonComponent
            type="button"
            text="BLACKLIST USER"
            variant="danger"
          />
          <ButtonComponent
            type="button"
            text="ACTIVATE USER"
            variant="transparent"
          />
        </div>
      </div>
      <div className="profileCard">
        <div className="detailsSection">
          <div className="detailsContainer">
            <div className="profileDetailsContainer">
              <div className="profileContainer">
                <ProfileIcon />
              </div>
              <div className="textContainer">
                <h2>Grace Effiom</h2>
                <h6>LSQFf587g90</h6>
              </div>
            </div>
            <div className="line"></div>
            <div className="usersTier">
              <h5>Users Tier</h5>
            </div>
          </div>
        </div>
        <div className="tabs">
          <div className="options">
            <h5>General Details</h5>
          </div>
          <div className="options">
            <h4>Documents</h4>
          </div>
          <div className="options">
            <h4>Bank Details</h4>
          </div>
          <div className="options">
            <h4>Loans</h4>
          </div>
          <div className="options">
            <h4>Savings</h4>
          </div>
          <div className="options">
            <h4>App and System</h4>
          </div>
        </div>
      </div>

      <div className="userInformation">
        <h4>Personal Information</h4>
        <div className="personalInformationSection">
          <div>
            <h3>Full Name</h3>
            <h6>Grace Effiom</h6>
          </div>
          <div>
            <h3>Phone Number</h3>
            <h6>08055443377</h6>
          </div>
          <div>
            <h3>Email Address</h3>
            <h6>graceeffiom@gmail.com</h6>
          </div>
          <div>
            <h3>BVN</h3>
            <h6>2233445566</h6>
          </div>
          <div>
            <h3>Gender</h3>
            <h6>Female</h6>
          </div>
          <div>
            <h3>Marital Status</h3>
            <h6>Single</h6>
          </div>
          <div>
            <h3>Children</h3>
            <h6>None</h6>
          </div>
          <div>
            <h3>Type of Residence</h3>
            <h6>Parents Apartment</h6>
          </div>
        </div>

        <h4>Education and Employment</h4>
        <div className="educationInformationSection">
          <div>
            <h3>Level of Education</h3>
            <h6>B.sc</h6>
          </div>
          <div>
            <h3>Employment Status</h3>
            <h6>Employed</h6>
          </div>
          <div>
            <h3>Sector of employment</h3>
            <h6>fintech</h6>
          </div>
          <div>
            <h3>duration of employment</h3>
            <h6>2 years</h6>
          </div>
          <div>
            <h3>office email</h3>
            <h6>grace@lendsqr.com</h6>
          </div>
          <div>
            <h3>Monthly Income</h3>
            <h6>₦200,000.00- ₦400,000.00</h6>
          </div>
          <div>
            <h3>Loan repayment</h3>
            <h6>4 years</h6>
          </div>
        </div>

        <h4>Socials</h4>
        <div className="socialsInformationSection">
          <div>
            <h3>Twitter</h3>
            <h6>@grace_effiom</h6>
          </div>
          <div>
            <h3>Facebook</h3>
            <h6>Grace Effiom</h6>
          </div>
          <div>
            <h3>Instagram</h3>
            <h6>@grace_effiom</h6>
          </div>
        </div>

        <h4>Guarantor</h4>
        <div className="guarantorInformationSection">
          <div>
            <h3>Full Name</h3>
            <h6>Grace Effiom</h6>
          </div>
          <div>
            <h3>Phone Number</h3>
            <h6>08055443377</h6>
          </div>
          <div>
            <h3>Email Address</h3>
            <h6>graceeffiom@gmail.com</h6>
          </div>{" "}
          <div>
            <h3>Relationship</h3>
            <h6>Sister</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

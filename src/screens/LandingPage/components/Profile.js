import React from 'react';
import img from '../../../assets/patrick.jpg';
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile-container">
      <img className="profile-image" src={img} alt="Patrick Watrous" />
    </div>
  );
};

export default Profile;
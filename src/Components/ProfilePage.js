import React from "react";
import profile from '../Images/anushka-sharma-2v.jpg'

const ProfilePage = () => {
  return (
    <>
    <div className="row">
<div className="col"></div>
<div className="col">  <div className="container m-2">
        <div className="content border">
          <div className="mb-4">
            <h3>Account Settings</h3>
          </div>
          <div className="row bg-light">
            <div className="col-4"><img src={profile} alt="profile" style={{ borderRadius: "50%", width: "80%" }}/> </div>
            <div className="col-8"><h5>Marry Doe</h5>
            <p>Marry@Gmail.Com</p></div>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, expedita eaque fugit quo ullam iste deleniti ipsa
              exercitationem culpa ab.
            </p>
          </div>
       
       
        </div>
      </div></div>
      <div className="col"></div>
    </div>
    </>
  );
};

export default ProfilePage;

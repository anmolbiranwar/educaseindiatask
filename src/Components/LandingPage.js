import React from "react";
import "../CSS/LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="container m-2">
            <div className="content border">
              <h3>Welcome to PopX</h3>
              <p>
                Lorem ipsum, dolor sit amet,
                <br />
                consectetur adipisicing elit.
              </p>

              <Link to="/signup" className="btn btn-primary text-white d-block">
                Create Account
              </Link>
              <br />
              <Link to="/login" className="btn btn-secondary d-block">
                Already Registered? Login
              </Link>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
};

export default LandingPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
      companyName: "",
      isAgency: "",
    });
  };

  return (
    <>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="container m-2">
            <div className="content border">
              <h3>Create your PopX account</h3>
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend>Full Name</legend>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Marry Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset>
                  <legend>Phone Number</legend>
                  <input
                    type="text"
                    placeholder="Marry Doe"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset>
                  <legend>Email address</legend>
                  <input
                    type="email"
                    placeholder="Marry Doe"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset>
                  <legend>Password</legend>
                  <input
                    type="password"
                    placeholder="Marry Doe"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset>
                  <legend>Company name</legend>
                  <input
                    type="text"
                    placeholder="Marry Doe"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </fieldset>
                <div className="mb-3">
                  <label htmlFor="radioYes">Are you an Agency?</label>
                  <br />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="isAgency"
                    id="radioYes"
                    value="Yes"
                    // checked={formData.isAgency === "Yes"}
                    checked={true}
                    onChange={handleChange}
                  />
                  Yes
                  <input
                    className="form-check-input"
                    type="radio"
                    name="isAgency"
                    id="radioNo"
                    value="No"
                    checked={formData.isAgency === "No"}
                    onChange={handleChange}
                  />
                  No
                </div>
                <Link to="/profile" className="btn btn-primary d-block text-white" type="submit">
                  Create Account
                </Link>
              </form>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
};

export default SignupPage;

import React from "react";
import "./ApplicantDetails.css";

const ApplicantDetails = () => {
  return (
    <div className="applicant-details-container">
      <h1 className="title">Applicant Details</h1>
      <p className="subtitle">
        Please confirm the details below are correct before proceeding with the application.
      </p>

      <div className="card">
        <h3>Identification</h3>
        <select>
          <option value="">Method</option>
        </select>
      </div>

      <div className="card">
        <h3>Personal information</h3>
        <div className="grid-3">
          <input type="text" placeholder="Legal First Name" />
          <input type="text" placeholder="Legal Last Name" />
          <input type="date" placeholder="Date of Birth" />
        </div>
        <div className="grid-3">
          <input type="text" placeholder="Legal Middle Name (optional)" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="SIN" />
        </div>
        <input type="text" placeholder="Primary #" className="full-width" />
      </div>

      <div className="card">
        <h3>Address details</h3>
        <div className="address-row">
          <input type="radio" name="address" />
          <label>Civic Address</label>
          <a href="#">Enter manually</a>
        </div>
        <div className="address-row">
          <input type="radio" name="address" />
          <label>Mailing Address (optional)</label>
          <a href="#">Enter manually</a>
        </div>
      </div>

      <div className="card">
        <h3>Employment</h3>
        <div className="grid-3">
          <select>
            <option>Employment Status</option>
          </select>
          <select>
            <option>Industry</option>
          </select>
          <select>
            <option>Occupation</option>
          </select>
        </div>
        <div className="grid-2">
          <input type="text" placeholder="Employer Name" />
          <input type="text" placeholder="Employer Phone" />
        </div>
      </div>

      <div className="card">
        <h3>Things we need to ask</h3>
        <div className="grid-2">
          <select>
            <option>What is the nature of your business relationship?</option>
          </select>
          <select>
            <option>Are you a U.S person?</option>
          </select>
        </div>
        <select className="full-width">
          <option>
            Are you, a family member, or a close associate a politically exposed person or the head of an international organization?
          </option>
        </select>
        <select className="full-width">
          <option>
            Are you a tax resident of a jurisdiction other than the US or Canada?
          </option>
        </select>
        <select className="full-width">
          <option>Do you have an existing Client Consent form?</option>
        </select>
      </div>

      <div className="button-row">
        <button className="btn-next">Next</button>
      </div>
    </div>
  );
};

export default ApplicantDetails;

import React from 'react';
import './ConfirmationRegistered.css'; // Assuming you have a CSS file for styling
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {

    const navigate = useNavigate();
    const handleBack = () => {navigate('/applicationhub')};

  return (
    <div className="confirmation-container">
      <h2 className="confirmation-title">Confirmation</h2>
      <p className="confirmation-subtitle">Please confirm the details below are correct before submitting your application.</p>

      <div className="card">
        <h3>Account(s):</h3>
        <div className="row">
          <div>Type:</div>
          <div>Registered Non-Spousal GIC Long Term</div>
        </div>
        <div className="row">
          <div>Term:</div>
          <div>31 months</div>
        </div>
        <div className="row">
          <div>Purchase Amount:</div>
          <div>$30,500</div>
        </div>
        <div className="row">
          <div>Interest Used:</div>
          <div>Investing</div>
        </div>
        <div className="row">
          <div>Interest Frequency:</div>
          <div>Compound Annually</div>
        </div>
        <div className="row">
          <div>Interest Rate:</div>
          <div>3.25%</div>
        </div>
        <div className="row">
          <div>Effective Date:</div>
          <div>April 20, 2025</div>
        </div>
        <div className="row">
          <div>Source of Funds:</div>
          <div>New Contribution</div>
        </div>
        <div className="row">
          <div>Payment Method:</div>
          <div>Cheque to MCAN</div>
        </div>
        <div className="row">
          <div>Beneficiary:</div>
          <div>Fred Smith</div>
        </div>
        <div className="row">
          <div>Beneficiary Date of Birth:</div>
          <div>April 20, 1980</div>
        </div>
        <div className="row">
          <div>Beneficiary Relationship:</div>
          <div>Cousin</div>
        </div>
      </div>

      <div className="card">
        <h3>Applicant(s):</h3>
        <div className="row">
          <div>Name:</div>
          <div>Jane Doe</div>
        </div>
        <div className="row">
          <div>Date of Birth:</div>
          <div>April 30, 1965</div>
        </div>
        <div className="row">
          <div>Social Insurance Number:</div>
          <div>000-000-117</div>
        </div>
        <div className="row">
          <div>Email:</div>
          <div>jdoe@email.com</div>
        </div>
        <div className="row">
          <div>Home Phone:</div>
          <div>555-998-0344</div>
        </div>
        <div className="row">
          <div>Cell Phone:</div>
          <div>555-956-8944</div>
        </div>
        <div className="row">
          <div>Civic Address:</div>
          <div>135 Franklin Dr SE, Calgary, AB T1J 4J8</div>
        </div>
        <div className="row">
          <div>Mailing Address:</div>
          <div>370 Franklin Dr SE, Calgary, AB T1J 4J8</div>
        </div>
        <div className="row">
          <div>ID Type:</div>
          <div>BC Drivers License</div>
        </div>
        <div className="row">
          <div>ID Number:</div>
          <div>604-143-493</div>
        </div>
        <div className="row">
          <div>Expiry Date:</div>
          <div>April 20, 2030</div>
        </div>
        <div className="row">
          <div>Employment Status:</div>
          <div>Employed</div>
        </div>
        <div className="row">
          <div>Industry:</div>
          <div>Oil & Gas</div>
        </div>
        <div className="row">
          <div>Occupation:</div>
          <div>Manager</div>
        </div>
        <div className="row">
          <div>Employer:</div>
          <div>Tristatecom</div>
        </div>
        <div className="row">
          <div>Employer Phone:</div>
          <div>555-846-8844</div>
        </div>
        <div className="row">
          <div>Employer Address:</div>
          <div>444 Franklin Dr SE, Calgary, AB T1J 4J8</div>
        </div>
        <div className="row">
          <div>Source of funds:</div>
          <div>Savings</div>
        </div>
        <div className="row">
          <div>Are you a US person?</div>
          <div>Yes (546484481)</div>
        </div>
        <div className="row">
          <div>Are you a tax resident of a jurisdiction other than the US or Canada?</div>
          <div>No</div>
        </div>
        <div className="row">
          <div>PEP/HIO?</div>
          <div>No</div>
        </div>
        <div className="row">
          <div>Consent form?</div>
          <div>No</div>
        </div>
      </div>

      <div className="buttons">
        <button className="btn btn-back" onClick={handleBack}>Back</button>
        <button className="btn btn-submit">Submit</button>
      </div>
    </div>
  );
};

export default Confirmation;

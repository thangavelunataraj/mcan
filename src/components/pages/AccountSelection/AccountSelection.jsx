import React from 'react';
import './AccountSelection.css';
import { useNavigate } from 'react-router-dom';
const AccountSelection = () => {
    const navigate = useNavigate();
    const handlenext = () => {navigate('/spousalrrsp')};
  return (
    <div className="account-selection-container">
      <h2 className="title">Account Selection</h2>
      <p className="subtitle">
        Please confirm the details below are correct before proceeding with the application.
      </p>

      <div className="card">
        <h3>GIC selection</h3>
        <div className="input-row">
          <select>
            <option>Account Type</option>
          </select>
          <select>
            <option>Term</option>
          </select>
        </div>
        <div className="info-box">
          <strong>Guaranteed Investment Certificates (GICs)</strong>
          <ul>
            <li>Flexible investment term lengths of up to 5 years.</li>
            <li>Available for non-registered accounts.</li>
            <li>Competitive interest rates are for the full term of your investment.</li>
            <li>All deposits with MDCN are eligible for Canadian Deposit Insurance Corporation (CDIC) protection.</li>
          </ul>
          <a href="#">Learn More</a>
        </div>
      </div>

      <div className="card">
        <h3>Registered GIC details</h3>
        <div className="input-row">
          <input type="number" placeholder="$ Purchase Amount" />
          <select>
            <option>Intended Use</option>
          </select>
        </div>
        <div className="input-row">
          <select>
            <option>Interest Frequency</option>
          </select>
          <input type="date" placeholder="Issue Date" />
        </div>
        <div className="input-row">
          <select>
            <option>Source of Funds</option>
          </select>
          <select>
            <option>Payment Method</option>
          </select>
        </div>
      </div>

      <div className="button-row">
        <button className="btn-next" onClick={handlenext} >Next</button>
      </div>
    </div>
  );
};

export default AccountSelection;

import React from 'react';
import './SpousalRRSP.css';

const SpousalRRSP = () => {
  return (
    <div className="spousal-container">
      <h2 className="spousal-title">Spousal RRSP</h2>
      <p className="spousal-subtitle">
        Please confirm the spousal contributor details and beneficiary details for all Spousal RRSPs below.
      </p>

      <div className="card">
        <h3>Spouse or common law partner contributor</h3>
        <div className="input-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="input-row">
          <input type="date" placeholder="Date of Birth" />
          <input type="text" placeholder="SIN" />
        </div>
      </div>

      <div className="card">
        <h3>Beneficiary details</h3>
        <div className="input-row">
          <select>
            <option>Beneficiary Type</option>
          </select>
          <select>
            <option>Relationship</option>
          </select>
        </div>
        <div className="input-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="input-row">
          <input type="date" placeholder="Date of Birth" />
          <input type="text" placeholder="SIN (optional)" />
        </div>
      </div>

      <div className="button-row">
        <button className="btn-next">Next</button>
      </div>
    </div>
  );
};

export default SpousalRRSP;

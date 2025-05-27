import React from 'react';
import './SpousalRRSP.css';

const SpousalRRSP = () => {
  return (
    <div className="spousal-rrsp-container">
      <h1 className="spousal-rrsp-title">Spousal RRSP</h1>
      <p className="spousal-rrsp-subtitle">
        Please confirm the spousal contributor details and beneficiary details for all Spousal RRSPs below.
      </p>



      <div className="contributor-section">
        <h2>Spouse or common law partner contributor</h2>
        <div className="input-group">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="input-group">
          <input type="date" placeholder="Date of Birth" />
          <input type="text" placeholder="SIN" />
        </div>
      </div>



      <div className="beneficiary-section">
        <h2>Beneficiary details</h2>
        <div className="input-group">
          <select>
            <option value="">Beneficiary Type</option>
            {/* Add options here */}
          </select>
          <select>
            <option value="">Relationship</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="input-group">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="input-group">
          <input type="date" placeholder="Date of Birth" />
          <input type="text" placeholder="SIN (optional)" />
        </div>
      </div>

      <button className="next-button">Next</button>
    </div>
  );
};

export default SpousalRRSP;
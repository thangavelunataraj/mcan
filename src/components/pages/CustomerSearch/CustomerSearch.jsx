import React from "react";
import "./CustomerSearch.css";
import {useNavigate } from "react-router-dom";

const CustomerSearch = () => {

    const navigate = useNavigate();
    
    const handleSelect = () => {navigate('/applicantdetails')};
  return (
    <div className="customer-search-container">
      <h1 className="title">Customer Search</h1>
      <p className="subtitle">
        Please search by CIF # or SIN & Date of Birth.
      </p>

      <div className="card">
        <h3>Search</h3>
        <div className="input-grid">
          <input type="text" placeholder="CIF #" />
          <input type="date" placeholder="Date of Birth" />
          <button className="btn-search">Search</button>
        </div>
        <div className="input-grid">
          <input type="text" placeholder="SIN" />
          <input type="date" placeholder="Date of Birth" />
          <button className="btn-search">Search</button>
        </div>
      </div>

      <div className="card">
        <h3>Search results</h3>
        <div className="result-header">
          <span>Name</span>
          <span>SIN</span>
          <span>CIF #</span>
          <span>Date of Birth</span>
          <span>Action</span>
        </div>
        <div className="result-row">
          <span>John N. Doe</span>
          <span>545-767-531</span>
          <span>245-767-535</span>
          <span>May 20, 2000</span>
          <button className="btn-select" onClick={handleSelect}>Select</button>
        </div>
        <div className="result-row">
          <span>New Member</span>
          <span></span>
          <span></span>
          <span></span>
          <button className="btn-add" onClick={handleSelect}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerSearch;

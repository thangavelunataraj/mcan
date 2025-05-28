import React, { useState } from 'react';
import './ApplicationHub.css';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmationModal from '../../pages/DeleteConfirmation/DeleteConfirmation';

const ApplicationHub = () => {
  const [consentGiven, setConsentGiven] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleAddApplicant = () => {navigate('/customersearch')};
  const handleAddAccount = () => {navigate('/accountselection')};
  const handleNext = () => {navigate('/confirmregistrered')};
  const handleDelete = () => {
    console.log("Applicant deleted");
    setShowModal(false);
  };

  return (
    <div className="application-hub-container">
      <h2 className="title">Application Hub</h2>
      <p className="subtitle">
        A listing of applicants and accounts currently added to this application.
      </p>

      <div className="card">
        <h3>Applicant(s)</h3>
        <div className="list-header">
          <span>Name</span>
          <span>Action</span>
        </div>
        <div className="list-row">
          <span>John Doe</span>
          <div className="button-group">
            <button className="btn-secondary">Edit</button>
            <button className="btn-secondary" onClick={() => setShowModal(true)}>Delete</button>
            <DeleteConfirmationModal
            show={showModal}
            onDelete={handleDelete}
            onCancel={() => setShowModal(false)}
            />
          </div>
        </div>
        <button className="btn-add" onClick={handleAddApplicant} >Add applicant</button>
      </div>

      <div className="consent-section">
        <label>
          <input
            type="checkbox"
            checked={consentGiven}
            onChange={() => setConsentGiven(!consentGiven)}
          />
          All applicants have provided consent to perform fraud, identity verification and credit checks with our trusted partners
        </label>
      </div>

      <div className="card">
        <h3>Account(s)</h3>
        <div className="list-header">
          <span>Name</span>
          <span>Action</span>
        </div>
        <div className="list-row">
          <span>1 Year GIC - 9.00%</span>
          <div className="button-group">
            <button className="btn-secondary">Edit</button>
            <button className="btn-secondary">Delete</button>            
          </div>
        </div>
        <button className="btn-add" onClick={handleAddAccount}>Add account</button>
      </div>

      <div className="button-row">
        <button className="btn-next" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ApplicationHub;

import React from 'react';
import './ApplicationHub.css';
import { useNavigate } from 'react-router-dom';

const ApplicationHub = () => {

const navigate = useNavigate();
const handleAddApplicant = () => {navigate('/customersearch')};
const handleAddAccount = () => {navigate('/accountselection')};
 // Navigate to Customer Search page when adding a new applicant

    // Logic to add a new applicant

    return (
        <div className="application-hub">
            <h1>Application Hub</h1>
            <p>A listing of applicants and accounts currently added to this application.</p>



            <div className="applicants">
                <h2>Applicant(s)</h2>
                <div className="applicant">
                    <span className="applicant-name">John Doe</span>
                    <div className="applicant-actions">
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
                <div className="applicant">
                    <span className="applicant-name">Add applicant</span>
                    <div className="applicant-actions">
                        <button className="add-applicant"onClick={handleAddApplicant}>Add</button>
                    </div>
                </div>            

                <div className="consent">
                    <input type="checkbox" id="consent" />
                    <label htmlFor="consent">All applicants have provided consent to perform fraud, identity verification and credit checks with our trusted partners.</label>
                </div>
            </div>



            <div className="accounts">
                <h2>Account(s)</h2>
                <div className="account">
                    <span className="account-name">1 Year GIC - 9.00%</span>
                    <div className="account-actions">
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>                    
                </div>
                <div className="account">
                    <span className="account-name">Add account</span>
                    <div className="account-actions">
                        <button className="add-account" onClick={handleAddAccount}>Add</button>
                    </div>
                </div>
                
            </div>



            <button className="next">Next</button>
        </div>
    );
}

export default ApplicationHub;
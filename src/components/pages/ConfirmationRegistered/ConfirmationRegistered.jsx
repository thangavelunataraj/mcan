import React from 'react';
import './ConfirmationRegistered.css';

const ConfirmationRegistered = () => {
    return (
        <div className="confirmation-container">
            <h1>Confirmation</h1>
            <p>Please confirm the details below are correct before submitting your application.</p>

            <div className="section account-section">
                <h2>Account(s):</h2>
                <div className="account-info">
                    <div className="account-item">
                        <strong>Type:</strong> Registered Non-Registered GIC Long Term
                    </div>
                    <div className="account-item">
                        <strong>Term:</strong> 31 months
                    </div>
                    <div className="account-item">
                        <strong>Purchase Amount:</strong> $50,600
                    </div>
                    <div className="account-item">
                        <strong>Intended Use:</strong> Investing
                    </div>
                    <div className="account-item">
                        <strong>Interest Frequency:</strong> Compound Annually
                    </div>
                    <div className="account-item">
                        <strong>Interest Rate:</strong> 2.38%
                    </div>
                    <div className="account-item">
                        <strong>Effective Date:</strong> April 20, 2023
                    </div>
                    <div className="account-item">
                        <strong>Source of Funds:</strong> New Contribution
                    </div>
                    <div className="account-item">
                        <strong>Payment Method:</strong> Cheque to MCIN
                    </div>
                    <div className="account-item">
                        <strong>Beneficiary:</strong> Fred Smith
                    </div>
                    <div className="account-item">
                        <strong>Beneficiary Date of Birth:</strong> April 20, 1960
                    </div>
                    <div className="account-item">
                        <strong>Beneficiary Relationship:</strong> Cousin
                    </div>
                </div>
            </div>

            <div className="section applicant-section">
                <h2>Applicant(s):</h2>
                <div className="applicant-info">
                    <div className="applicant-item">
                        <strong>Name:</strong> Jane Doe
                    </div>
                    <div className="applicant-item">
                        <strong>Date of Birth:</strong> April 30, 1986
                    </div>
                    <div className="applicant-item">
                        <strong>Social Insurance Number:</strong> 000-000-117
                    </div>
                    <div className="applicant-item">
                        <strong>Email:</strong> john@doe.com
                    </div>
                    <div className="applicant-item">
                        <strong>Home Phone:</strong> 555-888-9344
                    </div>
                    <div className="applicant-item">
                        <strong>Cell Phone:</strong> 555-999-9344
                    </div>
                    <div className="applicant-item">
                        <strong>Civic Address:</strong> 153 Franklin Dr SE, Calgary, AB T1N 0A8
                    </div>
                    <div className="applicant-item">
                        <strong>Mailing Address:</strong> 313 Franklin Dr SE, Calgary, AB T1L 1J8
                    </div>
                    <div className="applicant-item">
                        <strong>ID Type:</strong> BC Drivers License
                    </div>
                    <div className="applicant-item">
                        <strong>ID Number:</strong> 604-123-456
                    </div>
                    <div className="applicant-item">
                        <strong>Expiry Date:</strong> April 20, 2025
                    </div>
                    <div className="applicant-item">
                        <strong>Employment Status:</strong> Employed
                    </div>
                    <div className="applicant-item">
                        <strong>Industry:</strong> Oil & Gas
                    </div>
                    <div className="applicant-item">
                        <strong>Occupation:</strong> Manager
                    </div>
                    <div className="applicant-item">
                        <strong>Employer:</strong> Tristate
                    </div>
                    <div className="applicant-item">
                        <strong>Employer Phone:</strong> 555-888-8686
                    </div>
                    <div className="applicant-item">
                        <strong>Employer Address:</strong> 464 Franklin Dr SE, Calgary, AB T1L 1J8
                    </div>
                    <div className="applicant-item">
                        <strong>What is the source of funds?</strong> Savings
                    </div>
                    <div className="applicant-item">
                        <strong>Are you a US person?</strong> Yes (544844841)
                    </div>
                    <div className="applicant-item">
                        <strong>Are you a resident of a jurisdiction other than the US or Canada?</strong> No
                    </div>
                    <div className="applicant-item">
                        <strong>PERHAPS?</strong> No
                    </div>
                    <div className="applicant-item">
                        <strong>Consent form?</strong> No
                    </div>
                </div>
            </div>



            <div className="button-container">
                <button className="back-button">Back</button>
                <button className="submit-button">Submit</button>
            </div>
        </div>
    );
};

export default ConfirmationRegistered;
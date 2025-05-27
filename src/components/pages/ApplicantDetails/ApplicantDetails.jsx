import React from 'react';
import './ApplicantDetails.css';



const ApplicantDetails = () => {
    return (
        <div className="applicant-details">
            <h1>Applicant Details</h1>
            <p>Please confirm the details below are correct before proceeding with the application.</p>



            <div className="section">
                <h2>Identification</h2>
                <select className="input-field">
                    <option value="">Method</option>
                    {/* Add more options here */}
                </select>
            </div>



            <div className="section">
                <h2>Personal information</h2>
                <div className="input-group">
                    <input type="text" placeholder="Legal First Name" className="input-field" />
                    <input type="text" placeholder="Legal Last Name" className="input-field" />
                    <input type="text" placeholder="Legal Middle Name (optional)" className="input-field" />
                    <input type="date" placeholder="Date of Birth" className="input-field" />
                    <input type="email" placeholder="Email" className="input-field" />
                    <input type="text" placeholder="SIN" className="input-field" />
                    <input type="text" placeholder="Primary #" className="input-field" />
                </div>
            </div>



            <div className="section">
                <h2>Address details</h2>
                <input type="text" placeholder="Civic Address" className="input-field" />
                <input type="text" placeholder="Mailing Address (optional)" className="input-field" />
                <button className="manual-entry">Enter manually</button>
            </div>



            <div className="section">
                <h2>Employment</h2>
                <div className="input-group">
                    <select className="input-field">
                        <option value="">Employment Status</option>
                        {/* Add more options here */}
                    </select>
                    <input type="text" placeholder="Industry" className="input-field" />
                    <input type="text" placeholder="Occupation" className="input-field" />
                    <input type="text" placeholder="Employer Name" className="input-field" />
                    <input type="text" placeholder="Employer Phone" className="input-field" />
                </div>
            </div>



            <div className="section">
                <h2>Things we need to ask</h2>
                <input type="text" placeholder="What is the nature of your business relationship?" className="input-field" />
                <select className="input-field">
                    <option value="">Are you a U.S. person?</option>
                    {/* Add more options here */}
                </select>
                <input type="text" placeholder="Are you a family member, or a close associate..." className="input-field" />
                <input type="text" placeholder="Are you a tax resident of a jurisdiction..." className="input-field" />
                <input type="text" placeholder="Do you have an existing Client Consent form?" className="input-field" />
            </div>



            <button className="next-button">Next</button>
        </div>
    );
};



export default ApplicantDetails;
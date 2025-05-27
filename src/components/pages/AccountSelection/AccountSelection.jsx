import React from 'react';
import './AccountSelection.css';



const AccountSelection = () => {
    return (
        <div className="account-selection-container">
            <h1 className="header">Account Selection</h1>
            <p className="sub-header">
                Please confirm the details below are correct before proceeding with the application.
            </p>
            <div className="gic-selection">
                <h2>GIC selection</h2>
                <div className="field">
                    <label htmlFor="accountType">Account Type</label>
                    <select id="accountType">
                        <option value="term">Term</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
            </div>
            <div className="gic-info">
                <h3>Guaranteed Investment Certificates (GIC)</h3>
                <p>
                    A GIC, or Term Deposit is a secure investment and a great option if you're seeking predictable interest income.
                    <br />
                    - Flexible investment term lengths of up to 5 years.
                    <br />
                    - Available for non-registered accounts.
                    <br />
                    - Competitive interest rates are for the full term of your investment.
                    <br />
                    - All deposits with MDN are eligible for Canadian Deposit Insurance Corporation (CDIC) protection.
                    <br />
                    - Check our GIC Rates Here
                </p>
                <button className="learn-more">Learn More</button>
            </div>
            <div className="registered-gic-details">
                <h2>Registered GIC details</h2>
                <div className="details-field">
                    <label htmlFor="purchaseAmount">$ Purchase Amount</label>
                    <input type="text" id="purchaseAmount" />
                </div>
                <div className="details-field">
                    <label htmlFor="interestFrequency">Interest Frequency</label>
                    <select id="interestFrequency">
                        <option value="monthly">Monthly</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="details-field">
                    <label htmlFor="issueDate">Issue Date</label>
                    <input type="date" id="issueDate" />
                </div>
                <div className="details-field">
                    <label htmlFor="sourceOfFunds">Source of Funds</label>
                    <input type="text" id="sourceOfFunds" />
                </div>
                <div className="details-field">
                    <label htmlFor="paymentMethod">Payment Method</label>
                    <select id="paymentMethod">
                        <option value="credit">Credit Card</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
            </div>
            <button className="next-button">Next</button>
        </div>
    );
};



export default AccountSelection;
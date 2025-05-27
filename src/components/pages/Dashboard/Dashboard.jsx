import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';



const Dashboard = () => {
    
  const navigate = useNavigate();
  const btnnext = () => {navigate('/applicationhub')};

  useEffect(() => {localStorage.getItem('loggedIn') === 'false' || localStorage.getItem('loggedIn') === null && navigate('/login')},[localStorage.getItem('loggedIn')]);
   
  const [selectedType, setSelectedType] = useState('New');

  const applicationTypes = ['New', 'Bulk Upload', 'Resume', 'Submitted'];
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Get Started</h1>

      <div className="dashboard-card">
        <h2 className="dashboard-section-title">Please select the type of application</h2>
        <div className="dashboard-radio-group">
          {applicationTypes.map((type) => (
            <label key={type} className={`dashboard-radio-button ${selectedType === type ? 'active' : ''}`}>
              <input
                type="radio"
                name="applicationType"
                value={type}
                checked={selectedType === type}
                onChange={() => setSelectedType(type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div className="dashboard-card">
        <h2 className="dashboard-section-title">Pre-qualification</h2>
        <div className="dashboard-form-row">
          <select>
            <option>
              Will this account be used for the benefit of, or on behalf of, anyone not disclosed on the application?
            </option>
          </select>
        </div>
        <div className="dashboard-form-row">
          <select>
            <option>Are all applicants residents of Canada?</option>
          </select>
          <select>
            <option>Are all applicants 18 years of age or older?</option>
          </select>
        </div>
      </div>

      <button className="dashboard-next-button" onClick={btnnext}>Next</button>

    </div>    
  );
};

export default Dashboard;

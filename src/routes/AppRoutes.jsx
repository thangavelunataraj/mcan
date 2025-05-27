import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/pages/Login/Login';
import Dashboard from '../components/pages/Dashboard/Dashboard';
import ApplicationHub from '../components/pages/ApplicationHub/ApplicationHub';
import CustomerSearch from '../components/pages/CustomerSearch/CustomerSearch';
import AccountSelection from '../components/pages/AccountSelection/AccountSelection';
import ApplicantDetails from '../components/pages/ApplicantDetails/ApplicantDetails';
import ConfirmationRegistered from '../components/pages/ConfirmationRegistered/ConfirmationRegistered';
import SpousalRRSP from '../components/pages/SpousalRRSP/SpousalRRSP';

const AppRoutes = () => {

  return (
    <Routes>
      <Route
        path="/"
        element={<Login/>} 
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
      <Route
        path="/applicationhub"
        element={<ApplicationHub />}
      />
      <Route
        path="/customersearch"
        element={<CustomerSearch />}
      />
      <Route
        path="/accountselection"
        element={<AccountSelection />}
      />
      <Route
        path="/applicantdetails"
        element={<ApplicantDetails />}
      />
      <Route
        path="/confirmregistrered"
        element={<ConfirmationRegistered />}
      />
      <Route
        path="/spousalrrsp"
        element={<SpousalRRSP />}
      />
    </Routes>
  );
};

export default AppRoutes;

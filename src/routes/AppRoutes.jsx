import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/pages/Login/Login';
import Dashboard from '../components/pages/Dashboard/Dashboard';
import ApplicationHub from '../components/pages/ApplicationHub/ApplicationHub';
import CustomerSearch from '../components/pages/CustomerSearch/CustomerSearch';
import AccountSelection from '../components/pages/AccountSelection/AccountSelection';
import ApplicantDetails from '../components/pages/ApplicantDetails/ApplicantDetails';

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
    </Routes>
  );
};

export default AppRoutes;

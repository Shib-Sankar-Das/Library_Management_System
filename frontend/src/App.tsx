import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import UserAuthentication from "./Pages/UserAuthentication";
import HomePage from "./Pages/HomePage";
import UserDashBoard from "./Pages/UserDashBoard";
import AdminAuthentication from "./Pages/AdminAuthentication";
const App: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-auth" element={<UserAuthentication />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user-dashboard" element={<UserDashBoard />} />
        <Route path="/admin-auth" element={<AdminAuthentication />} />
      </Routes>
    );
};
export default App;

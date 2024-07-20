import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import AllBooks from "./Pages/AllBooks";
import CleentAuth from "./Pages/ClientAuthentication";
import HomePage from "./Pages/HomePage";
const App: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<CleentAuth />} />
        <Route path="/client-auth" element={<CleentAuth />} />
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    );
};
export default App;

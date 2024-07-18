import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import AllBooks from "./Pages/AllBooks";
import CleentAuth from "./Pages/ClientAuthentication";
const App: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<CleentAuth />} />
        <Route path="/client-auth" element={<CleentAuth />} />
        <Route path="/all-books" element={<AllBooks />} />
      </Routes>
    );
};
export default App;

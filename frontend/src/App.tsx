import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import AllBooks from "./Components/BooksView";
import UserAuthentication from "./Pages/UserAuthentication";
import HomePage from "./Pages/HomePage";
import UserDashBoard from "./Pages/UserDashBoard";
const App: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-auth" element={<UserAuthentication />} />
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user-dashboard" element={<UserDashBoard />} />
      </Routes>
    );
};
export default App;

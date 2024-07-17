import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import AllBooks from "./Pages/AllBooks";
const App: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<AllBooks />} />
        <Route path="/all-books" element={<AllBooks />} />
      </Routes>
    );
};
export default App;

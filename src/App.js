import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Search from "./component/users/Search";
import About from "./component/pages/About";
import NotFound from "./component/pages/NotFound";
import Users from "./component/users/Users";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} /> 
            <Route path="/user/:id" Component={Users}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./views/aboutPage/About";
import Contact from "./views/contactPage/Contact";
import Home from "./views/homePage/Home";
import Research from "./views/researchPage/Research";
import Service from "./views/servicePage/Service";
import data from "./data/Data.json";
import Register from "./views/registerPage/Register";
import Login from "./views/loginPage/Login";
import CourseRegistration from "./views/courseRegistration/CourseRegistration";
import StripeSuccess from "./views/stripe/StripeSuccess";
import StripeCancel from "./views/stripe/StripeCancel";

export const myContext = React.createContext();

const App = () => {
  const [user, setUser] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [token, setToken] = useState(false);

  return (
    <myContext.Provider value={{data, user, setUser, admin, setAdmin, token, setToken, filteredData, setFilteredData, inputText, setInputText}}>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/courseRegistration" element={<CourseRegistration />} />
            <Route path="/stripe-success" element={<StripeSuccess />} />
            <Route path="/stripe-cancel" element={<StripeCancel />} />
          </Routes>
        </Router>
      </div>
    </myContext.Provider>
  );
};

export default App;

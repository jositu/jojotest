import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Features from "./pages/Features";
import Renters from "./pages/Renters";
import Owners from "./pages/Owners";
import Contact from "./pages/Contact";
import About from "./pages/About";

import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ContactFooter from "./components/ContactFooter";

function App() {
  return (
    <div className=" site">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/features" element={<Features />} />
          <Route path="/for-renters" element={<Renters />} />
          <Route path="/for-owners" element={<Owners />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
        </Switch>
      </Router>
      <Content />
      <ContactFooter />
      <Footer />
    </div>
  );
}

export default App;

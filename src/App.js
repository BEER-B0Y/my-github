import React from "react";
import NavBar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import AboutUs from "./pages/AboutUs.js";
import ContactUs from "./pages/ContactUs.js";
import Courses from "./pages/Courses.js";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Courses/>
      <AboutUs />
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default App;

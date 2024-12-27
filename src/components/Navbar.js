import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // นำเข้า Bootstrap CSS

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  // ฟังก์ชันตรวจสอบการ Scroll
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-dark bg-dark" : "navbar-light bg-primary"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          IT @ Lanna
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                หน้าแรก
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                หลักสูตร
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#bachelor">
                    ปริญญาตรี
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#master">
                    ปริญญาโท
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#phd">
                    ปริญญาเอก
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faculty">
                คณาจารย์
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                ติดต่อเรา
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
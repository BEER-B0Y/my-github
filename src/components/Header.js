import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"; // ไฟล์ CSS สำหรับตกแต่งเพิ่มเติม

const Header = () => {
  return (
    <header className="header bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">ยินดีต้อนรับสู่ IT @ Lanna</h1>
        <p className="lead">เราเป็นศูนย์กลางการศึกษาและพัฒนาทักษะด้านเทคโนโลยีสารสนเทศ</p>
        <a href="#about" className="btn btn-light btn-lg">
          เรียนรู้เพิ่มเติม
        </a>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css"; // สำหรับการตกแต่งเพิ่มเติม

const AboutUs = () => {
  return (
    <section id="about" className="about-us py-5">
      <div className="container">
        <h2 className="text-center mb-4">เกี่ยวกับเรา</h2>
        <p className="lead">
          IT @ Lanna เป็นศูนย์กลางการศึกษาและพัฒนาทักษะด้านเทคโนโลยีสารสนเทศในระดับสูง.
          เรามุ่งมั่นที่จะเสริมสร้างทักษะและความรู้ด้าน IT ให้กับนักศึกษาและผู้ที่สนใจ
          ผ่านการศึกษาที่มีคุณภาพและมีมาตรฐาน.
        </p>
        <p>
          เรายินดีต้อนรับนักศึกษาทุกคนที่ต้องการเรียนรู้ด้านเทคโนโลยีสารสนเทศและเตรียมตัวให้พร้อมสำหรับการเข้าสู่ยุคดิจิทัล.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;

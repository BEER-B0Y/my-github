import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"; // ไฟล์ CSS สำหรับตกแต่งเพิ่มเติม

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* คอลัมน์ที่ 1 */}
          <div className="col-md-4 mb-3">
            <h5>เกี่ยวกับเรา</h5>
            <p>
              IT @ Lanna เป็นศูนย์กลางการศึกษาและนวัตกรรมสำหรับการพัฒนาทักษะด้านเทคโนโลยีและสารสนเทศ
            </p>
          </div>

          {/* คอลัมน์ที่ 2 */}
          <div className="col-md-4 mb-3">
            <h5>ลิงก์ที่มีประโยชน์</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="footer-link">
                  หน้าแรก
                </a>
              </li>
              <li>
                <a href="#courses" className="footer-link">
                  หลักสูตร
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>

          {/* คอลัมน์ที่ 3 */}
          <div className="col-md-4 mb-3">
            <h5>ติดต่อเรา</h5>
            <p>
              <i className="bi bi-geo-alt"></i> 123 ถนนลานนา เชียงใหม่ 50200
            </p>
            <p>
              <i className="bi bi-telephone"></i> โทร: 098-765-4321
            </p>
            <p>
              <i className="bi bi-envelope"></i> อีเมล: contact@it-lanna.ac.th
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2025 IT @ Lanna. สงวนลิขสิทธิ์</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

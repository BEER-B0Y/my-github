import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUs.css"; // สำหรับการตกแต่งเพิ่มเติม

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ส่งข้อมูลไปยัง backend หรือบริการต่าง ๆ (อาจจะส่งเป็นอีเมล)
    console.log(formData);
  };

  return (
    <section id="contact" className="contact-us py-5">
      <div className="container">
        <h2 className="text-center mb-4">ติดต่อเรา</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              ชื่อของคุณ
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              อีเมล
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              ข้อความ
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            ส่งข้อความ
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

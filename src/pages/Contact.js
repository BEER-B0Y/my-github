import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-warning mb-4">ติดต่อเรา</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">ชื่อ</label>
          <input type="text" className="form-control" id="name" placeholder="กรอกชื่อของคุณ" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">อีเมล</label>
          <input type="email" className="form-control" id="email" placeholder="กรอกอีเมลของคุณ" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">ข้อความ</label>
          <textarea className="form-control" id="message" rows="3" placeholder="พิมพ์ข้อความของคุณ"></textarea>
        </div>
        <button type="submit" className="btn btn-success">ส่งข้อความ</button>
      </form>
    </div>
  );
};

export default Contact;

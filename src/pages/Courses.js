import React from "react";

const Courses = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-info mb-4">หลักสูตรของเรา</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">หลักสูตร 1</h5>
              <p className="card-text">การพัฒนาโปรแกรมและซอฟต์แวร์</p>
              <a href="#" className="btn btn-primary">ดูเพิ่มเติม</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">หลักสูตร 2</h5>
              <p className="card-text">การจัดการเครือข่ายคอมพิวเตอร์</p>
              <a href="#" className="btn btn-primary">ดูเพิ่มเติม</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">หลักสูตร 3</h5>
              <p className="card-text">การจัดการฐานข้อมูล</p>
              <a href="#" className="btn btn-primary">ดูเพิ่มเติม</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
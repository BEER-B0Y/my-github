import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { pdfjs } from "react-pdf";


// ลิสต์ของไฟล์ PDF ที่เก็บไว้ในโฟลเดอร์ PDF
const pdfFiles = [
  { name: "สาขาวิชาคอมพิวเตอร์โปรแกรมเมอร์ ปวส.", file: "/PDF/A.pdf" },
  { name: "สาขาวิชาเทคโนโลยีสารสนเทศ ปวส.", file: "/PDF/B.pdf" },
  { name: "สาขาวิชาเทคโนโลยีสารสนเทศ ปวช.", file: "/PDF/C.pdf" },
  { name: "สาขาวิชาคอมพิวเตอร์โปรแกรมเมอร์ ปวช.", file: "/PDF/D.pdf" },

];

const Courses = () => {
  const [selectedFile, setSelectedFile] = useState(pdfFiles[0].file); // เริ่มต้นที่ไฟล์แรก

  const handleFileChange = (file) => {
    setSelectedFile(file); // เปลี่ยนไฟล์ PDF เมื่อเลือก
  };

  return (
    <div className="courses-container py-5">
      <div className="container">
        <h2 className="text-center mb-4">หลักสูตรที่เปิดสอน</h2>

        {/* ส่วนของปุ่มหรือ dropdown สำหรับเลือกไฟล์ PDF */}
        <div className="mb-4 text-center">
          <h5>เลือกหลักสูตร:</h5>
          <div className="btn-group">
            {pdfFiles.map((pdf, index) => (
              <button
                key={index}
                className="btn btn-outline-primary"
                onClick={() => handleFileChange(pdf.file)}
              >
                {pdf.name}
              </button>
            ))}
          </div>
        </div>

        {/* แสดงไฟล์ PDF ที่เลือก */}
        <div className="pdf-viewer">
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
            <Viewer fileUrl={selectedFile} />
          </Worker>
        </div>
      </div>
    </div>
  );
};

export default Courses;

import React from "react";
import "./Home.css"; // นำ CSS ไฟล์เข้ามา

const Home = () => {
  return (
    <div id="home" style={styles.container}>
      <div style={styles.overlay}>
        <div className="container text-center">
          <h1 className="fadeInDown" style={styles.title}>
            ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ
          </h1>
          <p className="fadeInUp" style={styles.description}>
            สาขาเทคโนโลยีสารสนเทศ วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่
          </p>
          <button className="btn btn-primary btn-lg pulse" style={styles.button}>
            สำรวจหลักสูตร
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    color: "#fff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.5rem",
    color: "#ddd",
    marginBottom: "30px",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  },
  button: {
    padding: "10px 30px",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
};

export default Home;

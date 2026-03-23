import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "4rem 1rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#e53e3e", margin: 0 }}>404</h1>

      <p style={{ color: "#4a5568", margin: "1rem 0 2rem" }}>
        ไม่พบหน้าที่คุณต้องการ
      </p>

      <Link
        to="/"
        style={{
          padding: "0.5rem 1rem",
          background: "#1e40af",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        ← กลับหน้าหลัก
      </Link>
    </div>
  );
}

export default NotFoundPage;

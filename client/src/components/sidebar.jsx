import { Link } from "react-router-dom";

function Sidebar({ darkMode }) {
  const linkStyle = {
    display: "block",
    textDecoration: "none",
    color: darkMode ? "#fff" : "#333",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "6px",
    fontWeight: "500",
    background: darkMode ? "#2a2a2a" : "#ffffff",
  };

  return (
    <div
      style={{
        width: "240px",
        background: darkMode ? "#1f1f1f" : "#f4f6f9",
        minHeight: "100vh",
        padding: "20px",
        borderRight: "1px solid #ddd",
        boxSizing: "border-box",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <h2 style={{ marginBottom: "25px" }}>📋 Menu</h2>

      <Link to="/dashboard" style={linkStyle}>
        🏠 Dashboard
      </Link>

      <Link to="/profile" style={linkStyle}>
        👤 Profile
      </Link>

      <Link to="/create-task" style={linkStyle}>
        ➕ Create Task
      </Link>

      <Link to="/dashboard" style={linkStyle}>
        📄 All Tasks
      </Link>
    </div>
  );
}

export default Sidebar;
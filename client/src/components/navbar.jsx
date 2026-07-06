function Navbar({ darkMode, setDarkMode, toggleSidebar }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: darkMode ? "#1f1f1f" : "#1976d2",
        color: "white",
        padding: "15px",
        alignItems: "center",
      }}
    >
      <div>
        <button onClick={toggleSidebar}>☰</button>
        <span style={{ marginLeft: "10px" }}>
          Task Management System
        </span>
      </div>

      <div>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <button
          onClick={handleLogout}
          style={{ marginLeft: "10px", background: "red", color: "white" }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
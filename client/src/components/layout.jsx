import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        background: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
      }}
    >
      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div style={{ display: "flex" }}>
        {sidebarOpen && <Sidebar darkMode={darkMode} />}

        <div style={{ flex: 1, padding: "20px" }}>
          {typeof children === "function"
            ? children(darkMode)
            : children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
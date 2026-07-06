import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/layout";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTasks(res.data || []);
    } catch (error) {
      toast.error("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
  const confirm = window.confirm("Are you sure you want to delete this task?");
  if (!confirm) return;

  try {
    const token = localStorage.getItem("token");

    await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    toast.success("Task deleted successfully");
    fetchTasks();
  } catch (error) {
    toast.error("Failed to delete task");
  }
};

  const total = tasks.length || 0;
  const completed = tasks.filter((t) => t.status === "Completed").length || 0;
  const pending = tasks.filter((t) => t.status === "Pending").length || 0;

  return (
    <Layout>
      <h1>Dashboard</h1>

      {loading && <h3>Loading tasks...</h3>}

      {/* CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        <div style={cardStyle}>Total Tasks: {total}</div>
        <div style={cardStyle}>Completed: {completed}</div>
        <div style={cardStyle}>Pending: {pending}</div>
      </div>

      {/* TABLE */}
      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>
                  <button
                    onClick={() =>
                      (window.location.href = `/edit-task/${task._id}`)
                    }
                    style={editBtn}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTask(task._id)}
                    style={deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       {/* No Tasks Message */}
      {tasks.length === 0 && !loading && (
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>
          No tasks found 🚀 Create your first task
        </h3>
      )}
    </Layout>
  );
}

/* Styles */
const cardStyle = {
  padding: "20px",
  borderRadius: "12px",
  background: "inherit",
  color: "inherit",
  border: "1px solid gray",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  fontWeight: "bold",
  textAlign: "center",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  background: "inherit",
  color: "inherit",
  border: "1px solid gray",
};

const editBtn = {
  marginRight: "10px",
  padding: "5px 10px",
  background: "#1976d2",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const deleteBtn = {
  padding: "5px 10px",
  background: "#d32f2f",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Dashboard;
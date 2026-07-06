import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/Layout";

function EditTask() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const task = res.data.find((t) => t._id === id);

      if (task) {
        setTitle(task.title);
        setStatus(task.status);
      }
    } catch (error) {
      toast.error("Failed to load task");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!title || !status) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        { title, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Task updated successfully");
    } catch (error) {
      toast.error("Update failed");
    }
  };

  return (
    <Layout>
      <h1>Edit Task</h1>

      <form onSubmit={handleUpdate}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <button type="submit">Update Task</button>
      </form>
    </Layout>
  );
}

export default EditTask;
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Layout from "../components/layout";

function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      toast.error("Please enter task title");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/tasks",
        {
          title,
          description,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);

      toast.success("Task Created Successfully");

      setTitle("");
      setDescription("");
      setStatus("Pending");

      window.location.href = "/dashboard";
    } catch (error) {
      console.log(error.response?.data);

      toast.error(
        error.response?.data?.message || "Error Creating Task"
      );
    }
  };

  return (
    <Layout>
      <h1>Create Task</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <button type="submit">
          Create Task
        </button>
      </form>
    </Layout>
  );
}

export default CreateTask;
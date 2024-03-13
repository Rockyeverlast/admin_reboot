import React, { useEffect, useState } from "react";
import axios from "axios";

const DbScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users");
      if (response.status === 200) {
        setUsers(response.data);
      } else {
        console.error(`Error: API returned status code ${response.status}`);
      }
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "name" && e.target.value === "") {
      setFormData({ ...formData, name: "" });
    } else if (e.target.name === "email" && e.target.value === "") {
      setFormData({ ...formData, email: "" });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/data", formData);
      console.log(response.data);
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error("Error:", error);
      setFormData({ name: "", email: "" });
    }
    fetchUser();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <div className="container">
        <h1>Users Table</h1>
        {/* Render the DataTable component */}
        <table className="table">
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DbScreen;

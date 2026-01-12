import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    department: "",
    contactNumber: "",
    joiningYear: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/addadmin",
        {
          ...formData,
          avatar: "https://dummyimage.com/200x200", // backend expects STRING
        }
      );

      alert("Admin registered successfully");
      navigate("/login/adminlogin");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Registration failed. Check department exists.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Admin Registration</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="dob"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Department (must exist)"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="joiningYear"
          placeholder="Joining Year"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Register
        </button>

        <p className="text-xs text-gray-500 text-center">
          Password will be your DOB (dd-mm-yyyy)
        </p>
      </form>
    </div>
  );
};

export default AdminRegister;

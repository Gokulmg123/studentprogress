import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-gray-100"
    >
      <div className="grid grid-cols-3 gap-20">
        {/* Admin Card */}
        <div className="h-80 w-80 flex flex-col justify-center items-center shadow-md bg-white rounded-xl p-6 space-y-6 hover:shadow-lg transition-shadow duration-200">
          <h1 className="text-2xl font-semibold text-gray-800">Admin</h1>
          <Link
            to="/register/admin-register"
            className="flex items-center justify-center bg-blue-600 h-10 w-32 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Register
          </Link>
          <Link
            to="/login/adminlogin"
            className="flex items-center justify-center bg-gray-200 h-10 w-32 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            Login
          </Link>
        </div>

        {/* Faculty Card */}
        <div className="h-80 w-80 flex flex-col justify-center items-center shadow-md bg-white rounded-xl p-6 space-y-6 hover:shadow-lg transition-shadow duration-200">
          <h1 className="text-2xl font-semibold text-gray-800">Faculty</h1>
          <Link
            to="/register/faculty-register"
            className="flex items-center justify-center bg-blue-600 h-10 w-32 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Register
          </Link>
          <Link
            to="/login/facultylogin"
            className="flex items-center justify-center bg-gray-200 h-10 w-32 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            Login
          </Link>
        </div>

        {/* Student Card */}
        <div className="h-80 w-80 flex flex-col justify-center items-center shadow-md bg-white rounded-xl p-6 space-y-6 hover:shadow-lg transition-shadow duration-200">
          <h1 className="text-2xl font-semibold text-gray-800">Student</h1>
          <Link
            to="/register/student-register"
            className="flex items-center justify-center bg-blue-600 h-10 w-32 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Register
          </Link>
          <Link
            to="/login/studentlogin"
            className="flex items-center justify-center bg-gray-200 h-10 w-32 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

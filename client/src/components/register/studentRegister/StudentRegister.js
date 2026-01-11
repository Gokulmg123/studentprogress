import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ChevronLeftOutlined from "@mui/icons-material/ChevronLeftOutlined";
import Spinner from "../../../utils/Spinner";

const StudentRegister = () => {
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [avatar, setAvatar] = useState("");
  const [dob, setDob] = useState(new Date());
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState(undefined);
  const [department, setDepartment] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [section, setSection] = useState(undefined);
  const [subjects, setSubjects] = useState(undefined);
  const [fatherContact, setFatherContact] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [joiningYear, setJoiningYear] = useState(new Date());

  const store = useSelector((state) => state);

  useEffect(() => {
    if (store.errors) {
      setError(store.errors);
    }
  }, [store.errors]);

  const register = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  useEffect(() => {
    if (store.errors) {
      setName("");
      setEmail("");
      setBatch("");
      setAvatar("");
      setGender("");
      setUsername("");
      setPassword("");
      setFatherName("");
      setLoading(false);
      setDepartment("");
      setDob(new Date());
      setShowPassword("");
      setContactNumber("");
      setSubjects(undefined);
      setJoiningYear(new Date().getFullYear());
    }
  }, [store.errors]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      {/* Main Container */}
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Side - Title Card */}
          <div className="col-span-4">
            <div className="bg-white rounded-2xl shadow-2xl h-full flex flex-col items-center justify-center p-8">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg 
                  className="w-12 h-12 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 14l9-5-9-5-9 5 9 5zm0 7l9-5-9-5-9 5 9 5z"
                  ></path>
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Student Register
              </h1>
              <p className="text-gray-600 text-center mt-4">
                Complete the form to create a student account and access academic resources
              </p>
              <div className="mt-8 w-full">
                <a href="/">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center">
                    <ChevronLeftOutlined className="mr-2" />
                    Back to Home
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-span-8">
            <form
              onSubmit={register}
              className="bg-white rounded-2xl shadow-2xl h-full p-8"
            >
              <div className="h-full flex flex-col">
                {/* Form Header */}
                <div className="mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                      <svg 
                        className="w-6 h-6 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-800">Student Registration Form</h1>
                      <p className="text-gray-600 text-sm">Fill in all required student details</p>
                    </div>
                  </div>
                </div>

                {/* Form Grid */}
                <div className="flex-grow overflow-y-auto pr-2">
                  <div className="grid grid-cols-3 gap-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm flex items-center">
                        Name
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          required
                          type="text"
                          value={name}
                          placeholder="John Doe"
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-300 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm flex items-center">
                        Email
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          required
                          type="email"
                          value={email}
                          placeholder="johndoe@email.com"
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-300 transition-all"
                        />
                      </div>
                    </div>

                    {/* Username Field */}
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm flex items-center">
                        Username
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          onChange={(e) => setUsername(e.target.value)}
                          value={username}
                          type="text"
                          required
                          placeholder="Username"
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-300 transition-all"
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm flex items-center">
                        Password
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          required
                          value={password}
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
                          pattern="^(?=.*[A-Z])(?=.*[@])(?=.*\d).{6,}$"
                          onChange={(e) => setPassword(e.target.value)}
                          title="USE ONE : @-Number-UpperCase (at least 6 character)"
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-300 transition-all pr-12"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Must include: @, number, uppercase letter (min 6 characters)
                      </p>
                    </div>

                    {/* Gender Field */}
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm flex items-center">
                        Gender
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-300 transition-all"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Date of Birth Field */}
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm flex items-center">
                        Date of Birth
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          required
                          value={dob}
                          type="date"
                          onChange={(e) => setDob(e.target.value)}
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-300 transition-all"
                        />
                      </div>
                    </div>

                    {/* Batch Field */}
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm flex items-center">
                        Batch
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          required
                          type="text"
                          value={batch}
                          placeholder="e.g., 2023-2027"
                          onChange={(e) => setBatch(e.target.value)}
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-300 transition-all"
                        />
                      </div>
                    </div>

                    {/* Section Field */}
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm flex items-center">
                        Section
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          required
                          type="text"
                          value={section}
                          placeholder="e.g., A, B, C"
                          onChange={(e) => setSection(e.target.value)}
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-300 transition-all"
                        />
                      </div>
                    </div>

                    {/* Department Field */}
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm flex items-center">
                        Department
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          required
                          type="text"
                          value={department}
                          placeholder="e.g., Computer Science"
                          onChange={(e) => setDepartment(e.target.value)}
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-300 transition-all"
                        />
                      </div>
                    </div>

                    {/* Father's Name Field */}
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm flex items-center">
                        Father's Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={fatherName}
                          placeholder="Father's Name"
                          onChange={(e) => setFatherName(e.target.value)}
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-300 transition-all"
                        />
                      </div>
                    </div>

                    {/* Father's Contact Field */}
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm flex items-center">
                        Father's Contact
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={fatherContact}
                          placeholder="Father's Contact Number"
                          onChange={(e) => setFatherContact(e.target.value)}
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-300 transition-all"
                        />
                      </div>
                    </div>

                    {/* Contact Number Field */}
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm flex items-center">
                        Contact Number
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          required
                          type="tel"
                          value={contactNumber}
                          placeholder="Your Contact Number"
                          onChange={(e) => setContactNumber(e.target.value)}
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-300 transition-all"
                        />
                      </div>
                    </div>

                    {/* Joining Year Field */}
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm flex items-center">
                        Joining Date
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          required
                          value={joiningYear}
                          type="date"
                          onChange={(e) => setJoiningYear(e.target.value)}
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-300 transition-all"
                        />
                      </div>
                    </div>

                    {/* Avatar Field */}
                    <div className="space-y-2 col-span-2">
                      <label className="text-gray-700 font-medium text-sm flex items-center">
                        Profile Picture
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <div className="flex items-center">
                          <label className="flex-1 cursor-pointer">
                            <div className="bg-gray-50 text-gray-800 px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all flex items-center justify-between">
                              <span className="text-gray-600">
                                {avatar ? "File selected" : "Choose profile picture..."}
                              </span>
                              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                              </svg>
                              <input
                                required
                                type="file"
                                value={avatar}
                                onChange={(e) => setAvatar(e.target.value)}
                                className="hidden"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Subjects Field */}
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm flex items-center">
                        Subjects
                      </label>
                      <div className="relative">
                        <select
                          multiple
                          name="subjects"
                          value={subjects}
                          onChange={(e) => setSubjects(e.target.value)}
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-300 transition-all h-32"
                        >
                          <option value="maths">Mathematics</option>
                          <option value="science">Science</option>
                          <option value="english">English</option>
                          <option value="history">History</option>
                          <option value="economics">Economics</option>
                          <option value="computer">Computer Science</option>
                          <option value="physics">Physics</option>
                          <option value="chemistry">Chemistry</option>
                        </select>
                        <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Register Student
                    </button>
                    {loading && (
                      <Spinner
                        message="Processing Registration"
                        height={30}
                        width={200}
                        color="#10b981"
                        messageColor="#6b7280"
                      />
                    )}
                  </div>
                  
                  {/* Error Messages */}
                  <div>
                    {(error.usernameError || error.passwordError) && (
                      <p className="text-red-500 text-sm font-medium">
                        {error.usernameError || error.passwordError}
                      </p>
                    )}
                  </div>
                  
                  <a href="/login" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Already have an account? <span className="font-medium text-green-600">Login</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegister;
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAdmin } from "../../../redux/actions/adminActions";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Spinner from "../../../utils/Spinner";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

const schema = yup
  .object({
    dob: yup.string().required(),
    name: yup.string().required(),
    avatar: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
    department: yup.string().required(),
    joiningYear: yup.string().required(),
    contactNumber: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

const defaultValues = {
  dob: "",
  name: "",
  email: "",
  avatar: "",
  username: "",
  password: "",
  department: "",
  joiningYear: "",
  showPassword: "",
  contactNumber: "",
};

const AdminRegister = () => {
  const [loading, setLoading] = useState(false);
  const [translate, setTranslate] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setTimeout(() => {
      setTranslate(true);
    }, 1000);
  }, []);

  const onSubmit = (data) => {
    setLoading(true);
    const {
      dob,
      name,
      email,
      avatar,
      username,
      password,
      department,
      contactNumber,
      joiningYear,
    } = data;
    dispatch(
      addAdmin({
        dob,
        name,
        email,
        avatar,
        username,
        password,
        department,
        contactNumber,
        joiningYear: new Date(joiningYear).getFullYear(),
      })
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      {/* Home Button */}
      <div className="absolute top-6 left-6">
        <a href="/">
          <button className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
            Home
          </button>
        </a>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-6xl">
        {/* Title Card */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[36rem] w-[24rem] bg-white rounded-2xl shadow-2xl flex items-center justify-center z-10 transition-all duration-1000 ${
            translate ? "-translate-x-[24rem]" : ""
          }`}
        >
          <div className="text-center px-8">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <svg 
                className="w-10 h-10 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Admin
            </h1>
            <h1 className="text-4xl font-bold text-gray-800">
              Register
            </h1>
            <p className="text-gray-600 mt-6">
              Complete the form to create an administrator account
            </p>
          </div>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`bg-white h-[36rem] w-full rounded-2xl shadow-2xl p-8 transition-all duration-1000 ${
            translate ? "translate-x-[12rem]" : ""
          }`}
        >
          <div className="h-full flex flex-col">
            {/* Form Header */}
            <div className="mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
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
                  <h1 className="text-2xl font-bold text-gray-800">Admin Registration</h1>
                  <p className="text-gray-600 text-sm">Fill in all required fields to register</p>
                </div>
              </div>
            </div>

            {/* Form Grid */}
            <div className="flex-grow overflow-y-auto pr-2">
              <div className="grid grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm flex items-center">
                    Name
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className={`relative ${errors.name ? "border border-red-500 rounded-lg" : ""}`}>
                    <Controller
                      name="name"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white border border-gray-300 transition-all"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">Name is required</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm flex items-center">
                    Email
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className={`relative ${errors.email ? "border border-red-500 rounded-lg" : ""}`}>
                    <Controller
                      name="email"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="johndoe@email.com"
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white border border-gray-300 transition-all"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">Valid email is required</p>
                  )}
                </div>

                {/* Username Field */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm flex items-center">
                    Username
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className={`relative ${errors.username ? "border border-red-500 rounded-lg" : ""}`}>
                    <Controller
                      name="username"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="Username"
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white border border-gray-300 transition-all"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  {errors.username && (
                    <p className="text-red-500 text-xs mt-1">Username is required</p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm flex items-center">
                    Password
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <Controller
                      name="password"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <>
                          <input
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            pattern="^(?=.*[A-Z])(?=.*[@])(?=.*\d).{6,}$"
                            title="USE ONE : @-Number-UpperCase (at least 6 character)"
                            className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white border border-gray-300 transition-all pr-12"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </button>
                        </>
                      )}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Must include: @, number, uppercase letter (min 6 characters)
                  </p>
                </div>

                {/* Date of Birth Field */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm flex items-center">
                    Date of Birth
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className={`relative ${errors.dob ? "border border-red-500 rounded-lg" : ""}`}>
                    <Controller
                      name="dob"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="date"
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white border border-gray-300 transition-all"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  {errors.dob && (
                    <p className="text-red-500 text-xs mt-1">Date of birth is required</p>
                  )}
                </div>

                {/* Department Field */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm flex items-center">
                    Department
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className={`relative ${errors.department ? "border border-red-500 rounded-lg" : ""}`}>
                    <Controller
                      name="department"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="text"
                          placeholder="e.g., Computer Science"
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white border border-gray-300 transition-all"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  {errors.department && (
                    <p className="text-red-500 text-xs mt-1">Department is required</p>
                  )}
                </div>

                {/* Contact Number Field */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm flex items-center">
                    Contact Number
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className={`relative ${errors.contactNumber ? "border border-red-500 rounded-lg" : ""}`}>
                    <Controller
                      control={control}
                      name="contactNumber"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="tel"
                          placeholder="1234567890"
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white border border-gray-300 transition-all"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  {errors.contactNumber && (
                    <p className="text-red-500 text-xs mt-1">Contact number is required</p>
                  )}
                </div>

                {/* Joining Date Field */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm flex items-center">
                    Joining Date
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className={`relative ${errors.joiningYear ? "border border-red-500 rounded-lg" : ""}`}>
                    <Controller
                      control={control}
                      name="joiningYear"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="date"
                          className="w-full bg-gray-50 text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white border border-gray-300 transition-all"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  {errors.joiningYear && (
                    <p className="text-red-500 text-xs mt-1">Joining date is required</p>
                  )}
                </div>

                {/* Avatar Field - Full Width */}
                <div className="space-y-2 col-span-2">
                  <label className="text-gray-700 font-medium text-sm flex items-center">
                    Profile Picture
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className={`relative ${errors.avatar ? "border border-red-500 rounded-lg" : ""}`}>
                    <Controller
                      name="avatar"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <div className="flex items-center">
                          <label className="flex-1 cursor-pointer">
                            <div className="bg-gray-50 text-gray-800 px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all">
                              <span className="text-gray-600">Choose file...</span>
                              <input
                                type="file"
                                className="hidden"
                                {...field}
                              />
                            </div>
                          </label>
                        </div>
                      )}
                    />
                  </div>
                  {errors.avatar && (
                    <p className="text-red-500 text-xs mt-1">Profile picture is required</p>
                  )}
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Register Admin
                </button>
                {loading && (
                  <Spinner
                    message="Processing Registration"
                    height={30}
                    width={200}
                    color="#7c3aed"
                    messageColor="#6b7280"
                  />
                )}
              </div>
              <a href="/login/adminlogin" className="text-gray-600 hover:text-gray-800 transition-colors">
                Already have an account? <span className="font-medium text-purple-600">Login</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
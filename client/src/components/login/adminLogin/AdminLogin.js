// src/components/login/adminLogin/AdminLogin.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { adminSignIn } from "../../../redux/actions/adminActions";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Spinner from "../../../utils/Spinner";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const defaultValues = {
  username: "",
  password: "",
};

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const [translate, setTranslate] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, authData } = useSelector(
    (state) => state.admin || {}
  );

  const rawError = useSelector((state) => state.errors);

  // ✅ force error to string (PREVENT WHITE SCREEN)
  const authError =
    typeof rawError === "string"
      ? rawError
      : rawError?.message
      ? rawError.message
      : null;

  const {
    handleSubmit,
    control,
    formState: { errors: formErrors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const t = setTimeout(() => setTranslate(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (isAuthenticated && authData) {
      setLoading(false);

      if (authData?.result?.passwordUpdated === false) {
        navigate("/admin/update/password");
      } else {
        navigate("/admin/home");
      }
    }
  }, [isAuthenticated, authData, navigate]);

  useEffect(() => {
    if (authError) setLoading(false);
  }, [authError]);

  const onSubmit = ({ username, password }) => {
    setLoading(true);
    dispatch(adminSignIn({ username, password }));
  };

  return (
    <div className="bg-[#04bd7d] h-screen w-screen flex items-center justify-center">
      <div className="grid grid-cols-2">
        <div
          className={`h-96 w-96 bg-white flex items-center justify-center ${
            translate ? "translate-x-[12rem]" : ""
          } duration-1000 transition-all rounded-3xl shadow-2xl`}
        >
          <h1 className="text-[3rem] font-bold text-center">
            Admin <br /> Login
          </h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`w-96 bg-[#2c2f35] flex flex-col items-center justify-center ${
            translate ? "-translate-x-[12rem]" : ""
          } duration-1000 transition-all space-y-6 rounded-3xl shadow-2xl`}
        >
          <h1 className="text-white text-3xl font-semibold">Admin</h1>

          <div className="w-64">
            <p className="text-[#515966] font-bold text-sm">Username</p>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="bg-[#515966] w-full text-white px-2 py-2 rounded-lg outline-none"
                  placeholder="Username"
                />
              )}
            />
            {formErrors.username && (
              <small className="text-red-500">
                {formErrors.username.message}
              </small>
            )}
          </div>

          <div className="w-64">
            <p className="text-[#515966] font-bold text-sm">Password</p>
            <div className="flex items-center bg-[#515966] px-2 rounded-lg">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    className="bg-[#515966] w-full text-white py-2 outline-none"
                    placeholder="Password"
                  />
                )}
              />
              {showPassword ? (
                <VisibilityIcon
                  className="cursor-pointer text-white"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <VisibilityOffIcon
                  className="cursor-pointer text-white"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            {formErrors.password && (
              <small className="text-red-500">
                {formErrors.password.message}
              </small>
            )}
          </div>

          <button
            type="submit"
            className="w-32 rounded-lg text-white bg-[#04bd7d] py-2"
            disabled={loading}
          >
            Login
          </button>

          {loading && (
            <Spinner
              message="Logging In"
              height={30}
              width={150}
              color="#ffffff"
              messageColor="#fff"
            />
          )}

          {authError && (
            <small className="text-red-500 mt-2">{authError}</small>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

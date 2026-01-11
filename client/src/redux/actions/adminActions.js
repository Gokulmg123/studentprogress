// src/redux/actions/adminActions.js

import {
  ADMIN_LOGIN,
  UPDATE_ADMIN,
  ADD_ADMIN,
  ADD_DEPARTMENT,
  ADD_FACULTY,
  GET_ALL_FACULTY,
  ADD_SUBJECT,
  ADD_STUDENT,
  GET_ALL_STUDENT,
  GET_FACULTY,
  GET_SUBJECT,
  GET_STUDENT,
  GET_ALL_ADMIN,
  GET_ALL_DEPARTMENT,
  SET_ERRORS,
  UPDATE_PASSWORD,
  GET_ALL_SUBJECT,
  DELETE_ADMIN,
  DELETE_DEPARTMENT,
  DELETE_FACULTY,
  DELETE_STUDENT,
  DELETE_SUBJECT,
  CREATE_NOTICE,
  GET_NOTICE,
} from "../actionTypes";

import * as api from "../api";

/* =======================
   ADMIN LOGIN (FIXED)
======================= */
export const adminSignIn = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ERRORS, payload: null });

    const { data } = await api.adminSignIn(formData);

    // ✅ BACKEND RETURNS: { result, token }
    const authData = {
      result: data.result,
      token: data.token,
    };

    // ✅ SINGLE SOURCE OF TRUTH
    localStorage.setItem("user", JSON.stringify(authData));

    dispatch({
      type: ADMIN_LOGIN,
      payload: authData,
    });
  } catch (error) {
    const err = error?.response?.data;

    dispatch({
      type: SET_ERRORS,
      payload:
        err?.usernameError ||
        err?.passwordError ||
        err?.message ||
        "Login failed",
    });
  }
};

/* =======================
   UPDATE PASSWORD
======================= */
export const adminUpdatePassword = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: SET_ERRORS, payload: null });

    await api.adminUpdatePassword(formData);

    dispatch({ type: UPDATE_PASSWORD, payload: true });
    navigate("/admin/home");
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload:
        error?.response?.data?.message || "Password update failed",
    });
  }
};

/* =======================
   STUDENT
======================= */
export const getAllStudent = () => async (dispatch) => {
  try {
    const { data } = await api.getAllStudent();
    dispatch({ type: GET_ALL_STUDENT, payload: data || [] });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Failed to load students" });
  }
};

export const addStudent = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ERRORS, payload: null });
    await api.addStudent(formData);
    dispatch({ type: ADD_STUDENT, payload: true });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Add student failed" });
  }
};

export const getStudent = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getStudent(formData);
    dispatch({ type: GET_STUDENT, payload: data });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Student not found" });
  }
};

export const deleteStudent = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ERRORS, payload: null });
    await api.deleteStudent(formData);
    dispatch({ type: DELETE_STUDENT, payload: true });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Delete student failed" });
  }
};

/* =======================
   FACULTY
======================= */
export const getAllFaculty = () => async (dispatch) => {
  try {
    const { data } = await api.getAllFaculty();
    dispatch({ type: GET_ALL_FACULTY, payload: data || [] });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Failed to load faculty" });
  }
};

export const addFaculty = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ERRORS, payload: null });
    await api.addFaculty(formData);
    dispatch({ type: ADD_FACULTY, payload: true });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Add faculty failed" });
  }
};

export const getFaculty = (department) => async (dispatch) => {
  try {
    const { data } = await api.getFaculty(department);
    dispatch({ type: GET_FACULTY, payload: data || [] });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Faculty not found" });
  }
};

export const deleteFaculty = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ERRORS, payload: null });
    await api.deleteFaculty(formData);
    dispatch({ type: DELETE_FACULTY, payload: true });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Delete faculty failed" });
  }
};

/* =======================
   ADMIN
======================= */
export const getAllAdmin = () => async (dispatch) => {
  try {
    const { data } = await api.getAllAdmin();
    dispatch({ type: GET_ALL_ADMIN, payload: data || [] });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Failed to load admins" });
  }
};

export const addAdmin = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ERRORS, payload: null });
    await api.addAdmin(formData);
    dispatch({ type: ADD_ADMIN, payload: true });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Add admin failed" });
  }
};

export const deleteAdmin = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ERRORS, payload: null });
    await api.deleteAdmin(formData);
    dispatch({ type: DELETE_ADMIN, payload: true });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Delete admin failed" });
  }
};

export const updateAdmin = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ERRORS, payload: null });
    await api.updateAdmin(formData);
    dispatch({ type: UPDATE_ADMIN, payload: true });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Update admin failed" });
  }
};

/* =======================
   DEPARTMENT
======================= */
export const getAllDepartment = () => async (dispatch) => {
  try {
    const { data } = await api.getAllDepartment();
    dispatch({ type: GET_ALL_DEPARTMENT, payload: data || [] });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Failed to load departments" });
  }
};

export const addDepartment = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ERRORS, payload: null });
    await api.addDepartment(formData);
    dispatch({ type: ADD_DEPARTMENT, payload: true });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Add department failed" });
  }
};

export const deleteDepartment = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ERRORS, payload: null });
    await api.deleteDepartment(formData);
    dispatch({ type: DELETE_DEPARTMENT, payload: true });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Delete department failed" });
  }
};

/* =======================
   SUBJECT
======================= */
export const getAllSubject = () => async (dispatch) => {
  try {
    const { data } = await api.getAllSubject();
    dispatch({ type: GET_ALL_SUBJECT, payload: data || [] });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Failed to load subjects" });
  }
};

export const addSubject = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ERRORS, payload: null });
    await api.addSubject(formData);
    dispatch({ type: ADD_SUBJECT, payload: true });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Add subject failed" });
  }
};

export const getSubject = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getSubject(formData);
    dispatch({ type: GET_SUBJECT, payload: data });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Subject not found" });
  }
};

export const deleteSubject = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ERRORS, payload: null });
    await api.deleteSubject(formData);
    dispatch({ type: DELETE_SUBJECT, payload: true });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Delete subject failed" });
  }
};

/* =======================
   NOTICE
======================= */
export const createNotice = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ERRORS, payload: null });
    await api.createNotice(formData);
    dispatch({ type: CREATE_NOTICE, payload: true });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Create notice failed" });
  }
};

export const getNotice = () => async (dispatch) => {
  try {
    const { data } = await api.getNotice();
    dispatch({ type: GET_NOTICE, payload: data || [] });
  } catch {
    dispatch({ type: SET_ERRORS, payload: "Failed to load notices" });
  }
};

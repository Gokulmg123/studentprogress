import {
  ADD_ADMIN,
  ADD_FACULTY,
  ADD_STUDENT,
  ADD_SUBJECT,
  ADMIN_LOGIN,
  GET_FACULTY,
  GET_SUBJECT,
  LOGOUT,
  UPDATE_ADMIN,
  GET_STUDENT,
  ADD_DEPARTMENT,
  GET_ALL_STUDENT,
  GET_ALL_SUBJECT,
  GET_ALL_FACULTY,
  GET_ALL_ADMIN,
  GET_ALL_DEPARTMENT,
  UPDATE_PASSWORD,
  GET_ADMIN,
  DELETE_ADMIN,
  DELETE_DEPARTMENT,
  DELETE_FACULTY,
  DELETE_STUDENT,
  DELETE_SUBJECT,
  CREATE_NOTICE,
  GET_NOTICE,
} from "../actionTypes";

const initialState = {
  authData: null,
  isAuthenticated: false,

  updatedPassword: false,
  updatedAdmin: false,

  adminAdded: false,
  departmentAdded: false,
  facultyAdded: false,
  studentAdded: false,
  subjectAdded: false,
  noticeCreated: false,

  adminDeleted: false,
  departmentDeleted: false,
  facultyDeleted: false,
  studentDeleted: false,
  subjectDeleted: false,

  allFaculty: [],
  allSubject: [],
  allStudent: [],
  allAdmin: [],
  allDepartment: [],

  faculties: [],
  subjects: [],
  students: [],
  admins: [],
  notices: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    /* ================= AUTH ================= */
    case ADMIN_LOGIN:
      return {
        ...state,
        authData: action.payload,
        isAuthenticated: true,
      };

    case LOGOUT:
      return {
        ...state,
        authData: null,
        isAuthenticated: false,
      };

    /* ================= FLAGS ================= */
    case UPDATE_PASSWORD:
      return { ...state, updatedPassword: true };

    case UPDATE_ADMIN:
      return { ...state, updatedAdmin: true };

    case ADD_ADMIN:
      return { ...state, adminAdded: true };

    case ADD_DEPARTMENT:
      return { ...state, departmentAdded: true };

    case ADD_FACULTY:
      return { ...state, facultyAdded: true };

    case ADD_STUDENT:
      return { ...state, studentAdded: true };

    case ADD_SUBJECT:
      return { ...state, subjectAdded: true };

    case CREATE_NOTICE:
      return { ...state, noticeCreated: true };

    case DELETE_ADMIN:
      return { ...state, adminDeleted: true };

    case DELETE_DEPARTMENT:
      return { ...state, departmentDeleted: true };

    case DELETE_FACULTY:
      return { ...state, facultyDeleted: true };

    case DELETE_STUDENT:
      return { ...state, studentDeleted: true };

    case DELETE_SUBJECT:
      return { ...state, subjectDeleted: true };

    /* ================= DATA ================= */
    case GET_FACULTY:
      return { ...state, faculties: action.payload || [] };

    case GET_SUBJECT:
      return { ...state, subjects: action.payload || [] };

    case GET_STUDENT:
      return { ...state, students: action.payload || [] };

    case GET_ADMIN:
      return { ...state, admins: action.payload || [] };

    case GET_NOTICE:
      return { ...state, notices: action.payload || [] };

    case GET_ALL_FACULTY:
      return { ...state, allFaculty: action.payload || [] };

    case GET_ALL_SUBJECT:
      return { ...state, allSubject: action.payload || [] };

    case GET_ALL_STUDENT:
      return { ...state, allStudent: action.payload || [] };

    case GET_ALL_ADMIN:
      return { ...state, allAdmin: action.payload || [] };

    case GET_ALL_DEPARTMENT:
      return { ...state, allDepartment: action.payload || [] };

    default:
      return state;
  }
};

export default adminReducer;

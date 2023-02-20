import { API } from "../../shared/services/api";
// import axios from "axios";

export const loginUser = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "login_user" });
  try {
    const result = await API.post("/users/login", formData);
    localStorage.setItem("token", result.data.token);
    dispatch({ type: "login_user_ok", payload: result.data });
    navigate("/"); //aqui hay que poner la pagina del perfil
  } catch (error) {
    dispatch({ type: "login_user_ko", payload: error.message });
  }
};
export const registerUser = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "register_user" });
  try {
    const result = await API.post("/users/register", formData);
    dispatch({ type: "register_user_ok", payload: result.data });
    navigate("/login");
  } catch (error) {
    console.log(error);
    dispatch({ type: "register_user_ko", payload: error.message });
  }
};

export const checkSession = (token, navigate) => async (dispatch) => {
  dispatch({ type: "checksession_user" });
  try {
    const result = await API.post("/users/checksession");
    dispatch({
      type: "checksession_user_ok",
      payload: { user: result.data, token: token },
    });
    navigate(["/"]);
  } catch (error) {
    dispatch({ type: "checksession_user_ko", payload: error.message});
    localStorage.removeItem("token");
    navigate(["/login"]);
  }
};


export const logout = (navigate) => async (dispatch) => {
  dispatch({ type: "logout_user" });
  try {
    dispatch({
      type: "logout_user_ok"
    });    
    localStorage.removeItem("token");
    navigate(["/login"]);
  } catch (error) {
    dispatch({ type: "logout_user_ko", payload: error.message});
    navigate(["/"]);
  }
};
export const registerForm = (formData) => async (dispatch) => {
  dispatch({ type: "register_form" });
  try {
    const result = await API.post("/form/register", formData);
    dispatch({ type: "register_forms_ok", payload: result.data });
    
  } catch (error) {
    console.log(error);
    dispatch({ type: "register_form_ko", payload: error.message });
  }
};

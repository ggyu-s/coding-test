import axios from "axios";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../reducers/user";

/**
 * 회원가입
 */
export const userRegister = (info) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    await axios.post("/user/register", info.data);
    setTimeout(() => {
      dispatch({
        type: USER_REGISTER_SUCCESS,
      });
    }, 1000);
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILURE,
      error: error.response.data,
    });
  }
};

/**
 * 로그인
 */
export const userLogin = (info) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const result = await axios.post("/user/login", info.data);
    console.log(result.data);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      error: error.response.data,
    });
  }
};

/**
 * 로그아웃
 */
export const userLogout = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGOUT_REQUEST,
    });
    dispatch({
      type: USER_LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAILURE,
      error: error.response.data,
    });
  }
};

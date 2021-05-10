import { combineReducers } from "redux";
import axios from "axios";
import user from "../reducers/user";
import post from "../reducers/post";

axios.defaults.baseURL = "http://localhost:3002";
axios.defaults.withCredentials = true;

const rootReducer = combineReducers({
  user,
  post,
});
export default rootReducer;

import axios from "axios";
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  POST_LIST_REQUEST,
  POST_LIST_FAILURE,
  POST_LIST_SUCCESS,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
} from "../reducers/post";
import { ADD_POST_USER, REMOVE_POST_USER } from "../reducers/user";

/**
 * 게시물 리스트 가져오기
 */
export const postList = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIST_REQUEST,
    });
    const result = await axios.get("/post");
    console.log(result);
    dispatch({
      type: POST_LIST_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    dispatch({
      type: POST_LIST_FAILURE,
      error: error.response.data,
    });
  }
};

/**
 * 게시물 추가
 */
export const addPost = (post) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_POST_REQUEST,
    });
    const result = await axios.post("/post/create", post.data);
    console.log(result.data);
    dispatch({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
    dispatch({
      type: ADD_POST_USER,
      data: result.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_POST_FAILURE,
      error: error.response.data,
    });
  }
};

/**
 * 댓글 추가
 */
export const addComment = (comment) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_COMMENT_REQUEST,
    });
    const result = await axios.post("/post/comment", comment.data);
    console.log(result.data);
    dispatch({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_COMMENT_FAILURE,
      error: error.response.data,
    });
  }
};

/**
 * 게시물 삭제
 */

export const reMovePost = (postId) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_POST_REQUEST,
    });
    const result = await axios.delete(`/post/${postId.data}`);
    dispatch({
      type: REMOVE_POST_SUCCESS,
      data: postId.data,
    });
    dispatch({
      type: REMOVE_POST_USER,
      data: postId.data,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_POST_FAILURE,
      error: error.response.data,
    });
  }
};

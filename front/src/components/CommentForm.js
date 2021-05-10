import { Button, Form, Input } from "antd";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../actions/postaction";
import useInput from "../hooks/useinput";

function CommentForm({ postId }) {
  const dispatch = useDispatch();
  const { addCommentLoading } = useSelector((state) => state.post);
  const { userInfo } = useSelector((state) => state.user);
  const [content, onChangeContent, setContent] = useInput("");

  const onSubmit = useCallback(() => {
    console.log(content);
    dispatch(
      addComment({
        data: { content, postId, userId: userInfo.id },
      })
    );
    setContent("");
  }, [content, dispatch, postId, setContent, userInfo.id]);

  return (
    <Form style={{ margin: "10px 0 20px" }} onFinish={onSubmit}>
      <Input.TextArea
        value={content}
        onChange={onChangeContent}
        maxLength={140}
        placeholder="댓글 입력"
      />
      <Button
        type="primary"
        style={{ float: "right" }}
        htmlType="submit"
        loading={addCommentLoading}
      >
        등록
      </Button>
    </Form>
  );
}

export default CommentForm;

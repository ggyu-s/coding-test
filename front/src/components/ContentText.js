import { Button, Form, Input } from "antd";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../actions/postaction";
import useInput from "../hooks/useinput";

function ContentText() {
  const dispatch = useDispatch();
  const { addPostLoading } = useSelector((state) => state.post);
  const { userInfo } = useSelector((state) => state.user);
  const [content, onChangeContent, setContent] = useInput("");

  const onSubmit = useCallback(() => {
    console.log(content);
    dispatch(
      addPost({
        data: { content, userId: userInfo.id },
      })
    );
    setContent("");
  }, [content, dispatch, setContent, userInfo.id]);

  return (
    <Form style={{ margin: "10px 0 20px" }} onFinish={onSubmit}>
      <Input.TextArea
        value={content}
        onChange={onChangeContent}
        maxLength={140}
        placeholder="포스트 입력"
      />
      <Button
        type="primary"
        style={{ float: "right" }}
        htmlType="submit"
        loading={addPostLoading}
      >
        등록
      </Button>
    </Form>
  );
}

export default ContentText;

import { Card } from "antd";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reMovePost } from "../actions/postaction";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

function PostItem({ post }) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const [isVisibleComment, setVisibleComment] = useState(false);

  const onComment = useCallback(() => {
    setVisibleComment((prev) => !prev);
  }, []);

  const onRemove = useCallback(() => {
    if (post.userId !== userInfo.id) {
      alert("삭제하실 수 없습니다.");
      return;
    }
    dispatch(reMovePost({ data: post.id }));
  }, [dispatch, post.id, post.userId, userInfo.id]);
  return (
    <>
      <Card
        style={{ marginTop: "40px" }}
        actions={[
          <div onClick={onComment}>댓글({post.commnets.length})</div>,
          <div onClick={onRemove}>삭제</div>,
        ]}
        title={post.user.name}
        extra={post.createdAt.substring(0, 10)}
      >
        <Card.Meta description={post.content} />
      </Card>
      {isVisibleComment ? (
        <div>
          <CommentForm postId={post.id} />
          <CommentItem post={post} />
        </div>
      ) : null}
    </>
  );
}

export default PostItem;

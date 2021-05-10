import { Card, Comment, List } from "antd";
import React from "react";

function CommentItem({ post }) {
  return (
    <List
      header={`${post.commnets.length}개의 댓글`}
      itemLayout="horizontal"
      dataSource={post.commnets}
      renderItem={(item) => (
        <li>
          <Comment
            author={`${item.user.name} ${item.createdAt.substring(0, 10)}`}
            content={item.content}
          />
        </li>
      )}
    />
  );
}

export default CommentItem;

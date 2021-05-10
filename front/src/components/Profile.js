import { Avatar, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { UserOutlined } from "@ant-design/icons";
import React, { useCallback, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../actions/useraction";
import { postList } from "../actions/postaction";

const GlobalStyle = createGlobalStyle`
  .ant-card {
    border-radius:15px;
  }
  .ant-card-actions {
    border-radius:15px;
  }
`;

function Profile({ userInfo }) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(postList());
  }, [dispatch]);

  /**
   * 클릭시 로그아웃
   */
  const onClickLogout = useCallback(() => {
    dispatch(userLogout());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Card
        actions={[
          <div>게시물({userInfo.posts.length})</div>,
          <div onClick={onClickLogout}>로그아웃</div>,
        ]}
      >
        <Meta
          avatar={<Avatar size={64} icon={<UserOutlined />} />}
          title={userInfo.name}
          description={userInfo.email}
        />
      </Card>
    </>
  );
}

export default Profile;

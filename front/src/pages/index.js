import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentText from "../components/ContentText";
import LoginForm from "../components/LoginForm";
import PostItem from "../components/PostItem";
import Profile from "../components/Profile";
import { STATE_INIT } from "../reducers/user";

function Main() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.post);

  /**
   * 상태 초기화 디스패치
   */
  useEffect(() => {
    dispatch({
      type: STATE_INIT,
    });
  }, [dispatch]);

  return (
    <>
      {userInfo ? (
        <>
          <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <Profile userInfo={userInfo} />
            <ContentText />
            {posts &&
              posts.map((post) => <PostItem key={post.id} post={post} />)}
          </div>
        </>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default Main;

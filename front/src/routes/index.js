import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Main from "../pages";
import Register from "../pages/Register";
import pic from "../images/pic.jpg";

const MainWrapper = styled.div`
  height: 100vh;
`;
function Routes() {
  return (
    <MainWrapper>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </MainWrapper>
  );
}

export default Routes;

import React from "react";
import {  Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Login from "./components/login";
import Users from "./components/users";
import Main from "./components/main";
import Loading from "./components/loading";

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        
        <Switch>
          <Route path='/login' component={Login}/>
          {/* <Route path='/users/:userId?' component={<Users/>}/> */}
          <Route path='/' component={Main}/>
          <Route path='*' component={Loading}/>
        </Switch>
      </div>
      <Users/>
    </>
  );
}

export default App;

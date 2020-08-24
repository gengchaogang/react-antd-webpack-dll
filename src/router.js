import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { asyncComponent } from "./components/AsyncComponent";

const Login = asyncComponent(() =>
  import(/* webpackChunkName: "Login" */ "./routes/Login/Login.jsx")
);
const HelloWorld = asyncComponent(() =>
  import(
    /* webpackChunkName: "HelloWorld" */ "./routes/HelloWorld/HelloWorld.jsx"
  )
);
const Main = asyncComponent(() =>
  import(/* webpackChunkName: "Main" */ "./routes/Main/Main.jsx")
);

const BasicRoute = () => (
  <HashRouter>
    <Route path="/Login" component={Login}></Route>
    <Route path="/HelloWorld" component={HelloWorld}></Route>
    <Route path="/Main" component={Main}></Route>
  </HashRouter>
);
export default BasicRoute;

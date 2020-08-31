import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { asyncComponent } from "./components/AsyncComponent";

const Login = asyncComponent(() =>
  import(/* webpackChunkName: "Login" */ "./routes/Login/Login.jsx")
);
const Layout = asyncComponent(() =>
  import(/* webpackChunkName:"Layout" */ "./routes/Layout/Layout.jsx")
)
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
    <Switch>
      <Route path="/Login" exact component={Login}></Route>
      <Route path="/" render={() =>
        <Layout>
          <Route path="/" exact component={Main}></Route>
          <Route path="/HelloWorld" exact component={HelloWorld}></Route>
        </Layout>
      } />
    </Switch>
  </HashRouter>
);
export default BasicRoute;

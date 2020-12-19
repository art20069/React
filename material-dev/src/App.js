import React from "react";
import Header from "./component/fragments/Header";
import Menu from "./component/fragments/Menu";
import Login from "./component/pages/Login";
import Register from "./component/pages/Register";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  const [openDrawer, setOpenDrawer] = React.useState(true);
// Close
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
// Open
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  //RUN
  return (
    <Router>
      <Header handleDrawerOpen={handleDrawerOpen}/>
      <Menu open={openDrawer} handleDrawerClose={handleDrawerClose} />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
      </Switch>
    </Router>
  );
}


export default App;

import React from "react";
import { Button, Container } from "@material-ui/core";
import Header from "./component/fragments/Header";
import Menu from "./component/fragments/Menu";
import Login from "./component/pages/Login";
import Register from "./component/pages/Register";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

//CSS
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(20)
  }
}));

function App() {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const classes = useStyles(); // เชื่อมกับ fn นอกเข้ามาใช้ใน fn-app
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
      <Header handleDrawerOpen={handleDrawerOpen} open={openDrawer} />
      <Menu open={openDrawer} handleDrawerClose={handleDrawerClose} />
      <Container className={classes.content} > 
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route
            exact={true}
            path="/"
            component={() => <Redirect to="/login" />}
          />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

import React from "react";
import { Button } from "@material-ui/core";
import { red, pink, green } from "@material-ui/core/colors";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        500: "#009688",
      },
    },
    status: {
      danger: "orange",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ textAlign: "center" }}>
        <br />
        <br />
        <Button varint="contained" style={{ backgroundColor: pink[100] }}>
          RUN
        </Button>
        <br />
        <br />
        <Button
          variant="contained"
          style={{ backgroundColor: green[600], color: "#000" }}
        >
          RUN
        </Button>
        <br/>
        <br/>
        <Button  variant="contained" color="primary">RUN</Button>
      </div>
    </ThemeProvider>
  );
}

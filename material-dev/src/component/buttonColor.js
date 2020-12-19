import React from 'react';
import {Button} from "@material-ui/core";
import { red,pink,green} from "@material-ui/core/colors";

export default function App() {
  return (
    <div style={{textAlign:"center"}}>
      <br/><br/>
      <Button  varint="contained" style={{backgroundColor: pink[100]}} >RUN</Button>
      <br/>
      <br/>
      <Button variant="contained"
      style={{backgroundColor: green[600],  color: "#000"}}>RUN</Button>
    </div>
  )
}


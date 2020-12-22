import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
  },
  media: {
    height: 200,
  },
  submit: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const [account, setAccount] = React.useState({
    username: "test1",
    password: "test2",
  });

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/images/authen_header.jpg`}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Login
        </Typography>

        <from className={classes.from} noValidate>
          {/* Username */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={account.username}
            // onChange={e=>{setAccount({username:e.target.value  , password:e.target.value})}}
            onChange={e=>{
              setAccount({
                ...account,
                username:  e.target.value
              })
            }}
              
           
            id="username"
            label="Username"
            autoComplete="email"
            autoFocus
          />
          {/* Password */}
          <TextField
            variant="outlined"
            margin="normal"
            value={account.password}
            // onChange={e=>{setAccount({username:e.target.value})}}
            onChange={e=>{
              setAccount({
                ...account,
                password:  e.target.value
              })
            }}
            required
            fullWidth
            id="password"
            label="Password"
            autoComplete="password"
            autoFocus
          />

          Debug :{JSON.stringify(account)}
        </from>
      </CardContent>

      <div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>

        <Button
          variant="contained"
          onClick={() => props.history.push("/register")}
          fullWidth
          size="small"
          color="primary"
        >
          Register
        </Button>
      </div>
    </Card>
  );
}

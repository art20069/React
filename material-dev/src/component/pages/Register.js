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
    margin: theme.spacing(4, 0, 2,),
  },
}));


export default function Register(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/images/authen_header.jpg`}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Register
        </Typography>

        <from className={classes.from}>
          {/* Username */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            autoComplete="email"
            autoFocus
          />
          {/* Password */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            autoComplete="password"
            autoFocus
          />
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
          Register
        </Button>

        <Button 
        variant="contained" 
        onClick={()=>props.history.goBack()}
        fullWidth 
        size="small" 
        color="primary">

          Cancel
        </Button>
      </div>
    </Card>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";

import {
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TextField,
  Link,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 200
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Register(props) {
  const classes = useStyles();

  function showForm({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting
  }) {
    return (
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={values.username}
          onChange={handleChange}
          id="username"
          label="Username"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={values.password}
          onChange={handleChange}
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          className={classes.submit}
        >
          Register
        </Button>
        <Button
          onClick={() => props.history.goBack()}
          fullWidth
          size="small"
          color="primary"
        >
          Cancel
        </Button>
      </form>
    );
  }

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

        <Formik
          initialValues={{ username: "admin", password: "1234" }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            setTimeout(() => {
              setSubmitting(false);
            }, 1000);
            //  alert(JSON.stringify(values));
          }}
        >
          {props => showForm(props)}
        </Formik>
      </CardContent>
    </Card>
  );
}

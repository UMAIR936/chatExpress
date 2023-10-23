import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";

const initialState = {
  name: "",
  room: "",
};

const SignUp = () => {
  const [form, setForm] = useState(initialState);

  const classes = useStyles();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Join Chat
        </Typography>
        <Grid container spacing={2}>
          <Input
            name="name"
            label="Name"
            handleChange={handleChange}
            type="text"
          />
          <Input
            name="room"
            label="Room"
            handleChange={handleChange}
            type="text"
          />
        </Grid>

        <Link
          onClick={(e) =>
            !form.name || !form.room ? e.preventDefault() : null
          }
          to={`/chat?name=${form.name}&room=${form.room}`}
          style={{ width: "100%", textDecoration: "none" }}
        >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ background: "#ddba47" }}
          >
            Sign In
          </Button>
        </Link>
      </Paper>
    </Container>
  );
};

export default SignUp;

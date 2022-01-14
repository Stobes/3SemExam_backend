import React from "react";
import {makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    alignItems: "center",
  },
}));

export const Home = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
    <>
      {props.user && (
        <div className="home">
          <h4>Welcome {props.user.username}</h4>
          <p>Roles: {props.user.role}</p>
          <ul></ul>
        </div>
      )}
    </>
    </Container>
  );
};

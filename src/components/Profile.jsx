import {makeStyles, Container } from "@material-ui/core";
import GetAllWashers from "./GetAllWashers";
import GetAllBookings from "./GetAllBookings";
import Admin from "./Admin";
import { useEffect, useState } from "react";
import userFacade from "../Facades/UserFacade";
import apiFacade from "../Facades/apiFacade";
import CreateWasher from "./CreateWasher";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    alignItems: "center",
  },
}));

const Profile = () => {

  const classes = useStyles();

  return (
    
    <Container className={classes.container}>

    <div className="profile">
      <GetAllWashers />
      <br/>
      <GetAllBookings />
      <br/>
      <CreateWasher />

    </div>
    </Container>
  );
};

export default Profile;
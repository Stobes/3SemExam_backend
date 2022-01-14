import React from "react";
//import apiFacade from "../Facades/apiFacade";
//import { Link } from "react-router-dom";
//import { SearchBox } from "./SearchBox";
import apiFacade from "../Facades/apiFacade";
import {
  Toolbar,
  Typography,
  AppBar,
  //InputBase,
  makeStyles,
} from "@material-ui/core";
//import {Search} from '@material-ui/icons';
//import { grey } from "@mui/material/colors";
//import { ClassNames } from "@emotion/react";
//import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#060b26",
  },
  /*
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: (grey,0.15),
    width: '40%',
    },
    input: {
      color: 'white',
      marginLeft: theme.spacing(1),
    }
*/
}));

const Nav = (props) => {
  const logout = () => {
    apiFacade.logout();
  };

  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">
          <img src="./Stm-logo-final.png"></img>
        </Typography>
        <button onClick={logout}>Logout</button>
        
        {props.user && props.user.username}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;

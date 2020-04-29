import React from "react";
import { Provider } from "react-redux";

import {AppBar, Toolbar, Typography, Grid} from '@material-ui/core';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import 'typeface-roboto';
import { makeStyles } from "@material-ui/core/styles"

import store from "./data";
import Movies from "./components/Movies";
import LikedMovies from "./components/LikedMovies";
import MovieForm from './components/MovieForm'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginLeft: "10px"
  }
}))


function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h4">Movie Search</Typography>
          <LocalMoviesIcon className={classes.icon}></LocalMoviesIcon>
        </Toolbar>
      </AppBar>
      <MovieForm />
        <Grid container justify="space-evenly" spacing={3}>
          <Grid item xs={5}>
            <Movies />
          </Grid>
          <Grid item xs={5}>
            <LikedMovies />
          </Grid>
        </Grid>
        
      
      
    </Provider>
  );
}

export default App;

import React from "react";
import { useField } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../data/movies";
import {Grid, TextField, IconButton, Typography} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
    fontSize: "28px"
  },
  heading: {
    marginTop: "20px",
    width: "500px"
  }
}))

export default () => {
  const classes = useStyles();
  const { error, setError, setValue, ...field } = useField("", true);
  const likedMoviesData = useSelector(state => state.likedMovies);
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    if (field.value === "") {
      setError(true);
    } else {
      setValue("");
      dispatch(getMovies(field.value));
    }
  };

  return (
    <>
      <Grid container align="center" direction="column" className={classes.root}>
        <Grid item justify="center">
          <form container onSubmit={submitHandler}>
            <TextField id="standard-search" {...field} label="" type="search" placeholder="Title" className={error ? "error" : ""}/>
            <IconButton type="submit" aria-label="search">
              <SearchIcon color="secondary"/>
            </IconButton>
          </form>
        </Grid>
        <Grid item>
        {likedMoviesData.length === 0 && <Typography className={classes.heading} variant="h6" color="secondary">Search a title, then click the heart icon to add a movie to your favorites collection!</Typography>}
        </Grid>
      </Grid>
    </>
  );
};

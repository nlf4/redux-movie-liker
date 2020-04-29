import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { likeMovie } from '../data/likedMovies'
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px"
  }
}))

export default () => {
    const classes = useStyles();
    const { loading, error, data } = useSelector(state => state.movies);
    const likedMovies = useSelector(state => state.likedMovies)
    const dispatch = useDispatch()

    const likeHandler = movie => e => {
        dispatch(likeMovie(movie))
    }
    
    console.log(likedMovies);

  return (
    <>
      
      {loading && <Typography variant="h5">Loading...</Typography>}
      {error !== "" && <Typography variant="h5">{error}</Typography>}

      {data.length !== 0 && (
        <>
        <Typography align="center" variant="h5">Movies</Typography>
        <Grid container spacing={2} className={classes.root}>
          {data.map(movie => (
            <Grid item xs={3} key={movie.imdbID}>
              <Card variant="outlined">
                <CardActionArea>
                  <CardMedia component="img" height="250" image={movie.Poster} title={movie.Title} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">{movie.Title}</Typography>
                      <IconButton onClick={likeHandler(movie)}>
                        <FavoriteBorderIcon/>
                      </IconButton>
                    </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        </>
      )}

      
      
    </>
  );
};
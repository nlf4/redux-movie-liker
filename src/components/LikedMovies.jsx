import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { unlikeMovie } from '../data/likedMovies'
import { Typography, Grid, CardActionArea, Card, CardMedia, CardContent, IconButton } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "50px"
    },
    errorMsg: {
        marginTop: "200px"
    }
  }))

export default () => {
    const classes = useStyles();
    const likedMoviesData = useSelector(state => state.likedMovies);
    const dispatch = useDispatch()
   
    const unlikeHandler = title => e => {
        dispatch(unlikeMovie(title))
    }
 
    return (
        <>
            {likedMoviesData.length !== 0 && (
                <>
                    <Typography align="center" variant="h5">Favorite Movies</Typography>
                    <Grid container spacing={2} className={classes.root}>
                        {likedMoviesData.map( movie => (
                            <Grid item xs={3} key={movie.imdbID}>
                            <Card variant="outlined">
                            <CardActionArea>
                                <CardMedia component="img" height="250" image={movie.Poster} title={movie.Title} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">{movie.Title}</Typography>
                                    <IconButton onClick={unlikeHandler(movie.Title)}>
                                    <FavoriteIcon/>
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
    )
}
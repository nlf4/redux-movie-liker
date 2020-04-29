import { createStore, applyMiddleware, combineReducers } from "redux";
import moviesReducer from "./movies";
import likedMoviesReducer from "./likedMovies";
import thunk from "redux-thunk";
import logger from "redux-logger";


export default createStore(
  combineReducers({
    movies: moviesReducer,
    likedMovies: likedMoviesReducer
  }),
  applyMiddleware(thunk, logger)
);

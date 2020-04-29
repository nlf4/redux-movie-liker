
/*****************/
/* INITIAL STATE */
/*****************/
const initialState = [];

/*********/
/* TYPES */
/*********/
const LIKED = "LIKED";
const UNLIKED = "UNLIKED";

/*******************/
/* ACTION CREATORS */
/*******************/
export const likeMovie = payload => ({
    type: LIKED,
    payload
});

export const unlikeMovie = title => ({
      type: UNLIKED,
      payload: title
  });

/***********/
/* REDUCER */
/***********/
export default (state = initialState, {type, payload} ) => {
  switch (type) {
    case LIKED:
      return [ ...state, payload ];
    case UNLIKED:
      return state.filter( movie => movie.Title !== payload)
    default:
      return state;
  }
};

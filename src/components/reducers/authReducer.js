const INITIAL_STATE = {
  authenticated: "",
  errorMessage: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIAL_STATE:
      return { ...state, authenticated: action.payload };
    default:
      return state;
  }
};

import { configureStore } from "@reduxjs/toolkit";
import { accessTokenReducer } from "./reducer";
// import AccountReducer from "./account-slice";

export default configureStore ({
  reducer: {
<<<<<<< HEAD
    accessToken: accessTokenReducer
=======
    Spotify: accessTokenReducer
>>>>>>> a8d7d82 (added test for track component)
  },
  devTools: true
});

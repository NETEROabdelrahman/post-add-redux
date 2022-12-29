import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postsSlice";
import UsersSlice from "./features/Users/UsersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users:UsersSlice,
  },
});

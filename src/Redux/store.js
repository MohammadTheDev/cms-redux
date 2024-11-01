import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./store/users.js";
import coursesReducer from "./store/courses.js";
import articlesReducer from "./store/articles.js";

export default configureStore({
  reducer: {
    users: usersReducer,
    courses: coursesReducer,
    articles: articlesReducer,
  },
});

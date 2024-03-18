import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "../features/articleSlice";
import scategoriesReducer from "../features/scategorieSlice";
import cartSliceReducer from "../features/cartSlice";
import authReducer from "../features/AuthSlice"
const store = configureStore({
  reducer: {
    storearticles: articlesReducer,
    storescategories: scategoriesReducer,
    storecart: cartSliceReducer,
    auth:authReducer
  },
});
export default store;

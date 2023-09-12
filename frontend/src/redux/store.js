import { configureStore } from "@reduxjs/toolkit";
import visibilityReducer from "./visibilitySlice";

export default configureStore({
    reducer: {
        visibility: visibilityReducer,
    },
});

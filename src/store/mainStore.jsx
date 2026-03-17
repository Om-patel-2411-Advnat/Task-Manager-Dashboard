import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import ProjectSlice from "./ProjectSlice";

const store = configureStore({
    reducer : {
        auth: authSlice ,
        projects : ProjectSlice ,
    }
});
export default store ;
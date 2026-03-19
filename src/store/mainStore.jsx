import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import ProjectSlice from "./ProjectSlice";
import SwitchViewSlice from "./SwitchViewSlice";

const store = configureStore({
    reducer : {
        auth: authSlice ,
        projects : ProjectSlice ,
        view: SwitchViewSlice ,
    }
});
export default store ;
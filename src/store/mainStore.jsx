import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import ProjectSlice from "./ProjectSlice";
import SwitchViewSlice from "./SwitchViewSlice";
import FilterSlice from "./FilterSlice";

const store = configureStore({
    reducer : {
        auth: authSlice ,
        projects : ProjectSlice ,
        view: SwitchViewSlice ,
        filter_sorting : FilterSlice
    }
});
export default store ;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    view: JSON.parse(localStorage.getItem("view")) || [],
    Theme : JSON.parse(localStorage.getItem("theme")) || [] ,
}

const SwitchViewSlice = createSlice({
    name: "SwitchView",
    initialState,
    reducers: {
        SetView(state, action) {
            state.view = action.payload;
            localStorage.setItem("view" , JSON.stringify(state.view));
        },
        setTheme(state , action){
            state.Theme = action.payload ;
            localStorage.setItem("theme" , JSON.stringify(state.Theme));
        }
    }
});

export const SwitchActions = SwitchViewSlice.actions;

export default SwitchViewSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    view : 'list',
}

const SwitchViewSlice = createSlice({
    name : "SwitchView" ,
    initialState,
    reducers : {
        SetView(state , action){
            state.view = action.payload ;
        }
    }
});

export const SwitchActions = SwitchViewSlice.actions ;

export default SwitchViewSlice.reducer ;
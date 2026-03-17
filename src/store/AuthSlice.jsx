import { createSlice } from '@reduxjs/toolkit';

const loginTime =Number(localStorage.getItem('loginTime'));

const isValid = loginTime && Date.now()-loginTime < (1000 * 60 * 60) ;

const initialState = {
    isAuthenticated: isValid ,
}

const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers : {
        logIn(state){
            state.isAuthenticated = true;
            localStorage.setItem("isAuth" , "true");
            localStorage.setItem("loginTime", Date.now());
        },
        logOut(state){
            state.isAuthenticated = false;
            localStorage.removeItem("isAuth");
            localStorage.removeItem("loginTime");
        }
    }
})

export const authActions = authSlice.actions ;

export default authSlice.reducer;
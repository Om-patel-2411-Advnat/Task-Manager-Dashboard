import { createSlice } from '@reduxjs/toolkit';

const loginTime =Number(localStorage.getItem('loginTime'));
const isValid = loginTime && Date.now()-loginTime < (1000 * 60 * 60) ;

const users = JSON.parse(localStorage.getItem("users")) || [];
const currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];

const initialState = {
    isAuthenticated: isValid ,
    users,
    currentUser
}

const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers : {
        logIn(state , action){
            state.isAuthenticated = true;
            const user = action.payload ; 

            if(!user) return;

            state.currentUser = user  ;

            localStorage.setItem("isAuth" , "true");
            localStorage.setItem("currentUser" , JSON.stringify(user));
            localStorage.setItem("loginTime", Date.now());
        },
        logOut(state){
            state.isAuthenticated = false;
            localStorage.removeItem("isAuth");
            localStorage.removeItem("loginTime");
        },
        addNewUser(state , action){
            const {email , password} = action.payload ;

            const newUser = {
                user_id : Date.now(),
                email , 
                password ,
            }
            state.users.push(newUser);

            localStorage.setItem("users" , JSON.stringify(state.users));
        }
    }
})

export const authActions = authSlice.actions ;

export default authSlice.reducer;
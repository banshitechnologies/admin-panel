import { createReducer } from "@reduxjs/toolkit";

const initialStates = {
    logindata: null,
    cookie:undefined
}
export const auth = createReducer(initialStates,{
    login:(state,action)=>{
        state.logindata = action.payload;
    },
    logout:(state,action) => {
        state.user = null;
        state.cookie = undefined;
    }
})
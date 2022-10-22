import { createReducer } from "@reduxjs/toolkit";

const initialStates = {
    logindata: null,
    cookie:undefined
}
export const auth = createReducer(initialStates,{
    login:(state,action)=>{
        state.logindata = action.payload;
        state.cookie = action
    },
    logout:(state,action) => {
        state.user = null;
        state.cookie = undefined;
    }
})
import { configureStore } from "@reduxjs/toolkit";
import { auth } from "./Reducers";

const store = configureStore({
    reducer:{
        auth : auth
    }
})

export default store;
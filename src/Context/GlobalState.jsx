import React, { useState } from "react";
import GlobalContext from "./GlobalContext";




const GlobalState = ({ children }) => {
    const [sidebarShow,SetSidebarShow] = useState(false);

    const state = {
        sidebarShow,
        SetSidebarShow,
    }

    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;
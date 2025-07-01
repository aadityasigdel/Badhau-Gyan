import React, { createContext, useState } from "react";


export const ContextData = createContext();

export default function ContextAPI({ children }) {
    const [ApiData, setApiData] = useState([]);

    return (
        <ContextData.Provider value={{ ApiData, setApiData }}>
            {children}
        </ContextData.Provider>
    );
}

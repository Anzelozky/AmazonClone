import React, { createContext, useReducer, useContext } from "react";

// Data layer
export const StateContext = createContext();

// Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Use
export const useStateValue = () => useContext(StateContext)
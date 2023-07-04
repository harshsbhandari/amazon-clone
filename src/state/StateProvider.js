import React, {createContext, useContext, useReducer} from "react"

// Prepares the Data Layer
export const StateContext = createContext()

// Wrap our app and provide the Data Layer
// 'useReducer' - If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
// Syntax - useReducer(<reducer>, <initialState>)

export const StateProvider = ({reducer, initialState, children}) => (
  // 'value' - share these values
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// Pull information from the Data Layer
export const useStateValue = () => useContext(StateContext)

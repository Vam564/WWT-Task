  
import React,{createContext} from 'react';
import store from './store'
export const context = createContext();
export const ContextProvider = props => {

    return(
        <context.Provider value={{...store()}}>
            {props.children}
        </context.Provider>
    )}

export default context

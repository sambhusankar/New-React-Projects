import React,{createContext,useState} from 'react'
// Create a context with a default value
const MyContext = createContext();

// A component that provides the context value
const ContextProvider = ({ children }) => {
  const [color,setColor] =useState('green')
  
  
  return (
    <MyContext.Provider value={{theme:color,setColor}}>
      {children}
    </MyContext.Provider>
  );
};
export {ContextProvider,MyContext}
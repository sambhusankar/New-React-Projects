import React,{useContext} from 'react'
import userContext from "./UserProvider"
// A component that uses the context value
const MyComponent = () => {
    const theme = useContext(userContext);
    const themeChanger =()=>{
      if(theme.color=='yellow'){
        theme.setColor('red')
      }
      if(theme.color=='red'){
        theme.setColor('yellow')
      }
    }
    return(
    <div style={{background:theme.color}}>
    <button onClick={themeChanger}>change theme</button>
    </div>
    ) ;
  };
export default MyComponent
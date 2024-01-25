import React,{useContext} from 'react'
import { MyContext } from '../components/UserProvider';
// A component that uses the context value
const MyComponent = () => {
    const {theme,setColor} = useContext(MyContext);
    const themeChanger =()=>{
      if(theme=='green'){
        setColor('red')
      }
      if(theme=='red'){
        setColor('green')
      }
    }
    return(
    <div style={{background:theme}}>
    <button onClick={themeChanger}>change theme</button>
    </div>
    ) ;
  };
export default MyComponent
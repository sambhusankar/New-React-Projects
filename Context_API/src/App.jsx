import { createContext , useState} from 'react'
import  MyComponent  from './components/login';
import userContext from "./components/UserProvider"


// Wrap your components with the provider
const App = () => {
  const [color,setColor] =useState('yellow')
  return (
      <userContext.Provider value = {{color, setColor}}>
        <MyComponent />
    </userContext.Provider>
  );
};
export default App

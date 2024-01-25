import { createContext ,useContext} from 'react'
import {ContextProvider} from './components/UserProvider'
import  MyComponent  from './components/login';



// Wrap your components with the provider
const App = () => {
  return (
    <ContextProvider>
      <MyComponent />
    </ContextProvider>
  );
};
export default App

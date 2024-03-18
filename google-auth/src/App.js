import logo from './logo.svg';
import './App.css';
import {GoogleLogin} from '@react-oauth/google'
function App() {
  return (
    <div className="App">
      <GoogleLogin></GoogleLogin>
    </div>
  );
}

export default App;

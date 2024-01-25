
import {Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Github from './components/Github'

function App() {
  return (
    <>
    <Header />
     <Routes>
       <Route path='/' exact element={ 
        <div>

         
         <Home />
         <Footer />
         </div>
       } 
  />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/github' element={<Github />} />
     </Routes>

    </>
  )
}

export default App


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Price from './Pages/Price/Price';

import { BrowserRouter , Routes , Route } from "react-router-dom";
import Cars from './Pages/Cars/Cars';

function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path = '/contact' element =  {<Contact/>} />
      <Route path = '/price' element =  {<Price/>} />
      <Route path='/cars' element = {<Cars/>} />

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App

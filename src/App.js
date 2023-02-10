import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./components/contact/contact"

function App() {
  return (
    <div className="App">
      
      {/* <Home /> */}
      <BrowserRouter>
      <Routes>
        
          <Route index element={<Home />} />   
          <Route path="contact" element={<Contact />} />
         
        
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;

import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">

      <BrowserRouter>

          <Routes>
            
            <Route path="/" element={
              <>
                <Header /> 
                <Home />
              
              </>
            }/>

            <Route path="/checkout" element={
              <>
                <Header />
                <p>Checkout</p>
              </>
            }/>
             
          
          </Routes>

      </BrowserRouter>
    </div>


  );
}

export default App;

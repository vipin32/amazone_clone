import './App.css';
import Header from './Header';
import Home from './Home';
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Header /> 

          <Routes>
      
            <Route path="/" element={<Home />}/>

            <Route path="/checkout" element={<p>Checkout</p>}/>
             
          
          </Routes>

    </div>


  );
}

export default App;

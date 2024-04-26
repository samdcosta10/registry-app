import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,Link, } from 'react-router-dom';
import Home from "./Routes/home";
import Registry from "./Routes/registry";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/registry" element={<Registry/>} />    
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

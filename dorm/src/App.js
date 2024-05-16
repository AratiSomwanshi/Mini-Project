import { BrowserRouter, Routes ,Route} from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar";
import { About } from "./Components/About";

import { Home } from "./Components/Home";

import {SignIn} from "./Components/SignIn";

import {SignUp} from "./Components/SignUp";

import Footer from "./Components/Footer";

function App() {
  return (
    
      <BrowserRouter>
      <div>
      <NavigationBar/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>  
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
        
      </Routes>
      </div>
      </BrowserRouter>
      
    
  );
}

export default App;

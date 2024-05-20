import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavigationBar } from "./Components/NavigationBar";
import { Home } from "./Components/Home";
import { Registration } from "./Components/Registrastion";
import { UserList } from "./Components/UserList";
import { BASE_ROUTE, REGISTRATION_ROUTE, USER_LIST_ROUTE ,DORM_SEARCH, SIGN_UP, LOGIN} from "./constants/AppRoute";
import Footer from "./Components/Footer";
import {DormSearch} from "./Components/DormSearch";
import {SignUp} from "./Components/SignUp";
import {Login} from "./Components/Login";

import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./components/Home";
import { Registration } from "./components/Registrastion";

import { BASE_ROUTE, REGISTRATION_ROUTE, DORM_LIST_ROUTE ,DORM_SEARCH} from "./constants/AppRoute";
import DormBooking from './components/DormBooking';



import { DormSearch } from './components/DormSearch';




function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
  
      <Routes>
        <Route path={BASE_ROUTE} element={<Home/>} />
        <Route path={REGISTRATION_ROUTE} element={<Registration/>} />
        <Route path={DORM_LIST_ROUTE} element={<DormBooking/>} />
        <Route path={DORM_SEARCH} element={<DormSearch/>}/>
        <Route path={SIGN_UP} element={<SignUp/>}/>

        <Route path = {LOGIN} element={<Login/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;

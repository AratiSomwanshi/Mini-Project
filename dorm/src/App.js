import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./components/Home";
import { Registration } from "./components/Registrastion";

import {
  BASE_ROUTE,
  REGISTRATION_ROUTE,
  DORM_LIST_ROUTE,
  DORM_SEARCH,
  ABOUT_US,
  SIGN_UP,
  CONTACTUS,
  LOGIN,
} from "./constants/AppRoute";
import DormBooking from "./components/DormBooking";

import { DormSearch} from "./components/DormSearch";
import AboutUs from "./components/AboutUs";
import {Login} from './components/Login';
import {SignUp} from "./components/SignUp";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Routes>
        <Route path={BASE_ROUTE} element={<Home />} />
        <Route path={REGISTRATION_ROUTE} element={<Registration />} />
        <Route path={DORM_LIST_ROUTE} element={<DormBooking />} />
        <Route path={DORM_SEARCH} element={<DormSearch />} />
        <Route path={ABOUT_US} element={<AboutUs />} />
       <Route path={LOGIN} element={< Login/>}/>
       <Route path={CONTACTUS} element={< ContactUs/>}/>
<Route path={SIGN_UP} element={<SignUp/>}/>

      </Routes>
    </BrowserRouter>
  );
}
export default App;

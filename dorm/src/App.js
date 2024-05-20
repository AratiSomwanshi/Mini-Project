import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./components/Home";
import { Registration } from "./components/Registrastion";

import { BASE_ROUTE, REGISTRATION_ROUTE, DORM_LIST_ROUTE ,DORM_SEARCH, ABOUT_US} from "./constants/AppRoute";
import DormBooking from './components/DormBooking';



import { DormSearch } from './components/DormSearch';
import AboutUs from "./components/AboutUs";




function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
  

  
      <Routes>
        <Route path={BASE_ROUTE} element={<Home/>} />
        <Route path={REGISTRATION_ROUTE} element={<Registration/>} />
        <Route path={DORM_LIST_ROUTE} element={<DormBooking/>} />
        <Route path={DORM_SEARCH} element={<DormSearch/>}/>
        <Route path={ABOUT_US} element={<AboutUs/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

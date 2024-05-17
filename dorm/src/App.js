import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./components/Home";
import { Registration } from "./components/Registrastion";
import { UserList } from "./components/UserList";
import { BASE_ROUTE, REGISTRATION_ROUTE, USER_LIST_ROUTE } from "./constants/AppRoute";


function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path={BASE_ROUTE} element={<Home/>} />
        <Route path={REGISTRATION_ROUTE} element={<Registration/>} />
        <Route path={USER_LIST_ROUTE} element={<UserList/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

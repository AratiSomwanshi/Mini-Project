
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Registration } from "./components/Registrastion";
import { UserList } from "./components/UserList";



function App(){
  return (
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
    <Route path="BASE_ROUTE" element={<Home></Home>}></Route>
    <Route path="REGISTRATION_ROUTE" element={<Registration/>}></Route>
    <Route path="USER_LIST_ROUTE" element={<UserList/>}></Route>
   
    </Routes>
    </BrowserRouter>
  );
}
export default App;
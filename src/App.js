import './App.css';
import "./css/sb-admin-2.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/fontawesome-free/css/all.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portal from './booking/Portal';
import Appointment from './booking/Appointment';
import Login from './login/Login';
import Registration from './login/Registration';
import Forgotpassword from './login/Forgotpassword';
import Resetpassword from './login/Resetpassword';
import Confirmation from './booking/Confirmation';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Registration/>}></Route>
      <Route path='/forgotpassword' element={<Forgotpassword/>}></Route>
      <Route path='/passwordReset' element={<Resetpassword/>}></Route>
      <Route path='/portal' element={<Portal/>}>
        <Route path='book/:uId' element={<Appointment/>}/>
        <Route path='confirm/:pId/:uId' element={<Confirmation/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

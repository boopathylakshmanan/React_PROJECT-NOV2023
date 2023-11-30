
import './App.css';
import SignUp from './components/Signup1';
import SignIn from './components/Login';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import HospitalHomePage from './components/HomePage';


function App() {
  return (
    <div className='App'>
<BrowserRouter>
<Routes>
  <Route path='/' element={<SignIn/>}></Route>
  <Route path='/SignUp' element={<SignUp/>}></Route>
  <Route path='/Home' element={<HospitalHomePage/>}></Route>
</Routes>
</BrowserRouter>


    </div>
  );
}

export default App;

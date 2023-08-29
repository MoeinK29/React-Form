
import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import {  Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path='/' element={<Navigate  to= "signup" />}/>
        {/* <Redirect from="/" to="/signup"/> */}
      </Routes>
      
    </div>
  );
}

export default App;

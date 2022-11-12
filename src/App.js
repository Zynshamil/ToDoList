import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Input from './component/Input';
import Task from './component/Task';
import{AuthContextProvider} from './context/AuthContext';


function App() {
  return(
    <Router>
      <AuthContextProvider>
      <Routes>
         <Route path='/' element={<Input/>} />
         <Route path='Task' element={<Task/>} />
         

      </Routes>
      </AuthContextProvider>
    </Router>
  );
}


export default App;

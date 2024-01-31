import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar';
import Form from './Form'
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { Login } from './Login';
import Student from './Student'
import Teacher from './Teacher';
import Admin from './Admin'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

     <BrowserRouter>
     
       <Routes>
           <Route path='/' element={<Navbar/>}>
           <Route path='/form' element={<Form/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/student' element={<Student/>}/>
           <Route path='/teacher' element={<Teacher/>}/>
           <Route path='/admin' element={<Admin/>}/>
           </Route>
       </Routes>
     
    </BrowserRouter> 
   
    </Provider>
  </React.StrictMode>
);


export default reportWebVitals();

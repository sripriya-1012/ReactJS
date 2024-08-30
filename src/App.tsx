/* component is made up of 
  * TS 
  * JSX 
  * CSS (optional)
  * 
  * component in react must return JSX
  * 
  * skeleton of the component 
  * import (optional) only for react version 18 (import React from 'react';)
  * component function 
  *   must return JSX 
  * must be exported
*/
//fucntional component with named function. Function component name and file name must be same. eg: function App1() and App1.tsx
import { BrowserRouter,Route,Routes } from 'react-router-dom'; //node module imports
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import './App.css';
import Footer from './layouts/Footer'; // custom imports for local files
import Header from './layouts/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NetflixPage from './pages/NetflixPage';
import UsersPage from './pages/UsersPage';
import TodosPage from './pages/TodosPage';
import ProductPage from './pages/ProductPage';
import CreateUser from './components/users/CreateUser';
import UserDetails from './components/users/UserDetails';

const queryClient = new QueryClient();

function App() { //parent component
  return (

   
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Header/> 

      {/*Configuring routes */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/netflix' element={<NetflixPage/>}/>
        <Route path='/users' element={<UsersPage/>}/>
        <Route path="/users/create" element={<CreateUser />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path='/todos' element={<TodosPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>

      <Footer/>
      </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';

const router = createBrowserRouter([
  {path:'' , element : <App/> , children : [
    {path:'' , element : <About/>},
    {path:'contact' , element : <Contact/>},
    {path:'footer' , element : <Footer/>},
    {path:'navbar' , element : <Navbar/>},
    {path:'portfolio' , element : <Portfolio/>},
  ]},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

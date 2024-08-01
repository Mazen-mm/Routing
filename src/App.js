// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
// import About from './Components/About/About';
// import Portfolio from './Components/Portfolio/Portfolio';
import{ Outlet } from 'react-router-dom'
function App() {
  return <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
}
export default App;
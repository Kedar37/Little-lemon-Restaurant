import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Order from './Pages/Order';
import Reserve from './Pages/Reserve';
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <nav className='navBar'>
        <div className='navLogo'>
          <img src='/Images/Logo.svg' alt='logo' />
        </div>
        <div className='links'>
          <ul>
            <Link to='/' className='navigation'>Home</Link>
            <Link to='/about' className='navigation'>About</Link>
            <Link to='/menu' className='navigation'>Menu</Link>
            <Link to='/order' className='navigation'>Order</Link>
            <Link to='/reserve' className='navigation'>Reserve</Link>
          </ul>
        </div>
        <div className='loginBtn' role='button'>Login</div>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/reserve' element={<Reserve/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

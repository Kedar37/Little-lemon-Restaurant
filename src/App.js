import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Order from './Pages/Order';
import Reserve from './Pages/Reserve';

function App() {
  return (
    <>
      <nav className='navBar'>
        <ul>
          <Link to='/' className='navigation'>Home</Link>
          <Link to='/about' className='navigation'>About</Link>
          <Link to='/menu' className='navigation'>Menu</Link>
          <Link to='/order' className='navigation'>Order</Link>
          <Link to='/reserve' className='navigation'>Reserve</Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<About/>} />
        <Route path='/' element={<Menu/>} />
        <Route path='/' element={<Order/>} />
        <Route path='/' element={<Reserve/>} />
      </Routes>
    </>
  );
}

export default App;

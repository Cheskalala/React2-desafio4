import './App.css'
import Navbar from './components/Navbar'
import Home from './views/Home'
import PizzaProvider from './context/PizzaContext'
import { Routes, Route } from 'react-router-dom'
import Pizza from './views/Pizza'
import Cart from './views/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <PizzaProvider>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/pizza/:id' element = {<Pizza />} />
        <Route path='/cart' element = {<Cart />} />
      </Routes>
    </PizzaProvider>
  )
}

export default App;
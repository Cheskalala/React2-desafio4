import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { pizzaContext } from "../context/PizzaContext"



const Navbar = () => {

  const {precioTotal} = useContext(pizzaContext);
  const formatoPrecio = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  });

  return (
    <nav className="myNavbar">
      <NavLink to= "/" >
        🍕 Pizzería Mamma Mia!
      </NavLink>
      <NavLink to="/cart">
      🛒 {formatoPrecio.format(precioTotal)}
      </NavLink>
    </nav>
  )
}

export default Navbar
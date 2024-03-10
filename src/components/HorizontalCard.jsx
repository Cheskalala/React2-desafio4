import React from 'react'
import { pizzaContext } from '../context/PizzaContext'
import { useContext } from 'react'

const HorizontalCard = ({pizzaSeleccionada}) => {

  const {pizzaCart, setPizzaCart, listaPizzas, setListaPizzas} = useContext(pizzaContext);

  function agregarAlCarrito(){
    setPizzaCart([...pizzaCart, pizzaSeleccionada]);
    if(!listaPizzas.some(item => item.id === pizzaSeleccionada.id)){
      setListaPizzas([...listaPizzas, pizzaSeleccionada])
    }

  }
  function capitalizeStr(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const formatoPrecio = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  });

  return (
    <div className='container containerDetails'>
      <div className='imgContainer'>
        <img src={pizzaSeleccionada.img} alt={pizzaSeleccionada.name} />
      </div>
      <div className='detailsContainer'>
        <div className="details">
          <h1>{capitalizeStr(pizzaSeleccionada.name)}</h1>
          <hr />
          <p>{pizzaSeleccionada.desc}</p>
        </div>
        <div>
          <h5>Ingredientes:</h5>
          <ul className='ingredientes ingredientesDetails'>
            <li>🍕{capitalizeStr(pizzaSeleccionada.ingredients[0])}</li>
            <li>🍕{capitalizeStr(pizzaSeleccionada.ingredients[1])}</li>
            <li>🍕{capitalizeStr(pizzaSeleccionada.ingredients[2])}</li>
            <li>🍕{capitalizeStr(pizzaSeleccionada.ingredients[3])}</li>
          </ul>
        </div>
        <div className="priceAndButtonDetails">
          <h2>
            Precio: {formatoPrecio.format(pizzaSeleccionada.price)}
          </h2>
          <button onClick={agregarAlCarrito}>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  )
}

export default HorizontalCard
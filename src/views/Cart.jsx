import React, { useContext } from 'react'
import { pizzaContext } from '../context/PizzaContext'
import ItemsCarrito from '../components/ItemsCarrito';


const Cart = () => {

  const { pizzaCart, setPizzaCart, precioTotal, listaPizzas, setListaPizzas } = useContext(pizzaContext);
  
  function pagar(){
    alert(`Se acaba de realizar un pago por ${formatoPrecio.format(precioTotal)} pesos.`)
    setListaPizzas([])
    setPizzaCart([])
  }
   const formatoPrecio = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  });

  return (
    <>
      <div className='container containerCarrito'>
        <h1>Detalles del pedido:</h1>
        <div className='elementosCarrito'>
          {listaPizzas.length > 0 ? (
            listaPizzas.map((pizza) =>{
              const cantidadPizzas = pizzaCart.filter((cantidad) =>{
                return cantidad.id === pizza.id;
              })
              return <ItemsCarrito key={pizza.id} pizzaAgregada = {pizza} cantidadPizzas = {cantidadPizzas.length} />
            })
          ): (
            <div className='carroVacio'>
              <p>El carrito está vacío 🛒</p>
              <br />
              <p>😞</p>
            </div>
          )}
        </div>
        <div className='totalIrAPagar'>
          <h2>{formatoPrecio.format(precioTotal)}</h2>
          <button onClick={pagar}>Ir A Pagar</button>
        </div>
      </div>
    </>
    
  )
}

export default Cart
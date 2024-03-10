import React from 'react'
import { useState, useContext } from 'react'
import { pizzaContext } from '../context/PizzaContext'

const ItemsCarrito = ({ pizzaAgregada, cantidadPizzas }) => {

  const [numeroPizzas, setNumeroPizzas] = useState(cantidadPizzas)
  const {pizzaCart, setPizzaCart, listaPizzas, setListaPizzas} = useContext(pizzaContext);

  function incrementoYDecremento(operacion){

    if(operacion === "incrementar"){
      setNumeroPizzas(numeroPizzas+1)
      setPizzaCart([...pizzaCart, pizzaAgregada])
    }
    if(operacion === "restar" && numeroPizzas > 0){
      setNumeroPizzas(numeroPizzas-1)
      const indiceAEliminar = pizzaCart.findIndex((pizza)=>{
        return pizza.id === pizzaAgregada.id;
      })
      const nuevoArray = [...pizzaCart]
      nuevoArray.splice(indiceAEliminar, 1)
      setPizzaCart(nuevoArray)

      if(numeroPizzas === 1){
        const indiceAEliminar = listaPizzas.findIndex((pizza)=>{
          return pizza.id === pizzaAgregada.id;
        })
        const nuevoArray = [...listaPizzas]
        nuevoArray.splice(indiceAEliminar, 1)
        setListaPizzas(nuevoArray)
      }
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
    <>
      <div className='itemsCarrito'>
        <div className='itemsCarrito-img'>
          <img src={pizzaAgregada.img} alt={pizzaAgregada.name} />
          <h4>{capitalizeStr(pizzaAgregada.name)}</h4>
        </div>
        <div className='itemsCarrito-precioButtons'>
          <p>{formatoPrecio.format(pizzaAgregada.price*numeroPizzas)}</p>
          <button onClick={()=>{
            incrementoYDecremento("restar")
          }}>
            {numeroPizzas === 1 ? "🗑️" : "-"}
          </button>
          <p>{numeroPizzas}</p>
          <button onClick={()=>{
            incrementoYDecremento("incrementar");
          }}>
            +
          </button>
        </div>
      </div>
      <hr />
    </>
  )
}

export default ItemsCarrito
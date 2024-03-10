import React, { useEffect } from 'react'
import { createContext } from 'react'
import pizzas from "../json/pizzas.json"
import { useState } from 'react';

export const pizzaContext = createContext();

const PizzaProvider = ({children}) => {
  
  const [pizzaData, setPizzaData] = useState(pizzas)
  const [pizzaCart, setPizzaCart] = useState([])
  const [listaPizzas, setListaPizzas] = useState([])
  const [precioTotal, setPrecioTotal] = useState(null)
  useEffect(() => {

    let sumaTotal = 0

    function calculoTotal(pizzaCart){
      for(let i = 0; i < pizzaCart.length; i++){
        sumaTotal+=pizzaCart[i].price;
      }
    }
    calculoTotal(pizzaCart);
    setPrecioTotal(sumaTotal);
  }, [pizzaCart])
  

  return (
    <pizzaContext.Provider value={{pizzaData, setPizzaData, pizzaCart, setPizzaCart, precioTotal, listaPizzas, setListaPizzas}}>
      {children}
    </pizzaContext.Provider>
  )
}

export default PizzaProvider
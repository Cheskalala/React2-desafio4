import MyCard from "./MyCard"
import pizzas from "../json/pizzas.json"
import { useState } from "react"

const CatalogoPizzas = () => {

  const [pizzaData] = useState(pizzas)

  return (
    <>
      <main className="container">
        <div className="row">
          {pizzaData.map((pizza) => {
            return <MyCard key={pizza.id} pizza={pizza} />
          })}
        </div>
      </main>
    </>
  )
}

export default CatalogoPizzas
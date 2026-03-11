import { useState } from "react"
import Products from "./components/Products"
import {ShoppingCart} from 'lucide-react'

const App= () =>
{
  const [count, setCount] = useState(0)
  return(
    // <> is a empty tag ,called as fragment
    <>
      <header className=" bg-neutral-700 text-3xl text-white py-5 px-5 flex justify-between items-center">
        <h2 className="text-5xl">
          Basic <span className="text-blue-500">Shop</span>
        </h2>
        <div className="flex justify-between items-center">
          <ShoppingCart/><span className="absolute top-1 right-5 text-blue-500">{count}</span>
        </div>
      </header>
      <Products counterFn={setCount} count= { count}/>
      <footer className=" bg-neutral-600 text-2xl text-white text-center p-3">
        This site belongs to xyz&copy;2026
      </footer>
    </>
  )

}
export default App
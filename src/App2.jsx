import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from "react-router";
import Plusminus from './component/plusminus'

const App2 = () => {
 const [count, setCount] = useState(0)
    return (
    <div>
     
      <Plusminus setCount={setCount}/>
  <Link to="/">app</Link>
    </div>
  )
}

export default App2

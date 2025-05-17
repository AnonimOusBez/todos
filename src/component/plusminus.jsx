import React from 'react'

const Plusminus = ({setCount}) => {
  return (
    <div>
       <button onClick={() => setCount((count) => count - 1)}>-</button>
         <button onClick={() => setCount(0)}>erase</button>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div>
  )
}

export default Plusminus

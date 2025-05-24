import { useState } from 'react'
import './App.css'

import Counter from './component/counter'


function App() {
  const [count, setCount] = useState(0)
 console.log(count) 
  return (
    <>
        <div class="flex justify-center" >
            <Counter/>
        </div>
        
        
        
        
        
        
          
        
    </>
  )
}

export default App

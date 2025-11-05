import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1>My counter value {count}</h1>
    <h1>My counter value {count}</h1>
    <h1>My counter value {count}</h1>
    <h1>My counter value {count}</h1>
    <h1>My counter value {count}</h1>
     <button onClick={()=>{

      setCount(count+1)
      setCount(count+1)
      setCount(count+1)
      setCount(count+1)
      setCount(count+1)
      setCount(count+1)
      setCount(count+1)
      setCount(count+1)
     }}>click me {count} </button>
     


    <h1>My counter value {count}</h1>
    <h1>My counter value {count}</h1>
    <h1>My counter value {count}</h1>
    <h1>My counter value {count}</h1>
    <h1>My counter value {count}</h1>


    </>
  )
}

export default App

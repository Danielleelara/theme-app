import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Escolha o aqui</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} >
          count is {count}
        </button>
       <button> teste</button>
       </div>
    </>
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <h1> Bienvenue sur StreamFlix </h1>
      </div>
    </>
  )
}

export default App

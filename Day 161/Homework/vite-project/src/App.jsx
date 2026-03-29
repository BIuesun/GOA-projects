import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import RealTime from './RealTime'
import Email from './Email'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RealTime />
     <Email />
    </>
  )
}

export default App

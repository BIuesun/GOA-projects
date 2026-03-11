import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './Title'
// 1) props არის შეუცვლელი ინფორმაცია რომელიც მშობლიდან შვილს გადაეცემა, ხოლო state ლოკალურია და შეიძლება შეიცვალოს.
function App() {


  return (
    <>
     <Title title="REACT"/>
    </>
  )
}

export default App

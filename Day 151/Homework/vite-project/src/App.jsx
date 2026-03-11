import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// props-ის საშუალებით შეგვიძლია ინფორმაცია გადავცეთ მშობლიდან შვილ კომპონენტს
import Welcome from './Child'
function App() {


  return (
  <>
    <div>
      <Welcome name="Luka"/> 
    </div>
  </>
  )
}

export default App

import './index.css'
import { useState } from 'react'

function App(){
  const [dark, setDark] = useState(true)

  document.body.className = dark ? 'dark' : 'light'

  return (
    <div>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <h1>Portfolio</h1>
      <div className="line" />
      <p>Some stuff</p>
    </div>
  )
}

export default App
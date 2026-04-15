import './index.css'
import { useState } from 'react'
import About from './written/About.jsx'

function App(){
  const [dark, setDark] = useState(false)

  document.body.className = dark ? 'dark' : 'light'

  return (
    <div>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <h1>Portfolio (work in progress)</h1>
      <div className="line" />
      <About />
      <p className="footer-text">Version 0.1.0</p>
    </div>
  )
}

export default App
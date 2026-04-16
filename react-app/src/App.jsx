import './index.css'
import { useState } from 'react'
import About from './written/About.jsx'

function App(){
  const [dark, setDark] = useState(false)
  const btnClass = `box-btn ${dark ? 'box-btn-dark' : 'box-btn-light'}`
  document.body.className = dark ? 'dark' : 'light';
  return (
    <div>
      <div className="line-u" />
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <h1 className="title">Portfolio (work in progress)</h1>
      <About />
      <div className="box-buttons">
        <button className={btnClass}>Projects</button>
        <button className={btnClass}>Skills</button>
        <button className={btnClass}>Contact</button>
        <button className={btnClass}>Arts</button>
      </div>
      <p className="footer-text-explore">Home</p>
      <p className="footer-text-version">Version 0.1.0</p>
    </div>
  )
}

export default App
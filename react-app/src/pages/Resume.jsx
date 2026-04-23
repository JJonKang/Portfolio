import '../index.css'

function Resume() {
  return (
    <div>
      <h1 style={{ marginTop: '-10px' }}>Resume</h1>
      <embed src="/resume.pdf" className="resume"/>
    </div>
  )
}

export default Resume
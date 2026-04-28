import '../index.css'

function Resume() {
  return (
    <div>
      <h1 style={{ marginTop: '35px' }}>Resume</h1>
      <embed src="/src/assets/resume.pdf" className="resume"/>
    </div>
  )
}

export default Resume
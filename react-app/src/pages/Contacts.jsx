function Contacts() {
  return (
    <div className="page-content">
      <h1 style={{ marginTop: '35px' }}>Contacts</h1>
      <div className="contact-divider">
        <div>
          <p>LinkedIn:</p>
          <a href="https://www.linkedin.com/in/jonathan-kang-/" target="_blank"><u>https://www.linkedin.com/in/jonathan-kang-/</u></a>
        </div>
        <div>
          <p>GitHub:</p>
          <a href="https://github.com/JJonKang" target="_blank"><u>https://github.com/JJonKang</u></a>
        </div>
      </div>
      <div className="contact-divider" style={{ marginTop: '30px'}}>
        <div>
          <p>Email:</p>
          <a>jkjonkang0@gmail.com</a>
        </div>
        <div>
          {/* literally nothing for now*/}
        </div>
      </div>
    </div>
  )
}

export default Contacts
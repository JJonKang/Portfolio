function Contacts() {
  return (
    <div>
      <h1 style={{ marginTop: '35px'}}>Contacts</h1>
      <div className="contact-divider">
        <div>
          <p>LinkedIn:</p>
          <a href="https://www.linkedin.com/in/jonathan-kang-/" target="_blank">https://www.linkedin.com/in/jonathan-kang-/</a>
        </div>
        <div>
          <p>GitHub:</p>
          <a href="https://github.com/JJonKang" target="_blank">https://github.com/JJonKang</a>
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
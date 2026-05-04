import '../index.css'

const description = [
  "Hello! My name is Jonathan Kang, and I graduated in December, 2025 from the",
  "University of Illinois at Chicago with a Bachelor's in Computer Science.",
  "My focus is on backend development, primarily in Python.",
  "However, I've also worked with C, C++, Java, and frontend technologies like JavaScript.",
  "",
  "For more details on my programming, please check the Projects webpage.",
  "For my certificates and resume, go through the Credentials.",
  "For my links and some of my contact information, use the Contacts button.",
].join('\n')

/////////////////////////////////////
// Currently Only serves the paragraph
// that details who I am
function About() {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        {description}
      </p>
    </div>
  );
};

export default About
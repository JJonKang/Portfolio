import '../projects.css'
import { useRef } from 'react'

const projects = [
  {
    topic: "Data Interaction and Utilization",
    projects: [
      {
        title: "Wine Query Answering System",
        description: "(wip) A Python backend with TypeScript frontend using PostgreSQL and vector embeddings with cosine similarity.",
        images: [
          { src: "/projects/wine-query-answering-system/main-menu.png", caption: "Query interface" },
          { src: "/projects/wine-query-answering-system/sign-up.png", caption: "Results view" },
          { src: "/projects/wine-query-answering-system/admin-page.png", caption: "Results view" },
          { src: "/projects/wine-query-answering-system/curator-page.png", caption: "Results view" },
          { src: "/projects/wine-query-answering-system/query-one.png", caption: "Results view" },
          { src: "/projects/wine-query-answering-system/query-two.png", caption: "Results view" },
        ]
      }
    ]
  },
  {
    topic: "Computer Graphics",
    projects: [
      {
        title: "yes",
        description: "yes",
        images: []
      }
    ]
  },
  {
    topic: "Games",
    projects: [
      {
        title: "3-Card Poker",
        description: "(wip) Multiplayer 3-card poker app built with Java, JavaFX, Apache Maven, and 250+ JUnit 5 unit tests.",
        images: [
          { src: "/projects/three-card-poker/main-menu.png", caption: "Game screen" },
          { src: "/projects/three-card-poker/example-one.png", caption: "Game screen" },
          { src: "/projects/three-card-poker/example-two.png", caption: "Game screen" },
        ]
      }
    ]
  }
]

function ImageScroller({ images }) {
  const ref = useRef(null)

  return (
    <div>
      <div className="scroller" ref={ref}>
        {images.map((img, i) => (
          <div className="scroller-item" key={i}>
            <img src={img.src} alt={img.caption} />
            <p>{img.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div>
      <h1 style={{ marginTop: '35px' }}>Projects</h1>
      <div>
        {projects.map((section, i) => (
          <div key={i}>
            <h2>{section.topic}</h2>
            {section.projects.map((project, j) => (
              <div key={j}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ImageScroller images={project.images} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
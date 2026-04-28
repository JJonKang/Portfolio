import '../projects.css'
import { useRef, useState } from 'react'

const projects = [
  {
    topic: "Data Interaction and Utilization",
    projects: [
      {
        title: "Wine Query Answering System",
        description: "(wip) A Python backend with TypeScript frontend using PostgreSQL and vector embeddings with cosine similarity.",
        images: [
          { src: "/projects/wine-query-answering-system/main-menu.png", caption: "Main Menu" },
          { src: "/projects/wine-query-answering-system/sign-up.png", caption: "Sign Up Screen" },
          { src: "/projects/wine-query-answering-system/admin-page.png", caption: "Administrator Page" },
          { src: "/projects/wine-query-answering-system/curator-page.png", caption: "Curator Page" },
          { src: "/projects/wine-query-answering-system/query-one.png", caption: "Query Page" },
          { src: "/projects/wine-query-answering-system/query-two.png", caption: "Query Page" },
        ]
      },
      {
        title: "Fish and Fitness",
        description: "fish",
        images: [
          { src: "/projects/fish-and-fitness/intro-page.png", caption: "Intro Page" },
          { src: "/projects/fish-and-fitness/login-page.png", caption: "Log In Screen" },
          { src: "/projects/fish-and-fitness/main-page.png", caption: "Main Page" },
          { src: "/projects/fish-and-fitness/goals-tab.png", caption: "Goals Tab" },
          { src: "/projects/fish-and-fitness/goal-in-progress.png", caption: "Goal In Progress" },
          { src: "/projects/fish-and-fitness/backpack.png", caption: "Backpack Tab" },
          { src: "/projects/fish-and-fitness/fishapedia-tab.png", caption: "Fishapedia Tab" },
          { src: "/projects/fish-and-fitness/opening-crate.png", caption: "Opening a Crate" },
        ]
      }
    ]
  },
  {
    topic: "Computer Graphics",
    projects: [
      {
        title: "Digital Elevation Model (DEM) Visualizer",
        description: "mountains",
        images: [
          { src: "/projects/dem/phong-light-two.png", caption: "Phong Lighting Model Example #1" },
          { src: "/projects/dem/normals-bsq-two.png", caption: "Surface Normals (RGB)" },
          { src: "/projects/dem/phong-light-one.png", caption: "Phong Lighting Model Example #2" },
          { src: "/projects/dem/donut.png", caption: "Model Using Non-BSQ Format" },
          { src: "/projects/dem/underside.png", caption: "Underside of a BSQ File" },
        ]
      },
      {
        title: "Basic Ray Tracing Test",
        description: "wowowow light",
        images: [
          { src: "/projects/ray-tracing/everything-max-depth.png", caption: "Completed Visualization" },
          { src: "/projects/ray-tracing/everything-min-depth.png", caption: "Completed Visualization with One Depth Reflection" },
          { src: "/projects/ray-tracing/everything-max-depth-two.png", caption: "Completed Visualization Model #2" },
          { src: "/projects/ray-tracing/ambient-diffuse-model-two.png", caption: "No Reflection/Specular Component Model #2" },
          { src: "/projects/ray-tracing/ambient-only.png", caption: "Ambient Component Only" },
          { src: "/projects/ray-tracing/diffuse-specular-reflection.png", caption: "Diffuse, Specular, Reflection Component" },
          { src: "/projects/ray-tracing/ambient-diffuse-specular.png", caption: "Misc. Image" },
          { src: "/projects/ray-tracing/ambient-specular-reflection.png", caption: "Misc. Image 2" },
        ]
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
          { src: "/projects/three-card-poker/main-menu.png", caption: "Main Menu" },
          { src: "/projects/three-card-poker/example-one.png", caption: "Gameplay 1" },
          { src: "/projects/three-card-poker/example-two.png", caption: "Gameplay 2" },
        ]
      }
    ]
  }
]

function ImageScroller({ images }) {
  const ref = useRef(null)
  const [expanded, setExpanded] = useState(null)

  return (
    <>
      {expanded !== null && (
        <div className="zoom" onClick={() => setExpanded(null)}>
          <img src={images[expanded].src} className="expanded-img" />
        </div>
      )}
      <div className="scroller" ref={ref}>
        {images.map((img, i) => (
          <div className="scroller-item" key={i}>
            <img src={img.src} alt={img.caption} onClick={() => setExpanded(i)}/>
            <p>{img.caption}</p>
          </div>
        ))}
      </div>
    </>
  );
};

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
  );
};

export default Projects
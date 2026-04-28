import '@/projects.css'
import { useRef, useState } from 'react'
import wineMainMenu from "@/assets/projects/wine-query-answering-system/main-menu.png"
import wineSignUp from "@/assets/projects/wine-query-answering-system/sign-up.png"
import wineAdminPage from "@/assets/projects/wine-query-answering-system/admin-page.png"
import wineCuratorPage from "@/assets/projects/wine-query-answering-system/curator-page.png"
import wineQueryOne from "@/assets/projects/wine-query-answering-system/query-one.png"
import wineQueryTwo from "@/assets/projects/wine-query-answering-system/query-two.png"

import fishIntroPage from "@/assets/projects/fish-and-fitness/intro-page.png"
import fishLoginPage from "@/assets/projects/fish-and-fitness/login-page.png"
import fishMainPage from "@/assets/projects/fish-and-fitness/main-page.png"
import fishGoalsTab from "@/assets/projects/fish-and-fitness/goals-tab.png"
import fishGoalInProgress from "@/assets/projects/fish-and-fitness/goal-in-progress.png"
import fishBackpack from "@/assets/projects/fish-and-fitness/backpack.png"
import fishFishapedia from "@/assets/projects/fish-and-fitness/fishapedia-tab.png"
import fishOpeningCrate from "@/assets/projects/fish-and-fitness/opening-crate.png"

import demPhongLightTwo from "@/assets/projects/dem/phong-light-two.png"
import demNormalsBsqTwo from "@/assets/projects/dem/normals-bsq-two.png"
import demPhongLightOne from "@/assets/projects/dem/phong-light-one.png"
import demDonut from "@/assets/projects/dem/donut.png"
import demUnderside from "@/assets/projects/dem/underside.png"

import rayEverythingMaxDepth from "@/assets/projects/ray-tracing/everything-max-depth.png"
import rayEverythingMinDepth from "@/assets/projects/ray-tracing/everything-min-depth.png"
import rayEverythingMaxDepthTwo from "@/assets/projects/ray-tracing/everything-max-depth-two.png"
import rayAmbientDiffuseModelTwo from "@/assets/projects/ray-tracing/ambient-diffuse-model-two.png"
import rayAmbientOnly from "@/assets/projects/ray-tracing/ambient-only.png"
import rayDiffuseSpecularReflection from "@/assets/projects/ray-tracing/diffuse-specular-reflection.png"
import rayAmbientDiffuseSpecular from "@/assets/projects/ray-tracing/ambient-diffuse-specular.png"
import rayAmbientSpecularReflection from "@/assets/projects/ray-tracing/ambient-specular-reflection.png"

import pokerMainMenu from "@/assets/projects/three-card-poker/main-menu.png"
import pokerExampleOne from "@/assets/projects/three-card-poker/example-one.png"
import pokerExampleTwo from "@/assets/projects/three-card-poker/example-two.png"

const projects = [
  {
    topic: "Data Interaction and Utilization",
    projects: [
      {
        title: "Wine Query Answering System",
        description: "(wip) A Python backend with TypeScript frontend using PostgreSQL and vector embeddings with cosine similarity.",
        images: [
          { src: wineMainMenu, caption: "Main Menu" },
          { src: wineSignUp, caption: "Sign Up Screen" },
          { src: wineAdminPage, caption: "Administrator Page" },
          { src: wineCuratorPage, caption: "Curator Page" },
          { src: wineQueryOne, caption: "Query Page" },
          { src: wineQueryTwo, caption: "Query Page" },
        ]
      },
      {
        title: "Fish and Fitness",
        description: "fish",
        images: [
          { src: fishIntroPage, caption: "Intro Page" },
          { src: fishLoginPage, caption: "Log In Screen" },
          { src: fishMainPage, caption: "Main Page" },
          { src: fishGoalsTab, caption: "Goals Tab" },
          { src: fishGoalInProgress, caption: "Goal In Progress" },
          { src: fishBackpack, caption: "Backpack Tab" },
          { src: fishFishapedia, caption: "Fishapedia Tab" },
          { src: fishOpeningCrate, caption: "Opening a Crate" },
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
          { src: demPhongLightTwo, caption: "Phong Lighting Model Example #1" },
          { src: demNormalsBsqTwo, caption: "Surface Normals (RGB)" },
          { src: demPhongLightOne, caption: "Phong Lighting Model Example #2" },
          { src: demDonut, caption: "Model Using Non-BSQ Format" },
          { src: demUnderside, caption: "Underside of a BSQ File" },
        ]
      },
      {
        title: "Basic Ray Tracing Test",
        description: "wowowow light",
        images: [
          { src: rayEverythingMaxDepth, caption: "Completed Visualization" },
          { src: rayEverythingMinDepth, caption: "Completed Visualization with One Depth Reflection" },
          { src: rayEverythingMaxDepthTwo, caption: "Completed Visualization Model #2" },
          { src: rayAmbientDiffuseModelTwo, caption: "No Reflection/Specular Component Model #2" },
          { src: rayAmbientOnly, caption: "Ambient Component Only" },
          { src: rayDiffuseSpecularReflection, caption: "Diffuse, Specular, Reflection Component" },
          { src: rayAmbientDiffuseSpecular, caption: "Misc. Image" },
          { src: rayAmbientSpecularReflection, caption: "Misc. Image 2" },
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
          { src: pokerMainMenu, caption: "Main Menu" },
          { src: pokerExampleOne, caption: "Gameplay 1" },
          { src: pokerExampleTwo, caption: "Gameplay 2" },
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
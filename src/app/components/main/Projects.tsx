import ProjectArchive from "./ProjectArchive"
import ProjectCard from "./ProjectCard"

const projects = [
  {
    name: "StormAI",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel lacus at scelerisque. Vestibulum a ex nec metus ultrices pulvinar. Phasellus porttitor mauris lacinia commodo pretium. Suspendisse fermentum vel felis non laoreet. Aenean consequat massa eros, at faucibus quam feugiat sit amet. Pellentesque pharetra vehicula scelerisque. Nulla purus sem, bibendum in vestibulum non, tristique.",
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "SQLAlchemy"],
    link: "https://github.com/jelalalamy/StormAI",
    preview: "/stormai.png",
    altText: "StormAI project card",
  },
  {
    name: "LAHP",
    description: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel lacus at scelerisque. Vestibulum a ex nec metus ultrices pulvinar. Phasellus porttitor mauris lacinia commodo pretium. Suspendisse fermentum vel felis non laoreet. Aenean consequat massa eros, at faucibus quam feugiat sit amet. Pellentesque pharetra vehicula scelerisque. Nulla purus sem, bibendum in vestibulum non, tristique.",
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js"],
    link: "https://github.com/jelalalamy/LAHP-v2",
    preview: "/lahp.jpg",
    altText: "LAHP project card"
  },
]

const Projects = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected Projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map(project => <ProjectCard key={project.name} project={project}/>)}
        </ul>
        <ProjectArchive />
      </div>
    </section>
  )
}

export default Projects
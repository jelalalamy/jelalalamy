import ProjectArchive from "./ProjectArchive"
import ProjectCard from "./ProjectCard"

const projects = [
  {
    name: "StormAI",
    description: "A collaborative real-time whiteboarding and brainstorming platform that leverages AI to facilitate productivity. Create, share, and join rooms to work with others using classic whiteboard features like sticky notes, mindmaps, and drawings on top of AI-powered tools that can generate text, images, and more directly on the whiteboard.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Tailwind", "React Flow", "Yjs", "OpenAI"],
    link: "https://github.com/jelalalamy/StormAI",
    preview: "/stormai.png",
    altText: "StormAI project card",
  },
  {
    name: "LAHP",
    description: "A Chrome extension that modifies the new tab with more tools and an improved user interface, utilizing public APIs to display hourly weather updates, inspirational quotes, and more.",
    technologies: ["JavaScript", "React", "Tailwind", "APIs"],
    link: "https://github.com/jelalalamy/LAHP-v2",
    preview: "/lahp.jpg",
    altText: "LAHP project card"
  },
  {
    name: "TravNav",
    description: "A travel planning application where users can plan optimal routes and directions between multiple destinations, using real-time data from the official Google Maps API.",
    technologies: ["Python", "Flask", "TypeScript", "React", "Google Maps API"],
    link: "https://github.com/jelalalamy/travnav",
    preview: "/travnav.png",
    altText: "TravNav project card"
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
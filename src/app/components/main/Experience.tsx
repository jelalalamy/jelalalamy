import ExperienceCard from "./ExperienceCard"
import Resume from "./Resume"

const experiences = [
  {
    date: "Sept — Dec 2023",
    company: "Dash Hudson",
    role: "Software Developer Intern",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel lacus at scelerisque. Vestibulum a ex nec metus ultrices pulvinar. Phasellus porttitor mauris lacinia commodo pretium. Suspendisse fermentum vel felis non laoreet. Aenean consequat massa eros, at faucibus quam feugiat sit amet. Pellentesque pharetra vehicula scelerisque. Nulla purus sem, bibendum in vestibulum non, tristique.",
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "SQLAlchemy"],
    link: "https://www.dashhudson.com/",
  },
  {
    date: "Jan — Aug 2022",
    company: "SAP Fioneer",
    role: "Full Stack Developer Intern",
    description: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel lacus at scelerisque. Vestibulum a ex nec metus ultrices pulvinar. Phasellus porttitor mauris lacinia commodo pretium. Suspendisse fermentum vel felis non laoreet. Aenean consequat massa eros, at faucibus quam feugiat sit amet. Pellentesque pharetra vehicula scelerisque. Nulla purus sem, bibendum in vestibulum non, tristique.",
    technologies: ["JavaScript", "TypeScript", "HTML & CSS", "React", "Node.js"],
    link: "https://www.sapfioneer.com/",
  },
]

const Experience = () => {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map(experience => <ExperienceCard key={experience.date} experience={experience}/>)}
        </ol>
        <Resume/>
      </div>
    </section>
  )
}

export default Experience
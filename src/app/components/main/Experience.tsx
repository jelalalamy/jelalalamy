import ExperienceCard from "./ExperienceCard"
import Resume from "./Resume"

const experiences = [
  {
    date: "Jan 2025 — Present",
    company: "Google",
    role: "Software Engineer",
    description: "Currently developing beautiful map experiences on Search.",
    technologies: ["TypeScript", "Java", "Kotlin"],
    link: "https://www.google.com",
  },
  {
    date: "Sept — Dec 2023",
    company: "Dash Hudson",
    role: "Software Developer Intern",
    description: "Contributed to various backend and authentication / authorization projects as part of the Data Foundation Team. Developed several features and tasks for the LinkedIn Data Importing project, allowing brands to connect their LinkedIn accounts to the Dash Hudson platform and periodically import data from LinkedIn, while collaborating with other teams to facilitate an early release of the LinkedIn project.",
    technologies: ["Python", "Flask", "Celery", "MySQL", "SQLAlchemy", "Kafka", "Datadog", "SQLAlchemy", "AWS"],
    link: "https://www.dashhudson.com/",
  },
  {
    date: "Jan — Aug 2022",
    company: "SAP Fioneer",
    role: "Full Stack Developer Intern",
    description: "Worked with the Embedded Finance Scrum Team to develop early proof-of-concepts for embedded financial services. Researched and built the Fioneer API Hub to be used by several teams within the organization, aiming to accelerate development, integration, and innovation.",
    technologies: ["Java", "JavaScript", "PostgreSQL", "Apache Maven"],
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

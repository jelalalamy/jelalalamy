import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"

const Main = () => {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <About/>
      <Experience/>
      <Projects/>
    </main>
  )
}

export default Main
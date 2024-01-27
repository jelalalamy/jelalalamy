const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
      <div>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet vulputate quam vitae tempus. Fusce pharetra ligula ut magna faucibus, ut blandit sem malesuada. Mauris et libero eu arcu laoreet scelerisque eget at lectus. Curabitur volutpat dui nisl, a consequat leo suscipit quis. Donec vulputate elementum sapien ac egestas. Nam in augue vitae lorem fermentum.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed ligula mauris. Mauris ultricies congue erat, finibus vehicula justo ultrices vel. Proin venenatis tempus tincidunt. Sed erat metus, semper nec fermentum non, egestas non orci. Praesent semper felis sed sagittis finibus. Sed tristique ipsum lorem, malesuada pulvinar mi mattis sed. Sed finibus velit quam, eu sollicitudin ligula rutrum at. Curabitur fermentum tincidunt odio vel ullamcorper.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non enim eget mauris imperdiet viverra.
        </p>
      </div>
    </section>
  )
}

export default About
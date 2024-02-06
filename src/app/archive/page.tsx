export default function Page() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 flex justify-center">
      <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-center lg:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl text-center">
          Hey!
        </h1>
        <h2 className="mt-6 text-lg font-medium tracking-tight text-slate-200 sm:text-xl text-center">
          This page is still a work in progress.
        </h2>
        <p className="mt-4 leading-normal text-center">
          For now, you can find all my projects on my <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://github.com/jelalalamy" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)">GitHub</a>,
        </p>
        <p className="mt-4 leading-normal lg:pb-48 text-center">
          or click <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="/" rel="noreferrer noopener" aria-label="Return to previous page">here</a> to return to the previous page.
        </p>
      </div>
    </div>
  )
}
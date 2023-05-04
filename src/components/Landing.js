import React from "react"

const Landing = () => {
  return (
    <div className="h-[80vh] px-10 w-full flex flex-row justify-center items-center md:grid md:grid-cols-7 md:grid-rows-3 ">
      <div className="md:col-start-2 md:col-end-5 md:row-start-2 md:row-end-2 flex flex-col gap-4">
        <h1 className="w-fit text-5xl font-bold tracking-tight hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:via-purple-500 hover:to-yellow-400 transition duration-300 ease-in-out">
          Allen Shibu
        </h1>
        <p className="text-xl">
          I am a full-stack developer and 2nd year BTech CSE student based in
          Cochin, Kerala, India.
        </p>
        <div>
          <button className="btn btn-primary">Resume</button>
        </div>
      </div>
    </div>
  )
}

export default Landing

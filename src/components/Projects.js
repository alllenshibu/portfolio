import React, { useEffect, useState } from "react"

import axios from "axios"

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(async () => {
    try {
      const projects = await axios.get(`${process.env.API_URL}/api/projects`)
      setProjects(JSON.parse(projects.data))
    } catch (err) {
      setProjects([])
    }
  }, [])

  return (
    // <div className="min-h-[50vh] px-16 flex flex-col justify-center items-center">
    //   <h2 className="text-4xl font-semibold p-10">Things I've built</h2>
    //   <div className="w-full flex flex-col gap-10">
    //     <Project focus="left" />
    //     <Project focus="right" />
    //   </div>
    // </div>
    <div className="min-h-[60vh] flex flex-col justify-start items-center md:items-center">
      <div className="pb-10 flex justify-center items-center">
        <h2>Projects</h2>
      </div>
      <div className="p-8 max-h-[70vh] md:max-h-none overflow-scroll md:overflow-visible w-full flex flex-row justify-center items-center flex-wrap gap-8">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="p-5 h-72 w-72 rounded-md border border-gray-200 shadow flex flex-col justify-between hover:bg-gray-50 hover:shadow-lg transition duration-100 ease-in-out"
          >
            <h3 className="z-10 text-xl font-bold">{project.title}</h3>
            <img src={project.image} className="h-28 object-cover" />
            <p className="h-20 overflow-hidden text-ellipsis">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

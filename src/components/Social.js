import React from "react"

const Social = () => {
  return (
    <div className="w-full min-h-[20vh] flex flex-col justify-center items-center gap-4">
      <div>
        <h3 className="">My links</h3>
      </div>

      <div className="flex flex-row gap-4">
        <button className="btn btn-primary hover:bg-[#333333] hover:text-white hover:border-none">
          GitHub
        </button>
        <button className="btn btn-primary hover:bg-[#0077B5] hover:text-white hover:border-none">
          LinkedIn
        </button>
        <button className="btn btn-primary hover:bg-[#127CD6] hover:text-white hover:border-none">
          Email
        </button>
        <button className="btn btn-primary hover:bg-gradient-to-r hover:from-[#405DE6] hover:via-[#E130C6] hover:to-[#FCAF45] hover:text-white hover:border-none">
          Instagram
        </button>
      </div>
    </div>
  )
}

export default Social

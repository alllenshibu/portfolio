import React from "react"

const Footer = () => {
  return (
    <div className="px-4 py-10 flex flex-col justify-center items-center gap-4 bg-gray-50">
      <div className="px-8 md:px-0 w-full flex flex-col md:flex-row justify-evenly items-start gap-10">
        <div>
          <p className="text-xl font-bold text-black tracking-wide">Blog</p>
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="font-semibold text-black">Account Links</p>
          <button className="hover:bg-clip-text hover:text-transparent hover:bg-[#333333]">
            <a href={process.env.SOCIAL_GITHUB_URL}>GitHub</a>
          </button>
          <button className="hover:bg-clip-text hover:text-transparent hover:bg-[#0077B5]">
            <a href={process.env.SOCIAL_LINKEDIN_URL}>LinkedIn</a>
          </button>
          <button className="hover:bg-clip-text hover:text-transparent hover:bg-[#127CD6]">
            <a href={process.env.SOCIAL_EMAIL_URL}>Email</a>
          </button>
          <button className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#405DE6] hover:via-[#E130C6] hover:to-[#FCAF45]">
            <a href={process.env.SOCIAL_INSTAGRAM_URL}>Instagram</a>
          </button>
          <button className="hover:bg-clip-text hover:text-transparent hover:bg-[#1DA1F2]">
            <a href={process.env.SOCIAL_TWITTER_URL}>Twitter</a>
          </button>
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="font-semibold text-black">Projects</p>
          <button>Techno QR</button>
          <button>EzyCare</button>
          <button>Bon Appetit</button>
          <button>Portfolio</button>
        </div>
      </div>
      <a href="https://github.com/alapanoski" className="hover:text-gray-100">
        <p>Designed & built by Allen Shibu</p>
      </a>
    </div>
  )
}

export default Footer

import React from "react"

import { ToastContainer, toast } from "react-toastify"

const PersistentEmail = () => {
  async function handleEmailClick() {
    // toast.success("🦄 Wow so easy!", {
    //   position: "top-center",
    //   autoClose: 1200,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // })

    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText("allenshibu@outlook.in")
    } else {
      return document.execCommand("copy", true, "allenshibu@outlook.in")
    }
  }

  return (
    <div className="fixed z-10 bottom-[5%] right-0 md:bottom-auto md:top-[5%] md:right-[5%] flex flex-row justify-center items-center gap-2">
      {/* <ToastContainer
        position="top-center"
        autoClose={1200}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      <span className="invisible md:visible w-10 border-b border-black"></span>
      <p
        onClick={handleEmailClick}
        className="rotate-90 text-black bg-white md:rotate-0 text-xl tracking-wider px-4 rounded-md hover:bg-black hover:text-white transition duration-300 ease-in-out"
      >
        allenshibu@outlook.in
      </p>
      <span className="invisible md:visible md:w-10 border-b border-black"></span>
    </div>
  )
}

export default PersistentEmail

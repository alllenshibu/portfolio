import React from "react"

const Contact = () => {
  return (
    <div className="w-full min-h-[60vh] flex flex-col justify-center items-center gap-4">
      <div>
        <h2 className="">Get in touch</h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 ">
        <p className="px-10 md:px-0 md:w-3/5 text-center">
          I'm open to work and I'm actively looking for opportunities to
          collaborate. My inbox is always open if you want to have a chat.
        </p>
        <form className="w-full py-10 px-10 md:px-0 md:w-1/2 flex flex-col gap-4">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Allen Shibu"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="allenshibu@outlook.in"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="w-auto btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact

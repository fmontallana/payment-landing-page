import React from 'react'
import heroImage from '../assets/hero-image.png'

function Hero() {
  return (
      <div className="md:flex items-center justify-between space-x-5">
          {/* hero content */}
          <div className=" flex flex-col items-start justify-center space-y-5 h-80 text-primary">
              <p className="text-xm uppercase text-accent">Start Saving Money</p>
              <h1 className="text-4xl font-semibold">Smart Credit Card <br/>For your Daily Life.</h1>
              <button className="flex items-center justify-center bg-accent font-bold text-l text-dark py-1 px-3 rounded">Download</button>
          </div>
          {/* hero image */}
          <div className="">
              <img className="md:w-96" src={heroImage} alt="" />
          </div>
      </div>
  )
}

export default Hero
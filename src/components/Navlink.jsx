import React from 'react'

function Navlink({title, href}) {
  return (
    <a className="flex items-center px-2 h-10 w-10/12 rounded active:text-primary hover:text-dark focus:text-dark hover:bg-accent focus:bg-accent" href={href}>{title}</a>
  )
}

export default Navlink
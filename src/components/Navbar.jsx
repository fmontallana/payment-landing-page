import React from 'react'

import brandLogo from '../assets/starlingbank1.svg'
import menu from '../assets/menu.svg'
import close from '../assets/menu-close.svg'
import Navlink from './Navlink'

function Navbar({isOpen, onClick}) {

    
  return (
    <>
        <div className="flex items-center justify-between py-6 ">
            <div>
                <img  src={brandLogo} alt="" />
            </div>
            <div className="hidden md:flex space-x-6 text-primary">
                <a class="hover:text-accent" href="http://">Features</a>
                <a class="hover:text-accent" href="http://">Pricing</a>
                <a class="hover:text-accent" href="http://">Help</a>
                <a class="hover:text-accent" href="http://">Blog</a>
                <a class="hover:text-accent" href="http://">About us</a>
            </div>
            <div className="hidden md:flex space-x-3 text-dark font-bold">
                <button className="bg-accent px-6 py-1 rounded">Log In</button>
                <button className="bg-accent px-6 py-1 rounded">Sign Up</button>
            </div>
            <div className="md:hidden">
                <button onClick={onClick}>
                    {isOpen ? <img className="h-10 w-10 fill:primary" src={close}/> : <img className="h-10 w-10 fill:primary" src={menu}/>}
                </button>
            </div>
        </div>
        {isOpen && <div className="absolute h-screen w-full bg-dark flex flex-col justify-start content-center  text-primary text-md">
            <Navlink title="Features" href="#"/>
            <Navlink title="Pricing" href="#"/>
            <Navlink title="Help" href="#"/>
            <Navlink title="Blog" href="#"/>
            <Navlink title="About us" href="#"/>
            <Navlink title="Login" href="#"/>
            <Navlink title="Signup" href="#"/>
        </div>}
    </>
  )
}

export default Navbar
import {useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className="App h-100% w-screen bg-dark">
      <div className="relative container h-screen sm:w-8/12 mx-auto px-6 overflow-x-hidden">
        <Navbar isOpen={isOpen} onClick={handleClick}/>
        <Hero />
      </div>
    </div>
  )
}

export default App

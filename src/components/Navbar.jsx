import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='font-bold bg-black text-slate-200 bg-gradient-to-r from-slate-900 to-slate-700'>
            <div className='h-16 text-center flex justify-center items-center text-2xl'>
                <Link to={"/"} className='font-varela hover:cursor-pointer '>FormBuilder</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar

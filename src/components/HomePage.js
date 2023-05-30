import React from 'react'
import ChatBox from './ChatBox'
import Navbar from './Navbar'

export default function HomePage() {
  return (
    <>
    <div className='bg-slate-800 h-screen text-sky-600 lg:flex justify-center items-center' >
    <Navbar/>
    <ChatBox/>
    </div>
    
    
    </>
  )
}

import React from 'react'
import profile_image from "./Snapchat.jpg"
export default function ProfileSection() {
  return (

      <div className="flex w-max h-full lg:w-[100%] lg:flex-col ">

     
      <div className='lg:w-full lg:h-[70px] p-2 lg:mt-2 flex rounded-full lg:justify-between capitalize place-items-center '><img className='lg:w-[65px] lg:h-[65px] h-[90%] rounded-full' alt='user' src={profile_image}></img> <div className='hidden lg:flex flex-col items-end'><p >vishal</p><p className='text-sm'>10:30pm</p></div></div>
      
        
       
      
      
       

        
        
        </div>
  )
}

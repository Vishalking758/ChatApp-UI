import React from 'react'
import profile_image from "./Snapchat.jpg";
export default function ChatBox() {
  return (
    <div className='h-[80%] border lg:h-4/5 lg:w-8/12 rounded-2xl'>

<div className='bg-slate-900 w-full rounded-2xl h-[90%] '>

<div className="h-[10%] flex justify-between items-center border rounded-2xl px-2 ">
        {" "}
        <img
          alt="Profile"
          className="h-10 rounded-full"
          src={profile_image}
        ></img>
<p className="text-2xl">Vishal</p>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>

      </div>
<div className="h-[90%] flex flex-col border rounded-2xl px-2 ">
      
<div className=' flex flex-col '>
  <div className=' border w-min mt-2 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl p-4'>
  <p className='text-2xl font-bold text-white'>Other</p>
  <p>hello</p>
  </div>
</div>

<div className=' flex flex-col items-end'>
  <div className=' border w-min mt-2 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl p-4'>
  <p className='text-2xl font-bold text-white'>me</p>
  <p>hello</p>
  </div>
</div>

<div className=' flex flex-col '>
  <div className=' border w-min mt-2 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl p-4'>
  <p className='text-2xl font-bold text-white'>Other</p>
  <p>hello</p>
  </div>
</div>

<div className=' flex flex-col items-end'>
  <div className=' border w-min mt-2 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl p-4'>
  <p className='text-2xl font-bold text-white'>me</p>
  <p>hello</p>
  </div>
</div>



      </div>





</div>
<div className='h-[10%] border rounded-2xl flex bg-slate-800'>

<div className=' h-full flex items-center w-8/12'><input placeholder='Send message' className='focus:border-sky-500 h-4/6 border-4 border-sky-600 ring text-gray-400 rounded-2xl w-full bg-transparent'/></div>
<div className=' h-full flex items-center justify-between p-3 w-4/12'> 

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
</svg>


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>



</div>
</div>



    </div>
  )
}

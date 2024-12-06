import React from 'react'

function About() {
  return (
    <div className='w-full p-20 px-10 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
      <h1 className='font-["Neue_Montreal"] text-[3vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
    </h1>

    <div className='w-full flex gap-5 border-t-[1px] border-[#a1b562] pt-10 mt-20'>
    <div className='w-1/2 '>
        <h1 className='text-5xl'>Our approach:</h1>
        <button className='uppercase flex gap-10 items-center py-6 px-10 bg-zinc-900 mt-10 rounded-full text-white' >Read More
        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
    </div>

    <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]'>

    </div>
    </div>
    </div>
  )
}

export default About

import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-10 items-center px-32'>
        <div className='container w-1/2 h-[50vh]'>
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='left-10 absolute bottom-10 border-2 px-5 py-1 rounded-full'>&copy;2024</button>
            </div>
        </div>

        <div className='container w-1/2 h-[50vh] flex gap-5 '>

            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='left-10 absolute bottom-10 border-2 px-5 py-1 rounded-full'>&copy;2024</button>
            
            </div>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='left-10 absolute bottom-10 border-2 px-5 py-1 rounded-full'>&copy;2024</button>
            
            </div>
        
        </div>
      
    </div>
  )
}

export default Cards

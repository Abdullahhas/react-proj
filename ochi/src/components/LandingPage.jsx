import React from 'react'

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'> 
      <div className='textstructure mt-52 px-20'>

        {['We Create' , 'Eye Opening' , 'Prestentations'].map((item , index) => {
            return <div className='masker'>
            <h1 className='uppercase text-[7.5vw] leading-[6vw] font-medium tracking-tighter font-["FoundersGrotesk"]'>
               {item}
            </h1>
        </div>
        })}


        
        
      </div>

      <div className='border-t-2 border-zinc-700 mt-32'></div>
    </div>
  )
}

export default LandingPage

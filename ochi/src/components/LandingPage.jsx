import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

function LandingPage() {
    return (
        <div className='w-full min-h-screen bg-zinc-900 pt-2'> 
            <div className='textstructure mt-52 px-20'>
                {['We Create', 'Eye Opening', 'Presentations'].map((item, index) => (
                    <div className='masker' key={index}>
                        <div className='w-fit flex items-baseline'>
                            {/* Adjust the red rectangle for the second text */}
                            {index === 1 && (
                                <div 
                                    className='bg-red-400 rounded-md relative mr-5'  
                                    style={{
                                        width: '9vw',
                                        height: '6vw',
                                       
                                    }}
                                ></div>
                            )}
                            <h1 className='pt-[2vw] -mb-[1vw] flex items-center uppercase text-[9vw] leading-[.75] font-medium tracking-tighter font-["FoundersGrotesk"]'>
                                {item}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>

            <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
                {['For public and private companies', 'From the first pitch to the IPO'].map((item, index) => (
                    <p className='text-md font-light tracking-tight leading-none' key={index}>
                        {item}
                    </p>
                ))}

                <div className='start flex items-center gap-5'>
                    <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>
                        Start the project
                    </div>
                    <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

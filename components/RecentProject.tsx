import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3D-pin'
import { desc } from 'motion/react-client'
import ChatApp from "../data/Chatapp.png"
const RecentProject = () => {
  return (
    <div className="text-white py-20">
      <div className='flex justify-center'>

        <h1 className="text-3xl font-bold text-white mb-8">
        My <span className="text-sky-400">Experience</span>
      </h1>
      </div>




      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 p-4">
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex flex-wrap items-center justify-center sm:w-96 w-[80vw] mx-auto " >
            <PinContainer title={item.link}>

             <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh]'>
              <div className='relative full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'> 
                <img src={item.img} alt="hi" />
              </div>
  
             </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{item.title}</h1>
              <p>{item.des}</p>
              <div className='flex items-center justify-center mt-7 mb-3'>
                <div className='flex items-center border-white'>
                  Source code
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProject

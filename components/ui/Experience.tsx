import React from 'react'
import { Button, MovingBorder } from './Moving-border'

const Experience = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-8">
        My <span className="text-sky-400">Experience</span>
      </h1>

      <div className="flex flex-wrap justify-between w-full max-w-7xl gap-8">
        <Button className="w-96 p-8 text-left rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
           <h1 className='text-xl font-semibold p-3'>FullStack Developer</h1>
          <h2 className="text-xl font-semibold p-3">Aximius</h2>
          <h2 className='text-xl font-semibold p-3'> January-June 2025</h2>
        </Button>

        <Button className="w-150% md:w-96 p-8 text-left rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
                      <h1 className='text-xl font-semibold p-3'>FullStack Developer</h1>
          <h2 className="text-xl font-semibold p-3">Xebia
          </h2>
          <h2 className='text-xl font-semibold p-3'> June-July 2025</h2>
            


        </Button>
      </div>
    </section>
  );
};


export default Experience;



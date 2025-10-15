// import React from 'react'
// import { Spotlight } from './ui/Spotlight'
// import { cn } from '@/lib/utils'
// import { TextGenerateEffect } from './ui/text-generate-effect'
// import MagicButton from './ui/MagicButton'
// import { FaLocationArrow } from 'react-icons/fa'
// import abhiimg from "../data/abhi.jpeg"
// import { TypewriterEffect } from './ui/Typerwritter'

// const Hero = () => {
//   return (
//     <div className="relative pb-20 pt-36">
//       {/* Background Spotlights */}
//       <Spotlight className="-top-40 -left-10 md:-left-32 md:top-20 h-screen" fill="white"/>
//       <Spotlight className="-top-10 left-full h-[80vh] w-[50vw]" fill="#a855f7"/>
//       <Spotlight className="-top-28 -left-80 h-[80vh] w-[50vw]" fill="blue"/>

//       {/* Hero Content */}
//       <div className="relative flex flex-col items-center justify-center h-[50rem] w-full bg-[#0f172a]">
//         {/* Grid overlay */}
//         <div
//           className={cn(
//             "absolute inset-0",
//             "[background-size:40px_40px]",
//             "[background-image:linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)]",
//             "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
//           )}
//         />
//         {/* Radial mask for soft fade */}
//         <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent)] dark:bg-[black]"></div>

//         {/* Title and Image */}
//         <div className="relative z-20 flex flex-col items-center text-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-center">
//          <TypewriterEffect
//           words={[{ text: "Hello, I'm Abhishek" }]}
//             className="inline" />
//           </h1>

//           {/* Profile Image */}
//           <img
//             src={abhiimg.src}
//             alt="Abhishek"
//             className="mt-6 h-64 w-64 rounded-full object-cover border-4 border-purple-500 shadow-lg"
//           />

//           <div className='text-white'>
//                 <div className="flex justify-center mt-6">
//           <p className='text-gray-300 p-7'>
//           A passionate full-stack developer who loves building modern web apps with React, Node.js, and everything in between.  
// Currently exploring advanced UI/UX with motion and animations to create smooth digital experiences.
//           </p>

//       </div>
         
//           </div>
//         </div>
//       </div>

//       {/* Subheading */}
//       <div className="flex justify-center mt-6">
//           <p className='text-gray-300'>
//           A passionate full-stack developer who loves building modern web apps with React, Node.js, and everything in between.  
// Currently exploring advanced UI/UX with motion and animations to create smooth digital experiences.
//           </p>

//       </div>

//       {/* Animated Text */}
//       <TextGenerateEffect
//         className="text-center text-[40px] md:text-5xl lg:text-6xl mt-6"
//         words="I Create apps :D"
//       />

//       {/* Short Description */}
//       <p className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-2xl">
//         Hi, I'm Abhishek
//       </p>

//       {/* Call-to-Action Button */}
//       <div className="flex justify-center">
//         <a href="#about">
//           <MagicButton
//             title="My Work"
//             icon={<FaLocationArrow />}
//             position="left"
//           />
//         </a>
//       </div>
//     </div>
//   )
// }

// export default Hero

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import abhiimg from "../data/abhi.jpeg"
import { TypewriterEffect } from './ui/Typerwritter'
const words =[
  {text:"Hello!,"},
  {text:"I'm"},
   {text:"Abhishek"}, 
      {text:"Negi"},
  
];
const Hero = () => {
  return (
    <div className="relative pb-20 pt-20">

      {/* Background Spotlights */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:top-20 h-screen" fill="white"/>
      <Spotlight className="-top-10 left-full h-[80vh] w-[50vw]" fill="#a855f7"/>
      <Spotlight className="-top-28 -left-80 h-[80vh] w-[50vw]" fill="blue"/>

      {/* Hero Content with engraved grid */}
      <div className="relative flex flex-col items-center justify-center h-[50rem] w-full bg-[#0f172a]">

        {/* Engraved Grid Lines */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]",
          )}
        />

        {/* Radial Fade Mask */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#0f172a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#0f172a_100%)]" />

        {/* Title and Profile */}
        <div className="relative z-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            <TypewriterEffect
              words={words}
              className="inline"
            />
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-10">
          <img
            src={abhiimg.src}
            alt="Abhishek"
            className="mt-6 h-64 w-64 rounded-full object-cover border-4 border-purple-500 shadow-lg"
          />

          <div className='text-white flex justify-center mt-6'>
            <p className='text-blue-200 p-7 max-w-2xl text-xl '>
              A passionate full-stack developer who loves building modern web apps with React, Node.js, and everything in between.  
              Currently exploring advanced UI/UX with motion and animations to create smooth digital experiences.
            </p>
          </div>

          </div>
        </div>
      </div>
      {/* Animated Text */}
      <TextGenerateEffect
        className="text-center text-[40px] md:text-5xl lg:text-6xl mt-6"
        words="I Create apps :D"
      />

      {/* Short Description */}
      <p className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-2xl text-blue-200">
        I love building modern web apps, exploring new technologies, and learning new stacks to create seamless and interactive user experiences.
      </p>

      {/* Call-to-Action Button */}
      <div className="flex justify-center">
        <a href="#about">
          <MagicButton
            title="My Work"
            icon={<FaLocationArrow />}
            position="left"
          />
        </a>
      </div>
    </div>
  )
}

export default Hero

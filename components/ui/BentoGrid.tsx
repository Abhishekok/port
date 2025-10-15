import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { BackgroundGradientAnimation } from "./Gradientbg";
import { div, span } from "motion/react-client";
import { FaLinkedin } from "react-icons/fa";
import {GlobeDemo} from "./GridGlobe"
import { LampContainer, LampDemo } from "./Lamp";
import { Vortex } from "./Vortex";
import { VortexDemo } from "./Vortexbag";
import { Sparkles } from "@react-three/drei";
import { SparklesCore } from "./sparkles";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-[1800px] grid-cols-1 gap-8 md:grid-cols-6 px-6 overflow-hidden ",
        className,
      )}
    > 

            {children}


    </div>
  );
};

const words =[

  {text:"I"},
   {text:"AM"},
   {text:"ABHISHEK"}, 
      {text:"NEGI"},
  
];

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  header,
  icon,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode | null;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number,
  img?: string | StaticImageData | null; 
  imgClassName?: string,
  titleClassName?:   string,
  spareImg?: string;



}) => {
  return (
    <div
      className={cn(
        "group/bento relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border-2 border-red-500  bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none ",
        className,
      )}
      style={{background:'rgb(4,7,27)'}}
    >

<div
  className={cn(
    id === 6 ? "relative justify-center h-full overflow-hidden" : ""
  )}
>
{/* {img ? (
  <div className="overflow-x-hidden rounded-3xl"> 
    
  <Image
    src={img}
    alt={title?.toString() || "Image"}
    className={cn(imgClassName, "object-cover overflow-hidden rounded-xl")}
    fill

  />
    </ div> 
) : null} */}

</div>



<div className={cn(
  titleClassName,'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 z-20'
)}>
{/* <div className="text-blue-400 text-sm md:text-xs lg:text-base z-100">
  {description}
</div>
        <div className="mt-2 mb-2 font-sans font-bold text-amber-300">
          {title}
        </div> */}
      <span className="z-100 h-min p-m">
                <div className="text-blue-400 text-lg md:text-xs lg:text-base z-100">
          {description}
        </div>
        <div className="mt-2 mb-2  text-2xl font-sans font-bold text-amber-300">
          {/* {title} */}
          { title}
  {typeof title === "string" && title.includes("Linkedin") && (
    <FaLinkedin className="text-sky-500 text-2xl inline-block" />
)}
          
        </div>

      </span>


        <div className="absolute inset-0 rounded-2xl overflow-hidden"> 
         
  {id === 6 && (
    <div className="absolute inset-0 z-0">
  {/* Background gradient (lowest layer) */}
  <div className="absolute inset-0">
    <BackgroundGradientAnimation />
  </div>

  {/* Text content (above gradient) */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full">


  </div>
</div>

  )}
  {
    id==3 && (
      <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 overflow-hidden">
          <div className="relative flex flex-col gap-3 lg:gap-8 text-amber-300">
          {[' ','MYSQL','Next.js','Typescript'].map((item,index)=>{
              console.log("Rendering item:", item);
              return   <span
            key={index}
            className="px-4 py-2 lg:px-5 lg:py-3
                       text-sm lg:text-base font-medium
                       rounded-lg text-center
                       bg-[#10132E]/90 text-amber-300
                       shadow-md hover:shadow-lg
                       transition-all duration-300
                       hover:scale-105 hover:bg-[#1a1e3f]"
          >
            {item}
          </span>
            })}
          </div>
                    <div className="flex flex-col gap-3 lg:gap-8 text-amber-300">
          {['React.js','Next.js', " "].map((item,index)=>{
              console.log("Rendering item:", item);
             return        <span
            key={index}
            className="px-4 py-2 lg:px-5 lg:py-3
                       text-sm lg:text-base font-medium
                       rounded-lg text-center
                       bg-[#10132E]/90 text-amber-300
                       shadow-md hover:shadow-lg
                       transition-all duration-300
                       hover:scale-105 hover:bg-[#1a1e3f]"
          >
            {item}
          </span>
              })}
          </div>
         </div>
    )
  }
  {id === 2 && (
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
        <GlobeDemo />
    </div>
    <div className="absolute bottom-10 text-center">
      

    </div>
  </div>
)}
{id===1 && (

<div>
<LampDemo /> 
</div>

)


}
{
  id===5 && (

    <div>
      <VortexDemo />
      </div>
  )
}
{
  id==4 && (
    <SparklesCore
     id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
  )
}

</div>



</div>



      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}

      </div>
    </div>
  );
};

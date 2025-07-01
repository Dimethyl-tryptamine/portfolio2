import tricon from "../../assets/tricon.jpg"
import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";
import {motion, AnimatePresence} from 'framer-motion'



const FeaturedProjects = () => {

    const [isOpen, setIsOpen] = useState(true);

    
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
        
    }

    

    const dropDownVariants = {
        hidden: {
            y: '-110vh',


        },
        visible: {
            y: '0vh',
            transition: {
                duration: 0.5, 
                ease: 'easeInOut', 
            },

        },
        exit: {
            y: '-110vh',
            transition: {
                duration: 0.5, 
                ease: 'easeInOut', 
            },

        },
    }





    return (
        <div className='bg-secondary  border-solid border-primary p-[.5rem] rounded-[1rem] border-[.1rem] flex flex-col mb-[2rem] h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] overflow-hidden'>


            <div className='bg-secondary   flex flex-col mb-[.8rem] h-auto '>
                    
                <div className="relative text-[1rem] flex items-center font-gothic ">
                    
                    <div className="flex flex-col xsm:text-[1.5rem] sml:text-[2rem]  text-center flex-grow">
                        Featured Projects
                        <hr className="border-primary w-[8.2rem] sml:w-[16.5rem] xsm:w-[12.5rem] mx-auto rounded-lg shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]" />
                    </div>
  
                    <div className="absolute right-0 z-0 sml:hidden ">
                        <button
                        onClick={toggleDropdown}
                        className="bg-tertiary rounded-lg mt-3 mr-1 flex border-solid border-[.1rem] border-primary items-center shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]"
                        >
                            <RiArrowDropDownLine size="2rem" />
                        </button>
                    </div>

                </div>
                    
                <AnimatePresence>
                    {isOpen   && <motion.div
                    
                    variants={dropDownVariants}
                    initial='hidden'
                    animate='visible'
                    exit='exit'>
                        <div className=" flex flex-col sml:flex-row sml:mx-10 items-center justify-center lrg:space-x-[5rem] sml:space-x-[2rem] space-y-[.5rem]">




                            <div className="mt-[.8rem] cursor-pointer flex sml:flex-col items-center  sml:max-w-[20rem]">
                                <h1 className='hidden text-[.8rem] sml:flex xsm:text-[1rem] m-1 font-k2d med:text-[1.4rem]'>Project Name</h1>
                                <div className='bg-tertiary border-solid border-primary  rounded-[1rem] border-[.1rem]  mb-[.4rem] flex sml:flex-col  h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]'>
                                    
                                    
                                    <div className='flex flex-col  sml:m-0  m-2'>
                                        
                                        <h1 className='text-[.8rem] whitespace-nowrap text-center sml:hidden mb-1 xsm:text-[1rem] font-k2d '>Project Name</h1>
                                        
                                        <img src={tricon} alt="image of Project" className='  sml:w-full max-w-[10rem] sml:max-w-full sml:min-w-[9rem] rounded-md sml:rounded-b-none sml:rounded-t-[.9rem] sml:border-b-[.1rem] sml:border-solid sml:border-b-primary sml:shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] object-scale-down '/>
                                        
                                    </div>

                                    <div className="w-full p-3 flex flex-row h-[9rem]">
                                        <h2 className='  xsm:text-[.8rem] text-[.5rem] flex-1 items-center justify-center font-mali '>This was a project about making a website for the first time here I used react node.js and tailwind along with typescript</h2>
                                    </div>
                                    

                                    
                                </div>
                            </div>







                            <div className="mt-[.8rem] cursor-pointer flex sml:flex-col items-center  sml:max-w-[20rem]">
                                <h1 className='text-[.8rem]  hidden sml:flex xsm:text-[1rem] m-1 font-k2d med:text-[1.4rem]'>Project Name</h1>
                                <div className='bg-tertiary border-solid border-primary  rounded-[1rem] border-[.1rem]  mb-[.4rem] flex sml:flex-col  h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]'>
                                    
                                    
                                    <div className='flex flex-col  sml:m-0  m-2'>
                                        
                                        <h1 className='text-[.8rem] whitespace-nowrap text-center sml:hidden mb-1 xsm:text-[1rem] font-k2d '>Project Name</h1>
                                        
                                        <img src={tricon} alt="image of Project" className='  sml:w-full max-w-[10rem] sml:max-w-full sml:min-w-[9rem] rounded-md sml:rounded-b-none sml:rounded-t-[.9rem] sml:border-b-[.1rem] sml:border-solid sml:border-b-primary sml:shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] object-scale-down '/>
                                        
                                    </div>

                                    <div className="w-full p-3 flex flex-row h-[9rem]">
                                        <h2 className='  xsm:text-[.8rem] text-[.5rem] flex-1 items-center justify-center font-mali '>This was a project about making a website for the first time here I used react node.js and tailwind along with typescript</h2>
                                    </div>
                                    

                                    
                                </div>
                            </div>


                            <div className="mt-[.8rem] cursor-pointer flex sml:flex-col items-center  sml:max-w-[20rem]">
                                <h1 className='text-[.8rem]  hidden sml:flex xsm:text-[1rem] m-1 font-k2d med:text-[1.4rem]'>Project Name</h1>
                                <div className='bg-tertiary border-solid border-primary  rounded-[1rem] border-[.1rem]  mb-[.4rem] flex sml:flex-col  h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]'>
                                    
                                    
                                    <div className='flex flex-col  sml:m-0  m-2'>
                                        
                                        <h1 className='text-[.8rem] whitespace-nowrap text-center sml:hidden mb-1 xsm:text-[1rem] font-k2d '>Project Name</h1>
                                        
                                        <img src={tricon} alt="image of Project" className='  sml:w-full max-w-[10rem] sml:max-w-full sml:min-w-[9rem] rounded-md sml:rounded-b-none sml:rounded-t-[.9rem] sml:border-b-[.1rem] sml:border-solid sml:border-b-primary sml:shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] object-scale-down '/>
                                        
                                    </div>

                                    <div className="w-full p-3 flex flex-row h-[9rem]">
                                        <h2 className='  xsm:text-[.8rem] text-[.5rem] flex-1 items-center justify-center font-mali '>This was a project about making a website for the first time here I used react node.js and tailwind along with typescript</h2>
                                    </div>
                                    

                                    
                                </div>
                            </div>

                            <div className="mt-[.8rem] flex cursor-pointer sml:flex-col items-center  sml:max-w-[20rem]">
                                <h1 className='text-[.8rem]  hidden sml:flex xsm:text-[1rem] m-1 font-k2d med:text-[1.4rem]'>Project Name</h1>
                                <div className='bg-tertiary border-solid border-primary  rounded-[1rem] border-[.1rem]  mb-[.4rem] flex sml:flex-col  h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]'>
                                    
                                    
                                    <div className='flex flex-col  sml:m-0  m-2'>
                                        
                                        <h1 className='text-[.8rem] whitespace-nowrap text-center sml:hidden mb-1 xsm:text-[1rem] font-k2d '>Project Name</h1>
                                        
                                        <img src={tricon} alt="image of Project" className='  sml:w-full max-w-[10rem] sml:max-w-full sml:min-w-[9rem] rounded-md sml:rounded-b-none sml:rounded-t-[.9rem] sml:border-b-[.1rem] sml:border-solid sml:border-b-primary sml:shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] object-scale-down '/>
                                        
                                    </div>

                                    <div className="w-full p-3 flex flex-row h-[9rem]">
                                        <h2 className='  xsm:text-[.8rem] text-[.5rem] flex-1 items-center justify-center font-mali '>This was a project about making a website for the first time here I used react node.js and tailwind along with typescript</h2>
                                    </div>
                                    

                                    
                                </div>
                            </div>

                        </div>

                    </motion.div>}
                </AnimatePresence>
            </div>
            

        </div>
    )
}

export default FeaturedProjects;
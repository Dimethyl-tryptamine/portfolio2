
import { BsDownload } from "react-icons/bs";


const Portfolio = () => {


    return(

        <div className=' bg-secondary border-solid border-primary mb-[2rem] p-2 rounded-[1rem] border-[.1rem]   h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]'>


                    <h1 className='text-[1rem] font-gothic xsm:text-[1.5rem]  sml:text-[2rem] '>
                     Downloadable Portfolio
                     <hr className="  border-primary w-[10.5rem] sml:w-[21rem] xsm:w-[16rem] m-1 ml-0 rounded-lg shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]" />
                    </h1>

                    

                    <div className='font-koho text-[#959595] leading-tight text-sm xsm:text-base sml:text-lg lrg:text-xl med:text-2xl'>
                        I'm a passionate web developer with a focus on creating intuitive, user-friendly websites and applications. With a strong foundation in front-end and back-end technologies, I bring both technical skills and a creative approach to problem-solving. 
                        Feel free to explore my work and get in touch if you'd like to collaborate or learn more about my projects!
                    </div>
                    <div className='flex w-full justify-end '>
                        
                        <div className='bg-tertiary m-1 cursor-pointer text-[.8rem] sml:text-[1rem] med:text-[1.5rem] border-primary border-[.1rem] flex justify-center items-center rounded-xl p-1 pt-[.15rem] pb-[.15rem] shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]'> <BsDownload className='m-auto' />PNG</div>
                        <div className='bg-tertiary m-1 cursor-pointer text-[.8rem] sml:text-[1rem] med:text-[1.5rem] border-primary border-[.1rem] flex justify-center items-center rounded-xl p-1 pt-[.15rem] pb-[.15rem] shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]'> <BsDownload className='m-auto' />PDF</div>
                        <div className='bg-tertiary m-1  cursor-pointer text-[.8rem] sml:text-[1rem] med:text-[1.5rem] border-primary border-[.1rem] flex justify-center items-center rounded-xl p-1 pt-[.15rem] pb-[.15rem] shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]'> <BsDownload className='m-auto' />JPG</div>
                        
                    </div>
                    
                </div>



    )
}


export default Portfolio;

import Track from "./util/Track";
import Certification from './util/Certification'; 





const Certifications = () => {


    return(
        <div className='bg-secondary border-solid border-primary p-2  pl-0 pr-0 rounded-[1rem] border-[.1rem] sml:flex flex-col overflow-hidden   h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]'>
            <h1 className='text-[1rem] flex flex-col xsm:text-[1.5rem] sml:text-[2rem] m-auto justify-center font-gothic items-center '>
                Certifications
                <hr className="  border-primary w-[6.1rem] xsm:w-[9.5rem] sml:w-[12.5rem] m-1 ml-0 rounded-lg shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]" />
            </h1>

            <div className='justify-center  hidden sml:flex  overflow-hidden'>
                <Track/>

            </div>


            <div className="flex flex-col justify-center sml:hidden ">

                <p className='text-[.8rem] xsm:text-[1rem] sml:text-[1.2rem] text-center m-2'>
                    this is where i am going to make a slide show of my certifications with a button to pervious and next the slideshow will be a horizontal dragable 

                </p>


            </div>
        </div>


        

    )

}

export default Certifications;
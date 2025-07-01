
import Track from "./util/Track";





const Certifications = () => {


    return(
        <div className='bg-secondary border-solid border-primary p-2  pl-0 pr-0 rounded-[1rem] border-[.1rem] flex flex-col overflow-hidden  h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]'>
            <h1 className='text-[1rem] flex flex-col xsm:text-[1.5rem] sml:text-[2rem] m-auto justify-center font-gothic '>
                Certifications
                <hr className="  border-primary w-[6.1rem] xsm:w-[9.5rem] sml:w-[12.5rem] m-1 ml-0 rounded-lg shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]" />
            </h1>

            <div className='justify-center  overflow-hidden'>
                <Track/>

            </div>
        </div>

    )

}

export default Certifications;
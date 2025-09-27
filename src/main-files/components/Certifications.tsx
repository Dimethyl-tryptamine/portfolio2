
import Track from "./util/Track";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import Certification from "./util/Certification";
import { useEffect, useState } from "react";
import { siteData, Certification as CertificationType } from '../../assets/Variables';
import { motion, AnimatePresence } from "framer-motion";




const certifications: CertificationType[] = siteData.certifications;
const swipeConfidenceThreshold = 100;





const Certifications = () => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    


    

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            if (newDirection === 1) {
                return prevIndex === certifications.length - 1 ? 0 : prevIndex + 1;
            } else {
                return prevIndex === 0 ? certifications.length - 1 : prevIndex - 1;
            }
        });
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    };


    useEffect(() => {
        console.log(direction);
    }, [currentIndex]);


    return(
        <div className='bg-secondary border-solid border-primary p-2  pl-0 pr-0 rounded-[1rem] border-[.1rem] sml:flex flex-col overflow-hidden   h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]'>
            <h1 className='text-[1rem] flex flex-col xsm:text-[1.5rem] sml:text-[2rem] m-auto justify-center font-gothic items-center '>
                Certifications
                <hr className="  border-primary w-[6.1rem] xsm:w-[9.5rem] sml:w-[12.5rem] m-1 ml-0 rounded-lg shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]" />
            </h1>

            <div className='justify-center  hidden sml:flex  overflow-hidden'>
                <Track/>

            </div>






                   


            

                <div className="flex flex-row justify-center items-center relative h-full w-full max-w-[20rem] m-auto ">

                    
                    


                    




                    <div className="relative overflow-hidden w-full h-[16rem] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                            key={currentIndex} // important for AnimatePresence to track slide changes
                            custom={direction} // pass direction to variants
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(_, info) => {
                                if (info.offset.x > swipeConfidenceThreshold) {
                                paginate(-1); // swipe right = previous slide
                                } else if (info.offset.x < -swipeConfidenceThreshold) {
                                paginate(1);  // swipe left = next slide
                                }
                            }}
                            className="w-full h-full flex items-center justify-center"
                            style={{ position: "absolute" }} // needed for AnimatePresence sliding
                            >
                            <Certification {...certifications[currentIndex]} />
                            </motion.div>
                        </AnimatePresence>
                        </div>


                    <div className=" absolute left-0 inset-y-0 w-1/4  flex items-center justify-start"  onClick={() => paginate(-1)}>
                        <TiArrowLeft className="text-[3rem] text-primary "/>
                    </div>


                    <div className=" absolute right-0 inset-y-0 w-1/4  flex items-center justify-end" onClick={() => paginate(+1)}>
                        <TiArrowRight className="text-[3rem] text-primary 
                         "/>
                    </div>


                   
                    
                    
                </div>


            
        </div>


        

    )

}

export default Certifications;


//import { useState } from "react";
import {motion} from 'framer-motion'



interface DropdownProps {
    options: string[]; // Array of strings for dropdown options
    placeHolder?: string; // Optional placeholder text
    className:string;
  }


  const Dropdown: React.FC<DropdownProps> = ({/*options,*/className,placeHolder = "Select an option",}) => {

    //const [isOpen, setIsOpen] = useState(false)
    //const [selected, setSelected] = useState(null)


    return(
        <>
        <button className={` bg-tertiary rounded-md flex items-center justify-center   ${className || ""} `}> 

            <div className="flex items-center text-[.6rem] m-1">
                <span>{placeHolder}</span>
                <div className="flex items-center justify-center w-min m-1">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="7 9 10 6"
                        className="text-[.6rem]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                    </svg>
                </div>
            </div>
        <button/>






        <motion.div className="hidden">
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
        </motion.div>










        </button>
        
 
        </>
    )
}

export default Dropdown;
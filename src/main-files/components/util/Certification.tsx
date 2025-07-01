import { motion } from "framer-motion";
import { Certification as CertificationType } from "../../../assets/Variables"; // Import the Certification type


const Certification: React.FC<CertificationType> = ({
  title,
  colors,
  logo,
  previewDescription,
}) => {
  
  let gradients:string = `from-${colors[0]}`



  for (let i = 1; i < colors.length - 1; i++) {
    gradients += ` via-${colors[i]} to-${colors[colors.length - 1]}`;
  }

  

  

  


  return (
    <div className={`  bg-gradient-to-br ${gradients} m-[.3rem] cursor-pointer shadow-border-white p-[2px] rounded-xl `}>
      <motion.div className={`bg-tertiary  relative rounded-xl w-[10rem] h-[10rem] sml:w-[15rem] sml:h-[15rem] `}>
        <h3 className={`bg-gradient-to-r ${gradients} bg-clip-text text-transparent   flex justify-center font-mali custom-text-outline text-[.8rem] sml:flex xsm:text-[1rem]  med:text-[1.4rem]`}>{title}</h3>
        <div className={`h-[1px] bg-gradient-to-r ${gradients}  rounded-xl`}  />
        <p className="text-[.5rem] m-3  sml:text-[.7rem] font-mali text-white ">{previewDescription}</p>
        {logo && <img src={logo} alt={"certification company logo"} className=" w-10 h-auto absolute right-[.4rem] bottom-[.4rem]" />}   
      </motion.div>
    </div>
  );
};

export default Certification;

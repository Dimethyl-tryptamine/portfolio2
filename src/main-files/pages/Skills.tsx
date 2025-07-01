
import '../../index.css'
import { siteData } from '../../assets/Variables';
import profilegreen from '../../assets/profilegreen.gif'
import Dropdown from '../components/util/Dropdown';







function Skills() {

   


        
   


    return (
        <>
            <div className=" mt-[3.5rem] grid grid-cols-[min-content,1fr] gap-1">


                <div className="flex relative   left-0">
                    <table className="border-separate border-spacing-y-[2rem] m-[.1rem] w-min">
                        <tbody>
                        {siteData.timeline.map((data, index) => {
                            if (index % 2 === 0) {
                            return (
                                <tr key={index}>
                                <td className="text-[.5rem] w-auto flex justify-end xsm:text-[.7rem]">{data}</td>
                                </tr>
                            );
                            }
                            return null;
                        })}
                        </tbody>
                    </table>

                    <hr className="h-[100%] w-[1px] bg-primary border-none" />

                    <table className="mt-[1.5rem] border-separate border-spacing-y-[2rem] table-auto w-min m-[.1rem] ">
                        <tbody>
                        {siteData.timeline.map((data, index) => {
                            if (index % 2 !== 0) {
                            return (
                                <tr key={index}>
                                <td className="text-[.5rem] w-auto flex justify-start xsm:text-[.7rem]">{data}</td>
                                </tr>
                            );
                            }
                            return null;
                        })}
                        </tbody>
                    </table>
                </div>

                











                <div className='flex items-center flex-col med:flex-row med:items-start med:mt-4 '>
                    <div className=''>
                        <div className="m-2 bg-secondary min-w-[10rem] max-w-[25rem] border-solid border-primary text-center rounded-[1rem] border-[.1rem] flex flex-col overflow-hidden h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] ">
                            <h1 className='p-1 text-[1.5rem]'>My Journey</h1> 
                            <div className=' flex flex-col items-center'>
                                <img src={profilegreen} alt="Profile Green" className="w-[7rem] h-[7rem] rounded-full mb-3 mt-5" />
                                <p className='p-2 mt-1 min-w-[10rem] max-w-[25rem] flex text-[.7rem] justify-center'>My journey into technology began at the Bronx Academy for Software Engineering, where my curiosity transformed into hands-on experience through web development internships. From my first day of school to my high school graduation in 2023, each milestone deepened my understanding and fueled my goal of becoming a software engineer—whether mastering statistics or coding syntax. In 2024, I officially launched my career and am now building on my skills before pursuing a related degree at LaGuardia Community College. Beyond coding, I balance my technical passion with skateboarding, volleyball, and gaming, blending active and creative pursuits.</p>                  
                            </div>
                            
                        </div>
                        <div className="med:flex hidden m-2 bg-secondary min-w-[10rem] max-w-[25rem] border-solid border-primary text-center rounded-[1rem] border-[.1rem]  flex-col overflow-hidden h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] ">
                            <h1 className='p-1 text-[1.5rem]'>Games</h1> 
                            
                        </div>
                    </div>
                    
                    <div>
                        <div className="m-2 bg-secondary min-w-[10rem] max-w-[25rem] border-solid border-primary text-center rounded-[1rem] border-[.1rem] flex flex-col overflow-hidden h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] ">
                            <h1 className='p-1 text-[1.5rem]'>My Skills</h1> 
                            <p className='p-2 mt-1 min-w-[10rem] max-w-[25rem] flex text-[.7rem] justify-center'>Throughout my programming journey, I have dedicated countless hours to learning, experimenting, and honing my skills in various areas of technology and development. This experience has not only expanded my technical capabilities but has also instilled a deep passion for problem-solving and innovation. Below is a comprehensive overview of the key skills I have acquired.</p>
                            

                            <div className='w-full flex justify-center items-center gap-[.3rem] sml:hidden mb-2 mx-1 '>
                                <Dropdown placeHolder='Front-End Development' options={['frontend', 'backend','other']} className=''/>
                                <Dropdown placeHolder='Back-End Development' options={['frontend', 'backend','other']} className=''/>
                                <Dropdown placeHolder='DevOps & Deployment' options={['frontend', 'backend','other']} className=''/>
                                <Dropdown placeHolder='Quality Assurance' options={['frontend', 'backend','other']} className=''/>
                            </div>
                            




                            <table className='hidden sml:inline text-[.7rem] border-separate border-spacing-x-[.5rem] border-spacing-y-[.7rem] '>
                                <th><button className=' bg-tertiary rounded-md p-[.1rem] border-solid border-primary shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] border-[1px]'>Front-End Development</button></th>
                                <th><button className=' bg-tertiary rounded-md p-[.1rem] border-solid border-primary shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] border-[1px]'>Back-End Development</button></th>
                                <th><button className=' bg-tertiary rounded-md p-[.1rem] border-solid border-primary shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] border-[1px]'>DevOps & Deployment</button></th>
                                <th><button className=' bg-tertiary rounded-md p-[.1rem] border-solid border-primary shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] border-[1px]'>Testing & Quality Assurance</button></th>
                                


                                
                                <tr>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>Languages</td>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>Languages</td>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>Version Control</td>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>Frameworks</td>
                                </tr>


                                <tr>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>Frameworks & Libraries</td>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>Frameworks</td>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>Containerization & Virtualization</td>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>End-to-End Testing</td>
                                </tr>

                                <tr>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>Tools</td>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>Databases</td>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>CI/CD Tools</td>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>Frameworks</td>
                                </tr>

                                <tr>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>this is fill</td>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>this is fill</td>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>Cloud Services</td>
                                    <td className='border-solid border-black border-[1px] rounded-lg'>this is fill</td>
                                </tr>

                                <div className='w-full m-2 p-3 justify-center flex h-[200px] border-solid border-black rounded-sm'> display </div>
                                
                                

                                
                            </table>
                        </div>
                        <div className="m-2 bg-secondary min-w-[10rem] max-w-[25rem] border-solid border-primary text-center rounded-[1rem] border-[.1rem] flex flex-col overflow-hidden h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] ">
                            <h1 className='p-1 text-[1.5rem]'>About Me</h1> 
                        </div>
                        <div className="med:hidden m-2 bg-secondary min-w-[10rem] max-w-[25rem] border-solid border-primary text-center rounded-[1rem] border-[.1rem] flex flex-col overflow-hidden h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] ">
                            <h1 className='p-1 text-[1.5rem]'>Games</h1> 
                        </div>
                        <div className="m-2 bg-secondary min-w-[10rem] max-w-[25rem] border-solid border-primary text-center rounded-[1rem] border-[.1rem] flex flex-col overflow-hidden h-auto shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)] ">
                            <h1 className='p-1 text-[1.5rem]'>Music</h1> 
                        </div>
                    </div>
                </div>

            </div>
                
                
                
        </>
    )
}


export default Skills;



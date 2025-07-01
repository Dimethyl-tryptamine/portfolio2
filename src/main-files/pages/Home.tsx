
import '../../index.css'
import Hero from "../components/Hero.tsx"
import FeaturedProjects from '../components/FeaturedProjects.tsx'
import Certifications from '../components/Certifications.tsx';
import Portfolio from '../components/Portfolio.tsx';






function Home() {


    return (
        <div>
                
                
            <Hero />
            
            
            <div className=" p-[.5rem]  m-[1rem] sml:m-[2rem] sml:mt-0 mt-0 overflow-x-hidden ">
                

                <Portfolio />
                <FeaturedProjects />

                <Certifications />


            </div>
                

                

                
                
        </div>
    )
}


export default Home;



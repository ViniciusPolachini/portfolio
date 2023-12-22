import { IPortfolio } from "./interfaces/interfaces"
import Project from "./project/project"

export default function Portfolio({title, projects} : IPortfolio){

    return(
        <div className={`2xl:w-[90vw] w-full bg-light-green-2 xl:mx-[5vw] mt-40 mb-10 flex-col rounded-3xl`} 
        >
            <div className=" inline xl:px-32 py-12 px-20 h-[8rem] bg-dark-green rounded-3xl text-white font-bold xl:text-[200%] text-[150%] relative top-[-2rem] xl:ml-8 ml-[20%]">
                {title}
            </div>
            
            <div className=" w-full flex flex-wrap justify-center" >
                {projects.map((item, index) =>
                    <Project
                    key={index}
                    project={item}
                    />  
                )}
            </div>

        </div>
    )
}
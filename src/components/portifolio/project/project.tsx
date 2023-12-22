import { IProject } from "../interfaces/interfaces";
import Title from "./title";
import Technologies from "./technologies";
import Description from "./description";

export default function Project({project} : {project: IProject}){
    return(
        <div className=" bg-white  h-[50rem] mx-5 my-10 rounded-3xl">
            <div>
            <Title
            title = {project.title}
            image = {project.icon}
            />
            <Technologies
            techs={project.technologies}
            />
            <Description
            description = {project.description}
            />
            </div>
        </div>
    )
}
import {ILinkData} from "../interfaces/interfaces";
import Image from "next/image";
import Link from "next/link";

export default function LinksAndContacts(){
    const links : Array<ILinkData> = [
        {
            url:"https://www.linkedin.com/in/vin%C3%ADcius-polachini-780159195/",
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
        },
        {
            url:"https://github.com/ViniciusPolachini",
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        },
    ]

   

    return(
        <div className="relative flex">
            {links.map((item, index) => 
             <Link key={index} href={item.url} className="p-1 mx-2 xl:border-[2px] border-[1px] border-sold border-light-green-1 rounded-lg">
                <Image
                src={item.icon}
                width={100}
                height={100}
                alt="icon"
                className="xl:w-[4vw] xl:h-[4vw] h-[8vw] w-[8vw] xl:border-[2px] border-[1px] border-sold border-light-green-1 bg-white rounded-lg"
                />
            </Link>
         )}
        </div>
    );
}
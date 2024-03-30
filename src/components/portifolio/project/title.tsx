import Image from "next/image"

export default function Title({title, image}: {title: string, image: string}){
    
    return(
        <div className=" flex-col w-full">
            <div className="w-full flex items-center font-bold pb-2">
                <Image          
                src={image}
                alt="icon"
                width={100}
                height={100}
                className="rounded-3xl m-4"
                />
                <p className="text-[200%]">{title}</p>
            </div>
            <div className="border-b-2 border-dark-green w-[80%] ml-[10%]"></div>
        </div>
    )
}
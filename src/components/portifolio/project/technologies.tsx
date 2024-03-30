import Image from "next/image"

export default function Technologies({techs} : {techs: Array<string>}){
    return(
        <div className=" h-[10%] mt-10 ml-5 w-full items-center flex flex-row">
            <p className="font-bold pb-2 text-[120%]">Tecnologias:</p>
            {
                techs.map((src, index) =>
                    <Image
                    className=" ml-3"
                    key={index}
                    src={src}
                    alt="icon"
                    width={50}
                    height={50}
                    />    
                )
            }
        </div>
    )
}

export default function Description({description} : {description: String}){
    return(
        <div className="m-5">
            <p className="font-bold text-[120%] pb-2">Descrição:</p>
            <p className=" text-justify w-[25vw] min-w-[20rem] text-[100%]">{description}</p>
        </div>
    )
}
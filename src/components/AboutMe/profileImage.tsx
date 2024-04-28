import Image from 'next/image'

export default function ProfileImage(){
    return(
        <div className="p-5 flex items-center justify-center basis-1/4">
        <Image
            src={"/assets/perfil.jpg"}
            alt="myPicture"
            className='shadow-xl shadow-dark-green rounded-[80px]'
            width={200}
            height={200}
            style={{
                width: 'auto',
                height: 'auto'
            }}
        />
        </div>
    );
}
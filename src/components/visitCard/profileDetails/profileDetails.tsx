export default function ProfileDetails(){
    
    function age() {
        const birthdate = new Date("July 20, 2000 01:15:00");
        const today = new Date();
        const age = today.getFullYear() - birthdate.getFullYear() - 
                   (today.getMonth() < birthdate.getMonth() || 
                   (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
        return age;
      }

    return(
        <div className=" w-5/6 2xl:mt-8 mt-4 xl:text-[1.5vw] text-[2vw] flex flex-row items-center justify-between">
            <div className=" xl:border-l-2 border-l-[1px] border-sold border-light-green-1 pl-2">
                <ul>
                    <li>Idade: {age()}</li>
                    <li>Cidade/Estado: Presidente Prudente - SP</li>
                    <li>Formação: Ciências da computação - UNESP</li>
                </ul>
            </div>
            <div className=" xl:border-l-2 border-l-[1px] border-sold border-light-green-1 pl-2">
                <ul>
                    <li>Contatos:</li>
                    <li>Email: vipolachini@uol.com.br</li>
                    <li>Telefone: (11) 95039-8373</li>
                </ul>
            </div>
        </div>
    );
}
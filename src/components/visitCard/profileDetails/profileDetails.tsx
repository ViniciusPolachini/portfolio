export default function ProfileDetails(){
    
    function checkBirthdayAlreadyHappen(birthdate: Date, today: Date): boolean{
        return (today.getMonth() > birthdate.getMonth() || (today.getMonth() == birthdate.getMonth() && today.getDate() >= birthdate.getDate()))
    }

    function age() {
        const birthdate = new Date(2000, 7, 20);
        const today = new Date();
        const age = today.getFullYear() - birthdate.getFullYear() - (checkBirthdayAlreadyHappen(birthdate, today) ? 0:1);
        return age;
      }

    return(
        <div className=" w-5/6 2xl:mt-8 mt-4 xl:text-[1.5vw] text-[2.2vw] flex flex-row items-center justify-between">
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
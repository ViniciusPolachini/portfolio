import TechCarousel from "../techCarousel/techCarousel";
import LinksAndContacts from "../linksAndContacts/linksAndContacts";

export default function MoreDetails(){
    return(
        <div className="p-2 2xl:w-5/6 h-full w-11/12 mt-8 text-2xl flex 2xl:gap-0 gap-4 flex-col items-center justify-between">
        <div>
            <LinksAndContacts/>
        </div>
    </div>
    );
}
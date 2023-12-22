import ProfileTitle from "./profileTitle";
import ProfileDetails from "./profileDetails";
import MoreDetails from "../moreDetails/moreDetails";

export default function ProfileInfo(){
    return(
        <div className="xl:w-[70%]  w-full xl:p-5 p-0 xl:basis-3/4 xl:rounded-tr-3xl rounded-tr-0 xl:rounded-br-3xl rounded-br-0 bg-dark-green flex flex-col items-center text-white font-bold">
            <ProfileTitle/>
            <ProfileDetails/>
            <MoreDetails/>
        </div>
    );
}
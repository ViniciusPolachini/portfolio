import AboutMeText from "./aboutMeText";
import ProfileImage from "./profileImage";
import styles from "./style.module.css";


export default function AboutMe(){
    return(
        <div className="w-full my-20 items-center flex flex-col">
            <div className=" 2xl:w-1/3 w-2/3 items-center flex flex-col">
                <div className={styles.frame2 + " items-center flex flex-col "}>
                    <div className={styles.frame + " items-center flex flex-col "}>
                        <ProfileImage/>
                        <AboutMeText/>
                        <span className={styles.frame_btn}></span>
                    </div>
                    <span className={styles.frame2_btn}></span>
                </div>
            </div>
        </div>
    );
}
import Headshot from "./Headshot";
import style from "../../css/people.module.css";
import {BsEnvelopeFill} from "react-icons/bs";

export default function ProfileCard({id, name, role, contact}) {
    return (
        <div className={style.profileCard}>
            <Headshot id={id} />
            <div className={style.profileInfo}>
                <div className={style.profileTitle}>
                    {name}
                </div>
                <div className={style.profileDesc}>
                    {role}
                </div>
                 <div className={style.contact}>
                     {contact !== null ? (
                         <a href={`mailto:${contact}`}>
                             <BsEnvelopeFill/> &nbsp; {contact}
                         </a>
                     ) : (
                         <>
                            <BsEnvelopeFill/> &nbsp; (-)
                         </>
                     )}
                 </div>
            </div>
        </div>
    );
}
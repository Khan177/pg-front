import React, {useState} from "react";


const UserForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [valueArrow, setvalueArrow] = useState("")

    const toggle = () => {
        if (isOpen) {
            setvalueArrow("scale(1, 1)")
        } else {
            setvalueArrow("scale(1, -1)")
        }
        setIsOpen(!isOpen);
    }
    const infoUser = (
        <div className="all_info_user">
            <p className="all_info_user_text">Полная информация</p>
            <p className="all_info_user_text">Выход</p>
        </div>)
    return (
        <>
            <span style={{marginRight: "20px", transform: "translate(6px, 8px)"}}>
             <p className="profile_name">Алексей Иванов</p>
            <p className="profile_type">АДМИНИСТРАТОР</p>
         </span>
            <span className="img_profile" onClick={toggle}>
                    <img className="img_profile_photo"
                         src={require("../../../img/partners/bx-anchor.svg")} alt=""/>
                    <span className="arrowDown" style={{transform: valueArrow}}/>
                {isOpen && infoUser}
        </span>
        </>
    )
}
export default UserForm
import {useState} from "react";
import UserService from "../../../../services/UserService";


function Settings(){
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");


    const handleChange = () => {
            UserService.changePassword(oldPassword, newPassword);
    }


    return (
        <div className="__profile_data_component">
            <div className="__search_component _change_password">
                <p className="profile_label">
                    Change password
                </p>
                <input type="password" placeholder="Old password" className="input_label" onChange={(e)=> setOldPassword(e.target.value)}/>
                <input type="password" placeholder="New password" onChange={(e)=> setNewPassword(e.target.value)}/>
                <p className="hint">
                    Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.
                </p>
                <div className="_logout_button w-25" onClick={handleChange}>Change password</div>
            </div>
        </div>
    )
}

export default Settings
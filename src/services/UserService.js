import LocalStorageService from "./LocalStorageService";
import axios from "axios";
import server from "../constants/server";


class UserService {
    userHasRole(role){
        const user = LocalStorageService.getUser();

        for (const r of user.roles){
            if (r.name === role) {
                console.log("ok")
                return true;
            }
        } return false;
    }

    addRole(id, userId) {
        return axios(server.IP + server.PORT + `/API/v1/ADMIN/USER/ADD_ROLE/${id}/${userId}`, {
            method: 'Post',
            headers: {
                'Authorization': `Bearer_${JSON.parse(localStorage.getItem("user")).token}`,
                'Content-Type': 'application/json',
                'X-My-Custom-Header': 'value-v',
            },
        }).then(res => {
            alert("Updated")
        }).catch(e => {
            alert(e.response.status)
        });
    }
    deleteRole(id, userId) {
        return axios(server.IP + server.PORT + `/API/v1/ADMIN/USER/DELETE_ROLE/${id}/${userId}`, {
            method: 'Post',
            headers: {
                'Authorization': `Bearer_${JSON.parse(localStorage.getItem("user")).token}`,
                'Content-Type': 'application/json',
                'X-My-Custom-Header': 'value-v',
            },
        }).then(res => {
            alert("Created")
        }).catch(e => {
            console.log(e)
        });
    }

    delete(id) {
        return axios(server.IP + server.PORT + `/API/v1/ADMIN/USER/DELETE/${id}`, {
            method: 'Post',
            headers: {
                'Authorization': `Bearer_${JSON.parse(localStorage.getItem("user")).token}`,
                'Content-Type': 'application/json',
                'X-My-Custom-Header': 'value-v',
            },
        }).then(res => {
            alert("Updated")
        }).catch(e => {
            console.log(e)
        });
    }

    changePassword(oldPassword, newPassword) {
        return axios(server.IP + server.PORT + `/api/v1/user/CHANGE_PASSWORD`, {
            method: 'Post',
            headers: {
                'Authorization': `Bearer_${JSON.parse(localStorage.getItem("user")).token}`,
                'Content-Type': 'application/json',
                'X-My-Custom-Header': 'value-v',
            },
            data: {
                oldPassword, newPassword
            }
        }).then(res => {
            alert("Your password has been successfully changed")
        }).catch(e => {
            alert(e.response.status + " - Wrong password")
        });
    }
}

export default UserService.prototype
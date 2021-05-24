import axios from "axios";
import server from "../constants/server";


class GenreService {
    create(body) {
        return axios(server.IP + server.PORT + `/api/v1/admin/genre/add`, {
            method: 'Post',
            headers: {
                'Authorization': `Bearer_${JSON.parse(localStorage.getItem("user")).token}`,
                'Content-Type': 'application/json',
                'X-My-Custom-Header': 'value-v',
            },
            data: {
                name: body.name,
            }
        }).then(res => {
            alert("Created")
        }).catch(e => {
            console.log(e)
        });
    }
    update(body, id) {
        console.log(body)
        return axios(server.IP + server.PORT + `/api/v1/admin/genre/update/${id}`, {
            method: 'Post',
            headers: {
                'Authorization': `Bearer_${JSON.parse(localStorage.getItem("user")).token}`,
                'Content-Type': 'application/json',
                'X-My-Custom-Header': 'value-v',
            },
            data: {
                name: body.name
            }
        }).then(res => {
            alert("Updated")
        }).catch(e => {
            console.log(e)
        });
    }
    delete(id) {
        return axios(server.IP + server.PORT + `/api/v1/admin/genre/delete/${id}`, {
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
}

export default GenreService.prototype
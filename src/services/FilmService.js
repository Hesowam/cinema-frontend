import axios from "axios";
import server from "../constants/server";


class FilmService {
    create(body) {
        return axios(server.IP + server.PORT + `/api/v1/admin/film/add`, {
            method: 'Post',
            headers: {
                'Authorization': `Bearer_${JSON.parse(localStorage.getItem("user")).token}`,
                'Content-Type': 'application/json',
                'X-My-Custom-Header': 'value-v',
            },
            data: {
                name: body.name,
                kpkId: body.kpkId,
                trailer: body.trailer,
                poster: body.poster,
                background: body.background,
                description: body.description,
                episodes: body.episodes,
                genresIds: body.genresIds
            }
        }).then(res => {

        }).catch(e => {
            console.log(e)
        });
    }
    update(body, id) {
        console.log(body)
        return axios(server.IP + server.PORT + `/api/v1/admin/film/update/${id}`, {
            method: 'Post',
            headers: {
                'Authorization': `Bearer_${JSON.parse(localStorage.getItem("user")).token}`,
                'Content-Type': 'application/json',
                'X-My-Custom-Header': 'value-v',
            },
            data: {
                name: body.name,
                kpkId: body.kpkId,
                trailer: body.trailer,
                poster: body.poster,
                background: body.background,
                description: body.description,
                episodes: body.episodes,
                genresIds: body.genres
            }
        }).then(res => {
            alert("Updated")
        }).catch(e => {
            console.log(e)
        });
    }

    delete(id) {
        return axios(server.IP + server.PORT + `/api/v1/admin/film/delete/${id}`, {
            method: 'Post',
            headers: {
                'Authorization': `Bearer_${JSON.parse(localStorage.getItem("user")).token}`,
                'Content-Type': 'application/json',
                'X-My-Custom-Header': 'value-v',
            },
        }).then(res => {
            alert("Updated")
        }).catch(e => {
            alert(e.response ? "Error" + e.response.status : "Error")
        });
    }
}

export default FilmService.prototype
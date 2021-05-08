import axios from "axios";

const server = require('../constants/server.js')

class FilmService {
    getAll() {
        return axios( server.IP + server.PORT + server.DEFAULT_PATH + server.routes.open.path + server.routes.open.film.path + server.routes.open.film.all, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                withCredentials: true,
            },
        } ).then(res => {
            if ( res.data ) {
                return res.data
            }
        }).catch(e => {console.log(e)});
    }
}

export default FilmService.prototype
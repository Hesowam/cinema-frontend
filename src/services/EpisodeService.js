import axios from "axios";
import server from "../constants/server";


class EpisodeService {
    add(body, id) {
        return axios(server.IP + server.PORT + `/api/v1/admin/episode/add/${id}`, {
            method: 'Post',
            headers: {
                'Authorization': `Bearer_${JSON.parse(localStorage.getItem("user")).token}`,
                'Content-Type': 'application/json',
                'X-My-Custom-Header': 'value-v',
            },
            data: {
                src: body.src,
                number: body.number
            }
        }).then(res => {

        }).catch(e => {
            console.log(e)
        });
    }
}

export default EpisodeService.prototype
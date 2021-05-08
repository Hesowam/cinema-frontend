import axios from "axios";

const server = require('../constants/server.js')

class AuthenticationService {
    login(username, password) {
        console.log(server)
        return axios( server.IP + server.PORT + server.DEFAULT_PATH + server.routes.authorization.login, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                withCredentials: true,
            },
            data: {
                username: username,
                password: password,
            }
        } ).then(res => {
            if ( res.data.token ) {
                console.log(res.data)
                localStorage.setItem( "user", JSON.stringify(res.data) );
            }
        }).catch(e => {console.log(e)});
    }
}

export default AuthenticationService.prototype
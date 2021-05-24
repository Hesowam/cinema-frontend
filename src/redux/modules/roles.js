import axios from "axios";
import ServerException from "../../exceptions/ServerException";

const SERVER_CONFIG = require('../../constants/server')

const moduleName = 'roles';

const GET_ALL_ROLES = `${moduleName}/GET_ALL_ROLES`;


const defaultState = {
    roles: []
};

/*
    { type: ACTION, payload: [] }
 */
export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case GET_ALL_ROLES:
            return {...state, roles: payload};
        default:
            return state;
    }
};

export const getRoles = () => async (dispatch) => {
    axios(SERVER_CONFIG.IP + SERVER_CONFIG.PORT + "/api/v1/admin/role/get", {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer_${JSON.parse(localStorage.getItem("user")).token}`,
            withCredentials: true,
        },
    }).then(({data}) => dispatch({type: GET_ALL_ROLES, payload: data})).catch(error =>
        console.log(error))
}
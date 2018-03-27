import {apiRoute} from "../config/routes";
import {checkAuthResponse, getAuthHeaders} from 'ebm-auth/dist/browser';


export function refreshToken() {
    return function (dispatch) {
        dispatch({type: "GET_TOKEN"});


        const url = `${apiRoute.linkapp}checkandrefreshtoken`;


        var myInit = {
            method: 'GET',
            headers: getAuthHeaders(),
            mode: 'cors',
            cache: 'default'
        }


        fetch(url, myInit)
            .then(checkAuthResponse)
            .then(function (response) {
                dispatch({type: "GET_TOKEN", payload: response.json().token})
            })
            .catch((err) => {
                dispatch({type: "GET_PROMOS", payload: err})
            })
    }
}

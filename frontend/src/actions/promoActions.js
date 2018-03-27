import {apiRoute} from "../config/routes";
import {checkAuthResponse, getAuthHeaders} from 'ebm-auth/dist/browser';

export function getPromos() {
    return function (dispatch) {
        dispatch({type: "GET_PROMOS"});


        const url = `${apiRoute.linkapp}promos/listpromos`;


        var myInit = {
            method: 'GET',
            headers: Object.assign({}, getAuthHeaders(), {'Accept': 'application/json, text/plain, */*' , 'Content-Type': 'application/json'}),
            mode: 'cors',
            cache: 'default'
        }


        fetch(url, myInit)
            .then(checkAuthResponse)
            .then(function (response) {
                dispatch({type: "GET_PROMOS", payload: response.json()})
            })
            .catch((err) => {
                dispatch({type: "GET_PROMOS", payload: err})
            })
    }
}

import {apiRoute, testTokenProf} from "../config/routes";

export function refreshToken() {
    return function (dispatch) {
        dispatch({type: "GET_TOKEN"});


        const url = `${apiRoute.linkapp}checkandrefreshtoken`;


        var myInit = {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': testTokenProf.access_token,
            },
            mode: 'cors',
            cache: 'default'
        }


        fetch(url, myInit)
            .then(function (response) {
                dispatch({type: "GET_TOKEN", payload: response.json().token})
            })
            .catch((err) => {
                dispatch({type: "GET_PROMOS", payload: err})
            })
    }
}

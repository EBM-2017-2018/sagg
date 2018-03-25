import {apiRoute, testTokenProf} from "../config/routes";

export function getPromos() {
    return function (dispatch) {
        dispatch({type: "GET_PROMOS"});


        const url = `${apiRoute.linkapp}promos/listpromos`;


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
                dispatch({type: "GET_PROMOS", payload: response.json()})
            })
            .catch((err) => {
                dispatch({type: "GET_PROMOS", payload: err})
            })
    }
}

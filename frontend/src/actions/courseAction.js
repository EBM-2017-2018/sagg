import {apiRoute, testTokenProf} from "../config/routes";

export function saveCourse(promoId, course) {
    return function (dispatch) {
        dispatch({type: "SAVE_COURSE"});


        const url = `${apiRoute.sagg}promos/${promoId}/courses`;


        var myInit = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': testTokenProf.access_token
            },
            mode: 'cors',
            cache: 'default',
            body: course
        }


        fetch(url, myInit)
            .then(function (response) {
                dispatch({type: "SAVE_COURSE", payload: response.json()})
            })
            .catch((err) => {
                dispatch({type: "SAVE_COURSE", payload: err})
            })
    }
}


export function changeInput(name, value) {
    return {
        type: "INPUT_CHANGE",
        name : name,
        value: value
    }
}



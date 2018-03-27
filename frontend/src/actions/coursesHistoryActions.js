import {apiRoute} from "../config/routes";
import {checkAuthResponse, getAuthHeaders} from 'ebm-auth/dist/browser';

export function getCoursesHistory(promoId) {
    return function (dispatch) {
        ;
        fetch(`${apiRoute.sagg}promos/${promoId}/courses`, {
            method: 'GET',
            headers: getAuthHeaders()
        })
            .then(checkAuthResponse)
            .then(response => dispatch({type: "GET_COURSES_HISTORY", payload: response.json(), meta: {promoId}}))
            .catch(error => dispatch({type: "GET_COURSES_HISTORY", payload: error}))

    }
}

export function getListOfPromos() {
    return function (dispatch) {
        fetch(`${apiRoute.linkapp}promos/listpromoofresponsable`, {
            method: 'GET',
            headers: getAuthHeaders()
        })

            .then(checkAuthResponse)

            .then(response => dispatch({type: "GET_LIST_OF_PROMOS", payload: response.json()}))
            .catch(error => dispatch({type: "GET_LIST_OF_PROMOS", payload: error}))
    }
}

export function changePromo(promoId) {
    return {
        type: "PROMO_CHANGE",
        promoId
    }
}

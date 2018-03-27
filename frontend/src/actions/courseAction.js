import {apiRoute} from "../config/routes";
import {checkAuthResponse, getAuthHeaders} from 'ebm-auth/dist/browser';
import {format} from "date-fns";

export function saveCourse(promoId, course) {
    return function (dispatch) {
        dispatch({type: "SAVE_COURSE"});

        const formattedStartHour = format(course.startHour, "HH:mm:ssZ")
        const formattedEndHour = format(course.endHour, "HH:mm:ssZ")
        const body = {
            title: course.name,
            teacher: course.teacher,
            start_time: `${course.date}T${formattedStartHour}`,
            end_time: `${course.date}T${formattedEndHour}`,
        }


        const url = `${apiRoute.sagg}promos/${promoId}/courses`;


        var myInit = {
            method: 'POST',
            headers: getAuthHeaders(),
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body)
        }


        fetch(url, myInit)
            .then(checkAuthResponse)
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
        name: name,
        value: value
    }
}



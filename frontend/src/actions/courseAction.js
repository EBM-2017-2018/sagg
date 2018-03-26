import {apiRoute, testTokenProf} from "../config/routes";
import {format} from "date-fns";

export function saveCourse(promoId, course) {
    return function (dispatch) {
        dispatch({type: "SAVE_COURSE"});

        const formattedStartHour = format(course.startHour, "HH:mm:ssZ")
        const formattedEndHour = format(course.endHour, "HH:mm:ssZ")
        const body = {
            title : course.name,
            teacher: course.teacher,
            start_time: `${course.date}T${formattedStartHour}`,
            end_time: `${course.date}T${formattedEndHour}`,
        }


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
            body: JSON.stringify(body)
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



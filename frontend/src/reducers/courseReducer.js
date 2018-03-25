const defaultState = {
    course: {
        name: '',
        teacher: '',
        promo: '',
        date: null,
        startHour: null,
        endHour: null
    },
    fetching: false,
    fetched: false,
    error: null,
}


export default function reducer(state=defaultState, action) {

    switch (action.type) {
        case "INPUT_CHANGE" :

            return {...state, course: {...state.course, [action.name]:action.value}}
            break;

        case "SAVE_COURSE": {
            return {...state, fetching: true}
        }

        case "SAVE_COURSE_FULFILLED": {
            return {...state, fetching: true, course: action.payload}
            break;
        }
        case "SAVE_COURSE_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        default :
            return state;
    }


}


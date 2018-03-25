const defaultState = {
    promos: [],
    error: null
}


export default function reducer(state=defaultState, action) {

    switch (action.type) {

        case "GET_PROMOS": {
            return {...state, fetching: true}
        }

        case "GET_PROMOS_FULFILLED": {
            console.log(action.payload)
            return {...state, fetching: true, promos: action.payload.promotions}
            break;
        }
        case "GET_PROMOS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
    }

    return state
}


const defaultState = {
    token: '',
    fetching: null,
    error: null
}


export default function reducer(state=defaultState, action) {

    switch (action.type) {

        case "GET_TOKEN": {
            return {...state, fetching: true}
        }

        case "GET_TOKEN_FULFILLED": {
            console.log(action.payload)
            return {...state, fetching: true, token: action.payload}
            break;
        }
        case "GET_TOKEN_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
    }

    return state
}



const intialState = {
    name: '',
    isFetching: false,
    error: ''
}

export const smurfReducer = (state = intialState, action) => {
    switch(action.type) {
        case 'GET_SMURFS': 
        console.log('getting smurfy', state.smurfs)
        return {
            ...state,
            isFetching: false,
            name: action.payload
        }
        default: 
         return state;
    }
}
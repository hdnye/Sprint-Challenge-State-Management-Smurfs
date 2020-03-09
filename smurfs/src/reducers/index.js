
const intialState = {
    smurfs: [], 
    isFetching: false
}
    

export const smurfReducer = (state = intialState, action) => {
    switch(action.type) {
        case 'GET_SMURFS': 
        console.log('getting smurfy', state.smurfs)
        return {
            ...state, 
            isFetching: true,
            
        }
        default: 
         return state;
    }
}
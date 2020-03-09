


const intialState = {
   smurfs: [],
    addSmurfs: false,
    getSmurfs: false,
    deleteSmurfs: false,
    error: null
}

export const smurfReducer = (state = intialState, action) => {
    switch(action.type) {
        case 'GET_SMURFS': 
        console.log('getting smurfy', state.smurfs)
        return {
            ...state,
            getSmurfs: action.payload
     }
     case 'ADD_SMURFS':
        return {
            ...state,
            addSmurfs: true
     }
     case 'DELETE_SMURFS':
         return {
             ...state,
             deleteSmurfs: true
         }

        default: 
         return state;
    }
}
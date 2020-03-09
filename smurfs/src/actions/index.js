import axios from 'axios';
export const GOT_SMURFS = 'GOT_SMURFS';
export const DELETE_SMURFS = 'DELETE_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';


    export const getSmurfs = () => dispatch => {
        dispatch ({
            type: 'GET_SMURFS'
         })
         axios
         .get('http://localhost:3333/smurfs/get')
         .then(res => {
             console.log('res', res)
             dispatch({
                 type: 'GET_SMURFS',
                 payload: res.data
             })
         })
         .catch(err => {
             console.log('err', err);
             dispatch({
                 type: 'ERROR',
                 payload: err
             });
             
         })
    }

    export const deleteSmurfs = deleteSmurf => {
        return {
        type: 'DELETE_SMURFS', 
        payload: deleteSmurf
    };
} 

export const addSmurf = () => dispatch => {
        dispatch ({ type: 'ADD_SMURF'})
        axios
        .post('http://localhost:3333/smurfs/post')
        .then(res => {
          dispatch({
            type: 'ADD_SMURF', 
            payload: res.addSmurf
        })
    })
    .catch(err => {
         dispatch({
            type: 'ERROR',
            payload: err
    });
  })
}
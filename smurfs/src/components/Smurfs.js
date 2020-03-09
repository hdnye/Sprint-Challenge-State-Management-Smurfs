import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';


class Smurfs extends React.Component {
    state = {
        newSmurf: ''
    };
render() {
    return (
        <React.Fragment>
            <div className='smurflist'>



            </div>


        </React.Fragment>

   )
  }
}

export default connect()(Smurfs);
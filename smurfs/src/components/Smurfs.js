import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';


const Smurfs = (props) => {
    
    return (
            <div className='smurflist'>
                {props.smurfs.map((smurf, id) => 
                   <h3 key={id}>
                       {smurf.name}
                       {smurf.age}
                       {smurf.height}
                    </h3>
                  )}
            </div>
    )
  }              
              
      
 
                 
              
    

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    };
};

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
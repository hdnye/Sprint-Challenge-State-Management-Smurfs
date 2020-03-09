import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: '',
        id: new Date()
    }

    handleInputChange = e => {
        e.preventDefault();
        this.setState({...this.state, [e.target.name]: e.target.value });
    };

    
render() {
    return (
        <form>
            <input 
               type='text'
               name='name'
               placeholder='Name'
               value={this.state.name}
               onChange={this.handleInputChange}
              />
            <input 
               type='text'
               name='age'
               placeholder='Age'
               value={this.state.age}
               onChange={this.handleInputChange}
              />  
            <input 
               type='text'
               name='height'
               placeholder='height'
               value={this.state.height}
               onChange={this.handleInputChange}
              />  
            <button type='submit' onClick={() => this.props.addSmurf()}>
                  Add Smurf 
            </button>      
        </form>
    );
  }
}

const mapStateToProps = state => {
    return {
       addSmurf: state.addSmurf 
    };    
  };

  export default connect(mapStateToProps, { addSmurf })(SmurfForm);
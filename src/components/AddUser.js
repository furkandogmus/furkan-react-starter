import React, { Component } from 'react';
import posed from 'react-pose';

const Animation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart : {
            display : "block"
        }
    },
    hidden:{
        opacity: 0,
        applyAtEnd : {
            display : "none"
        }
    }
});

 class AddUser extends Component {
    state = {
        visible : true
    }
    changeVisibility = (e) =>{
        this.setState({
            visible: !this.state.visible
        })
    }
    render() {
        const {visible} = this.state;
    return (
      <div className='col-md-8 mb-4'>
        <button onClick={this.changeVisibility} className='btn btn-dark w-100 mb-2'>{visible ? "Hide Form" : "Show Form"}</button>
        <Animation pose={visible? "visible" : "hidden"}>
        <div className='card'>
        <div className='card-header'>
            <h4>Add User Form</h4>
        </div>
        <div className='card-body'>
            <form>
                <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='id' placeholder='Enter Name' className='form-control'/>
                </div>
                <div className='form-group'>
                <label htmlFor='department'>Department</label>
                <input type='text' name='department' id='department' placeholder='Enter Department' className='form-control'/>
                </div>
                <div className='form-group'>
                <label htmlFor='School'>School</label>
                <input type='text' name='school' id='school' placeholder='Enter School' className='form-control'/>
                </div>
                <button type='submit' className='btn btn-danger w-100'>Add User</button>
            
            </form>
        </div>
        </div>
        </Animation>
        </div>
      
    )
  }
}
export default AddUser;
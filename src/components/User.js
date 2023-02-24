import React, { Component } from 'react'
import UserConsumer from '../context'; 
class User extends Component {
state = {
    isVisible: false
}

onClickEvent = (e) =>{
    this.setState({
        isVisible: !this.state.isVisible
    }
    )
}

onDeleteUser = (dispatch,e) =>{
    const {id} = this.props;
    dispatch({type:"DELETE_USER",payload:id})
}
  
render() {
    const {name,department,school} = this.props;
    const {isVisible} = this.state;
    return <UserConsumer>
        {
            value =>{
                const {dispatch} = value;
                 return (
        <div className='col-md-8 mb-4'>
      <div className='card'>
        <div className='card-header d-flex justify-content-between'>
          <h4 className='d-inline' onClick={this.onClickEvent}> {name} </h4>
          <span style={{cursor:"pointer", backgroundColor:"red",display:"flex",width:"100px",height:"100px"}} onClick = {this.onDeleteUser.bind(this,dispatch)}></span>
        </div>
        {
            isVisible ? <div className='card-body '>
            <p className='card-text'>Department: {department}</p>
            <p className='card-text'>School: {school} Üniversitesi</p>
            
            </div>
            : null     

        }
        </div>
    </div>
    )
            }
        }
    </UserConsumer>
   
  }
}
export default User;
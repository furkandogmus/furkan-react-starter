import React, { Component } from 'react'

const UserContext = React.createContext();
// Provider and Consumer
const reducer = (state,action) =>{
    switch(action.type){
        case "DELETE_USER":
            return {
                
                ...state,
                users: state.users.filter(user =>action.payload !== user.id)
            }
        default:
            return state;
    }
}


export class UserProvider extends Component {
    state = {
        users:[
          {
            id: 1,
            name: "Furkan Doğmuş",
            department: "CS",
            school: "Hacettepe"
          },
          {
            id: 2,
            name: "Mehmet",
            department: "EE",
            school: "Hacettepe"
          },
          {
            id: 3,
            name: "KAĞAN",
            department: "FIZIK",
            school: "Hacettepe"
          }
        ],
        dispatch: action =>{
            this.setState(state =>reducer(state,action));
        }
      }
  render() {
    return (
      <UserContext.Provider value = {this.state}>
    {this.props.children}
      </UserContext.Provider>
    )
  }
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;
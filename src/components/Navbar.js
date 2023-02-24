import React from 'react'

const Navbar = (props) => {
  return (
    <div>{props.title}</div>
  )
}
Navbar.defaultProps = {
    title : "Default App"
}
export default Navbar;

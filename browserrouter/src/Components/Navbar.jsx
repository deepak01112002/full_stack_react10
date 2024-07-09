import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div>
        {/* <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to={"/cart"}>Cart</Link> */}
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/product" activeClassName="active">Product</NavLink>
        <NavLink to={"/cart"} activeClassName="active">Cart</NavLink>
    </div>
  )
}

export default Navbar
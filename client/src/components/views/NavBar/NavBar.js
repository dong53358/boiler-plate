import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>
    </div>
  );
}

export default NavBar;

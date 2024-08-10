import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Header(){
  return(
    <header>
      <div id="companyBranding">
        <NavLink to={"/"} >EventPulse</NavLink>
      </div>
      <nav id="navBar">
        <NavLink to={"/login"} >Login</NavLink>
        <TextField id="standard-basic" label="Find an Event" variant="standard" />
      </nav>
    </header>
  )
}

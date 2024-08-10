import { useState } from "react";
import { useUserDispatch } from "../contexts/UserContext";
import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");

  const { makeLoginRequest } = useUserDispatch();

  return (
    <>
      <TextField
        id="formEmail"
        label="Email"
        variant="outlined"
        value={formEmail}
        onChange={(event) => setFormEmail(event.target.value)}
      />
      <TextField
        id="formPassword"
        label="Password"
        variant="outlined"
        type="password"
        value={formPassword}
        onChange={(event) => setFormPassword(event.target.value)}
      />

      <Button
        variant="contained"
        onClick={() => makeLoginRequest(formEmail, formPassword)}
      >
        Login
      </Button>
      <p>Don't have an account?</p>
      <NavLink to="/signup">click here</NavLink>
    </>
  );
}


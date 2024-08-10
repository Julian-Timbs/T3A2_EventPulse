import { createContext, useContext, useState } from "react";

const UserDataContext = createContext(null);
const UserDispatchContext = createContext(null);

export function useUserData() {
  return useContext(UserDataContext);
}

export function useUserDispatch() {
  return useContext(UserDispatchContext);
}

export default function UserProvider({ children }) {
  const [userJwt, setUserJwt] = useState("");

  const [decodedUserJwt, setDecodedUserJwt] = useState({});

  const makeSignupRequest = async (
    name,
    email,
    password,
    location,
    preferences,
  ) => {
    let bodyData = { name, email, password, location, preferences };
    console.log("Body data to send is: ");
    console.log(bodyData);
    let signUpResult = await fetch("http://localhost:3000/accounts/", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => console.error(error));

    signUpResult = await signUpResult.json();

    console.log("Sign up result is: " + JSON.stringify(signUpResult));

    setUserJwt(signUpResult.jwt);
    setDecodedUserJwt(signUpResult.decodedJwt);
  };

  const makeLoginRequest = async (email, password) => {
    let bodyData = { email, password };
    console.log(bodyData)
    let loginResult = await fetch("http://localhost:3000/accounts/auth", {
      method: "POST",
      body:  JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json",
      }
    });
    
  loginResult = await loginResult.json();

    console.log("Login result is: " + JSON.stringify(loginResult));

    setUserJwt(loginResult.jwt);
    setDecodedUserJwt(loginResult.decodedUserJwt);
  };

  return (
    <UserDataContext.Provider value={{ userJwt, decodedUserJwt }}>
      <UserDispatchContext.Provider
        value={{
          makeSignupRequest,
          makeLoginRequest,
        }}
      >
        {children}
      </UserDispatchContext.Provider>
    </UserDataContext.Provider>
  );
}

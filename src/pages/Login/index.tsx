import React from "react";
import { login } from "../../services";

const Login = () => {
  const [email, setEmail] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");

  const buttonLogin = async () => {
    const body = {
      email: email,
      password: password
    };

    const response = await login(body);
    localStorage.setItem("token", response.token);
    console.log(localStorage.getItem("token"));
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)} />

      <button onClick={() => { buttonLogin(); }}>
        Login
      </button>

    </div>
  );
}

export default Login;
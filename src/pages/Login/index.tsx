import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { login } from "../../services/auth";

const Login = () => {
  const [email, setEmail] = React.useState<any>("");
  const [password, setPassword] = React.useState<any>("");

  const buttonLogin = async () => {
    const body = {
      email: email,
      password: password
    };

    const response = await login(body);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("name", response.data.name);
    localStorage.setItem("user_id", response.data.id);
    window.location.href = "/";
  }

  return (
    <div>
      <Navbar />

      <div className="page-content">
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={() => { buttonLogin(); }}>
          Login
        </button>
      </div>

    </div>
  );
}

export default Login;
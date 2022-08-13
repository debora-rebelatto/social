import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { register } from "../../services/auth";

const Register = () => {
  const [form, setForm] = React.useState<any>({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });

  const [error, setError] = React.useState<any>('');

  const buttonRegister = async () => {
    if (form.password !== form.passwordConfirmation) {
      setError("Passwords do not match");
    } else {
      setError("");
      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
      };
      const response = await register(body);

      if(response.status === 200) {
        setError("");
      } else {
        setError(response.data);
      }
    }
  }


  return (
    <div>
      <Navbar />
      <div className="page-content">
        <h1>Register</h1>
        <p> {error} </p>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="passwordConfirmation">Password Confirmation</label>
          <input
            id="passwordConfirmation"
            type="password"
            placeholder="Password Confirmation"
            value={form.passwordConfirmation}
            onChange={(e) => setForm({ ...form, passwordConfirmation: e.target.value })}
          />
        </div>

        <button onClick={() => { buttonRegister(); }}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
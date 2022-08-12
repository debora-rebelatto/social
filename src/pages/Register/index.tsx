import React from "react";
import { register } from "../../services";
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
      <h1>Register</h1>
      {/* <form> */}
        <p> {error} </p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password Confirmation"
          value={form.passwordConfirmation}
          onChange={(e) => setForm({ ...form, passwordConfirmation: e.target.value })}
        />
        <button onClick={() => { buttonRegister(); }}>
          Register
        </button>
      {/* </form> */}

    </div>
  );
}

export default Register;
import { useState } from "react";

function LoginForm({ Login, error }: any) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="text"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
          <div className="form-group">
            <label htmlFor="email" className="email" id="email">
              Email:
            </label>
            <input
              type="email"
              className="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <div className="from-group">
            <label className="password">Password:</label>
            <input
              type="password"
              className="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <input type="submit" className="submit" value="LOGIN" />
        </div>
      </div>
    </form>
  );
}

export default LoginForm;

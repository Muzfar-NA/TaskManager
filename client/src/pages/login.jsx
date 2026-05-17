import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 const handleLogin = async () => {

  try {

    const response = await axios.post(
      "http://localhost:5000/login",
      {
        email,
        password,
      }
    );

    console.log(response.data);
    localStorage.setItem(
  "token",
  response.data.token
);
    navigate("/dashboard");

  } catch (error) {

    console.log(error);

  }

};

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">

        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
  onClick={handleLogin}
  className="w-full bg-blue-500 text-white p-3 rounded"
>
  Login
</button>

      </div>
    </div>
  );
}

export default Login;
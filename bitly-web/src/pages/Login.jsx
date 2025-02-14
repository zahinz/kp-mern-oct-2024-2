import { useForm } from "react-hook-form";
import { loginUser } from "../utils/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleNewUser = () => {
    navigate("/register");
  };

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      setResponse(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-2">
      <h1>Login</h1>
      <form className="w-1/3 space-y-1" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword">Username or Email</label>
          <input type="text" id="username" {...register("identifier")} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
        </div>

        <button type="submit" className="w-full">
          Login
        </button>
        <button
          type="button"
          className="outline w-full mt-2"
          onClick={handleNewUser}
        >
          New User? Register
        </button>
      </form>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}

export default Login;

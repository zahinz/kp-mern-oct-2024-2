import { useForm } from "react-hook-form";
import { registerUser } from "../utils/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register, handleSubmit } = useForm();
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data);
      setResponse(response);
      // navigate to login page
    } catch (error) {
      console.error(error);
      // show error message
    }
  };

  const handleExistingUser = () => {
    navigate("/login");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-2">
      <h1>Register</h1>
      <form className="w-1/3 space-y-1" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword">Username</label>
          <input type="text" id="username" {...register("user_name")} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
        </div>

        <button type="submit" className="w-full">
          Register
        </button>
        <button
          type="button"
          className="outline w-full mt-2"
          onClick={handleExistingUser}
        >
          Existing User? Login
        </button>
      </form>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}

export default Register;

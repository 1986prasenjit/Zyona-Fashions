import { useState } from "react";
import { Button, Input } from "../../components";

function Login() {
  const [currentState, setCurrentState] = useState("Login");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[90%] items-center sm:max-w-96 m-auto mt-14 gap-4 text-gray-700"
      >
        <div className="flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currentState === "Login" ? (
          ""
        ) : (
          <Input placeholder="Name" type="text" required />
        )}
        <Input placeholder="Email" type="email" required />
        <Input placeholder="Password" type="password" required />
        <div className="flex items-center justify-between w-full">
          <p className="cursor-pointer text-sm">Forgot Password</p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="text-sm cursor-pointer"
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="text-sm cursor-pointer"
            >
              Login
            </p>
          )}
        </div>
        <div>
          <Button children="Submit" buttonType={"danger"} />
        </div>
      </form>
    </>
  );
}

export default Login;

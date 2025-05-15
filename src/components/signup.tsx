import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function signup() {
    const username = usernameRef.current?.value;
    const firstname = firstnameRef.current?.value;
    const lastname = lastnameRef.current?.value;
    const password = passwordRef.current?.value;

    await axios
      .post("http://localhost:3000/user/signup", {
        username,
        firstname,
        lastname,
        password,
      })
      .then((response) => {
        alert(response.status);
        RedirectLogin();
      });
  }

  function RedirectLogin() {
    navigate("/Signin");
  }
  return (
    <>
      <div className="bg-gray-400 h-screen flex justify-center items-center ">
        <div className="bg-white h-[80%] w-90 rounded-xl flex flex-col justify-evenly items-center py-6">
          <div className="flex flex-col justify-center items-center ">
            <div className="text-3xl text-black font-bold">Sign Up</div>
            <div className="text-gray-400 text-center text-wrap">
              Enter your information to create an <br></br>account
            </div>
          </div>
          <div className="flex flex-col mb-3 mt-4">
            First Name
            <div>
              <input
                type="text"
                placeholder="John"
                className="border-2 border-gray-500 rounded-md px-2 w-80 py-2"
                ref={firstnameRef}
              ></input>
            </div>
          </div>
          <div className="flex flex-col my-3">
            Last Name
            <div>
              <input
                type="text"
                placeholder="Doe"
                className="border-2 border-gray-500 rounded-md px-2 w-80 py-2"
                ref={lastnameRef}
              ></input>
            </div>
          </div>
          <div className="flex flex-col my-3">
            Email
            <div>
              <input
                type="text"
                placeholder="johnDoe@gmail.com"
                className="border-2 border-gray-500 rounded-md px-2 w-80 py-2"
                ref={usernameRef}
              ></input>
            </div>
          </div>
          <div className="flex flex-col my-3">
            Password
            <div>
              <input
                type="Password"
                placeholder=""
                className="border-2 border-gray-500 rounded-md px-2 w-80 py-2"
                ref={passwordRef}
              ></input>
            </div>
          </div>
          <div>
            <button
              className="text-white bg-black w-80 px-1.5 py-2 rounded-md"
              onClick={signup}
            >
              Sign Up
            </button>
          </div>
          <div className="my-4">
            Already have an account?{" "}
            <a
              className=" underline underline-offset-1 cursor-pointer hover:text-blue-600"
              onClick={RedirectLogin}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

import { useRef } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios"
import { InputBoxHeading } from "./subcompoents/InputBoxHeading";
import { InputwithHeading } from "./subcompoents/inputWithHeading";
export function Signin() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post("http://localhost:3000/user/signin",{
            username,
            password
        }).then((response)=>{
            alert(response.status)
            navigate('/Dashboard')
            const token=sessionStorage.setItem("token",response.data.token);
        });
    }
    return <>
        <div className="bg-gray-400 h-screen flex justify-center items-center">
            <div className="bg-white h-[50%] w-90 rounded-xl flex flex-col justify-evenly items-center ">
                <InputBoxHeading Heading="Sign In" line1="Enter your credentials to access your" line2="account"></InputBoxHeading>
                <InputwithHeading Heading="Email" type="text" placeholder="johnDoe@gmail.com" reference={usernameRef}/>
                <InputwithHeading Heading="Password" type="Password"  reference={passwordRef}/>
                <div>
                    <button
                        className="text-white bg-black w-80 px-2 py-2 rounded-md"
                        onClick={signin}
                    >
                        Sign In
                    </button>
                </div>
                <div className="">
                    Don't have an account?{" "}
                    <a
                        className=" underline underline-offset-1 cursor-pointer hover:text-blue-600"
                        onClick={() => {
                            navigate('/signup')
                        }}
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    </>
}
import { useState } from "react";
import { InputBoxHeading } from "./subcompoents/InputBoxHeading";
import { InputwithHeading } from "./subcompoents/inputWithHeading";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
export function SendMoney() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setamount] = useState(0);
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      <div className="w-90 h-75 bg-white rounded-md flex flex-col justify-evenly">
        <div className="flex flex-col items-center ">
          <div className="">
            <InputBoxHeading Heading="Send Money"></InputBoxHeading>
          </div>
          <div>
            <div className="flex items-center justify-between ">
              <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                  {/* @ts-ignore */}
                  {name[0].toUpperCase()}
                </div>
              </div>
              <div className="flex flex-col justify-center h-full">{name}</div>
            </div>
          </div>
          <div className="">
            <InputwithHeading
              Heading="Amount(in Rs)"
              type="number"
              placeholder="Enter Amount"
              onChange={(e) => {
                setamount(e.target.value);
              }}
            ></InputwithHeading>
          </div>
          <div className="mt-4">
            <button
              onClick={() => {
                axios
                  .post(
                    "http://localhost:3000/account/sendMoney",
                    {
                      to: id,
                      amount,
                    },
                    {
                      headers: {
                        Authorization:
                          "Bearer " + sessionStorage.getItem("token"),
                      },
                    }
                  )
                  .then((response) => {
                    alert(response.status);
                  });
              }}
              className="bg-green-400 px-2 py-2 w-80 rounded-lg"
            >
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

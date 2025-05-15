import { IconandUsername } from "./subcompoents/IconAndUserName";
import { InputBoxHeading } from "./subcompoents/InputBoxHeading";
import { InputwithHeading } from "./subcompoents/inputWithHeading";

export function SendMoney() {
    return (
      <div className="bg-gray-300 h-screen flex justify-center items-center">
        <div className="w-90 h-75 bg-white rounded-md flex flex-col justify-evenly">
           <div className="flex flex-col items-center ">
                <div className="">
                <InputBoxHeading Heading="Send Money"></InputBoxHeading>
                </div>
                <div>
                    <IconandUsername/>
                </div>
                <div className="">
                    <InputwithHeading Heading="Amount(in Rs)" type="number" placeholder="Enter Amount"></InputwithHeading>
                </div>
                <div className="mt-4">
                    <button className="bg-green-400 px-2 py-2 w-80 rounded-lg">Initiate Transfer</button>
                </div>
            </div> 
        </div>
      </div>
    );
}

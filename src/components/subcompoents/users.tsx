import { SendMoneyButton } from "./sendMoneyButton";

export function Users(){
    return <div className="px-5 items-center">
        <div className="font-bold ">Users</div>
        <div className="flex justify-between px-5">
            <div className="flex justify-evenly items-center">
            <div className="bg-gray-300 rounded-[100%] px-3 p-2 m-1 ml-2 ">
                 D
            </div>
            <div className="pl-2" >Daksh Jain</div></div>
            <div>
                <SendMoneyButton/>
            </div>
        </div>
    </div>
}
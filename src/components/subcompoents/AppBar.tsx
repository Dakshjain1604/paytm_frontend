import { UserIcon } from "../../icnos/userIcon";

export function AppBar(){
    return <div className="border-1 border-gray-400 flex justify-between items-center px-4 shadow-md">
        <div className="text-xl">
            Paytm App
        </div>
        <div className="flex m-1">
            <div className="items-center m-1">
                Hello
            </div>
            <div className="bg-gray-300 rounded-4xl p-1 m-1 ml-2">
                 <UserIcon/>   
            </div>
        </div>
    </div>
}
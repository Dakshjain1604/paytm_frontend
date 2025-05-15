import { AppBar } from "./subcompoents/AppBar";
import { BalanceBar } from "./subcompoents/Balance";
import { Users } from "./subcompoents/users";

export function Dashboard(){
    return <>
        <div>
            <div><AppBar/></div>
            <div><BalanceBar Balance={10000}/></div>
            <Users/>
        </div>
    </>
}



